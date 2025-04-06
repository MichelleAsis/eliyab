"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Flame, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-900/20 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
            E-LIYAB
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <NavLink href="/">Pangunahing Pahina</NavLink>
          <NavLink href="/dictionary">Diksyunaryo</NavLink>
          <NavLink href="/quiz">Pagsusulit</NavLink>
          <NavLink href="/about">Tungkol Sa</NavLink>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden border border-orange-500 bg-black/60 hover:bg-orange-900/20 hover:border-orange-400"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-orange-400" />
          <span className="sr-only">Buksan ang menu</span>
        </Button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 md:hidden">
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2">
                <Flame className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                  E-LIYAB
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-orange-400" />
                <span className="sr-only">Isara ang menu</span>
              </Button>
            </div>
            <nav className="container flex flex-col gap-4 px-4 py-8">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Pangunahing Pahina
              </MobileNavLink>
              <MobileNavLink href="/dictionary" onClick={() => setIsMenuOpen(false)}>
                Diksyunaryo
              </MobileNavLink>
              <MobileNavLink href="/quiz" onClick={() => setIsMenuOpen(false)}>
                Pagsusulit
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                Tungkol Sa
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-orange-100/80 hover:text-orange-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-xl py-3 text-orange-100/80 hover:text-orange-400 transition-colors border-b border-orange-900/20"
    >
      {children}
    </Link>
  )
}

