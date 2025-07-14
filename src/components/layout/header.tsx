// /components/layout/Header.tsx
'use client'

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { ModeToggle } from '../ui/mode-toggle'

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 로고 */}
        <div className="text-xl font-bold">
          <Link href="/">TaskScape</Link>
        </div>

        {/* 네비게이션 메뉴 */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/features">Features</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* 인증 버튼 */}
        <div className="flex gap-2">
            <Link href="/login" className="px-3 py-1 rounded hover:bg-muted transition">Sign In</Link>
            <Link href="/signup" className="px-3 py-1 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold">Sign Up</Link>
            <ModeToggle />
        </div>
      </div>
    </header>
  )
}