"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

const TypedText = ({ strings, typeSpeed = 80, backSpeed = 50, loop = true, className = "" }) => {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      cursorChar: "|",
      smartBackspace: true,
    }

    // Initialize Typed
    typed.current = new Typed(el.current, options)

    // Cleanup
    return () => {
      typed.current.destroy()
    }
  }, [strings, typeSpeed, backSpeed, loop])

  return <span ref={el} className={className}></span>
}

export default TypedText

