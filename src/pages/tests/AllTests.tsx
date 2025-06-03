
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus, ExternalLink } from "lucide-react";

const AllTests = () => {
  const tests = [
    {
      id: 1,
      name: "Thumbnail A vs B - Gaming Compilation",
      status: "running",
      startDate: "2024-01-15",
      endDate: "2024-01-22",
      channel: "GameHub Pro",
      type: "Thumbnail",
      progress: 65
    },
    {
      id: 2,
      name: "Title Format Test - Tech Reviews",
      status: "completed",
      startDate: "2024-01-10",
      endDate: "2024-01-17",
      channel: "TechInsight",
      type: "Title",
      progress: 100
    },
    {
      id: 3,
      name: "Upload Time Optimization",
      status: "scheduled",
      startDate: "2024-01-25",
      endDate: "2024-02-01",
      channel: "Daily Vlogs",
      type: "Schedule",
      progress: 0
    },
    {
      id: 4,
      name: "Hook Length A/B Test",
      status: "completed",
      startDate: "2024-01-05",
      endDate: "2024-01-12",
      channel: "GameHub Pro",
      type: "Content",
      progress: 100
    },
    {
      id: 5,
      name: "Description Length Test",
      status: "running",
      startDate: "2024-01-18",
      endDate: "2024-01-25",
      channel: "TechInsight",
      type: "Description",
      progress: 42
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'scheduled':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">All Tests</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor all your A/B tests</p>
          </div>
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              New Test
            </Button>
          </Link>
        </div>

        {/* Tests Table */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Test Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Channel</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Start Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">End Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Progress</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test) => (
                    <tr key={test.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-4 px-4">
                        <p className="font-medium text-foreground">{test.name}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getStatusColor(test.status)} variant="outline">
                          {test.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{test.type}</td>
                      <td className="py-4 px-4 text-muted-foreground">{test.channel}</td>
                      <td className="py-4 px-4 text-muted-foreground">{test.startDate}</td>
                      <td className="py-4 px-4 text-muted-foreground">{test.endDate}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${test.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{test.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Link to={`/tests/${test.id}`}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AllTests;
