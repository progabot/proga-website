import { Suspense } from "react"
import PageHeader from "@/components/shared/page-header"
import TeamGrid from "@/components/team/team-grid"
import TeamHero from "@/components/team/team-hero"
import JoinTeam from "@/components/team/join-team"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export const metadata = {
  title: "Our Team | ProgaTech",
  description: "Meet the talented individuals behind ProgaTech",
}

export default function TeamPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="Our Team" description="Meet the talented individuals who make our vision a reality." />

      <Suspense fallback={<LoadingSpinner className="my-20" />}>
        <TeamHero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner className="my-20" />}>
        <TeamGrid />
      </Suspense>

      <Suspense fallback={<LoadingSpinner className="my-20" />}>
        <JoinTeam />
      </Suspense>
    </main>
  )
}
