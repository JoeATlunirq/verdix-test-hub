
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center border-primary/20">
        <CardHeader className="pb-4">
          <div className="w-16 h-16 verdix-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
            <img 
              src="/lovable-uploads/adca2f61-27ff-4ff5-bfa9-934915da9ddc.png" 
              alt="Verdix Logo" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <CardTitle className="text-6xl font-bold verdix-text-gradient font-space mb-2">404</CardTitle>
          <h2 className="text-2xl font-bold text-foreground font-space mb-2">Page Not Found</h2>
          <p className="text-muted-foreground font-space">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="verdix-gradient text-white hover:opacity-90 font-space">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-space">
              <Link to="/support" className="flex items-center gap-2">
                Get Help
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground font-space">
            If you believe this is an error, please contact our support team.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
