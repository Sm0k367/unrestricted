'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  CreditCard,
  FileText,
  Menu,
  X,
  Zap
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function DashboardHeader() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Generate', href: '/dashboard/generate' },
    { name: 'Projects', href: '/dashboard/projects' },
    { name: 'Templates', href: '/dashboard/templates' },
    { name: 'Analytics', href: '/dashboard/analytics' },
  ]

  return (


header
) }
