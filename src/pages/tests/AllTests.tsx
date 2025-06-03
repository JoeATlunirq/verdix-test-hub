
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AllTests = () => {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  const tests = [
    {
      id: 1,
      name: "Thumbnail A vs B - Gaming Compilation",
      status: "running",
      startDate: "2024-01-15",
      endDate: "2024-01-22",
      channel: "GameHub Pro",
      type: "Thumbnail",
      progress: 65,
      currentStats: {
        controlViews: 12000,
        variantViews: 15800,
        controlCTR: 6.2,
        variantCTR: 7.9,
        totalImpressions: 45000
      }
    },
    {
      id: 2,
      name: "Title Format Test - Tech Reviews",
      status: "completed",
      startDate: "2024-01-10",
      endDate: "2024-01-17",
      channel: "TechInsight",
      type: "Title",
      progress: 100,
      currentStats: {
        controlViews: 28000,
        variantViews: 38000,
        controlCTR: 5.9,
        variantCTR: 7.8,
        totalImpressions: 95000
      }
    },
    {
      id: 3,
      name: "Upload Time Optimization",
      status: "scheduled",
      startDate: "2024-01-25",
      endDate: "2024-02-01",
      channel: "Daily Vlogs",
      type: "Schedule",
      progress: 0,
      currentStats: {
        controlViews: 0,
        variantViews: 0,
        controlCTR: 0,
        variantCTR: 0,
        totalImpressions: 0
      }
    },
    {
      id: 4,
      name: "Hook Length A/B Test",
      status: "completed",
      startDate: "2024-01-05",
      endDate: "2024-01-12",
      channel: "GameHub Pro",
      type: "Content",
      progress: 100,
      currentStats: {
        controlViews: 22000,
        variantViews: 31000,
        controlCTR: 5.4,
        variantCTR: 7.1,
        totalImpressions: 78000
      }
    },
    {
      id: 5,
      name: "Description Length Test",
      status: "running",
      startDate: "2024-01-18",
      endDate: "2024-01-25",
      channel: "TechInsight",
      type: "Description",
      progress: 42,
      currentStats: {
        controlViews: 8500,
        variantViews: 9200,
        controlCTR: 4.8,
        variantCTR: 5.3,
        totalImpressions: 32000
      }
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

  const getComparisonData = (test: any) => [
    {
      name: 'Control',
      views: test.currentStats.controlViews,
      ctr: test.currentStats.controlCTR
    },
    {
      name: 'Variant',
      views: test.currentStats.variantViews,
      ctr: test.currentStats.variantCTR
    }
  ];

  if (selectedTest) {
    const test = tests.find(t => t.id === selectedTest);
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
              ← Back to All Tests
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-space">{test.name}</h1>
              <p className="text-muted-foreground mt-1 font-space">Test details and current progress</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Test Info */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Test Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground font-space">Status</p>
                    <Badge className={getStatusColor(test.status)}>
                      {test.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-space">Type</p>
                    <p className="font-space">{test.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-space">Channel</p>
                    <p className="font-space">{test.channel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-space">Progress</p>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${test.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-space">{test.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground font-space">Start Date</p>
                    <p className="font-space">{test.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-space">End Date</p>
                    <p className="font-space">{test.endDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Performance */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Current Performance</CardTitle>
              </CardHeader>
              <CardContent>
                {test.status === 'scheduled' ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground font-space">Test not started yet</p>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={200}>
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
                )}
              </CardContent>
            </Card>
          </div>

          {test.status !== 'scheduled' && (
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Current Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground font-space mb-2">Views</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="font-space">Control:</span>
                        <span className="font-bold font-space">{test.currentStats.controlViews.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-space">Variant:</span>
                        <span className="font-bold text-primary font-space">{test.currentStats.variantViews.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground font-space mb-2">Click-Through Rate</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="font-space">Control:</span>
                        <span className="font-bold font-space">{test.currentStats.controlCTR}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-space">Variant:</span>
                        <span className="font-bold text-primary font-space">{test.currentStats.variantCTR}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground font-space mb-2">Total Impressions</p>
                    <p className="text-2xl font-bold text-primary font-space">
                      {test.currentStats.totalImpressions.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space">All Tests</h1>
            <p className="text-muted-foreground mt-1 font-space">Manage and monitor all your A/B tests</p>
          </div>
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90 font-space">
              + New Test
            </Button>
          </Link>
        </div>

        {/* Tests Table */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground font-space">Test Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="font-semibold text-foreground font-space">Name</TableHead>
                  <TableHead className="font-semibold text-foreground font-space">Status</TableHead>
                  <TableHead className="font-semibold text-foreground font-space">Type</TableHead>
                  <TableHead className="font-semibold text-foreground font-space">Channel</TableHead>
                  <TableHead className="font-semibold text-foreground font-space">Start Date</TableHead>
                  <TableHead className="font-semibold text-foreground font-space">Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tests.map((test) => (
                  <TableRow 
                    key={test.id} 
                    className="border-border hover:bg-muted/50 cursor-pointer"
                    onClick={() => setSelectedTest(test.id)}
                  >
                    <TableCell>
                      <p className="font-medium text-foreground hover:text-primary transition-colors font-space">
                        {test.name}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(test.status)}>
                        {test.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground font-space">{test.type}</TableCell>
                    <TableCell className="text-muted-foreground font-space">{test.channel}</TableCell>
                    <TableCell className="text-muted-foreground font-space">{test.startDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${test.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground font-space">{test.progress}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground font-space">Click on any test to view detailed information</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AllTests;
