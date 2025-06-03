
import { DashboardLayout } from "@/components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Tests = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to all tests by default
    navigate("/tests/all", { replace: true });
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-500">Redirecting to all tests...</p>
      </div>
    </DashboardLayout>
  );
};

export default Tests;
