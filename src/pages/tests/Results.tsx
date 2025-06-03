
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Eye, Clock, MousePointer } from "lucide-react";

const Results = () => {
  const completedTests = [
    {
      id: 1,
      name: "AI Story Prompts v2 vs Original",
      controlVideos: 5,
      variantVideos: 5,
      winner: "Variant (AI Prompts v2)",
      improvement: "+34%",
      metric: "CTR",
      confidence: "95%",
      startDate: "2024-01-10",
      endDate: "2024-01-17",
      controlAvgViews: 32000,
      variantAvgViews: 45000,
      controlCTR: 6.1,
      variantCTR: 8.2
    },
    {
      id: 2,
      name: "Hook-First vs Classic Story Format",
      controlVideos: 4,
      variantVideos: 4,
      winner: "Variant (Hook-First)",
      improvement: "+28%",
      metric: "Retention",
      confidence: "88%",
      startDate: "2024-01-05",
      endDate: "2024-01-12",
      controlAvgViews: 28000,
      variantAvgViews: 38000,
      controlCTR: 5.9,
      variantCTR: 7.8
    },
    {
      id: 3,
      name: "Thumbnail Style Comparison",
      controlVideos: 6,
      variantVideos: 6,
      winner: "Control (Original)",
      improvement: "+12%",
      metric: "CTR",
      confidence: "82%",
      startDate: "2024-01-01",
      endDate: "2024-01-08",
      controlAvgViews: 41000,
      variantAvgViews: 35000,
      controlCTR: 7.2,
      variantCTR: 6.4
    }
  ];

  const getComparisonData = (test: any) => [
    {
      name: 'Control',
      views: test.controlAvgViews,
      ctr: test.controlCTR,
      videos: test.controlVideos
    },
    {
      name: 'Variant',
      views: test.variantAvgViews,
      ctr: test.variantCTR,
      videos: test.variantVideos
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-space">Test Results</h1>
          <p className="text-muted-foreground mt-1 font-space">Completed content tests and their performance outcomes</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Completed Tests</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">+3 this month</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Videos Tested</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">89</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Across all tests</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Avg Improvement</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">+22%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">When variant wins</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Success Rate</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">73%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Tests with clear winner</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Test Results */}
        <div className="space-y-6">
          {completedTests.map((test) => (
            <Card key={test.id} className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-foreground font-space">{test.name}</CardTitle>
                    <CardDescription className="font-space">
                      {test.startDate} - {test.endDate} • {test.controlVideos + test.variantVideos} videos total
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-space">
                      Winner: {test.winner.includes('Variant') ? 'Variant' : 'Control'}
                    </Badge>
                    <Badge variant="outline" className="font-space">
                      {test.confidence} confidence
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Performance Chart */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3 font-space">Performance Comparison</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={getComparisonData(test)}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="name" className="fill-muted-foreground" />
                        <YAxis className="fill-muted-foreground" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--card-foreground))'
                          }} 
                        />
                        <Bar dataKey="views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground font-space">Key Metrics</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground font-space">Avg Views</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-space">Control: {test.controlAvgViews.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-space">Variant: {test.variantAvgViews.toLocaleString()}</span>
                          {test.variantAvgViews > test.controlAvgViews ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>

                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <MousePointer className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground font-space">CTR</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-space">Control: {test.controlCTR}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-space">Variant: {test.variantCTR}%</span>
                          {test.variantCTR > test.controlCTR ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground font-space">Result</p>
                          <p className="text-sm text-muted-foreground font-space">
                            {test.improvement} improvement in {test.metric}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary font-space">{test.improvement}</p>
                          <p className="text-sm text-muted-foreground font-space">{test.metric}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 font-space">
                    View Detailed Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Results;
