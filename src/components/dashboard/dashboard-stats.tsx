'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  FileText,
  Image,
  Code,
  TrendingUp,
  Clock,
  Zap,
  Users,
  DollarSign
} from 'lucide-react'

interface StatsData {
  totalGenerations: number
  textGenerations: number
  imageGenerations: number
  codeGenerations: number
  monthlyUsage: number
  remainingCredits: number
  totalCost: number
  avgResponseTime: number
}

export function DashboardStats() {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/dashboard/stats')
      // if (response.ok) {
      //   const data = await response.json()
      //   setStats(data)
      // }

      // Mock data for now
      setStats({
        totalGenerations: 1250,
        textGenerations: 800,
        imageGenerations: 300,
        codeGenerations: 150,
        monthlyUsage: 65,
        remainingCredits: 3500,
        totalCost: 25.50,
        avgResponseTime: 1.2
      })

    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (


div
        </CardHeader>


CardContent
      </Card>
    ))}
  </div>
)
}

const statCards = [ { title: 'Total Generations', value: stats?.totalGenerations || 0, description: 'All time generations', icon: Zap, trend: '+12% from last month', color: 'text-blue-600' }, { title: 'Text Generated', value: stats?.textGenerations || 0, description: 'This month', icon: FileText, trend: '+8% from last month', color: 'text-green-600' }, { title: 'Images Created', value: stats?.imageGenerations || 0, description: 'This month', icon: Image, trend: '+15% from last month', color: 'text-purple-600' }, { title: 'Code Generated', value: stats?.codeGenerations || 0, description: 'This month', icon: Code, trend: '+23% from last month', color: 'text-orange-600' }, { title: 'Monthly Usage', value: ${stats?.monthlyUsage || 0}%, description: 'of plan limit', icon: TrendingUp, trend: ${stats?.remainingCredits || 0} credits remaining, color: 'text-cyan-600' }, { title: 'Total Cost', value: $${(stats?.totalCost || 0).toFixed(2)}, description: 'This month', icon: DollarSign, trend: '-5% from last month', color: 'text-emerald-600' }, { title: 'Avg Response Time', value: ${(stats?.avgResponseTime || 0).toFixed(1)}s, description: 'Last 30 days', icon: Clock, trend: '15% faster than average', color: 'text-indigo-600' }, { title: 'Team Members', value: '3', // This should come from API description: 'Active collaborators', icon: Users, trend: '+1 new member', color: 'text-pink-600' } ]

return (


div

p

div
      </CardContent>
    </Card>
  ))}
</div>
) }
