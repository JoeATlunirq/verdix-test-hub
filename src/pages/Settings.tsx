
import { DashboardLayout } from "@/components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Settings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to notifications by default
    navigate("/settings/notifications", { replace: true });
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-500">Redirecting to settings...</p>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
