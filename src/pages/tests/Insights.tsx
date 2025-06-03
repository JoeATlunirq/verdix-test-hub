
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Insights = () => {
  const experimentPerformanceData = [
    { experiment: 'AI Story Prompts', controlCTR: 6.1, variantCTR: 8.2, improvement: 34 },
    { experiment: 'Thumbnail Styles', controlCTR: 5.4, variantCTR: 6.1, improvement: 13 },
    { experiment: 'Hook Length', controlCTR: 7.2, variantCTR: 6.8, improvement: -6 },
    { experiment: 'Font Changes', controlCTR: 5.9, variantCTR: 6.7, improvement: 14 },
  ];

  const weeklyTestingData = [
    { week: 'Week 1', controlVideos: 12, variantVideos: 12, tests: 3 },
    { week: 'Week 2', controlVideos: 18, variantVideos: 20, tests: 4 },
    { week: 'Week 3', controlVideos: 15, variantVideos: 16, tests: 3 },
    { week: 'Week 4', controlVideos: 21, variantVideos: 21, tests: 5 },
  ];

  const insights = [
    {
      title: "AI-Generated Content Significantly Outperforms Manual",
      description: "Your AI story prompt experiment showed 34% better CTR when testing 5 control vs 5 variant videos over 7 days",
      confidence: 95,
      impact: "High",
      category: "Content Creation",
      testBasis: "10 videos tested (5v5)"
    },
    {
      title: "Thumbnail Style A Consistently Beats Style B",
      description: "Across 6 control and 6 variant videos, the new thumbnail approach improved click-through rates by 13%",
      confidence: 88,
      impact: "Medium",
      category: "Visual Design",
      testBasis: "12 videos tested (6v6)"
    },
    {
      title: "Shorter Hooks Don't Always Win",
      description: "Your 15-second vs 5-second hook test showed longer intros actually performed 6% better for retention",
      confidence: 82,
      impact: "Medium",
      category: "Video Structure",
      testBasis: "8 videos tested (4v4)"
    },
    {
      title: "Font Changes Create Meaningful Impact",
      description: "Testing different font styles in video text overlays resulted in 14% CTR improvement",
      confidence: 76,
      impact: "Low",
      category: "Typography",
      testBasis: "6 videos tested (3v3)"
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
          <h1 className="text-3xl font-bold text-foreground font-space">Content Testing Insights</h1>
          <p className="text-muted-foreground mt-1 font-space">Data-driven insights from your YouTube A/B testing experiments</p>
        </div>

        {/* Performance Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Experiment Performance Comparison</CardTitle>
              <CardDescription className="font-space">Control vs Variant CTR results from your tests</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={experimentPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="experiment" className="fill-muted-foreground" angle={-45} textAnchor="end" height={80} />
                  <YAxis className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--card-foreground))'
                    }} 
                  />
                  <Bar dataKey="controlCTR" fill="hsl(var(--muted-foreground))" radius={[2, 2, 0, 0]} name="Control CTR%" />
                  <Bar dataKey="variantCTR" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} name="Variant CTR%" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground font-space">Testing Volume Over Time</CardTitle>
              <CardDescription className="font-space">Number of videos included in your experiments</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyTestingData}>
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
                  <Line type="monotone" dataKey="controlVideos" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Control Videos" />
                  <Line type="monotone" dataKey="variantVideos" stroke="hsl(var(--primary))" strokeWidth={2} name="Variant Videos" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground font-space">Key Experiment Insights</CardTitle>
            <CardDescription className="font-space">What we've learned from your control vs variant testing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 font-space">{insight.title}</h3>
                      <p className="text-muted-foreground text-sm font-space mb-2">{insight.description}</p>
                      <span className="text-xs text-muted-foreground font-space italic">Based on: {insight.testBasis}</span>
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
                    <span className="text-sm text-muted-foreground font-space">Statistical Confidence:</span>
                    <Progress value={insight.confidence} className="flex-1 max-w-32" />
                    <span className="text-sm font-medium text-foreground font-space">{insight.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actionable Recommendations */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground font-space">Recommended Next Experiments</CardTitle>
            <CardDescription className="font-space">Based on your testing patterns and results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  action: "Scale AI Content Creation",
                  reason: "Your AI prompt test showed strong results - test with more video samples (8v8)",
                  priority: "High",
                  nextStep: "Upload 8 control + 8 AI-generated variants"
                },
                {
                  action: "Test New Thumbnail Variations", 
                  reason: "Build on thumbnail success - try 3 different style approaches",
                  priority: "High",
                  nextStep: "Create 3-way split test (4v4v4)"
                },
                {
                  action: "Experiment with Hook Variations",
                  reason: "Your hook length test was surprising - test different hook content styles",
                  priority: "Medium", 
                  nextStep: "Test storytelling vs direct hooks (5v5)"
                },
                {
                  action: "Typography Deep Dive",
                  reason: "Font changes showed promise - test font size, color, and positioning",
                  priority: "Low",
                  nextStep: "Multi-variable font test (6v6)"
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
                  <p className="text-sm text-muted-foreground font-space mb-2">{rec.reason}</p>
                  <p className="text-xs text-primary font-space font-medium">{rec.nextStep}</p>
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
