
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
          <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
          <p className="text-slate-600 mt-1">Manage how and when you receive alerts from VERDIX</p>
        </div>

        {/* Email Notifications */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Email Notifications</CardTitle>
            <CardDescription>Control email alerts for test updates and results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="test-complete" className="text-slate-900 font-medium">Test Completion</Label>
                <p className="text-sm text-slate-600">Get notified when your A/B tests finish running</p>
              </div>
              <Switch id="test-complete" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="significant-results" className="text-slate-900 font-medium">Significant Results</Label>
                <p className="text-sm text-slate-600">Alert when test results reach statistical significance</p>
              </div>
              <Switch id="significant-results" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="weekly-summary" className="text-slate-900 font-medium">Weekly Summary</Label>
                <p className="text-sm text-slate-600">Receive a weekly digest of your testing performance</p>
              </div>
              <Switch id="weekly-summary" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="channel-issues" className="text-slate-900 font-medium">Channel Issues</Label>
                <p className="text-sm text-slate-600">Get alerts for OAuth or sync problems</p>
              </div>
              <Switch id="channel-issues" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Slack Integration */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Slack Integration</CardTitle>
            <CardDescription>Connect your Slack workspace for team notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">Slack Workspace</h4>
                <p className="text-sm text-slate-600">Not connected</p>
              </div>
              <Button className="verdix-gradient text-white hover:opacity-90">
                Connect Slack
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-slate-900 font-medium">Test Alerts</Label>
                  <p className="text-sm text-slate-600">Post to #tests channel</p>
                </div>
                <Switch disabled />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-slate-900 font-medium">Winner Announcements</Label>
                  <p className="text-sm text-slate-600">Celebrate successful tests</p>
                </div>
                <Switch disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Push Notifications */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Browser Notifications</CardTitle>
            <CardDescription>Receive real-time alerts in your browser</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="browser-notifications" className="text-slate-900 font-medium">Enable Browser Notifications</Label>
                <p className="text-sm text-slate-600">Allow VERDIX to send browser notifications</p>
              </div>
              <Switch id="browser-notifications" />
            </div>

            <div className="flex items-center justify-between opacity-50">
              <div className="space-y-1">
                <Label className="text-slate-900 font-medium">Urgent Alerts Only</Label>
                <p className="text-sm text-slate-600">Only for critical issues and winners</p>
              </div>
              <Switch disabled />
            </div>
          </CardContent>
        </Card>

        {/* Notification Schedule */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Notification Schedule</CardTitle>
            <CardDescription>Set quiet hours and frequency preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-slate-900 font-medium">Quiet Hours</Label>
                <p className="text-sm text-slate-600 mb-3">Pause notifications during these hours</p>
                <div className="flex items-center gap-2">
                  <input type="time" className="border border-gray-300 rounded px-3 py-2" defaultValue="22:00" />
                  <span className="text-slate-600">to</span>
                  <input type="time" className="border border-gray-300 rounded px-3 py-2" defaultValue="08:00" />
                </div>
              </div>

              <div>
                <Label className="text-slate-900 font-medium">Time Zone</Label>
                <p className="text-sm text-slate-600 mb-3">Your current time zone setting</p>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
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
