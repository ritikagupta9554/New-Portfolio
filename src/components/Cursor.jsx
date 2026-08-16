import { useEffect, useRef, useState } from 'react'

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const animFrame = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ring) {
        ring.style.left = `${ringPos.current.x}px`
        ring.style.top = `${ringPos.current.y}px`
      }
      animFrame.current = requestAnimationFrame(animateRing)
    }

    const onMouseDown = () => {
      dot.classList.add('cursor-clicking')
      ring.classList.add('cursor-clicking')
    }

    const onMouseUp = () => {
      dot.classList.remove('cursor-clicking')
      ring.classList.remove('cursor-clicking')
    }

    const onEnterHoverable = () => {
      dot.classList.add('cursor-hover')
      ring.classList.add('cursor-hover')
    }

    const onLeaveHoverable = () => {
      dot.classList.remove('cursor-hover')
      ring.classList.remove('cursor-hover')
    }

    const attachHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, .btn-magnetic, .glass-card, .filter-pill, .skill-tab, .tilt-card, [role="button"]'
      )
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', onEnterHoverable)
        el.addEventListener('mouseleave', onLeaveHoverable)
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    animFrame.current = requestAnimationFrame(animateRing)

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })
    attachHoverListeners()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(animFrame.current)
      observer.disconnect()
    }
  }, [isVisible])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  )
}

export default Cursor
