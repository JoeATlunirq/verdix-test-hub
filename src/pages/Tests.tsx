
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlaskConical, Plus, BarChart3, Calendar, TrendingUp } from "lucide-react";

const Tests = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-space">YouTube Content Testing</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-space">
            Test different content approaches by comparing control videos against new variants. 
            Upload multiple videos for each group and let our OAuth integration track real YouTube performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/tests/active">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground font-space">Active Tests</CardTitle>
                <CardDescription className="font-space">Monitor ongoing content comparisons</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/tests/results">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground font-space">Test Results</CardTitle>
                <CardDescription className="font-space">View completed test outcomes and insights</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/tests/insights">
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 verdix-gradient rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-foreground font-space">Content Insights</CardTitle>
                <CardDescription className="font-space">Discover what content approaches work best</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/tests/new">
            <Button className="verdix-gradient text-white hover:opacity-90 px-8 py-3 text-lg font-semibold font-space">
              <Plus className="w-5 h-5 mr-2" />
              Create New Content Test
            </Button>
          </Link>
        </div>

        {/* Example Use Cases */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground font-space">Example Test Scenarios</CardTitle>
            <CardDescription className="font-space">Common ways creators use VERDIX to optimize their content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 font-space">AI Prompt Testing</h3>
                <p className="text-sm text-muted-foreground font-space">
                  Upload 5 videos made with your current AI story prompt as control, then 5 videos with a new prompt as variants. 
                  Test for 7 days to see which approach drives better engagement.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 font-space">Content Style Comparison</h3>
                <p className="text-sm text-muted-foreground font-space">
                  Compare different video formats, storytelling approaches, or production styles by uploading 
                  multiple examples of each and tracking real YouTube metrics.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 font-space">Thumbnail Strategy</h3>
                <p className="text-sm text-muted-foreground font-space">
                  Test different thumbnail approaches across multiple videos to identify what visual style 
                  consistently drives higher click-through rates.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 font-space">Title Formulas</h3>
                <p className="text-sm text-muted-foreground font-space">
                  Compare title structures and hooks by uploading videos with different naming conventions 
                  and measuring their performance impact.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Tests;
