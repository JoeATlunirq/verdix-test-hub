
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
          <h1 className="text-3xl font-bold text-slate-900">Preferences</h1>
          <p className="text-slate-600 mt-1">Customize your VERDIX experience and default settings</p>
        </div>

        {/* Test Defaults */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Test Defaults</CardTitle>
            <CardDescription>Set default values for new A/B tests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-slate-900 font-medium">Default Test Duration</Label>
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
                <Label className="text-slate-900 font-medium">Confidence Level</Label>
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
                <Label className="text-slate-900 font-medium">Auto-stop on Winner</Label>
                <p className="text-sm text-slate-600">Automatically end tests when statistical significance is reached</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-slate-900 font-medium">Email Results Summary</Label>
                <p className="text-sm text-slate-600">Send detailed results when tests complete</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Display Settings */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Display Settings</CardTitle>
            <CardDescription>Customize how data is presented in your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-slate-900 font-medium">Date Format</Label>
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
                <Label className="text-slate-900 font-medium">Number Format</Label>
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
                <Label className="text-slate-900 font-medium">Compact Dashboard</Label>
                <p className="text-sm text-slate-600">Show more information in less space</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-slate-900 font-medium">Show Percentage Changes</Label>
                <p className="text-sm text-slate-600">Display percentage improvements alongside absolute values</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Analytics & Privacy */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Analytics & Privacy</CardTitle>
            <CardDescription>Control data collection and sharing preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-slate-900 font-medium">Usage Analytics</Label>
                <p className="text-sm text-slate-600">Help improve VERDIX by sharing anonymous usage data</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-slate-900 font-medium">Performance Benchmarks</Label>
                <p className="text-sm text-slate-600">Compare your results with anonymized industry averages</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-slate-900 font-medium">Feature Updates</Label>
                <p className="text-sm text-slate-600">Receive early access to new features and beta programs</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* API Access */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">API Access</CardTitle>
            <CardDescription>Manage API keys and webhook integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">API Key</h4>
                <p className="text-sm text-slate-600">sk-vx_*****************************abc123</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                  Copy
                </Button>
                <Button variant="outline" size="sm" className="border-red-200 text-red-700 hover:bg-red-50">
                  Regenerate
                </Button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Webhook URL</h4>
              <p className="text-sm text-blue-800 mb-3">Receive real-time test updates at your endpoint</p>
              <div className="flex gap-2">
                <input 
                  type="url" 
                  placeholder="https://your-app.com/webhooks/verdix"
                  className="flex-1 border border-blue-200 rounded px-3 py-2 text-sm"
                />
                <Button size="sm" className="verdix-gradient text-white hover:opacity-90">
                  Save
                </Button>
              </div>
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
