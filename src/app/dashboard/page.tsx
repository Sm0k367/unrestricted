import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { DashboardStats } from '@/components/dashboard/dashboard-stats'
import { RecentGenerations } from '@/components/dashboard/recent-generations'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { UsageChart } from '@/components/dashboard/usage-chart'

export const metadata: Metadata = {
  title: 'Dashboard - Epic Tech AI',
  description: 'Manage your AI content generation and view analytics.',
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    

div
      {/* Stats Overview */}
      

DashboardStats
      {/* Quick Actions */}
      

QuickActions
      {/* Main Content Grid */}
      

div
        {/* Recent Generations */}
        

div
      </div>
    </div>
  </main>
</div>
) }
