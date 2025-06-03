
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { CalendarDays, Video, Edit } from "lucide-react";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const scheduledTests = [
    {
      id: 1,
      name: "Thumbnail Color Test - Educational Content",
      startDate: "2024-01-25",
      endDate: "2024-02-01",
      channel: "EduChannel",
      type: "Thumbnail",
      status: "scheduled"
    },
    {
      id: 2,
      name: "Title Length Optimization",
      startDate: "2024-01-28",
      endDate: "2024-02-04",
      channel: "TechInsight",
      type: "Title",
      status: "scheduled"
    },
    {
      id: 3,
      name: "Upload Time A/B Test",
      startDate: "2024-02-01",
      endDate: "2024-02-08",
      channel: "GameHub Pro",
      type: "Schedule",
      status: "pending"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Test Schedule</h1>
            <p className="text-muted-foreground mt-1">Plan and manage upcoming A/B tests</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90">
            Schedule New Test
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="border-primary/20 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-foreground">Test Calendar</CardTitle>
              <CardDescription>View scheduled tests by date</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-primary/20"
              />
            </CardContent>
          </Card>

          {/* Scheduled Tests */}
          <Card className="border-primary/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-foreground">Upcoming Tests</CardTitle>
              <CardDescription>Tests scheduled for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-2">{test.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-3 h-3" />
                          {test.startDate} - {test.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          {test.channel}
                        </span>
                        <Badge 
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {test.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {test.status}
                      </Badge>
                      <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/10">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Tests This Week</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">Starting soon</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Tests This Month</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Across all channels</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Pending Approval</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-600 dark:text-orange-400">Awaiting review</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
