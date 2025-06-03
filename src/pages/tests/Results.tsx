
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Award, TestTube } from "lucide-react";

const Results = () => {
  const completedTests = [
    {
      id: 1,
      name: "Thumbnail A vs B - Gaming Video",
      winner: "Variant B",
      improvement: "+32%",
      metric: "CTR",
      confidence: "95%",
      startDate: "2024-01-10",
      endDate: "2024-01-17"
    },
    {
      id: 2,
      name: "Title Hook Test - Tech Review",
      winner: "Control",
      improvement: "+18%",
      metric: "Views",
      confidence: "92%",
      startDate: "2024-01-05",
      endDate: "2024-01-12"
    },
    {
      id: 3,
      name: "Upload Time Optimization",
      winner: "Variant A",
      improvement: "+25%",
      metric: "Engagement",
      confidence: "97%",
      startDate: "2024-01-01",
      endDate: "2024-01-08"
    }
  ];

  const performanceData = [
    { name: 'Week 1', control: 4.2, variant: 5.8 },
    { name: 'Week 2', control: 4.5, variant: 6.1 },
    { name: 'Week 3', control: 4.3, variant: 6.3 },
    { name: 'Week 4', control: 4.6, variant: 6.8 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Test Results</h1>
          <p className="text-muted-foreground mt-1">Analyze completed A/B test performance and insights</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Total Tests Completed
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">24</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">+8 this month</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Average Improvement
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">+22%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">Across all metrics</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4" />
                Win Rate
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">76%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">Tests with significant results</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Performance Comparison</CardTitle>
            <CardDescription>Control vs Variant performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
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
                <Line type="monotone" dataKey="control" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Control" />
                <Line type="monotone" dataKey="variant" stroke="hsl(var(--primary))" strokeWidth={2} name="Variant" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Results */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Test Results</CardTitle>
            <CardDescription>Latest completed A/B tests with outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1">{test.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{test.startDate} - {test.endDate}</span>
                      <Badge className="bg-primary/20 text-primary border-primary/30" variant="outline">
                        Winner: {test.winner}
                      </Badge>
                      <span>Confidence: {test.confidence}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">{test.improvement}</p>
                    <p className="text-sm text-muted-foreground">{test.metric} improvement</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Results;
