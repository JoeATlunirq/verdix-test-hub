
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', tests: 4 },
  { name: 'Tue', tests: 7 },
  { name: 'Wed', tests: 12 },
  { name: 'Thu', tests: 8 },
  { name: 'Fri', tests: 15 },
  { name: 'Sat', tests: 10 },
  { name: 'Sun', tests: 6 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Overview of your YouTube A/B testing performance</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90">
            + New Test
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Active Tests</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">+2 from last week</p>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Completed Tests</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">47</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">+8 from last week</p>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Connected Channels</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">All authorized</p>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Avg. CTR Improvement</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">+24%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">↗ Above average</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-slate-900">Weekly Test Activity</CardTitle>
              <CardDescription>Number of tests completed this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1fae5',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="tests" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-slate-900">Recent Tests</CardTitle>
              <CardDescription>Latest A/B test results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Thumbnail A vs B - Gaming Video", status: "completed", winner: "Variant B", improvement: "+32%" },
                { title: "Title Test - Tech Review", status: "running", winner: null, improvement: null },
                { title: "Upload Time Test", status: "completed", winner: "Control", improvement: "+18%" },
                { title: "Hook Length Test", status: "scheduled", winner: null, improvement: null },
              ].map((test, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{test.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant={test.status === 'completed' ? 'default' : test.status === 'running' ? 'secondary' : 'outline'}
                        className={
                          test.status === 'completed' ? 'bg-green-100 text-green-800' :
                          test.status === 'running' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }
                      >
                        {test.status}
                      </Badge>
                      {test.winner && (
                        <span className="text-xs text-slate-600">Winner: {test.winner}</span>
                      )}
                    </div>
                  </div>
                  {test.improvement && (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-green-600">{test.improvement}</p>
                      <p className="text-xs text-slate-500">CTR improvement</p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
