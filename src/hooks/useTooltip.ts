import { useState, useRef, useCallback, useEffect, type CSSProperties } from 'react'

interface TooltipPosition {
  top: number
  left: number
  placement: 'above' | 'below'
}

export function useTooltip(delay = 500) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<TooltipPosition>({ top: 0, left: 0, placement: 'above' })
  const triggerRef = useRef<HTMLElement | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const longPressTriggered = useRef(false)

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const tooltipHeight = 120 // estimated
    const spaceAbove = rect.top
    const placement = spaceAbove > tooltipHeight + 8 ? 'above' : 'below'

    let left = rect.left + rect.width / 2
    // Clamp horizontal position to keep tooltip on screen
    left = Math.max(120, Math.min(left, window.innerWidth - 120))

    const top = placement === 'above'
      ? rect.top + window.scrollY - 8
      : rect.bottom + window.scrollY + 8

    setPosition({ top, left, placement })
  }, [])

  const show = useCallback(() => {
    calculatePosition()
    setIsVisible(true)
  }, [calculatePosition])

  const hide = useCallback(() => {
    setIsVisible(false)
    if (hoverTimer.current) { clearTimeout(hoverTimer.current); hoverTimer.current = null }
    if (longPressTimer.current) { clearTimeout(longPressTimer.current); longPressTimer.current = null }
  }, [])

  const onPointerEnter = useCallback(() => {
    hoverTimer.current = setTimeout(show, delay)
  }, [show, delay])

  const onPointerLeave = useCallback(() => {
    hide()
    longPressTriggered.current = false
  }, [hide])

  const onPointerDown = useCallback(() => {
    longPressTriggered.current = false
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true
      show()
    }, delay)
  }, [show, delay])

  const onPointerUp = useCallback(() => {
    if (longPressTimer.current) { clearTimeout(longPressTimer.current); longPressTimer.current = null }
  }, [])

  const onClick = useCallback((e: React.MouseEvent) => {
    if (longPressTriggered.current) {
      e.preventDefault()
      e.stopPropagation()
      longPressTriggered.current = false
    }
  }, [])

  const ref = useCallback((node: HTMLElement | null) => {
    triggerRef.current = node
  }, [])

  // Dismiss on scroll or Escape
  useEffect(() => {
    if (!isVisible) return

    const onScroll = () => hide()
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') hide() }
    const onClickOutside = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        hide()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onClickOutside)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onClickOutside)
    }
  }, [isVisible, hide])

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current)
      if (longPressTimer.current) clearTimeout(longPressTimer.current)
    }
  }, [])

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    transform: position.placement === 'above'
      ? 'translate(-50%, -100%)'
      : 'translate(-50%, 0)',
    zIndex: 50,
  }

  return {
    triggerProps: {
      ref,
      onPointerEnter,
      onPointerLeave,
      onPointerDown,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onClick,
    },
    tooltipStyle,
    isVisible,
    placement: position.placement,
  }
}
