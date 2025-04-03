"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CodeIcon, FileTextIcon, TerminalIcon, MenuIcon, XIcon, HomeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: { title: string; href: string }[]
}

export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)

  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Code Formatters",
      href: "/formatters",
      icon: <CodeIcon className="h-5 w-5" />,
      submenu: [
        { title: "JSON Formatter", href: "/formatters/json" },
        { title: "HTML Formatter", href: "/formatters/html" },
      ],
    },
    {
      title: "Code Execution",
      href: "/code-execution",
      icon: <TerminalIcon className="h-5 w-5" />,
    },
    {
      title: "Text Utilities",
      href: "/text-utilities",
      icon: <FileTextIcon className="h-5 w-5" />,
      submenu: [
        { title: "Text Case Converter", href: "/text-utilities/case-converter" },
        { title: "Word Counter", href: "/text-utilities/word-counter" },
        { title: "Text Manipulator", href: "/text-utilities/manipulator" },
        { title: "Line Tools", href: "/text-utilities/line-tools" },
      ],
    },
  ]

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <div key={item.title} className="mb-2">
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
              pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
            onClick={() => setOpen(false)}
          >
            {item.icon}
            {item.title}
          </Link>
          {item.submenu && (
            <div className="ml-6 mt-1 space-y-1">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.title}
                  href={subitem.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-1.5 text-sm transition-all hover:bg-accent",
                    pathname === subitem.href ? "bg-accent/50 text-accent-foreground" : "text-muted-foreground",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {subitem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )

  if (isMobile) {
    return (
      <div className="flex items-center h-12 px-4 border-b md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 sm:w-72">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <span className="font-bold text-xl">DevTools</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="h-full w-64 py-6 px-4">
        <nav className="flex flex-col">
          <NavLinks />
        </nav>
      </div>
    </div>
  )
}

