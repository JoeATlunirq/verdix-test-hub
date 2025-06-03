
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, CheckCircle, AlertCircle, Target, Lightbulb, Copy, Share2 } from "lucide-react";

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
    winner: "Variant",
    confidence: "95%",
    improvement: "+34%",
    
    // Key insights for creators
    insights: {
      primaryWin: "34% higher CTR with AI-generated story hooks",
      audienceResponse: "Younger audience (18-24) responded 67% better to variant",
      bestPerformingElement: "Opening question format in AI prompts",
      revenueImpact: "+$2,340 estimated monthly revenue increase",
      watchTimeGain: "Average +67 seconds per viewer"
    },

    // Actionable recommendations
    recommendations: [
      {
        type: "immediate",
        title: "Apply AI prompts to all gaming content",
        description: "Roll out the winning AI story format to your entire gaming series",
        impact: "High",
        effort: "Low"
      },
      {
        type: "content",
        title: "Test AI prompts on tech reviews",
        description: "Your tech review channel could see similar improvements",
        impact: "Medium", 
        effort: "Low"
      },
      {
        type: "optimization",
        title: "A/B test different AI prompt styles",
        description: "Try question vs statement formats in your AI prompts",
        impact: "Medium",
        effort: "Medium"
      }
    ],

    // Performance timeline showing the winning moment
    performanceData: [
      { day: 'Day 1', controlCTR: 5.8, variantCTR: 7.2, gap: 1.4 },
      { day: 'Day 2', controlCTR: 6.0, variantCTR: 7.5, gap: 1.5 },
      { day: 'Day 3', controlCTR: 6.1, variantCTR: 7.8, gap: 1.7 },
      { day: 'Day 4', controlCTR: 6.2, variantCTR: 8.0, gap: 1.8 },
      { day: 'Day 5', controlCTR: 6.1, variantCTR: 8.1, gap: 2.0 },
      { day: 'Day 6', controlCTR: 6.2, variantCTR: 8.2, gap: 2.0 },
      { day: 'Day 7', controlCTR: 6.1, variantCTR: 8.2, gap: 2.1 }
    ],

    // What specifically won
    winningElements: [
      { element: "Hook Opening", improvement: "+45%", description: "AI-generated questions perform better than statements" },
      { element: "Pacing", improvement: "+23%", description: "Faster story progression keeps viewers engaged" },
      { element: "Cliffhangers", improvement: "+18%", description: "AI creates more compelling mid-story tension" }
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

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Low':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header with key result */}
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-lg font-semibold text-green-600 font-space">
                  {testData.winner} Won by {testData.improvement}
                </span>
              </div>
              <span className="text-muted-foreground font-space">
                Confidence: {testData.confidence}
              </span>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-space">
              <Lightbulb className="w-5 h-5 text-primary" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-card rounded-lg border">
                <h4 className="font-semibold text-foreground font-space mb-2">Revenue Impact</h4>
                <p className="text-2xl font-bold text-green-600 font-space">{testData.insights.revenueImpact}</p>
                <p className="text-sm text-muted-foreground font-space">Based on current viewership</p>
              </div>
              <div className="p-4 bg-white dark:bg-card rounded-lg border">
                <h4 className="font-semibold text-foreground font-space mb-2">Audience Response</h4>
                <p className="text-sm font-space">{testData.insights.audienceResponse}</p>
                <p className="text-lg font-bold text-primary font-space mt-1">{testData.insights.watchTimeGain}</p>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-card rounded-lg border">
              <h4 className="font-semibold text-foreground font-space mb-2">What Won</h4>
              <p className="font-space">{testData.insights.bestPerformingElement}</p>
              <p className="text-sm text-muted-foreground font-space mt-1">{testData.insights.primaryWin}</p>
            </div>
          </CardContent>
        </Card>

        {/* Performance Timeline */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="font-space">Performance Over Time</CardTitle>
            <p className="text-sm text-muted-foreground font-space">
              See when the winning variant started pulling ahead
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={testData.performanceData}>
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
                <Line 
                  type="monotone" 
                  dataKey="controlCTR" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={2}
                  name="Original CTR"
                />
                <Line 
                  type="monotone" 
                  dataKey="variantCTR" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="AI Prompts CTR"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* What Specifically Won */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="font-space">Winning Elements Breakdown</CardTitle>
            <p className="text-sm text-muted-foreground font-space">
              Understand exactly what made the difference
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testData.winningElements.map((element, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold font-space">{element.element}</h4>
                    <p className="text-sm text-muted-foreground font-space">{element.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-600 font-space">{element.improvement}</span>
                    <p className="text-xs text-muted-foreground font-space">improvement</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Plan */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-space">
              <Target className="w-5 h-5 text-primary" />
              Your Action Plan
            </CardTitle>
            <p className="text-sm text-muted-foreground font-space">
              Here's what to do next to maximize your results
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testData.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold font-space">{rec.title}</h4>
                      <Badge className={getImpactColor(rec.impact)}>
                        {rec.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-space mb-3">{rec.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="verdix-gradient text-white font-space">
                        <Copy className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button size="sm" variant="outline" className="font-space">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share with Team
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-primary/20 bg-muted/30">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground font-space mb-4">Ready to Scale This Win?</h3>
              <p className="text-muted-foreground mb-6 font-space">
                Based on these results, applying AI story prompts across your content could increase your monthly revenue by an estimated <span className="font-bold text-primary">{testData.insights.revenueImpact}</span>
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="verdix-gradient text-white font-space">
                  Create Similar Test
                </Button>
                <Button variant="outline" className="font-space">
                  Export Results
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TestDetails;
