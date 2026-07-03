import { HISTORY_KEY, HISTORY_LIMIT, type OklchColor } from '../types'
import { oklchToHex } from '../color/conversions'

export function loadHistory(): OklchColor[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as OklchColor[]
    return Array.isArray(parsed) ? parsed.slice(0, HISTORY_LIMIT) : []
  } catch {
    return []
  }
}

export function saveToHistory(color: OklchColor, history: OklchColor[]): OklchColor[] {
  const hex = oklchToHex(color)
  const filtered = history.filter((item) => oklchToHex(item) !== hex || item.alpha !== color.alpha)
  const next = [color, ...filtered].slice(0, HISTORY_LIMIT)
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
  } catch {
    // ignore quota errors
  }
  return next
}
