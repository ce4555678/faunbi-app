import { ActivityChartDashboardUi } from "./activeChart.dashboardUi";
import ItemProjectRecentDashboardUi from "./item-project-recent.dashboardUi";
import { ProcessingStatusDashboardUi } from "./processingStatus.dashboardUi";
import { QuickStatsDashboardUi } from "./quickStats.dashboardUi";
import { StatsCardsDashboardUi } from "./statCard.DashboardUi";

const DashboardUi = {
  statCard: StatsCardsDashboardUi,
  activeChart: ActivityChartDashboardUi,
  processingStatus: ProcessingStatusDashboardUi,
  quickStats: QuickStatsDashboardUi,
  itemProjectRecent: ItemProjectRecentDashboardUi,
};

export default DashboardUi;
