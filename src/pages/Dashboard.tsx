
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, TrendingUp, Users, MonitorPlay, TestTube } from "lucide-react";

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
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Overview of your YouTube A/B testing performance</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            New Test
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Active Tests
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">+2 from last week</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Completed Tests
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">47</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">+8 from last week</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <MonitorPlay className="w-4 h-4" />
                Connected Channels
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All authorized</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Avg. CTR Improvement
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">+24%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">↗ Above average</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Weekly Test Activity</CardTitle>
              <CardDescription>Number of tests completed this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }} 
                  />
                  <Bar dataKey="tests" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Tests</CardTitle>
              <CardDescription>Latest A/B test results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Thumbnail A vs B - Gaming Video", status: "completed", winner: "Variant B", improvement: "+32%" },
                { title: "Title Test - Tech Review", status: "running", winner: null, improvement: null },
                { title: "Upload Time Test", status: "completed", winner: "Control", improvement: "+18%" },
                { title: "Hook Length Test", status: "scheduled", winner: null, improvement: null },
              ].map((test, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{test.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant="outline"
                        className={
                          test.status === 'completed' ? 'bg-primary/20 text-primary border-primary/30' :
                          test.status === 'running' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                          'bg-orange-500/20 text-orange-400 border-orange-500/30'
                        }
                      >
                        {test.status}
                      </Badge>
                      {test.winner && (
                        <span className="text-xs text-muted-foreground">Winner: {test.winner}</span>
                      )}
                    </div>
                  </div>
                  {test.improvement && (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{test.improvement}</p>
                      <p className="text-xs text-muted-foreground">CTR improvement</p>
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
