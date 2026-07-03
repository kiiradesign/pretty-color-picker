export function pointerPosition(
  event: PointerEvent,
  element: HTMLElement,
): { x: number; y: number } {
  const rect = element.getBoundingClientRect()
  const x = clamp01((event.clientX - rect.left) / rect.width)
  const y = clamp01((event.clientY - rect.top) / rect.height)
  return { x, y }
}

export function bindPointerDrag(
  element: HTMLElement,
  onMove: (x: number, y: number) => void,
  onEnd?: () => void,
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
