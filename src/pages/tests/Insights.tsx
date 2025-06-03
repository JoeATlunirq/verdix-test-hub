
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Insights = () => {
  const contentPerformanceData = [
    { approach: 'AI Prompts v2', avgViews: 45000, avgCTR: 8.2, avgRetention: 65 },
    { approach: 'Original Stories', avgViews: 32000, avgCTR: 6.1, avgRetention: 58 },
    { approach: 'Hook-First Format', avgViews: 38000, avgCTR: 7.8, avgRetention: 72 },
    { approach: 'Classic Format', avgViews: 28000, avgCTR: 5.9, avgRetention: 55 },
  ];

  const trendData = [
    { week: 'Week 1', aiPrompt: 6.2, original: 5.8 },
    { week: 'Week 2', aiPrompt: 7.1, original: 5.9 },
    { week: 'Week 3', aiPrompt: 7.8, original: 6.0 },
    { week: 'Week 4', aiPrompt: 8.2, original: 6.1 },
  ];

  const insights = [
    {
      title: "AI-Generated Hooks Drive 34% Higher CTR",
      description: "Videos using AI-generated story hooks consistently outperform manually written ones across 15 tests",
      confidence: 95,
      impact: "High",
      category: "Content Strategy"
    },
    {
      title: "Shorter Intros Improve Retention",
      description: "Videos with 5-second intros vs 15-second intros show 28% better average view duration",
      confidence: 88,
      impact: "High",
      category: "Video Structure"
    },
    {
      title: "Question-Based Titles Underperform",
      description: "For your Reddit story content, statement titles get 18% more clicks than question formats",
      confidence: 82,
      impact: "Medium",
      category: "Titles"
    },
    {
      title: "Consistent Upload Schedule Matters",
      description: "Tests run during your regular upload times show 15% better initial performance",
      confidence: 76,
      impact: "Medium",
      category: "Timing"
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
        <div>
          <h1 className="text-3xl font-bold text-foreground font-space">Content Insights</h1>
          <p className="text-muted-foreground mt-1 font-space">Data-driven insights from your YouTube content tests</p>
        </div>

        {/* Performance Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Content Approach Performance</CardTitle>
              <CardDescription className="font-space">Average performance across different content strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={contentPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="approach" className="fill-muted-foreground" angle={-45} textAnchor="end" height={80} />
                  <YAxis className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--card-foreground))'
                    }} 
                  />
                  <Bar dataKey="avgViews" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">CTR Trends Over Time</CardTitle>
              <CardDescription className="font-space">How different approaches perform over testing periods</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="week" className="fill-muted-foreground" />
                  <YAxis className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--card-foreground))'
                    }} 
                  />
                  <Line type="monotone" dataKey="aiPrompt" stroke="hsl(var(--primary))" strokeWidth={2} name="AI Prompts" />
                  <Line type="monotone" dataKey="original" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Original" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground font-space">Key Content Insights</CardTitle>
            <CardDescription className="font-space">What we've learned from your content testing data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 font-space">{insight.title}</h3>
                      <p className="text-muted-foreground text-sm font-space">{insight.description}</p>
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
                    <span className="text-sm text-muted-foreground font-space">Confidence:</span>
                    <Progress value={insight.confidence} className="flex-1 max-w-32" />
                    <span className="text-sm font-medium text-foreground font-space">{insight.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground font-space">Content Optimization Recommendations</CardTitle>
            <CardDescription className="font-space">Actionable next steps based on your test results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  action: "Implement AI Hook Generation",
                  reason: "Your AI-generated hooks show 34% better CTR - scale this approach",
                  priority: "High"
                },
                {
                  action: "Test Shorter Video Intros",
                  reason: "5-second intros vs 15-second show significant retention improvement",
                  priority: "High"
                },
                {
                  action: "A/B Test New Story Formats",
                  reason: "Hook-first format shows promise - test with more video samples",
                  priority: "Medium"
                },
                {
                  action: "Optimize Upload Timing",
                  reason: "Consistent schedule during peak audience time improves initial metrics",
                  priority: "Low"
                }
              ].map((rec, index) => (
                <div key={index} className="p-3 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground font-space">{rec.action}</h4>
                    <Badge 
                      className={rec.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                                rec.priority === 'Medium' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-space">{rec.reason}</p>
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
