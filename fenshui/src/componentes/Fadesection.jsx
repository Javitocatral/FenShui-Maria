import React from 'react'
import { useInView } from 'react-intersection-observer'

function Fadesection({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`fade-in-section-scroll ${inView ? 'fade-in-scroll' : ''}`}
    >
      {children}
    </div>
  )
}

export default Fadesection
