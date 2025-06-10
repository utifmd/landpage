'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AutoBlur({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'], // berarti aktif saat elemen muncul dari 80% viewport
  })

  // Seperti keyframes: 0% (blur), 45-55% (clear), 100% (blur)
  const blur = useTransform(
    scrollYProgress,
    [0, 0.40, 0.60, 1],
    [40, 0, 0, 40]
  )

  const filter = useTransform(blur, (val) => `blur(${val}px)`)

  return (
    <motion.div
      ref={ref}
      style={{ filter }}
    >
      {children}
    </motion.div>
  )
}
