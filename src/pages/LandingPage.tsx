
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-background dark:to-green-950/20">
      {/* Header */}
      <header className="bg-white/80 dark:bg-background/80 backdrop-blur-sm border-b border-green-100 dark:border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 verdix-gradient rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg font-orbitron">V</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-foreground font-orbitron tracking-wider">VERDIX</span>
              <span className="text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-2 py-1 rounded ml-2 font-semibold font-space">PRO</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline" className="border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950 font-space">
                Sign In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="verdix-gradient text-white hover:opacity-90 font-space font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight font-space">
            YouTube A/B Testing
            <span className="block verdix-gradient bg-clip-text text-transparent font-orbitron tracking-wide">
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-space">
            Centralized, creator-first platform to simplify, automate, and elevate A/B testing for YouTube channels. 
            Connect via OAuth and get real performance metrics in one clean dashboard.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="verdix-gradient text-white hover:opacity-90 px-8 py-3 font-space font-semibold">
                Start Testing Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950 px-8 py-3 font-space">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-space">Core Features</h2>
          <p className="text-xl text-muted-foreground font-space">Everything you need to run successful YouTube A/B tests</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🧪",
              title: "Create Tests in Seconds",
              description: "Define control and variant groups, assign video links, set timeframes — without spreadsheets."
            },
            {
              icon: "📊",
              title: "Track Real Performance",
              description: "Fetch and compare CTR, views, average view duration using direct YouTube API stats."
            },
            {
              icon: "📈",
              title: "One Dashboard, All Tests",
              description: "View every test — past, active, or upcoming — in one streamlined workspace."
            },
            {
              icon: "🧠",
              title: "Insights That Matter",
              description: "Learn what title formats, thumbnails consistently win. Get AI-powered suggestions."
            },
            {
              icon: "🎥",
              title: "Multi-Channel Support",
              description: "Manage and test across multiple YouTube channels in a single account."
            },
            {
              icon: "🔔",
              title: "Smart Alerts",
              description: "Get notified when a test ends or a variant wins via Slack & email."
            }
          ].map((feature, index) => (
            <Card key={index} className="border-green-100 dark:border-border hover:shadow-lg transition-all duration-300 hover:border-green-200 dark:hover:border-primary/50">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-foreground font-space">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base font-space">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="verdix-gradient-subtle dark:bg-gradient-to-r dark:from-green-950/20 dark:to-green-900/20 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-space">Ready to optimize your YouTube performance?</h2>
          <p className="text-xl text-muted-foreground mb-8 font-space">Join thousands of creators who trust VERDIX for their A/B testing needs.</p>
          <Link to="/dashboard">
            <Button size="lg" className="verdix-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-space font-semibold">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card dark:bg-background border-t dark:border-border text-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 verdix-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-orbitron">V</span>
              </div>
              <span className="text-xl font-bold font-orbitron tracking-wider">VERDIX PRO</span>
            </div>
            <p className="text-muted-foreground font-space">© 2024 VERDIX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
