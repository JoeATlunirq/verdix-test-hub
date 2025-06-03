
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, BarChart3, Pause, Play, StopCircle } from "lucide-react";

const ActiveTests = () => {
  const activeTests = [
    {
      id: 1,
      name: "Hook-First vs Classic Story Format",
      description: "Testing if starting with the hook immediately vs traditional intro improves retention",
      controlVideos: 4,
      variantVideos: 4,
      startDate: "2024-01-15",
      endDate: "2024-01-22",
      daysRemaining: 3,
      progress: 60,
      status: "running",
      currentMetrics: {
        controlAvgViews: 28000,
        variantAvgViews: 35000,
        controlCTR: 5.9,
        variantCTR: 7.2
      }
    },
    {
      id: 2,
      name: "Question vs Statement Titles",
      description: "Comparing question-based titles against statement titles for Reddit story content",
      controlVideos: 3,
      variantVideos: 3,
      startDate: "2024-01-18",
      endDate: "2024-01-25",
      daysRemaining: 6,
      progress: 25,
      status: "running",
      currentMetrics: {
        controlAvgViews: 31000,
        variantAvgViews: 29000,
        controlCTR: 6.8,
        variantCTR: 6.2
      }
    },
    {
      id: 3,
      name: "Shorter vs Longer Video Intros",
      description: "Testing 5-second intros vs 15-second intros for viewer retention",
      controlVideos: 5,
      variantVideos: 5,
      startDate: "2024-01-20",
      endDate: "2024-01-27",
      daysRemaining: 8,
      progress: 15,
      status: "running",
      currentMetrics: {
        controlAvgViews: 33000,
        variantAvgViews: 38000,
        controlCTR: 6.5,
        variantCTR: 7.8
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTrendIndicator = (control: number, variant: number) => {
    const diff = ((variant - control) / control) * 100;
    if (diff > 5) return { color: 'text-green-600', symbol: '↗', value: `+${diff.toFixed(1)}%` };
    if (diff < -5) return { color: 'text-red-600', symbol: '↘', value: `${diff.toFixed(1)}%` };
    return { color: 'text-muted-foreground', symbol: '→', value: 'Similar' };
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space">Active Content Tests</h1>
            <p className="text-muted-foreground mt-1 font-space">Monitor ongoing content comparisons and their real-time performance</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90 font-space">
            + Create New Test
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Active Tests</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">{activeTests.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Currently running</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Videos Being Tested</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">
                {activeTests.reduce((acc, test) => acc + test.controlVideos + test.variantVideos, 0)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Across all tests</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Avg Test Progress</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">
                {Math.round(activeTests.reduce((acc, test) => acc + test.progress, 0) / activeTests.length)}%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Time completed</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground font-space">Tests Ending Soon</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground font-space">
                {activeTests.filter(test => test.daysRemaining <= 3).length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-space">Within 3 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Tests List */}
        <div className="space-y-6">
          {activeTests.map((test) => {
            const viewsTrend = getTrendIndicator(test.currentMetrics.controlAvgViews, test.currentMetrics.variantAvgViews);
            const ctrTrend = getTrendIndicator(test.currentMetrics.controlCTR, test.currentMetrics.variantCTR);

            return (
              <Card key={test.id} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-foreground font-space">{test.name}</CardTitle>
                      <CardDescription className="font-space mt-1">{test.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(test.status)}>
                      {test.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Test Progress */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground font-space">Test Progress</span>
                          <span className="text-sm font-medium text-foreground font-space">{test.progress}%</span>
                        </div>
                        <Progress value={test.progress} className="w-full" />
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-space">{test.startDate} - {test.endDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="font-space">
                          {test.daysRemaining} days remaining
                        </span>
                      </div>

                      <div className="text-sm text-muted-foreground font-space">
                        <span>{test.controlVideos} control + {test.variantVideos} variant videos</span>
                      </div>
                    </div>

                    {/* Current Performance */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground font-space">Current Performance</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-foreground font-space">Average Views</p>
                            <p className="text-xs text-muted-foreground font-space">
                              Control: {test.currentMetrics.controlAvgViews.toLocaleString()}
                            </p>
                            <p className="text-xs text-muted-foreground font-space">
                              Variant: {test.currentMetrics.variantAvgViews.toLocaleString()}
                            </p>
                          </div>
                          <div className={`text-right ${viewsTrend.color}`}>
                            <span className="text-lg font-space">{viewsTrend.symbol}</span>
                            <p className="text-xs font-space">{viewsTrend.value}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-foreground font-space">Click-Through Rate</p>
                            <p className="text-xs text-muted-foreground font-space">
                              Control: {test.currentMetrics.controlCTR}%
                            </p>
                            <p className="text-xs text-muted-foreground font-space">
                              Variant: {test.currentMetrics.variantCTR}%
                            </p>
                          </div>
                          <div className={`text-right ${ctrTrend.color}`}>
                            <span className="text-lg font-space">{ctrTrend.symbol}</span>
                            <p className="text-xs font-space">{ctrTrend.value}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground font-space">Test Actions</h4>
                      
                      <div className="space-y-2">
                        <Button 
                          variant="outline" 
                          className="w-full border-primary/20 text-primary hover:bg-primary/10 font-space"
                        >
                          <BarChart3 className="w-4 h-4 mr-2" />
                          View Detailed Analytics
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full border-yellow-200 text-yellow-700 hover:bg-yellow-50 dark:border-yellow-800 dark:text-yellow-300 dark:hover:bg-yellow-950 font-space"
                        >
                          <Pause className="w-4 h-4 mr-2" />
                          Pause Test
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full border-destructive/20 text-destructive hover:bg-destructive/10 font-space"
                        >
                          <StopCircle className="w-4 h-4 mr-2" />
                          End Test Early
                        </Button>
                      </div>

                      {test.daysRemaining <= 3 && (
                        <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg dark:bg-orange-950/20 dark:border-orange-900">
                          <p className="text-sm text-orange-800 dark:text-orange-200 font-space">
                            Test ending soon! Review results when complete.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ActiveTests;
