
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

const chartData = [
  { name: 'Mon', controlVideos: 3, variantVideos: 3 },
  { name: 'Tue', controlVideos: 5, variantVideos: 5 },
  { name: 'Wed', controlVideos: 2, variantVideos: 4 },
  { name: 'Thu', controlVideos: 4, variantVideos: 3 },
  { name: 'Fri', controlVideos: 6, variantVideos: 6 },
  { name: 'Sat', controlVideos: 1, variantVideos: 2 },
  { name: 'Sun', controlVideos: 0, variantVideos: 1 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space">Dashboard</h1>
            <p className="text-muted-foreground mt-1 font-space">Track your YouTube content testing experiments and performance data</p>
          </div>
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90 font-space">
              + New Content Test
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Active Experiments</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Control vs Variant testing</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Videos Being Tested</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">42</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">21 control + 21 variants</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">YouTube Channels</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-space">OAuth connected</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Best Test Result</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">+47%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">CTR improvement found</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Weekly Testing Activity</CardTitle>
              <CardDescription className="font-space">Control vs Variant videos uploaded for testing</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="stroke-muted-foreground" />
                  <YAxis className="stroke-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }} 
                  />
                  <Bar dataKey="controlVideos" fill="hsl(var(--muted-foreground))" radius={[2, 2, 0, 0]} name="Control" />
                  <Bar dataKey="variantVideos" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} name="Variant" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Recent Content Experiments</CardTitle>
              <CardDescription className="font-space">Latest A/B tests and their YouTube performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { 
                  title: "AI Story Prompts Test", 
                  status: "completed", 
                  result: "Variant Won", 
                  improvement: "+34% CTR",
                  videos: "5 control vs 5 variant"
                },
                { 
                  title: "Thumbnail Style Experiment", 
                  status: "running", 
                  result: null, 
                  improvement: "Day 3 of 7",
                  videos: "6 control vs 6 variant"
                },
                { 
                  title: "Hook Length Comparison", 
                  status: "completed", 
                  result: "Control Won", 
                  improvement: "+12% Retention",
                  videos: "4 control vs 4 variant"
                },
                { 
                  title: "Font Style Test", 
                  status: "scheduled", 
                  result: null, 
                  improvement: "Starts tomorrow",
                  videos: "3 control vs 3 variant"
                },
              ].map((test, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm font-space">{test.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant={test.status === 'completed' ? 'default' : test.status === 'running' ? 'secondary' : 'outline'}
                        className={
                          test.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          test.status === 'running' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          'bg-muted text-muted-foreground'
                        }
                      >
                        {test.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-space">{test.videos}</span>
                      {test.result && (
                        <span className="text-xs text-muted-foreground font-space">{test.result}</span>
                      )}
                    </div>
                  </div>
                  {test.improvement && (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary font-space">{test.improvement}</p>
                      <p className="text-xs text-muted-foreground font-space">
                        {test.status === 'running' ? 'progress' : test.status === 'scheduled' ? 'timing' : 'improvement'}
                      </p>
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
