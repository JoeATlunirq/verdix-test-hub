
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Amanda",
      email: "amanda@example.com",
      role: "Admin",
      avatar: "/placeholder.svg",
      lastActive: "2 hours ago",
      joinedDate: "Jan 2024"
    },
    {
      id: 2,
      name: "Brian",
      email: "brian@example.com",
      role: "Editor",
      avatar: "/placeholder.svg",
      lastActive: "1 day ago",
      joinedDate: "Jan 2024"
    },
    {
      id: 3,
      name: "Claire",
      email: "claire@example.com",
      role: "Viewer",
      avatar: "/placeholder.svg",
      lastActive: "3 days ago",
      joinedDate: "Dec 2023"
    }
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Admin':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Admin</Badge>;
      case 'Editor':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Editor</Badge>;
      case 'Viewer':
        return <Badge className="bg-muted text-muted-foreground">Viewer</Badge>;
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
            <h1 className="text-3xl font-bold text-foreground">Team Access</h1>
            <p className="text-muted-foreground mt-1">Manage team members and their permissions</p>
          </div>
          <Button className="verdix-gradient text-white hover:opacity-90">
            + Invite Member
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Total Members</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary">1 Admin, 1 Editor, 1 Viewer</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Active This Week</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">67% activity rate</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-muted-foreground">Pending Invites</CardDescription>
              <CardTitle className="text-3xl font-bold text-foreground">0</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All invites accepted</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Team Members</CardTitle>
            <CardDescription>Manage access levels and permissions for your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span>Joined {member.joinedDate}</span>
                        <span>•</span>
                        <span>Last active {member.lastActive}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {getRoleBadge(member.role)}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-destructive/20 text-destructive hover:bg-destructive/10"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Invite New Member */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Invite Team Member</CardTitle>
            <CardDescription>Add new members to your VERDIX team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Input placeholder="Enter email address..." className="border-primary/20" />
              </div>
              <Button className="verdix-gradient text-white hover:opacity-90">
                Send Invite
              </Button>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg text-sm text-foreground border border-primary/20">
              💡 <strong>Tip:</strong> Invited members will receive an email with instructions to join your team.
            </div>
          </CardContent>
        </Card>

        {/* Role Permissions */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Role Permissions</CardTitle>
            <CardDescription>Understanding access levels in VERDIX</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-red-200 dark:border-red-800 rounded-lg">
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 mb-3">Admin</Badge>
                <h4 className="font-semibold text-foreground mb-2">Full Access</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Create and manage tests</li>
                  <li>• View all results</li>
                  <li>• Manage team members</li>
                  <li>• Connect channels</li>
                  <li>• Billing access</li>
                </ul>
              </div>

              <div className="text-center p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-3">Editor</Badge>
                <h4 className="font-semibold text-foreground mb-2">Create & Edit</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Create and manage tests</li>
                  <li>• View all results</li>
                  <li>• Access insights</li>
                  <li>• Connect own channels</li>
                  <li>• No billing access</li>
                </ul>
              </div>

              <div className="text-center p-4 border border-border rounded-lg">
                <Badge className="bg-muted text-muted-foreground mb-3">Viewer</Badge>
                <h4 className="font-semibold text-foreground mb-2">Read Only</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• View test results</li>
                  <li>• Access basic insights</li>
                  <li>• Export reports</li>
                  <li>• No test creation</li>
                  <li>• No admin access</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Teams;
