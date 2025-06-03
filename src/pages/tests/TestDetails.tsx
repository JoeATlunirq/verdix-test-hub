
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Eye, MousePointer, Clock, Users, Heart, MessageCircle } from "lucide-react";

const TestDetails = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app this would come from API based on testId
  const testData = {
    id: testId,
    name: "AI Story Prompts v2 vs Original",
    status: "completed",
    type: "Content",
    channel: "GameHub Pro",
    startDate: "2024-01-10",
    endDate: "2024-01-17",
    duration: "7 days",
    totalVideos: 10,
    controlVideos: 5,
    variantVideos: 5,
    winner: "Variant",
    confidence: "95%",
    improvement: "+34%",
    primaryMetric: "CTR",
    description: "Testing AI-generated story prompts versus traditional storytelling approach for gaming content",
    
    // Performance over time data
    timeSeriesData: [
      { day: 'Day 1', controlViews: 5200, variantViews: 6800, controlCTR: 5.8, variantCTR: 7.2 },
      { day: 'Day 2', controlViews: 8400, variantViews: 11200, controlCTR: 6.0, variantCTR: 7.5 },
      { day: 'Day 3', controlViews: 12800, variantViews: 16900, controlCTR: 6.1, variantCTR: 7.8 },
      { day: 'Day 4', controlViews: 18200, variantViews: 24500, controlCTR: 6.2, variantCTR: 8.0 },
      { day: 'Day 5', controlViews: 23800, variantViews: 32400, controlCTR: 6.1, variantCTR: 8.1 },
      { day: 'Day 6', controlViews: 28500, variantViews: 39200, controlCTR: 6.2, variantCTR: 8.2 },
      { day: 'Day 7', controlViews: 32000, variantViews: 45000, controlCTR: 6.1, variantCTR: 8.2 }
    ],

    // Audience distribution
    audienceData: [
      { name: '13-17', control: 15, variant: 22 },
      { name: '18-24', control: 35, variant: 42 },
      { name: '25-34', control: 30, variant: 25 },
      { name: '35-44', control: 15, variant: 8 },
      { name: '45+', control: 5, variant: 3 }
    ],

    // Traffic sources
    trafficSources: [
      { name: 'Search', value: 45, color: '#8884d8' },
      { name: 'Browse Features', value: 30, color: '#82ca9d' },
      { name: 'Suggested Videos', value: 15, color: '#ffc658' },
      { name: 'External', value: 7, color: '#ff7300' },
      { name: 'Direct', value: 3, color: '#0088fe' }
    ],

    // Detailed metrics
    detailedMetrics: {
      control: {
        totalViews: 32000,
        uniqueViewers: 28500,
        avgViewDuration: 245,
        avgRetention: 68,
        likes: 1200,
        dislikes: 89,
        comments: 156,
        shares: 78,
        subscribersGained: 45,
        ctr: 6.1,
        impressions: 524000,
        avgCPV: 0.08
      },
      variant: {
        totalViews: 45000,
        uniqueViewers: 39200,
        avgViewDuration: 312,
        avgRetention: 73,
        likes: 1890,
        dislikes: 67,
        comments: 234,
        shares: 125,
        subscribersGained: 89,
        ctr: 8.2,
        impressions: 549000,
        avgCPV: 0.06
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'scheduled':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="font-space"
          >
            ← Back
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground font-space">{testData.name}</h1>
              <Badge className={getStatusColor(testData.status)}>
                {testData.status}
              </Badge>
            </div>
            <p className="text-muted-foreground font-space">{testData.description}</p>
          </div>
        </div>

        {/* Test Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-space">Duration</span>
              </div>
              <p className="text-xl font-bold font-space">{testData.duration}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-space">Total Videos</span>
              </div>
              <p className="text-xl font-bold font-space">{testData.totalVideos}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-muted-foreground font-space">Winner</span>
              </div>
              <p className="text-xl font-bold text-primary font-space">{testData.winner}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-space">Improvement</span>
              </div>
              <p className="text-xl font-bold text-green-500 font-space">{testData.improvement}</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Over Time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space">Views Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={testData.timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="fill-muted-foreground" />
                  <YAxis className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="controlViews" 
                    stackId="1"
                    stroke="hsl(var(--muted-foreground))" 
                    fill="hsl(var(--muted))"
                    name="Control Views"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="variantViews" 
                    stackId="1"
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    name="Variant Views"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space">CTR Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={testData.timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="fill-muted-foreground" />
                  <YAxis className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="controlCTR" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeWidth={3}
                    name="Control CTR"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="variantCTR" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Variant CTR"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Audience & Traffic Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space">Audience Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={testData.audienceData}>
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
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="control" 
                    stackId="1"
                    stroke="hsl(var(--muted-foreground))" 
                    fill="hsl(var(--muted))"
                    name="Control"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="variant" 
                    stackId="2"
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    name="Variant"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space">Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={testData.trafficSources}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {testData.trafficSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics Comparison */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="font-space">Detailed Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Views & Engagement */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground font-space">Views & Reach</h4>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">Total Views</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.totalViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.totalViews.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">Unique Viewers</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.uniqueViewers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.uniqueViewers.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Watch Time */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground font-space">Watch Time</h4>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">Avg Duration</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{formatDuration(testData.detailedMetrics.control.avgViewDuration)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{formatDuration(testData.detailedMetrics.variant.avgViewDuration)}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">Retention Rate</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.avgRetention}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.avgRetention}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground font-space">Social Engagement</h4>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">Likes</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">Comments</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.comments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground font-space">Performance</h4>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MousePointer className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">CTR</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.ctr}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.ctr}%</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-space">New Subscribers</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Control:</span>
                      <span className="font-bold font-space">{testData.detailedMetrics.control.subscribersGained}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-space">Variant:</span>
                      <span className="font-bold text-primary font-space">{testData.detailedMetrics.variant.subscribersGained}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Results Summary */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground font-space mb-4">Test Conclusion</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground font-space mb-1">Winner</p>
                  <p className="text-xl font-bold text-primary font-space">{testData.winner}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-space mb-1">Improvement</p>
                  <p className="text-xl font-bold text-green-500 font-space">{testData.improvement}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-space mb-1">Confidence</p>
                  <p className="text-xl font-bold text-primary font-space">{testData.confidence}</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 font-space">
                The variant significantly outperformed the control with higher engagement across all key metrics.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TestDetails;
