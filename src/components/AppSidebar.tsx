
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

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "📊",
  },
  {
    title: "Tests",
    url: "/tests",
    icon: "🧪",
    children: [
      { title: "All Tests", url: "/tests/all", icon: "📂" },
      { title: "Results", url: "/tests/results", icon: "📈" },
      { title: "Schedule", url: "/tests/schedule", icon: "📅" },
      { title: "Insights", url: "/tests/insights", icon: "🧠" },
      { title: "New Test", url: "/tests/new", icon: "➕" },
    ],
  },
  {
    title: "Connected Channels",
    url: "/channels",
    icon: "🎥",
  },
  {
    title: "Team Access",
    url: "/teams",
    icon: "👥",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: "⚙️",
    children: [
      { title: "Notifications", url: "/settings/notifications", icon: "🔔" },
      { title: "Preferences", url: "/settings/preferences", icon: "🧩" },
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
                        <span className="text-base">{item.icon}</span>
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
                              <span className="text-sm">{child.icon}</span>
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
