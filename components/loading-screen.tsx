"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src="/peggyderrick-1.png"
          alt="Logo Peggy Derrick"
          width={200}
          height={200}
          className="rounded-full mb-2"
        />

        <h1 className="text-2xl font-bold text-blue-500 animate-pulse">PEGGY DERRICK SARL</h1>

        {/* Barre de progression améliorée */}
        <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden shadow-inner mt-4">
          <div
            className="h-full bg-gradient-to-r from-white to-blue-300 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/80 text-lg tracking-wider">{progress}%</p>
      </div>
    </div>
  )
}
