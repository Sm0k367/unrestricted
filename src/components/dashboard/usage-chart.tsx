'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Button } from '@/components/ui/button'
import { 
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react'

interface UsageData {
  date: string
  text: number
  image: number
  code: number
  audio: number
  video: number
  total: number
}

interface ChartData {
  daily: UsageData[]
  weekly: UsageData[]
  monthly: UsageData[]
  typeDistribution: Array<{
    name: string
    value: number
    color: string
  }>
}

export function UsageChart() {
  const [data, setData] = useState<ChartData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('daily')
  const [chartType, setChartType] = useState<'line' | 'bar' | 'pie'>('line')

  useEffect(() => {
    fetchUsageData()
  }, [])

  const fetchUsageData = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/dashboard/usage')
      // if (response.ok) {
      //   const chartData = await response.json()
      //   setData(chartData)
      // }

      // Mock data for now
      const today = new Date();
      const mockDailyData = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const text = Math.floor(Math.random() * 50) + 10;
        const image = Math.floor(Math.random() * 20) + 5;
        const code = Math.floor(Math.random() * 10) + 2;
        return {
          date: date.toISOString().split('T')[0],
          text,
          image,
          code,
          audio: 0,
          video: 0,
          total: text + image + code,
        };
      }).reverse();

      setData({
        daily: mockDailyData,
        weekly: mockDailyData.slice(0,7), // Simplified for mock
        monthly: mockDailyData.slice(0,4), // Simplified for mock
        typeDistribution: [
          { name: 'Text', value: mockDailyData.reduce((sum, d) => sum + d.text, 0), color: '#3b82f6' },
          { name: 'Image', value: mockDailyData.reduce((sum, d) => sum + d.image, 0), color: '#8b5cf6' },
          { name: 'Code', value: mockDailyData.reduce((sum, d) => sum + d.code, 0), color: '#10b981' },
        ]
      });

    } catch (error) {
      console.error('Failed to fetch usage data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getCurrentData = () => {
    if (!data) return []
    return data[timeRange] || []
  }

  const formatXAxisLabel = (value: string) => {
    const date = new Date(value)
    switch (timeRange) {
      case 'daily':
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      case 'weekly':
        return `Week ${Math.ceil(date.getDate() / 7)}` // Simplified for mock
      case 'monthly':
        return date.toLocaleDateString('en-US', { month: 'short' }) // Simplified for mock
      default:
        return value
    }
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        

div
  )
}
return null
}

if (loading) { return (


Card
)
}

const currentData = getCurrentData()

return (


Card
) }

