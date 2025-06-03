
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  FlaskConical,
  FolderOpen,
  TrendingUp,
  Calendar,
  Brain,
  Plus,
  Video,
  Users,
  Settings,
  Bell,
  Puzzle
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
    icon: FlaskConical,
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
    icon: Video,
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
      { title: "Preferences", url: "/settings/preferences", icon: Puzzle },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="bg-slate-100 border-r border-slate-200">
      <SidebarHeader className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 verdix-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-bold text-slate-800">VERDIX</span>
          <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded font-medium">PRO</span>
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
                        "w-full justify-start text-slate-700 hover:bg-green-50 hover:text-green-700",
                        location.pathname === item.url && "bg-green-100 text-green-800 font-medium"
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
                              "w-full justify-start text-slate-600 hover:bg-green-50 hover:text-green-600",
                              location.pathname === child.url && "bg-green-50 text-green-700 font-medium"
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
