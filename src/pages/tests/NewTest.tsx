
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Upload, BarChart3, TrendingUp, Eye, Clock, Heart, MessageCircle, Share2, ThumbsUp, DollarSign, GripVertical } from "lucide-react";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const availableMetrics = [
  { id: 'views', name: 'Views', icon: Eye, description: 'Total video views' },
  { id: 'ctr', name: 'Click-through Rate', icon: TrendingUp, description: 'Percentage of impressions that resulted in clicks' },
  { id: 'retention', name: 'Average View Duration', icon: Clock, description: 'How long viewers watch on average' },
  { id: 'engagement', name: 'Engagement Rate', icon: Heart, description: 'Likes, comments, shares per view' },
  { id: 'comments', name: 'Comments', icon: MessageCircle, description: 'Total number of comments' },
  { id: 'likes', name: 'Likes', icon: ThumbsUp, description: 'Total number of likes' },
  { id: 'shares', name: 'Shares', icon: Share2, description: 'Times video was shared' },
  { id: 'subscribers', name: 'Subscriber Growth', icon: TrendingUp, description: 'New subscribers from video' },
  { id: 'revenue', name: 'Revenue', icon: DollarSign, description: 'Total revenue generated from video' },
];

interface SortableMetricItemProps {
  metricId: string;
  index: number;
  onRemove: (metricId: string) => void;
}

function SortableMetricItem({ metricId, index, onRemove }: SortableMetricItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: metricId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const metric = availableMetrics.find(m => m.id === metricId);
  if (!metric) return null;

  const IconComponent = metric.icon;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg"
    >
      <div className="flex items-center gap-3">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 hover:bg-primary/10 rounded"
        >
          <GripVertical className="w-4 h-4 text-muted-foreground" />
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30 font-space">
          #{index + 1}
        </Badge>
        <IconComponent className="w-4 h-4 text-primary" />
        <div>
          <p className="font-medium text-foreground font-space">{metric.name}</p>
          <p className="text-xs text-muted-foreground font-space">{metric.description}</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onRemove(metricId)}
        className="h-8 w-8 p-0 border-destructive/20 text-destructive hover:bg-destructive/10"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}

const NewTest = () => {
  const [controlVideos, setControlVideos] = useState<string[]>([""]);
  const [variantVideos, setVariantVideos] = useState<string[]>([""]);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['views', 'ctr', 'retention']);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

  const toggleMetric = (metricId: string) => {
    if (selectedMetrics.includes(metricId)) {
      if (selectedMetrics.length > 1) {
        setSelectedMetrics(selectedMetrics.filter(id => id !== metricId));
      }
    } else {
      setSelectedMetrics([...selectedMetrics, metricId]);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSelectedMetrics((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
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

            {/* Metrics Selection */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Priority Metrics
                </CardTitle>
                <CardDescription className="font-space">
                  Select and prioritize the metrics most important to track for this test. Drag to reorder by priority.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground font-space">Selected Metrics (drag to reorder by priority)</h4>
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext items={selectedMetrics} strategy={verticalListSortingStrategy}>
                      <div className="space-y-2">
                        {selectedMetrics.map((metricId, index) => (
                          <SortableMetricItem
                            key={metricId}
                            metricId={metricId}
                            index={index}
                            onRemove={() => {
                              if (selectedMetrics.length > 1) {
                                toggleMetric(metricId);
                              }
                            }}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground font-space">Available Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {availableMetrics
                      .filter(metric => !selectedMetrics.includes(metric.id))
                      .map((metric) => {
                        const IconComponent = metric.icon;
                        return (
                          <Button
                            key={metric.id}
                            variant="outline"
                            onClick={() => toggleMetric(metric.id)}
                            className="justify-start h-auto p-3 border-border hover:bg-muted/50"
                          >
                            <IconComponent className="w-4 h-4 mr-2" />
                            <div className="text-left">
                              <p className="font-medium font-space">{metric.name}</p>
                              <p className="text-xs text-muted-foreground font-space">{metric.description}</p>
                            </div>
                          </Button>
                        );
                      })}
                  </div>
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
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-space">Priority Metrics:</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-space">
                    {selectedMetrics.length}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-space">Selected Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {selectedMetrics.map((metricId, index) => {
                  const metric = availableMetrics.find(m => m.id === metricId);
                  if (!metric) return null;
                  return (
                    <div key={metricId} className="flex justify-between">
                      <span className="text-muted-foreground font-space">#{index + 1} {metric.name}</span>
                      <span className="font-medium font-space">Priority</span>
                    </div>
                  );
                })}
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
                  <h4 className="font-medium text-foreground mb-1 font-space">Metric Priority</h4>
                  <p className="text-muted-foreground font-space">Choose 3-5 key metrics that align with your goals</p>
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
