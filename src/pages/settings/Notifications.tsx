
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground mt-1">Manage how and when you receive alerts from VERDIX</p>
        </div>

        {/* Email Notifications */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Email Notifications</CardTitle>
            <CardDescription>Control email alerts for test updates and results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="test-complete" className="text-foreground font-medium">Test Completion</Label>
                <p className="text-sm text-muted-foreground">Get notified when your A/B tests finish running</p>
              </div>
              <Switch id="test-complete" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="significant-results" className="text-foreground font-medium">Significant Results</Label>
                <p className="text-sm text-muted-foreground">Alert when test results reach statistical significance</p>
              </div>
              <Switch id="significant-results" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="weekly-summary" className="text-foreground font-medium">Weekly Summary</Label>
                <p className="text-sm text-muted-foreground">Receive a weekly digest of your testing performance</p>
              </div>
              <Switch id="weekly-summary" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="channel-issues" className="text-foreground font-medium">Channel Issues</Label>
                <p className="text-sm text-muted-foreground">Get alerts for OAuth or sync problems</p>
              </div>
              <Switch id="channel-issues" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Slack Integration */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Slack Integration</CardTitle>
            <CardDescription>Connect your Slack workspace for team notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium text-foreground">Slack Workspace</h4>
                <p className="text-sm text-muted-foreground">Not connected</p>
              </div>
              <Button className="verdix-gradient text-white hover:opacity-90">
                Connect Slack
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-foreground font-medium">Test Alerts</Label>
                  <p className="text-sm text-muted-foreground">Post to #tests channel</p>
                </div>
                <Switch disabled />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-foreground font-medium">Winner Announcements</Label>
                  <p className="text-sm text-muted-foreground">Celebrate successful tests</p>
                </div>
                <Switch disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Push Notifications */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Browser Notifications</CardTitle>
            <CardDescription>Receive real-time alerts in your browser</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="browser-notifications" className="text-foreground font-medium">Enable Browser Notifications</Label>
                <p className="text-sm text-muted-foreground">Allow VERDIX to send browser notifications</p>
              </div>
              <Switch id="browser-notifications" />
            </div>

            <div className="flex items-center justify-between opacity-50">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">Urgent Alerts Only</Label>
                <p className="text-sm text-muted-foreground">Only for critical issues and winners</p>
              </div>
              <Switch disabled />
            </div>
          </CardContent>
        </Card>

        {/* Notification Schedule */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Notification Schedule</CardTitle>
            <CardDescription>Set quiet hours and frequency preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-foreground font-medium">Quiet Hours</Label>
                <p className="text-sm text-muted-foreground mb-3">Pause notifications during these hours</p>
                <div className="flex items-center gap-2">
                  <input type="time" className="border border-border bg-background text-foreground rounded px-3 py-2" defaultValue="22:00" />
                  <span className="text-muted-foreground">to</span>
                  <input type="time" className="border border-border bg-background text-foreground rounded px-3 py-2" defaultValue="08:00" />
                </div>
              </div>

              <div>
                <Label className="text-foreground font-medium">Time Zone</Label>
                <p className="text-sm text-muted-foreground mb-3">Your current time zone setting</p>
                <select className="w-full border border-border bg-background text-foreground rounded px-3 py-2">
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC+1 (Central European Time)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="verdix-gradient text-white hover:opacity-90 px-8">
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
