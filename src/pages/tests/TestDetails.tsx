
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Eye, MousePointer, Clock, Users, ArrowRight, Target, Lightbulb, Play, ExternalLink } from "lucide-react";

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
    winner: "Variant (AI Prompts)",
    confidence: "95%",
    improvement: "+34%",
    description: "Testing AI-generated story prompts versus traditional storytelling approach for gaming content",
    
    // Key metrics comparison
    results: {
      control: {
        name: "Original Approach",
        views: 32000,
        ctr: 6.1,
        retention: 68,
        engagement: 4.2,
        revenue: 1840
      },
      variant: {
        name: "AI Story Prompts",
        views: 45000,
        ctr: 8.2,
        retention: 73,
        engagement: 6.1,
        revenue: 2650
      }
    },
    
    // Performance over time
    timeSeriesData: [
      { day: 'Day 1', control: 5200, variant: 6800 },
      { day: 'Day 2', control: 8400, variant: 11200 },
      { day: 'Day 3', control: 12800, variant: 16900 },
      { day: 'Day 4', control: 18200, variant: 24500 },
      { day: 'Day 5', control: 23800, variant: 32400 },
      { day: 'Day 6', control: 28500, variant: 39200 },
      { day: 'Day 7', control: 32000, variant: 45000 }
    ],

    // Tracked videos
    trackedVideos: {
      control: [
        {
          id: "ctrl-1",
          title: "Epic Gaming Moments That Changed Everything",
          url: "https://youtube.com/watch?v=abc123",
          views: 8500,
          uploadDate: "2024-01-10",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "ctrl-2", 
          title: "Top 10 Gaming Fails You Won't Believe",
          url: "https://youtube.com/watch?v=def456",
          views: 6200,
          uploadDate: "2024-01-11",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "ctrl-3",
          title: "How Pros Really Play This Game",
          url: "https://youtube.com/watch?v=ghi789",
          views: 9800,
          uploadDate: "2024-01-12",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "ctrl-4",
          title: "Gaming Setup Tour - My Battle Station",
          url: "https://youtube.com/watch?v=jkl012",
          views: 4200,
          uploadDate: "2024-01-13",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "ctrl-5",
          title: "Reacting to Viewer Gaming Clips",
          url: "https://youtube.com/watch?v=mno345",
          views: 3300,
          uploadDate: "2024-01-14",
          thumbnail: "/placeholder.svg"
        }
      ],
      variant: [
        {
          id: "var-1",
          title: "What if your favorite game character was real?",
          url: "https://youtube.com/watch?v=pqr678",
          views: 12400,
          uploadDate: "2024-01-10",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "var-2",
          title: "The untold story behind gaming's biggest mystery",
          url: "https://youtube.com/watch?v=stu901",
          views: 9800,
          uploadDate: "2024-01-11",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "var-3",
          title: "This gaming secret will blow your mind",
          url: "https://youtube.com/watch?v=vwx234",
          views: 11200,
          uploadDate: "2024-01-12",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "var-4",
          title: "Why everyone's talking about this gaming trend",
          url: "https://youtube.com/watch?v=yza567",
          views: 7300,
          uploadDate: "2024-01-13",
          thumbnail: "/placeholder.svg"
        },
        {
          id: "var-5",
          title: "The gaming story that started it all",
          url: "https://youtube.com/watch?v=bcd890",
          views: 4300,
          uploadDate: "2024-01-14",
          thumbnail: "/placeholder.svg"
        }
      ]
    },

    // Key insights
    insights: [
      "AI prompts generated 40% more engaging hooks in the first 15 seconds",
      "Younger audience (18-24) responded 60% better to AI-generated content",
      "Comments mentioning 'storyline' increased by 78% with AI prompts",
      "Best performing AI prompt: 'What if your favorite game character was real?'"
    ],

    // Next steps
    recommendations: [
      "Apply AI prompts to all gaming content in Q1",
      "Test AI prompts on tech review content next",
      "Create AI prompt templates for other creators",
      "Scale winning elements to shorts content"
    ]
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

  const calculateImprovement = (variant: number, control: number) => {
    const improvement = ((variant - control) / control) * 100;
    return improvement > 0 ? `+${improvement.toFixed(1)}%` : `${improvement.toFixed(1)}%`;
  };

  const MetricRow = ({ label, control, variant, unit = "", icon: Icon }: any) => {
    const improvement = ((variant - control) / control) * 100;
    const isPositive = improvement > 0;
    
    return (
      <div className="flex items-center justify-between py-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium font-space">{label}</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-sm text-muted-foreground font-space">Control</div>
            <div className="font-bold font-space">{control.toLocaleString()}{unit}</div>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-right">
            <div className="text-sm text-muted-foreground font-space">Variant</div>
            <div className="font-bold text-primary font-space">{variant.toLocaleString()}{unit}</div>
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded text-sm font-medium ${
            isPositive ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {calculateImprovement(variant, control)}
          </div>
        </div>
      </div>
    );
  };

  const VideoCard = ({ video, type }: { video: any, type: 'control' | 'variant' }) => (
    <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-16 h-12 object-cover rounded bg-muted"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="w-4 h-4 text-white drop-shadow-lg" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm font-space truncate">{video.title}</h4>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-space">
          <span>{video.views.toLocaleString()} views</span>
          <span>{video.uploadDate}</span>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="flex-shrink-0" asChild>
        <a href={video.url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="font-space"
          >
            ← Back to Tests
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground font-space">{testData.name}</h1>
              <Badge className={getStatusColor(testData.status)}>
                {testData.status}
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Winner: {testData.winner}
              </Badge>
            </div>
            <p className="text-muted-foreground font-space">{testData.description}</p>
          </div>
        </div>

        {/* Results Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Cumulative Views Comparison</CardTitle>
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
                      dataKey="control" 
                      stroke="hsl(var(--muted-foreground))" 
                      strokeWidth={2}
                      name="Original Approach"
                      dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="variant" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      name="AI Story Prompts"
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Key Stats */}
          <div>
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="font-space flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Test Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-space">{testData.improvement}</div>
                  <div className="text-sm text-muted-foreground font-space">Overall Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-space">{testData.confidence}</div>
                  <div className="text-sm text-muted-foreground font-space">Statistical Confidence</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-space">{testData.duration}</div>
                  <div className="text-sm text-muted-foreground font-space">Test Duration</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tracked Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space flex items-center gap-2">
                <Play className="w-5 h-5" />
                Control Group ({testData.trackedVideos.control.length} videos)
              </CardTitle>
              <p className="text-sm text-muted-foreground font-space">Original approach videos</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {testData.trackedVideos.control.map((video) => (
                <VideoCard key={video.id} video={video} type="control" />
              ))}
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space flex items-center gap-2">
                <Play className="w-5 h-5" />
                Variant Group ({testData.trackedVideos.variant.length} videos)
              </CardTitle>
              <p className="text-sm text-muted-foreground font-space">AI story prompt videos</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {testData.trackedVideos.variant.map((video) => (
                <VideoCard key={video.id} video={video} type="variant" />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="font-space">Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              <MetricRow 
                label="Total Views" 
                control={testData.results.control.views} 
                variant={testData.results.variant.views}
                icon={Eye}
              />
              <MetricRow 
                label="Click-Through Rate" 
                control={testData.results.control.ctr} 
                variant={testData.results.variant.ctr}
                unit="%"
                icon={MousePointer}
              />
              <MetricRow 
                label="Retention Rate" 
                control={testData.results.control.retention} 
                variant={testData.results.variant.retention}
                unit="%"
                icon={Clock}
              />
              <MetricRow 
                label="Engagement Score" 
                control={testData.results.control.engagement} 
                variant={testData.results.variant.engagement}
                icon={Users}
              />
              <MetricRow 
                label="Revenue" 
                control={testData.results.control.revenue} 
                variant={testData.results.variant.revenue}
                unit=" USD"
                icon={TrendingUp}
              />
            </div>
          </CardContent>
        </Card>

        {/* Insights & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Insights */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {testData.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary font-space">
                      {index + 1}
                    </div>
                    <span className="text-sm font-space leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space flex items-center gap-2">
                <Target className="w-5 h-5" />
                Recommended Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {testData.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-space leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TestDetails;
