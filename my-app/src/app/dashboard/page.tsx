import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import DashboardLayout from "@/components/DashboardLayout";

const dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <AppBarChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppPieChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Outstanding Payment" />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Full Payment" />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <AppAreaChart />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default dashboard;
