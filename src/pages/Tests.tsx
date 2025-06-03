
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlaskConical, Plus, BarChart3, Calendar, Brain } from "lucide-react";

const Tests = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">A/B Testing Hub</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optimize your content performance with data-driven testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/tests/all">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground">All Tests</CardTitle>
                <CardDescription>View and manage all your A/B tests</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/tests/results">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Results</CardTitle>
                <CardDescription>Analyze test performance and outcomes</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/tests/schedule">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Schedule</CardTitle>
                <CardDescription>Plan and schedule upcoming tests</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/tests/insights">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Insights</CardTitle>
                <CardDescription>Get AI-powered recommendations</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90 px-8 py-3 text-lg font-semibold">
              <Plus className="w-5 h-5 mr-2" />
              Create New Test
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tests;
