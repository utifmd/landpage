'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AutoShow({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end 60%'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [200, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  return (
    <motion.div ref={ref} style={{ opacity, y: translateY, scale }}>
      {children}
    </motion.div>
  )
}
