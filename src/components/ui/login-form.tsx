'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { RiKakaoTalkFill } from "react-icons/ri";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-6 p-6 md:p-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground">Sign in to your Task Scape account</p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a href="#" className="text-sm underline-offset-2 hover:underline">
            Forgot password?
          </a>
        </div>
        <Input id="password" type="password" placeholder="••••••••" required />
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>

      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:border-t">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Button variant="outline" className="w-full">
            <FaApple className="mr-2" />Apple
        </Button>
        <Button variant="outline" className="w-full">
            <FaGoogle className="mr-2" />Google
        </Button>
        <Button variant="outline" className="w-full">
            <RiKakaoTalkFill className="mr-2" />Kakao
        </Button>
      </div>

      <p className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <a href="/signup" className="font-medium underline">
          Sign Up
        </a>
      </p>
    </form>
  )
}