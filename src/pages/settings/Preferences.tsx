import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Preferences = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Preferences</h1>
          <p className="text-muted-foreground mt-1">Customize your VERDIX experience and default settings</p>
        </div>

        {/* Test Defaults */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Test Defaults</CardTitle>
            <CardDescription>Set default values for new A/B tests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Default Test Duration</Label>
                <Select defaultValue="7">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-medium">Confidence Level</Label>
                <Select defaultValue="95">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90%</SelectItem>
                    <SelectItem value="95">95%</SelectItem>
                    <SelectItem value="99">99%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Auto-stop on Winner</Label>
                <p className="text-sm text-muted-foreground">Automatically end tests when statistical significance is reached</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Email Results Summary</Label>
                <p className="text-sm text-muted-foreground">Send detailed results when tests complete</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Display Settings */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Display Settings</CardTitle>
            <CardDescription>Customize how data is presented in your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-medium">Number Format</Label>
                <Select defaultValue="us">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">1,234.56 (US)</SelectItem>
                    <SelectItem value="eu">1.234,56 (EU)</SelectItem>
                    <SelectItem value="in">1,23,456.78 (IN)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Compact Dashboard</Label>
                <p className="text-sm text-muted-foreground">Show more information in less space</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Show Percentage Changes</Label>
                <p className="text-sm text-muted-foreground">Display percentage improvements alongside absolute values</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Analytics & Privacy */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Analytics & Privacy</CardTitle>
            <CardDescription>Control data collection and sharing preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Usage Analytics</Label>
                <p className="text-sm text-muted-foreground">Help improve VERDIX by sharing anonymous usage data</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Performance Benchmarks</Label>
                <p className="text-sm text-muted-foreground">Compare your results with anonymized industry averages</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Feature Updates</Label>
                <p className="text-sm text-muted-foreground">Receive early access to new features and beta programs</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="verdix-gradient text-white hover:opacity-90 px-8">
            Save Preferences
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Preferences;
