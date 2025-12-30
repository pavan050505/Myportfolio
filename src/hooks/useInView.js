import { useState, useEffect, useRef } from 'react'

export default function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}
