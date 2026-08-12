export function pointerPosition(
  event: PointerEvent,
  element: HTMLElement,
): { x: number; y: number } {
  const rect = element.getBoundingClientRect()
  const x = clamp01((event.clientX - rect.left) / rect.width)
  const y = clamp01((event.clientY - rect.top) / rect.height)
  return { x, y }
}

export function bindHorizontalScrub(
  element: HTMLElement,
  callbacks: {
    onDelta: (deltaX: number, event: PointerEvent) => void
    onStart?: (event: PointerEvent) => void
    onEnd?: (event: PointerEvent) => void
  },
): () => void {
  let active = false
  let lastClientX: number | null = null

  const handleMove = (event: PointerEvent) => {
    if (!active || lastClientX == null) return
    const deltaX = event.clientX - lastClientX
    lastClientX = event.clientX
    if (deltaX === 0) return
    callbacks.onDelta(deltaX, event)
  }

  const handleUp = (event: PointerEvent) => {
    if (!active) return
    active = false
    lastClientX = null
    if (event.pointerId != null) {
      try {
        element.releasePointerCapture(event.pointerId)
      } catch {
        // ignore
      }
    }
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerup', handleUp)
    window.removeEventListener('pointercancel', handleUp)
    callbacks.onEnd?.(event)
  }

  const handleDown = (event: PointerEvent) => {
    if (event.button !== 0) return
    event.preventDefault()
    active = true
    lastClientX = event.clientX
    element.setPointerCapture(event.pointerId)
    callbacks.onStart?.(event)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    window.addEventListener('pointercancel', handleUp)
  }

  element.addEventListener('pointerdown', handleDown)

  return () => {
    element.removeEventListener('pointerdown', handleDown)
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerup', handleUp)
    window.removeEventListener('pointercancel', handleUp)
  }
}

/**
 * Scrub a text input by dragging horizontally.
 * Click still focuses for typing; scrubbing starts after a small move threshold.
 */
export function bindInputValueScrub(
  input: HTMLInputElement,
  callbacks: {
    onDelta: (deltaX: number, event: PointerEvent) => void
    onStart?: (event: PointerEvent) => void
    onEnd?: (event: PointerEvent) => void
  },
  threshold = 3,
): () => void {
  let tracking = false
  let scrubbing = false
  let startClientX = 0
  let lastClientX = 0

  const handleMove = (event: PointerEvent) => {
    if (!tracking) return

    if (!scrubbing) {
      if (Math.abs(event.clientX - startClientX) < threshold) return
      scrubbing = true
      input.blur()
      input.setAttribute('data-scrubbing', 'true')
      document.body.style.cursor = 'ew-resize'
      callbacks.onStart?.(event)
      lastClientX = event.clientX
      return
    }

    const deltaX = event.clientX - lastClientX
    lastClientX = event.clientX
    if (deltaX === 0) return
    callbacks.onDelta(deltaX, event)
  }

  const handleUp = (event: PointerEvent) => {
    if (!tracking) return
    const wasScrubbing = scrubbing
    tracking = false
    scrubbing = false
    if (event.pointerId != null) {
      try {
        input.releasePointerCapture(event.pointerId)
      } catch {
        // ignore
      }
    }
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerup', handleUp)
    window.removeEventListener('pointercancel', handleUp)
    if (wasScrubbing) {
      input.removeAttribute('data-scrubbing')
      document.body.style.cursor = ''
      callbacks.onEnd?.(event)
    }
  }

  const handleDown = (event: PointerEvent) => {
    if (event.button !== 0) return
    tracking = true
    scrubbing = false
    startClientX = event.clientX
    lastClientX = event.clientX
    input.setPointerCapture(event.pointerId)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    window.addEventListener('pointercancel', handleUp)
  }

  input.addEventListener('pointerdown', handleDown)

  return () => {
    input.removeEventListener('pointerdown', handleDown)
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerup', handleUp)
    window.removeEventListener('pointercancel', handleUp)
    input.removeAttribute('data-scrubbing')
  }
}

export function bindPointerDrag(
  element: HTMLElement,
  onMove: (x: number, y: number) => void,
  onEnd?: () => void,
  onStart?: () => void,
): () => void {
  let active = false

  const handleMove = (event: PointerEvent) => {
    if (!active) return
    const { x, y } = pointerPosition(event, element)
    onMove(x, y)
  }

  const handleUp = (event?: PointerEvent) => {
    if (!active) return
    active = false
    if (event?.pointerId != null) {
      try {
        element.releasePointerCapture(event.pointerId)
      } catch {
        // ignore
      }
    }
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerup', handleUp)
    window.removeEventListener('pointercancel', handleUp)
    onEnd?.()
  }

  const handleDown = (event: PointerEvent) => {
    if (event.button !== 0) return
    active = true
    element.setPointerCapture(event.pointerId)
    onStart?.()
    const { x, y } = pointerPosition(event, element)
    onMove(x, y)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    window.addEventListener('pointercancel', handleUp)
  }

  element.addEventListener('pointerdown', handleDown)

  return () => {
    element.removeEventListener('pointerdown', handleDown)
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerup', handleUp)
    window.removeEventListener('pointercancel', handleUp)
  }
}

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v))
}
