
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
  SidebarFooter,
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
  Sliders,
  User
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <Sidebar className="bg-white border-r border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <SidebarHeader className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 verdix-gradient rounded-xl flex items-center justify-center shadow-lg">
            <img 
              src="/lovable-uploads/adca2f61-27ff-4ff5-bfa9-934915da9ddc.png" 
              alt="Verdix Logo" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold verdix-text-gradient font-orbitron tracking-wider">VERDIX</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full font-medium tracking-wide">PRO</span>
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
                        "w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 font-medium",
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
                    <div className="ml-6 mt-2 space-y-1 border-l-2 border-green-100 dark:border-green-800 pl-4">
                      {item.children.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton 
                            asChild
                            size="sm"
                            className={cn(
                              "w-full justify-start text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 font-medium",
                              location.pathname === child.url && "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold"
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
      <SidebarFooter className="p-4 border-t border-gray-100 dark:border-gray-800">
        <Link to="/profile" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">john@verdix.com</span>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
