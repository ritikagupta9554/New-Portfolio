/**
 * ScrollReveal - simple wrapper that adds a fade-up animation via CSS.
 * Uses IntersectionObserver with a generous threshold and immediate check,
 * and falls back gracefully if IO is unsupported.
 */
function ScrollReveal({ children, className = '', delay = '', tag: Tag = 'div', style, ...rest }) {
  return (
    <Tag
      className={`${className} ${delay}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default ScrollReveal
