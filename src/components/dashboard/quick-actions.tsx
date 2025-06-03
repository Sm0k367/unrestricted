'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  FileText,
  Image,
  Code,
  Music,
  Video,
  Sparkles,
  ArrowRight,
  Plus
} from 'lucide-react'
import Link from 'next/link'

export function QuickActions() {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null)

  const actions = [
    {
      id: 'text',
      title: 'Generate Text',
      description: 'Create articles, blogs, and marketing copy',
      icon: FileText,
      href: '/dashboard/generate?type=text',
      gradient: 'from-blue-500 to-cyan-500',
      examples: ['Blog post', 'Product description', 'Email copy']
    },
    {
      id: 'image',
      title: 'Create Images',
      description: 'Generate stunning visuals and artwork',
      icon: Image,
      href: '/dashboard/generate?type=image',
      gradient: 'from-purple-500 to-pink-500',
      examples: ['Logo design', 'Social media post', 'Illustration']
    },
    {
      id: 'code',
      title: 'Generate Code',
      description: 'Build applications and scripts faster',
      icon: Code,
      href: '/dashboard/generate?type=code',
      gradient: 'from-green-500 to-emerald-500',
      examples: ['React component', 'API endpoint', 'Database query']
    },
    {
      id: 'audio',
      title: 'Create Audio',
      description: 'Generate music and sound effects',
      icon: Music,
      href: '/dashboard/generate?type=audio',
      gradient: 'from-orange-500 to-red-500',
      examples: ['Background music', 'Voiceover', 'Sound effects'],
      badge: 'Coming Soon'
    },
    {
      id: 'video',
      title: 'Generate Video',
      description: 'Create animated content and presentations',
      icon: Video,
      href: '/dashboard/generate?type=video',
      gradient: 'from-indigo-500 to-purple-500',
      examples: ['Explainer video', 'Animation', 'Presentation'],
      badge: 'Coming Soon'
    }
  ]

  const quickTemplates = [
    { name: 'Blog Post Outline', type: 'text', popular: true },
    { name: 'Product Logo', type: 'image', popular: true },
    { name: 'React Component', type: 'code', popular: true },
    { name: 'Social Media Post', type: 'image', popular: false },
    { name: 'API Documentation', type: 'text', popular: false },
    { name: 'Landing Page', type: 'code', popular: false }
  ]

  return (


div
                )}



div
                <h3 className="font-semibold text-sm mb-2">{action.title}</h3>


p
                {hoveredAction === action.id && (


div
                    ))}
                  </div>
                )}



div
              </div>
            </Link>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>

  {/* Quick Templates */}


Card
</div>
) }
