
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">All Tests</h1>
            <p className="text-slate-600 mt-1">Manage and monitor all your A/B tests</p>
          </div>
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90">
              + New Test
            </Button>
          </Link>
        </div>

        {/* Tests Table */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Test Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Channel</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Start Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">End Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test) => (
                    <tr key={test.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-4">
                        <p className="font-medium text-slate-900">{test.name}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getStatusColor(test.status)}>
                          {test.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-slate-600">{test.type}</td>
                      <td className="py-4 px-4 text-slate-600">{test.channel}</td>
                      <td className="py-4 px-4 text-slate-600">{test.startDate}</td>
                      <td className="py-4 px-4 text-slate-600">{test.endDate}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${test.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-slate-600">{test.progress}%</span>
                        </div>
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
