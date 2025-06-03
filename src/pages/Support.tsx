
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  Clock, 
  HelpCircle, 
  FileText, 
  Video,
  Users,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support form submitted');
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-space">Back to Home</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 verdix-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/adca2f61-27ff-4ff5-bfa9-934915da9ddc.png" 
                alt="Verdix Logo" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h1 className="text-4xl font-bold verdix-text-gradient font-space mb-2">VERDIX Support</h1>
            <p className="text-xl text-muted-foreground font-space">We're here to help you succeed</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20 text-center">
            <CardHeader>
              <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="font-space">Email Support</CardTitle>
              <CardDescription className="font-space">Get help via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-semibold font-space mb-2">support@verdix.com</p>
              <p className="text-sm text-muted-foreground font-space">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 text-center">
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="font-space">Live Chat</CardTitle>
              <CardDescription className="font-space">Real-time assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-2">Online</Badge>
              <p className="text-sm text-muted-foreground font-space">Available 9 AM - 6 PM PST</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 text-center">
            <CardHeader>
              <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="font-space">Phone Support</CardTitle>
              <CardDescription className="font-space">Speak with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-semibold font-space mb-2">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground font-space">Business hours only</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-space">Send us a message</CardTitle>
              <CardDescription className="font-space">
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-space">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-space">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-space">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-space">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-space">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your issue or question in detail..." 
                    rows={5}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full verdix-gradient text-white hover:opacity-90 font-space">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Help Resources */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Quick Help</CardTitle>
                <CardDescription className="font-space">
                  Find answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer border border-border">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold font-space">Getting Started Guide</p>
                    <p className="text-sm text-muted-foreground font-space">Learn the basics of VERDIX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer border border-border">
                  <Video className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold font-space">Video Tutorials</p>
                    <p className="text-sm text-muted-foreground font-space">Step-by-step video guides</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer border border-border">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold font-space">Documentation</p>
                    <p className="text-sm text-muted-foreground font-space">Comprehensive user manual</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer border border-border">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold font-space">Community Forum</p>
                    <p className="text-sm text-muted-foreground font-space">Connect with other users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-space">Support Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-space text-sm">Monday - Friday: 9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="font-space text-sm text-muted-foreground">Saturday - Sunday: Email support only</span>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-space text-primary">
                    Enterprise customers have access to 24/7 priority support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-primary/20 mt-8">
          <CardHeader>
            <CardTitle className="font-space">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-space mb-2">How do I create my first test?</h4>
                  <p className="text-sm text-muted-foreground font-space">
                    Navigate to Tests → New Test and follow our step-by-step wizard to set up your first A/B test.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold font-space mb-2">What video formats are supported?</h4>
                  <p className="text-sm text-muted-foreground font-space">
                    VERDIX supports MP4, MOV, and AVI formats with resolutions up to 4K.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold font-space mb-2">How long should I run a test?</h4>
                  <p className="text-sm text-muted-foreground font-space">
                    We recommend running tests for at least 7-14 days to gather statistically significant data.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-space mb-2">Can I test multiple thumbnails?</h4>
                  <p className="text-sm text-muted-foreground font-space">
                    Yes! You can test up to 5 different thumbnails in a single test to find the best performer.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold font-space mb-2">Is my data secure?</h4>
                  <p className="text-sm text-muted-foreground font-space">
                    Absolutely. We use enterprise-grade encryption and never share your data with third parties.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold font-space mb-2">Do you offer refunds?</h4>
                  <p className="text-sm text-muted-foreground font-space">
                    We offer a 30-day money-back guarantee for all paid plans. Contact support for assistance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
