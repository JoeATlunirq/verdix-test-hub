
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

const chartData = [
  { name: 'Mon', videos: 8 },
  { name: 'Tue', videos: 12 },
  { name: 'Wed', videos: 15 },
  { name: 'Thu', videos: 10 },
  { name: 'Fri', videos: 18 },
  { name: 'Sat', videos: 14 },
  { name: 'Sun', videos: 9 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space">Dashboard</h1>
            <p className="text-muted-foreground mt-1 font-space">Overview of your YouTube content testing performance</p>
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
              <CardDescription className="text-muted-foreground font-space">Active Tests</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Currently comparing content</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Videos in Testing</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">24</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Across all active tests</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Connected Channels</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-space">OAuth authorized</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Best Performing</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">AI v2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">+34% CTR improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Weekly Video Testing Activity</CardTitle>
              <CardDescription className="font-space">Number of videos included in tests this week</CardDescription>
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
                  <Bar dataKey="videos" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Recent Content Tests</CardTitle>
              <CardDescription className="font-space">Latest test results and ongoing comparisons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { 
                  title: "AI Story Prompts v2 vs Original", 
                  status: "completed", 
                  winner: "AI Prompts v2", 
                  improvement: "+34% CTR",
                  videos: "5 vs 5 videos"
                },
                { 
                  title: "Hook-First vs Classic Format", 
                  status: "running", 
                  winner: null, 
                  improvement: null,
                  videos: "4 vs 4 videos"
                },
                { 
                  title: "Thumbnail Style A vs B", 
                  status: "completed", 
                  winner: "Style A", 
                  improvement: "+12% CTR",
                  videos: "6 vs 6 videos"
                },
                { 
                  title: "Question vs Statement Titles", 
                  status: "scheduled", 
                  winner: null, 
                  improvement: null,
                  videos: "3 vs 3 videos"
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
                      {test.winner && (
                        <span className="text-xs text-muted-foreground font-space">Winner: {test.winner}</span>
                      )}
                    </div>
                  </div>
                  {test.improvement && (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary font-space">{test.improvement}</p>
                      <p className="text-xs text-muted-foreground font-space">improvement</p>
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
