import DashboardUi from "@/components/dashboardUi";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Link } from "next-view-transitions";
import { Suspense } from "react";
import StateDashboard from "./state-dashboard";
import StateSkeleton from "./state-skeleton";
import ProjectsRecents from "./projects-recents";
import ProjectsRecentsSkeleton from "./projects-recents-skeleton";
import HiDashboard from "./hi-dashboard";
import { Spinner } from "@/components/ui/spinner";

export const metadata = {
  title: "Painel",
};

export default function Dashboard() {
  return (
    <div className="space-y-6 mx-auto container p-4 md:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Suspense fallback={<Spinner className="size-6 text-violet-500" />}>
            <HiDashboard />
          </Suspense>
        </div>
        <Link href={"/upload"}>
          <Button>
            <Upload />
            Nova Upload
          </Button>
        </Link>
      </div>

      <Suspense fallback={<StateSkeleton />}>
        <StateDashboard />
      </Suspense>

      <DashboardUi.quickStats />

      <Suspense fallback={<ProjectsRecentsSkeleton />}>
        <ProjectsRecents />
      </Suspense>
    </div>
  );
}
