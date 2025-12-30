import React, { useState, useEffect, useRef } from 'react'
import useInView from '../hooks/useInView'

export default function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = currentTime - startTime
        if (progress < duration) {
          setCount(Math.min(end, Math.ceil((progress / duration) * end)))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
      hasAnimatedRef.current = true
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}+</span>
}
