'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AutoRotate({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '360deg'])
  const safeRotate = useTransform(scrollYProgress, value => {
    if (value < 0.1) return 0
    return value * 1140
  })
  return (
    <motion.div style={{ rotate: safeRotate }}>
      {children}
    </motion.div>
  )
}