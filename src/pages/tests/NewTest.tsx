
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const NewTest = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Create New Test</h1>
          <p className="text-slate-600 mt-1">Set up a new A/B test for your YouTube content</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Test Setup Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-slate-900">Test Configuration</CardTitle>
                <CardDescription>Define your A/B test parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="testName">Test Name</Label>
                  <Input id="testName" placeholder="e.g., Thumbnail A vs B - Gaming Video" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="testType">Test Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select test type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thumbnail">Thumbnail</SelectItem>
                        <SelectItem value="title">Title</SelectItem>
                        <SelectItem value="description">Description</SelectItem>
                        <SelectItem value="upload-time">Upload Time</SelectItem>
                        <SelectItem value="content">Content/Hook</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="channel">Channel</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gamehub">GameHub Pro</SelectItem>
                        <SelectItem value="techinsight">TechInsight</SelectItem>
                        <SelectItem value="dailyvlogs">Daily Vlogs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hypothesis">Test Hypothesis</Label>
                  <Textarea 
                    id="hypothesis" 
                    placeholder="Describe what you're testing and why you think variant B will perform better..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Pick start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Pick end date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-slate-900">Test Variants</CardTitle>
                <CardDescription>Define your control and test variants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900">Control (A)</h3>
                    <div className="space-y-2">
                      <Label htmlFor="controlTitle">Title/Description</Label>
                      <Input id="controlTitle" placeholder="Current title or description" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="controlVideo">Video URL</Label>
                      <Input id="controlVideo" placeholder="https://youtube.com/watch?v=..." />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900">Variant (B)</h3>
                    <div className="space-y-2">
                      <Label htmlFor="variantTitle">Title/Description</Label>
                      <Input id="variantTitle" placeholder="New title or description to test" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="variantVideo">Video URL</Label>
                      <Input id="variantVideo" placeholder="https://youtube.com/watch?v=..." />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="verdix-gradient text-white hover:opacity-90 flex-1">
                Create Test
              </Button>
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Save as Draft
              </Button>
            </div>
          </div>

          {/* Sidebar Tips */}
          <div className="space-y-6">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-slate-900">💡 Testing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-slate-900">Test Duration</h4>
                  <p className="text-slate-600">Run tests for at least 7 days to get reliable data</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Sample Size</h4>
                  <p className="text-slate-600">Ensure enough views for statistical significance</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Single Variable</h4>
                  <p className="text-slate-600">Test only one element at a time for clear results</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-slate-900">📊 Success Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Click-through Rate</span>
                  <span className="font-medium">Primary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">View Duration</span>
                  <span className="font-medium">Secondary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Engagement Rate</span>
                  <span className="font-medium">Secondary</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewTest;
