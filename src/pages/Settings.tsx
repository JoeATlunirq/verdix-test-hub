
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bell, Sliders, Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Settings</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your Verdix experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/settings/notifications">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Notifications</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/settings/preferences">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Preferences</CardTitle>
                <CardDescription>Customize your account settings</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
