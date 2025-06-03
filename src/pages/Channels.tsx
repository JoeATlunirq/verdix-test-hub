
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Channels = () => {
  const channels = [
    {
      id: 1,
      name: "Ali Abdaal",
      avatar: "/placeholder.svg",
      status: "connected",
      videos: 112,
      subscribers: "4.2M",
      lastSync: "2 hours ago",
      testsRunning: 3
    },
    {
      id: 2,
      name: "Main Shorts",
      avatar: "/placeholder.svg",
      status: "connected",
      videos: 89,
      subscribers: "890K",
      lastSync: "5 hours ago",
      testsRunning: 1
    },
    {
      id: 3,
      name: "Test VODs",
      avatar: "/placeholder.svg",
      status: "reauthorize",
      videos: 5,
      subscribers: "12K",
      lastSync: "2 days ago",
      testsRunning: 0
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Connected</Badge>;
      case 'reauthorize':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Reauthorize</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Channels</h1>
            <p className="text-muted-foreground mt-1">Manage your YouTube channels and OAuth connections</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90">
            + Connect Channel
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Total Channels</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">All authorized</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Total Videos</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">206</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Across all channels</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Active Tests</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">Currently running</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Total Subscribers</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">5.1M</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">Combined reach</p>
            </CardContent>
          </Card>
        </div>

        {/* Channels List */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Your Channels</CardTitle>
            <CardDescription>Manage connected YouTube channels and their test status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {channels.map((channel) => (
                <div key={channel.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={channel.avatar} alt={channel.name} />
                      <AvatarFallback>{channel.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-semibold text-foreground">{channel.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>📹 {channel.videos} videos</span>
                        <span>👥 {channel.subscribers} subscribers</span>
                        <span>🕒 Last sync: {channel.lastSync}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      {getStatusBadge(channel.status)}
                      <p className="text-sm text-muted-foreground mt-1">
                        {channel.testsRunning} active tests
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      {channel.status === 'reauthorize' ? (
                        <Button 
                          size="sm" 
                          className="bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
                        >
                          Reauthorize
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          Sync Now
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-destructive/20 text-destructive hover:bg-destructive/10"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Connection Instructions */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">How to Connect a Channel</CardTitle>
            <CardDescription>Steps to link your YouTube channel via OAuth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Click Connect Channel</h4>
                <p className="text-muted-foreground">Start the OAuth authorization process</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Authorize VERDIX</h4>
                <p className="text-muted-foreground">Grant permission to read your channel analytics</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Start Testing</h4>
                <p className="text-muted-foreground">Begin creating A/B tests for your content</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Channels;
