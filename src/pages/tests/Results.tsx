import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Eye, MousePointer } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const navigate = useNavigate();

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
      variantCTR: 8.2,
      detailedStats: {
        controlRetention: 68,
        variantRetention: 73,
        controlEngagement: 4.2,
        variantEngagement: 5.8,
        controlComments: 156,
        variantComments: 234,
        controlLikes: 1200,
        variantLikes: 1890,
        totalImpressions: 120000
      }
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
      variantCTR: 7.8,
      detailedStats: {
        controlRetention: 62,
        variantRetention: 79,
        controlEngagement: 3.8,
        variantEngagement: 5.1,
        controlComments: 98,
        variantComments: 167,
        controlLikes: 890,
        variantLikes: 1456,
        totalImpressions: 95000
      }
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
      variantCTR: 6.4,
      detailedStats: {
        controlRetention: 71,
        variantRetention: 69,
        controlEngagement: 5.2,
        variantEngagement: 4.7,
        controlComments: 203,
        variantComments: 178,
        controlLikes: 1567,
        variantLikes: 1234,
        totalImpressions: 105000
      }
    }
  ];

  const getComparisonData = (test: any) => [
    {
      name: 'Control',
      views: test.controlAvgViews,
      ctr: test.controlCTR
    },
    {
      name: 'Variant',
      views: test.variantAvgViews,
      ctr: test.variantCTR
    }
  ];

  const getDetailedComparisonData = (test: any) => [
    {
      metric: 'Views',
      control: test.controlAvgViews,
      variant: test.variantAvgViews
    },
    {
      metric: 'CTR',
      control: test.controlCTR,
      variant: test.variantCTR
    },
    {
      metric: 'Retention',
      control: test.detailedStats.controlRetention,
      variant: test.detailedStats.variantRetention
    },
    {
      metric: 'Engagement',
      control: test.detailedStats.controlEngagement,
      variant: test.detailedStats.variantEngagement
    }
  ];

  if (selectedTest) {
    const test = completedTests.find(t => t.id === selectedTest);
    if (!test) return null;

    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedTest(null)}
              className="font-space"
            >
              ← Back to Results
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-space">{test.name}</h1>
              <p className="text-muted-foreground mt-1 font-space">Detailed test analysis</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Chart */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={getDetailedComparisonData(test)}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="metric" className="fill-muted-foreground" />
                    <YAxis className="fill-muted-foreground" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="control" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="variant" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground font-space mb-2">Average Views</p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-space">Control:</span>
                        <span className="font-bold font-space">{test.controlAvgViews.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-space">Variant:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-space">{test.variantAvgViews.toLocaleString()}</span>
                          {test.variantAvgViews > test.controlAvgViews ? 
                            <TrendingUp className="w-4 h-4 text-green-500" /> : 
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground font-space mb-2">Click-Through Rate</p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-space">Control:</span>
                        <span className="font-bold font-space">{test.controlCTR}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-space">Variant:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-space">{test.variantCTR}%</span>
                          {test.variantCTR > test.controlCTR ? 
                            <TrendingUp className="w-4 h-4 text-green-500" /> : 
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground font-space mb-2">Retention Rate</p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-space">Control:</span>
                        <span className="font-bold font-space">{test.detailedStats.controlRetention}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-space">Variant:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-space">{test.detailedStats.variantRetention}%</span>
                          {test.detailedStats.variantRetention > test.detailedStats.controlRetention ? 
                            <TrendingUp className="w-4 h-4 text-green-500" /> : 
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground font-space mb-2">Engagement Score</p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-space">Control:</span>
                        <span className="font-bold font-space">{test.detailedStats.controlEngagement}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-space">Variant:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-space">{test.detailedStats.variantEngagement}</span>
                          {test.detailedStats.variantEngagement > test.detailedStats.controlEngagement ? 
                            <TrendingUp className="w-4 h-4 text-green-500" /> : 
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Metrics */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space">Social Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground font-space mb-2">Comments</p>
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-foreground font-space">
                      Control: {test.detailedStats.controlComments}
                    </p>
                    <p className="text-lg font-bold text-primary font-space">
                      Variant: {test.detailedStats.variantComments}
                    </p>
                  </div>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground font-space mb-2">Likes</p>
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-foreground font-space">
                      Control: {test.detailedStats.controlLikes}
                    </p>
                    <p className="text-lg font-bold text-primary font-space">
                      Variant: {test.detailedStats.variantLikes}
                    </p>
                  </div>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground font-space mb-2">Total Impressions</p>
                  <p className="text-2xl font-bold text-primary font-space">
                    {test.detailedStats.totalImpressions.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Winner Summary */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground font-space mb-2">Test Result</h3>
                <p className="text-lg text-primary font-space mb-1">{test.winner}</p>
                <p className="text-3xl font-bold text-primary font-space">{test.improvement}</p>
                <p className="text-sm text-muted-foreground font-space">improvement in {test.metric}</p>
                <Badge className="mt-3 bg-primary/10 text-primary border-primary/20 font-space">
                  {test.confidence} confidence
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-space">Test Results</h1>
          <p className="text-muted-foreground mt-1 font-space">Completed content tests and their performance outcomes</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground font-space">Completed Tests</CardDescription>
              <CardTitle className="text-2xl font-bold text-foreground font-space">15</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground font-space">Videos Tested</CardDescription>
              <CardTitle className="text-2xl font-bold text-foreground font-space">89</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground font-space">Avg Improvement</CardDescription>
              <CardTitle className="text-2xl font-bold text-foreground font-space">+22%</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground font-space">Success Rate</CardDescription>
              <CardTitle className="text-2xl font-bold text-foreground font-space">73%</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Test Results */}
        <div className="space-y-4">
          {completedTests.map((test) => (
            <Card 
              key={test.id} 
              className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
              onClick={() => navigate(`/tests/${test.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-foreground font-space hover:text-primary transition-colors">
                      {test.name}
                    </CardTitle>
                    <CardDescription className="font-space">
                      {test.startDate} - {test.endDate} • {test.controlVideos + test.variantVideos} videos
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-space">
                      {test.winner.includes('Variant') ? 'Variant Won' : 'Control Won'}
                    </Badge>
                    <Badge variant="outline" className="font-space">
                      {test.confidence}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Quick Chart */}
                  <div className="lg:col-span-2">
                    <ResponsiveContainer width="100%" height={150}>
                      <BarChart data={getComparisonData(test)}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="name" className="fill-muted-foreground" />
                        <YAxis className="fill-muted-foreground" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Bar dataKey="views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Quick Stats */}
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-space">Views</span>
                      </div>
                      <div className="text-sm font-space">
                        <div className="flex justify-between">
                          <span>Control:</span>
                          <span>{test.controlAvgViews.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Variant:</span>
                          <span className="text-primary">{test.variantAvgViews.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary font-space">{test.improvement}</p>
                      <p className="text-sm text-muted-foreground font-space">{test.metric} improvement</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground font-space">Click to view detailed analysis →</p>
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
