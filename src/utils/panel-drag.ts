const MIN_VISIBLE = 48

export function bindPanelDrag(handle: HTMLElement, panel: HTMLElement): () => void {
  const onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) return
    const target = event.target as HTMLElement
    if (target.closest('.pcp-header-btn')) return

    event.preventDefault()

    const rect = panel.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top

    handle.dataset.dragging = 'true'
    handle.setPointerCapture(event.pointerId)

    const onPointerMove = (moveEvent: PointerEvent) => {
      setPanelPosition(panel, moveEvent.clientX - offsetX, moveEvent.clientY - offsetY)
    }

    const onPointerUp = (upEvent: PointerEvent) => {
      handle.removeAttribute('data-dragging')
      try {
        handle.releasePointerCapture(upEvent.pointerId)
      } catch {
        // ignore
      }
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
  }

  handle.addEventListener('pointerdown', onPointerDown)

  return () => {
    handle.removeEventListener('pointerdown', onPointerDown)
    handle.removeAttribute('data-dragging')
  }
}

export function centerPanel(panel: HTMLElement): void {
  const width = panel.offsetWidth
  const height = panel.offsetHeight
  setPanelPosition(
    panel,
    (window.innerWidth - width) / 2,
    (window.innerHeight - height) / 2,
  )
}

function setPanelPosition(panel: HTMLElement, left: number, top: number): void {
  const width = panel.offsetWidth
  const height = panel.offsetHeight
  const maxLeft = window.innerWidth - MIN_VISIBLE
  const maxTop = window.innerHeight - MIN_VISIBLE
  const minLeft = MIN_VISIBLE - width
  const minTop = MIN_VISIBLE - height

  panel.style.left = `${Math.min(maxLeft, Math.max(minLeft, left))}px`
  panel.style.top = `${Math.min(maxTop, Math.max(minTop, top))}px`
}
