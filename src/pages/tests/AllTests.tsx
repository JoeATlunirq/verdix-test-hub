
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Eye, MousePointer, Clock, Users, Target, Lightbulb } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const AllTests = () => {
  const tests = [
    {
      id: 1,
      name: "AI Story Prompts v2 vs Original",
      status: "completed",
      startDate: "2024-01-15",
      endDate: "2024-01-22",
      channel: "GameHub Pro",
      type: "Content Strategy",
      winner: "variant",
      improvement: 34,
      metric: "CTR",
      confidence: 95,
      actionable: "Apply AI prompts to all gaming content",
      keyInsight: "Younger audience (13-24) responded 45% better to AI-generated hooks",
      stats: {
        controlViews: 32000,
        variantViews: 45000,
        controlCTR: 6.1,
        variantCTR: 8.2,
        audienceImpact: "13-24 age group",
        revenueImpact: "+$2,400/month projected"
      },
      sparklineData: [
        { day: 1, control: 5200, variant: 6800 },
        { day: 2, control: 8400, variant: 11200 },
        { day: 3, control: 12800, variant: 16900 },
        { day: 4, control: 18200, variant: 24500 },
        { day: 5, control: 23800, variant: 32400 },
        { day: 6, control: 28500, variant: 39200 },
        { day: 7, control: 32000, variant: 45000 }
      ]
    },
    {
      id: 2,
      name: "Hook-First vs Classic Format",
      status: "completed",
      startDate: "2024-01-10",
      endDate: "2024-01-17",
      channel: "TechInsight",
      type: "Video Structure",
      winner: "variant",
      improvement: 28,
      metric: "Retention",
      confidence: 88,
      actionable: "Restructure all tech reviews with hook-first approach",
      keyInsight: "40% better retention in first 30 seconds drives overall performance",
      stats: {
        controlViews: 28000,
        variantViews: 38000,
        controlCTR: 5.9,
        variantCTR: 7.8,
        audienceImpact: "All demographics",
        revenueImpact: "+$1,800/month projected"
      },
      sparklineData: [
        { day: 1, control: 4200, variant: 5800 },
        { day: 2, control: 7400, variant: 10200 },
        { day: 3, control: 11800, variant: 15900 },
        { day: 4, control: 16200, variant: 22500 },
        { day: 5, control: 21800, variant: 29400 },
        { day: 6, control: 25500, variant: 35200 },
        { day: 7, control: 28000, variant: 38000 }
      ]
    },
    {
      id: 3,
      name: "Thumbnail Style Test",
      status: "completed",
      startDate: "2024-01-05",
      endDate: "2024-01-12",
      channel: "GameHub Pro",
      type: "Visual Design",
      winner: "control",
      improvement: 12,
      metric: "CTR",
      confidence: 82,
      actionable: "Keep current thumbnail style, avoid dramatic overlays",
      keyInsight: "Clean thumbnails outperform busy designs for gaming content",
      stats: {
        controlViews: 41000,
        variantViews: 35000,
        controlCTR: 7.2,
        variantCTR: 6.4,
        audienceImpact: "25+ age group",
        revenueImpact: "+$900/month projected"
      },
      sparklineData: [
        { day: 1, control: 6200, variant: 4800 },
        { day: 2, control: 11400, variant: 9200 },
        { day: 3, control: 17800, variant: 14900 },
        { day: 4, control: 24200, variant: 20500 },
        { day: 5, control: 31800, variant: 26400 },
        { day: 6, control: 37500, variant: 31200 },
        { day: 7, control: 41000, variant: 35000 }
      ]
    },
    {
      id: 4,
      name: "Upload Time Optimization",
      status: "running",
      startDate: "2024-01-20",
      endDate: "2024-01-27",
      channel: "Daily Vlogs",
      type: "Publishing Schedule",
      winner: null,
      improvement: 0,
      metric: "Views",
      confidence: 0,
      actionable: "Test in progress - early data shows promise",
      keyInsight: "Evening uploads showing 23% higher initial engagement",
      stats: {
        controlViews: 8500,
        variantViews: 9200,
        controlCTR: 4.8,
        variantCTR: 5.3,
        audienceImpact: "Working professionals",
        revenueImpact: "TBD"
      },
      sparklineData: [
        { day: 1, control: 1200, variant: 1800 },
        { day: 2, control: 2400, variant: 3200 },
        { day: 3, control: 4800, variant: 5900 },
        { day: 4, control: 6200, variant: 7500 },
        { day: 5, control: 7800, variant: 8800 },
        { day: 6, control: 8500, variant: 9200 }
      ]
    }
  ];

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

  const getWinnerDisplay = (test: any) => {
    if (test.status === 'running') {
      return (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-muted-foreground font-space">In Progress</span>
        </div>
      );
    }

    const isVariantWinner = test.winner === 'variant';
    return (
      <div className="flex items-center gap-2">
        {isVariantWinner ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-orange-500" />
        )}
        <div>
          <p className="font-semibold text-sm font-space">
            {isVariantWinner ? 'New Approach' : 'Original'} Won
          </p>
          <p className="text-xs text-muted-foreground font-space">
            +{test.improvement}% {test.metric}
          </p>
        </div>
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space">All Tests</h1>
            <p className="text-muted-foreground mt-1 font-space">Actionable insights from your content experiments</p>
          </div>
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90 font-space">
              + New Test
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-green-500" />
                <span className="text-sm text-muted-foreground font-space">Success Rate</span>
              </div>
              <p className="text-2xl font-bold text-green-500 font-space">89%</p>
              <p className="text-xs text-muted-foreground font-space">Tests showing improvement</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-space">Avg Improvement</span>
              </div>
              <p className="text-2xl font-bold text-primary font-space">+24%</p>
              <p className="text-xs text-muted-foreground font-space">Across all metrics</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-muted-foreground font-space">Total Views</span>
              </div>
              <p className="text-2xl font-bold text-blue-500 font-space">2.4M</p>
              <p className="text-xs text-muted-foreground font-space">From tested content</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-muted-foreground font-space">Revenue Impact</span>
              </div>
              <p className="text-2xl font-bold text-purple-500 font-space">+$5.1K</p>
              <p className="text-xs text-muted-foreground font-space">Monthly projected</p>
            </CardContent>
          </Card>
        </div>

        {/* Test Results with Actionable Insights */}
        <div className="space-y-4">
          {tests.map((test) => (
            <Card key={test.id} className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Test Info & Status */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground font-space mb-1">{test.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-space">
                          <span>{test.channel}</span>
                          <span>•</span>
                          <span>{test.type}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(test.status)}>
                        {test.status}
                      </Badge>
                    </div>
                    
                    {getWinnerDisplay(test)}

                    {test.confidence > 0 && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs font-space">
                          {test.confidence}% confidence
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Performance Visualization */}
                  <div className="lg:col-span-3">
                    <p className="text-sm text-muted-foreground font-space mb-2">Performance Trend</p>
                    <ResponsiveContainer width="100%" height={60}>
                      <LineChart data={test.sparklineData}>
                        <Line 
                          type="monotone" 
                          dataKey="control" 
                          stroke="hsl(var(--muted-foreground))" 
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="variant" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="flex justify-between text-xs text-muted-foreground font-space mt-1">
                      <span>Control: {test.stats.controlViews.toLocaleString()}</span>
                      <span className="text-primary">Variant: {test.stats.variantViews.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="lg:col-span-2">
                    <p className="text-sm text-muted-foreground font-space mb-2">Key Metrics</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-space">CTR:</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-space">{test.stats.controlCTR}%</span>
                          <span className="text-primary text-sm font-space">→ {test.stats.variantCTR}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-space">Impact:</span>
                        <span className="text-sm text-primary font-space">{test.stats.audienceImpact}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-space">Revenue:</span>
                        <span className="text-sm text-green-500 font-space">{test.stats.revenueImpact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actionable Insights */}
                  <div className="lg:col-span-3">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-foreground font-space">Next Action</p>
                          <p className="text-sm text-muted-foreground font-space">{test.actionable}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-primary/10">
                        <p className="text-xs text-muted-foreground font-space mb-1">Key Insight:</p>
                        <p className="text-xs text-foreground font-space">{test.keyInsight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground font-space mb-2">Ready to optimize more content?</h3>
            <p className="text-muted-foreground font-space mb-4">
              Start a new test to discover what resonates with your audience
            </p>
            <Link to="/tests/new">
              <Button className="verdix-gradient text-white hover:opacity-90 font-space">
                Create New Test
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AllTests;
