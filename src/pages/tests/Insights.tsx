
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Insights = () => {
  const testTypeData = [
    { name: 'Thumbnails', value: 45, color: '#22c55e' },
    { name: 'Titles', value: 30, color: '#3b82f6' },
    { name: 'Upload Times', value: 15, color: '#f59e0b' },
    { name: 'Descriptions', value: 10, color: '#ef4444' },
  ];

  const performanceData = [
    { category: 'Thumbnails', avgImprovement: 28 },
    { category: 'Titles', avgImprovement: 22 },
    { category: 'Upload Times', avgImprovement: 18 },
    { category: 'Descriptions', avgImprovement: 12 },
  ];

  const insights = [
    {
      title: "Bright Thumbnails Perform Better",
      description: "Tests show 34% higher CTR with bright, high-contrast thumbnails",
      confidence: 95,
      impact: "High",
      category: "Thumbnails"
    },
    {
      title: "Question Titles Drive Engagement",
      description: "Titles starting with questions show 25% more clicks",
      confidence: 88,
      impact: "Medium",
      category: "Titles"
    },
    {
      title: "Weekend Uploads Underperform",
      description: "Tuesday-Thursday uploads get 40% more initial views",
      confidence: 92,
      impact: "High",
      category: "Schedule"
    },
    {
      title: "Shorter Titles Win Mobile",
      description: "Titles under 50 characters perform better on mobile devices",
      confidence: 78,
      impact: "Medium",
      category: "Titles"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Test Insights</h1>
          <p className="text-slate-600 mt-1">AI-powered insights from your A/B testing data</p>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Test Distribution */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-slate-900">Test Distribution</CardTitle>
              <CardDescription>Breakdown of test types conducted</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={testTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {testTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {testTypeData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-600">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance by Category */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-slate-900">Average Improvement by Category</CardTitle>
              <CardDescription>Performance gains across different test types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={performanceData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" />
                  <YAxis dataKey="category" type="category" stroke="#6b7280" width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1fae5',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="avgImprovement" fill="#22c55e" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">AI-Generated Insights</CardTitle>
            <CardDescription>Data-driven recommendations based on your testing history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">{insight.title}</h3>
                      <p className="text-slate-600 text-sm">{insight.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getImpactColor(insight.impact)}>
                        {insight.impact} Impact
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-600">Confidence:</span>
                    <Progress value={insight.confidence} className="flex-1 max-w-32" />
                    <span className="text-sm font-medium text-slate-900">{insight.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-slate-900">Recommended Actions</CardTitle>
            <CardDescription>Next steps to optimize your content performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  action: "Test thumbnail emotions",
                  reason: "Happy faces in thumbnails show 31% higher CTR",
                  priority: "High"
                },
                {
                  action: "Optimize upload timing",
                  reason: "Your audience is most active Tuesday 2-4 PM",
                  priority: "Medium"
                },
                {
                  action: "A/B test video hooks",
                  reason: "First 15 seconds crucial for retention",
                  priority: "High"
                },
                {
                  action: "Experiment with title formats",
                  reason: "Number-based titles performing well in your niche",
                  priority: "Medium"
                }
              ].map((rec, index) => (
                <div key={index} className="p-3 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">{rec.action}</h4>
                    <Badge 
                      className={rec.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">{rec.reason}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
