
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Upload, BarChart3 } from "lucide-react";
import { useState } from "react";

const NewTest = () => {
  const [controlVideos, setControlVideos] = useState<string[]>([""]);
  const [variantVideos, setVariantVideos] = useState<string[]>([""]);

  const addControlVideo = () => {
    setControlVideos([...controlVideos, ""]);
  };

  const removeControlVideo = (index: number) => {
    setControlVideos(controlVideos.filter((_, i) => i !== index));
  };

  const addVariantVideo = () => {
    setVariantVideos([...variantVideos, ""]);
  };

  const removeVariantVideo = (index: number) => {
    setVariantVideos(variantVideos.filter((_, i) => i !== index));
  };

  const updateControlVideo = (index: number, value: string) => {
    const updated = [...controlVideos];
    updated[index] = value;
    setControlVideos(updated);
  };

  const updateVariantVideo = (index: number, value: string) => {
    const updated = [...variantVideos];
    updated[index] = value;
    setVariantVideos(updated);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-space">Create Content Test</h1>
          <p className="text-muted-foreground mt-1 font-space">Set up a new test to compare different content approaches using real YouTube data</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Test Setup */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space">Test Configuration</CardTitle>
                <CardDescription className="font-space">Define what you're testing and why</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="testName" className="font-space">Test Name</Label>
                  <Input id="testName" placeholder="e.g., AI Story Prompt v2 vs Current Approach" className="font-space" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="channel" className="font-space">Channel</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reddit-stories">Reddit Stories Channel</SelectItem>
                        <SelectItem value="gaming-hub">Gaming Hub</SelectItem>
                        <SelectItem value="tech-reviews">Tech Reviews</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="testDuration" className="font-space">Test Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hypothesis" className="font-space">What are you testing?</Label>
                  <Textarea 
                    id="hypothesis" 
                    placeholder="e.g., Testing new AI prompt that creates more engaging story hooks vs my current approach. Expecting higher retention and engagement..."
                    className="min-h-[100px] font-space"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Control Group */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Control Group (Current Approach)
                </CardTitle>
                <CardDescription className="font-space">
                  Upload URLs of videos that represent your current approach. These will be your baseline for comparison.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {controlVideos.map((video, index) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      placeholder="https://youtube.com/watch?v=..."
                      value={video}
                      onChange={(e) => updateControlVideo(index, e.target.value)}
                      className="flex-1 font-space"
                    />
                    {controlVideos.length > 1 && (
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => removeControlVideo(index)}
                        className="border-destructive/20 text-destructive hover:bg-destructive/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={addControlVideo}
                  className="w-full border-primary/20 text-primary hover:bg-primary/10 font-space"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Control Video
                </Button>
              </CardContent>
            </Card>

            {/* Variant Group */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Variant Group (New Approach)
                </CardTitle>
                <CardDescription className="font-space">
                  Upload URLs of videos using your new approach. These will be compared against the control group.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {variantVideos.map((video, index) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      placeholder="https://youtube.com/watch?v=..."
                      value={video}
                      onChange={(e) => updateVariantVideo(index, e.target.value)}
                      className="flex-1 font-space"
                    />
                    {variantVideos.length > 1 && (
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => removeVariantVideo(index)}
                        className="border-destructive/20 text-destructive hover:bg-destructive/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={addVariantVideo}
                  className="w-full border-primary/20 text-primary hover:bg-primary/10 font-space"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Variant Video
                </Button>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="verdix-gradient text-white hover:opacity-90 flex-1 font-space">
                Start Content Test
              </Button>
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 font-space">
                Save as Draft
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space">Test Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Control Videos:</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-space">
                    {controlVideos.filter(v => v.trim()).length}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Variant Videos:</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-space">
                    {variantVideos.filter(v => v.trim()).length}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Total Videos:</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-space">
                    {controlVideos.filter(v => v.trim()).length + variantVideos.filter(v => v.trim()).length}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space">Metrics Tracked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Views</span>
                  <span className="font-medium font-space">Primary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Click-through Rate</span>
                  <span className="font-medium font-space">Primary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Average View Duration</span>
                  <span className="font-medium font-space">Primary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Engagement Rate</span>
                  <span className="font-medium font-space">Secondary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Comments/Likes</span>
                  <span className="font-medium font-space">Secondary</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space">Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1 font-space">Video Count</h4>
                  <p className="text-muted-foreground font-space">Use 3-10 videos per group for reliable results</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 font-space">Similar Content</h4>
                  <p className="text-muted-foreground font-space">Ensure videos are comparable in topic and length</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 font-space">Test Duration</h4>
                  <p className="text-muted-foreground font-space">Allow 7+ days for meaningful data collection</p>
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
