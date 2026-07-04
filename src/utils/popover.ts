const GAP = 8
const VIEWPORT_PAD = 8

export function resolveAnchor(anchor: string, doc: Document = document): HTMLElement | null {
  const trimmed = anchor.trim()
  if (!trimmed) return null
  if (trimmed.startsWith('#')) {
    return doc.getElementById(trimmed.slice(1))
  }
  try {
    return doc.querySelector(trimmed) as HTMLElement | null
  } catch {
    return doc.getElementById(trimmed)
  }
}

/** Position a fixed panel below (or above) an anchor, flipping to stay in the viewport. */
export function positionPopover(panel: HTMLElement, anchor: HTMLElement): void {
  const anchorRect = anchor.getBoundingClientRect()
  const panelWidth = panel.offsetWidth
  const panelHeight = panel.offsetHeight
  const vw = window.innerWidth
  const vh = window.innerHeight

  let top = anchorRect.bottom + GAP
  let left = anchorRect.left

  if (left + panelWidth > vw - VIEWPORT_PAD) {
    left = anchorRect.right - panelWidth
  }
  left = Math.min(vw - VIEWPORT_PAD - panelWidth, Math.max(VIEWPORT_PAD, left))

  if (top + panelHeight > vh - VIEWPORT_PAD) {
    top = anchorRect.top - panelHeight - GAP
  }
  top = Math.min(vh - VIEWPORT_PAD - panelHeight, Math.max(VIEWPORT_PAD, top))

  panel.style.left = `${left}px`
  panel.style.top = `${top}px`
}
