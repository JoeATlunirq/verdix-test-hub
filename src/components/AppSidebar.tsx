
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
      { title: "Preferences", url: "/settings/preferences", icon: Sliders },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();

  const isParentActive = (item: any) => {
    if (item.children) {
      return item.children.some((child: any) => location.pathname === child.url);
    }
    return false;
  };

  const shouldShowChildren = (item: any) => {
    return location.pathname.startsWith(item.url) || isParentActive(item);
  };

  return (
    <Sidebar className="bg-white border-r border-gray-100">
      <SidebarHeader className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 verdix-gradient rounded-xl flex items-center justify-center shadow-lg p-1">
            <img 
              src="/lovable-uploads/adca2f61-27ff-4ff5-bfa9-934915da9ddc.png" 
              alt="Verdix Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold verdix-text-gradient font-orbitron tracking-wider">VERDIX</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium tracking-wide">PRO</span>
          </div>
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
                        "w-full justify-start text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium",
                        (location.pathname === item.url || isParentActive(item)) && "verdix-gradient text-white shadow-md"
                      )}
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {item.children && shouldShowChildren(item) && (
                    <div className="ml-6 mt-2 space-y-1 border-l-2 border-green-100 pl-4">
                      {item.children.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton 
                            asChild
                            size="sm"
                            className={cn(
                              "w-full justify-start text-gray-600 hover:bg-green-50 hover:text-green-600 font-medium",
                              location.pathname === child.url && "bg-green-100 text-green-700 font-semibold"
                            )}
                          >
                            <Link to={child.url} className="flex items-center gap-3">
                              <child.icon className="w-4 h-4" />
                              <span className="text-sm font-medium">{child.title}</span>
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
