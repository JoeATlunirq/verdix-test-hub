
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
            <h1 className="text-3xl font-bold text-slate-900">Test Schedule</h1>
            <p className="text-slate-600 mt-1">Plan and manage upcoming A/B tests</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90">
            Schedule New Test
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="border-green-100 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-slate-900">Test Calendar</CardTitle>
              <CardDescription>View scheduled tests by date</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-green-100"
              />
            </CardContent>
          </Card>

          {/* Scheduled Tests */}
          <Card className="border-green-100 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-slate-900">Upcoming Tests</CardTitle>
              <CardDescription>Tests scheduled for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 mb-2">{test.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
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
                          className="bg-orange-50 text-orange-700 border-orange-200"
                        >
                          {test.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        {test.status}
                      </Badge>
                      <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
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
          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Tests This Week</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">Starting soon</p>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Tests This Month</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Across all channels</p>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600">Pending Approval</CardDescription>
              <CardTitle className="text-3xl font-bold text-slate-900">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-600">Awaiting review</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
