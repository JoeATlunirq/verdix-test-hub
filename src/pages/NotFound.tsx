
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/20">
        <CardContent className="p-8 text-center space-y-6">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <div className="w-16 h-16 mx-auto verdix-gradient rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white font-space">V</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground font-space">Verdix</h1>
          </div>

          {/* 404 Message */}
          <div className="space-y-3">
            <h2 className="text-6xl font-bold text-primary font-space">404</h2>
            <h3 className="text-xl font-semibold text-foreground font-space">Page Not Found</h3>
            <p className="text-muted-foreground font-space">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/dashboard')} 
              className="w-full verdix-gradient text-white hover:opacity-90 font-space"
            >
              <Home className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="flex-1 font-space"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate('/tests')}
                className="flex-1 font-space"
              >
                <Search className="w-4 h-4 mr-2" />
                View Tests
              </Button>
            </div>
          </div>

          {/* Additional Help */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground font-space mb-2">
              Need help? Try these popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => navigate('/tests/all')}
                className="text-primary hover:text-primary/80 font-space"
              >
                All Tests
              </Button>
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => navigate('/tests/results')}
                className="text-primary hover:text-primary/80 font-space"
              >
                Results
              </Button>
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => navigate('/settings')}
                className="text-primary hover:text-primary/80 font-space"
              >
                Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
