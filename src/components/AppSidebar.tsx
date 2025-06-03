
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  TestTube, 
  FolderOpen, 
  TrendingUp, 
  Calendar, 
  Brain, 
  Plus, 
  Monitor, 
  Users, 
  Settings,
  Bell,
  Sliders
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Tests",
    url: "/tests",
    icon: TestTube,
    children: [
      { title: "All Tests", url: "/tests/all", icon: FolderOpen },
      { title: "Results", url: "/tests/results", icon: TrendingUp },
      { title: "Schedule", url: "/tests/schedule", icon: Calendar },
      { title: "Insights", url: "/tests/insights", icon: Brain },
      { title: "New Test", url: "/tests/new", icon: Plus },
    ],
  },
  {
    title: "Connected Channels",
    url: "/channels",
    icon: Monitor,
  },
  {
    title: "Team Access",
    url: "/teams",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    children: [
      { title: "Notifications", url: "/settings/notifications", icon: Bell },
      { title: "Preferences", url: "/settings/preferences", icon: Sliders },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="bg-sidebar border-r border-sidebar-border">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 verdix-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">VERDIX</span>
          <span className="text-xs bg-sidebar-accent text-sidebar-accent-foreground px-2 py-1 rounded font-medium">PRO</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      asChild
                      className={cn(
                        "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-primary",
                        location.pathname === item.url && "bg-sidebar-accent text-sidebar-primary font-medium"
                      )}
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton 
                            asChild
                            size="sm"
                            className={cn(
                              "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-primary",
                              location.pathname === child.url && "bg-sidebar-accent text-sidebar-primary font-medium"
                            )}
                          >
                            <Link to={child.url} className="flex items-center gap-3">
                              <child.icon className="w-3 h-3" />
                              <span className="text-sm">{child.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
