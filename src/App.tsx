
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Tests from "./pages/Tests";
import AllTests from "./pages/tests/AllTests";
import Results from "./pages/tests/Results";
import Schedule from "./pages/tests/Schedule";
import Insights from "./pages/tests/Insights";
import NewTest from "./pages/tests/NewTest";
import TestDetails from "./pages/tests/TestDetails";
import Channels from "./pages/Channels";
import Teams from "./pages/Teams";
import Settings from "./pages/Settings";
import Notifications from "./pages/settings/Notifications";
import Preferences from "./pages/settings/Preferences";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ActiveTests from "./pages/tests/ActiveTests";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="verdix-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/tests/active" element={<ActiveTests />} />
            <Route path="/tests/all" element={<AllTests />} />
            <Route path="/tests/results" element={<Results />} />
            <Route path="/tests/schedule" element={<Schedule />} />
            <Route path="/tests/insights" element={<Insights />} />
            <Route path="/tests/new" element={<NewTest />} />
            <Route path="/tests/:testId" element={<TestDetails />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/notifications" element={<Notifications />} />
            <Route path="/settings/preferences" element={<Preferences />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
