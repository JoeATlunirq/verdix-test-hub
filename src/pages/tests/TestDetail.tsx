
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Pause, TrendingUp, Eye, Clock, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const TestDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API based on id
  const testData = {
    id: id,
    name: "Thumbnail A vs B - Gaming Compilation",
    status: "running",
    startDate: "2024-01-15",
    endDate: "2024-01-22",
    channel: "GameHub Pro",
    type: "Thumbnail",
    progress: 65,
    description: "Testing two different thumbnail styles for gaming compilation videos to optimize click-through rate.",
    variants: {
      control: {
        name: "Original Thumbnail",
        views: 12450,
        ctr: 4.2,
        avgViewDuration: 185,
        subscribers: 45
      },
      variant: {
        name: "Action Thumbnail",
        views: 16780,
        ctr: 6.8,
        avgViewDuration: 210,
        subscribers: 78
      }
    }
  };

  const performanceData = [
    { day: 'Day 1', control: 4.2, variant: 5.8 },
    { day: 'Day 2', control: 4.5, variant: 6.1 },
    { day: 'Day 3', control: 4.3, variant: 6.3 },
    { day: 'Day 4', control: 4.6, variant: 6.8 },
    { day: 'Day 5', control: 4.4, variant: 6.5 },
    { day: 'Day 6', control: 4.7, variant: 7.1 },
    { day: 'Day 7', control: 4.2, variant: 6.9 },
  ];

  const viewsData = [
    { day: 'Day 1', control: 1200, variant: 1680 },
    { day: 'Day 2', control: 1850, variant: 2240 },
    { day: 'Day 3', control: 1650, variant: 2180 },
    { day: 'Day 4', control: 1780, variant: 2420 },
    { day: 'Day 5', control: 1920, variant: 2560 },
    { day: 'Day 6', control: 2050, variant: 2780 },
    { day: 'Day 7', control: 1800, variant: 2450 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'scheduled':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const calculateImprovement = (variant: number, control: number) => {
    const improvement = ((variant - control) / control) * 100;
    return improvement > 0 ? `+${improvement.toFixed(1)}%` : `${improvement.toFixed(1)}%`;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/tests/all">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tests
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{testData.name}</h1>
            <p className="text-muted-foreground mt-1">{testData.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className={getStatusColor(testData.status)} variant="outline">
              {testData.status}
            </Badge>
            {testData.status === 'running' && (
              <Button variant="outline" size="sm">
                <Pause className="w-4 h-4 mr-2" />
                Pause Test
              </Button>
            )}
          </div>
        </div>

        {/* Test Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Type</div>
              <div className="text-lg font-semibold text-foreground">{testData.type}</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Channel</div>
              <div className="text-lg font-semibold text-foreground">{testData.channel}</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="text-lg font-semibold text-foreground">{testData.startDate} - {testData.endDate}</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Progress</div>
              <div className="text-lg font-semibold text-foreground">{testData.progress}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Variant Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Control */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                Control: {testData.variants.control.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Views</div>
                    <div className="text-xl font-bold text-foreground">{testData.variants.control.views.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">CTR</div>
                    <div className="text-xl font-bold text-foreground">{testData.variants.control.ctr}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Avg Duration</div>
                    <div className="text-xl font-bold text-foreground">{testData.variants.control.avgViewDuration}s</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Subscribers</div>
                    <div className="text-xl font-bold text-foreground">+{testData.variants.control.subscribers}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Variant */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                Variant: {testData.variants.variant.name}
                <Badge className="bg-primary/20 text-primary border-primary/30" variant="outline">
                  Winner
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Views</div>
                    <div className="text-xl font-bold text-foreground">{testData.variants.variant.views.toLocaleString()}</div>
                    <div className="text-sm text-primary">
                      {calculateImprovement(testData.variants.variant.views, testData.variants.control.views)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">CTR</div>
                    <div className="text-xl font-bold text-foreground">{testData.variants.variant.ctr}%</div>
                    <div className="text-sm text-primary">
                      {calculateImprovement(testData.variants.variant.ctr, testData.variants.control.ctr)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Avg Duration</div>
                    <div className="text-xl font-bold text-foreground">{testData.variants.variant.avgViewDuration}s</div>
                    <div className="text-sm text-primary">
                      {calculateImprovement(testData.variants.variant.avgViewDuration, testData.variants.control.avgViewDuration)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Subscribers</div>
                    <div className="text-xl font-bold text-foreground">+{testData.variants.variant.subscribers}</div>
                    <div className="text-sm text-primary">
                      {calculateImprovement(testData.variants.variant.subscribers, testData.variants.control.subscribers)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CTR Performance */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">CTR Performance Over Time</CardTitle>
              <CardDescription>Click-through rate comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }} 
                  />
                  <Line type="monotone" dataKey="control" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Control" />
                  <Line type="monotone" dataKey="variant" stroke="hsl(var(--primary))" strokeWidth={2} name="Variant" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Views Performance */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Daily Views Comparison</CardTitle>
              <CardDescription>Total views per day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }} 
                  />
                  <Bar dataKey="control" fill="hsl(var(--muted-foreground))" name="Control" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="variant" fill="hsl(var(--primary))" name="Variant" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TestDetail;
