
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Insights = () => {
  const testTypeData = [
    { name: 'Thumbnails', value: 45, color: 'hsl(var(--primary))' },
    { name: 'Titles', value: 30, color: '#3b82f6' },
    { name: 'Upload Times', value: 15, color: '#f59e0b' },
    { name: 'Descriptions', value: 10, color: '#ef4444' },
  ];

  const performanceData = [
    { category: 'Thumbnails', avgImprovement: 28 },
    { category: 'Titles', avgImprovement: 22 },
    { category: 'Upload Times', avgImprovement: 18 },
    { category: 'Descriptions', avgImprovement: 12 },
  ];

  const insights = [
    {
      title: "Bright Thumbnails Perform Better",
      description: "Tests show 34% higher CTR with bright, high-contrast thumbnails",
      confidence: 95,
      impact: "High",
      category: "Thumbnails"
    },
    {
      title: "Question Titles Drive Engagement",
      description: "Titles starting with questions show 25% more clicks",
      confidence: 88,
      impact: "Medium",
      category: "Titles"
    },
    {
      title: "Weekend Uploads Underperform",
      description: "Tuesday-Thursday uploads get 40% more initial views",
      confidence: 92,
      impact: "High",
      category: "Schedule"
    },
    {
      title: "Shorter Titles Win Mobile",
      description: "Titles under 50 characters perform better on mobile devices",
      confidence: 78,
      impact: "Medium",
      category: "Titles"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Medium':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Test Insights</h1>
          <p className="text-muted-foreground mt-1">AI-powered insights from your A/B testing data</p>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Test Distribution */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground">Test Distribution</CardTitle>
              <CardDescription>Breakdown of test types conducted</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={testTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {testTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--card-foreground))'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {testTypeData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance by Category */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground">Average Improvement by Category</CardTitle>
              <CardDescription>Performance gains across different test types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={performanceData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis type="number" className="fill-muted-foreground" />
                  <YAxis dataKey="category" type="category" className="fill-muted-foreground" width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--card-foreground))'
                    }} 
                  />
                  <Bar dataKey="avgImprovement" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">AI-Generated Insights</CardTitle>
            <CardDescription>Data-driven recommendations based on your testing history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                      <p className="text-muted-foreground text-sm">{insight.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getImpactColor(insight.impact)}>
                        {insight.impact} Impact
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Confidence:</span>
                    <Progress value={insight.confidence} className="flex-1 max-w-32" />
                    <span className="text-sm font-medium text-foreground">{insight.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Recommended Actions</CardTitle>
            <CardDescription>Next steps to optimize your content performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  action: "Test thumbnail emotions",
                  reason: "Happy faces in thumbnails show 31% higher CTR",
                  priority: "High"
                },
                {
                  action: "Optimize upload timing",
                  reason: "Your audience is most active Tuesday 2-4 PM",
                  priority: "Medium"
                },
                {
                  action: "A/B test video hooks",
                  reason: "First 15 seconds crucial for retention",
                  priority: "High"
                },
                {
                  action: "Experiment with title formats",
                  reason: "Number-based titles performing well in your niche",
                  priority: "Medium"
                }
              ].map((rec, index) => (
                <div key={index} className="p-3 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{rec.action}</h4>
                    <Badge 
                      className={rec.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'}
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
