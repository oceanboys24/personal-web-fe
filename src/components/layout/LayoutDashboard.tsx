import { redirect } from "next/navigation";
import DashboardComponent from "../dashboard/Dashboard";

export default function LayoutDashboard() {
  const isLogin: boolean = false;

  if (!isLogin) {
    redirect("/login");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <DashboardComponent />
    </div>
  );
}
