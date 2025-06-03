
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, ArrowLeft, Shield, Mail, Lock, User, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authStep, setAuthStep] = useState<'login' | 'signup' | 'forgot' | '2fa'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Simulate 2FA requirement
    setAuthStep('2fa');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', { firstName, lastName, email, company, accessCode });
    // Handle signup logic
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot password for:', email);
    // Handle forgot password logic
  };

  const handle2FA = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('2FA code:', twoFactorCode);
    // Handle 2FA verification
  };

  if (authStep === '2fa') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-primary/20">
          <CardHeader className="text-center">
            <div className="w-12 h-12 verdix-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold font-space">Two-Factor Authentication</CardTitle>
            <CardDescription className="font-space">Enter the 6-digit code from your authenticator app</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handle2FA} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="2fa-code" className="font-space">Verification Code</Label>
                <Input
                  id="2fa-code"
                  type="text"
                  placeholder="000000"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  className="text-center text-2xl tracking-widest font-mono"
                  maxLength={6}
                />
              </div>
              <Button type="submit" className="w-full verdix-gradient text-white hover:opacity-90 font-space">
                Verify & Continue
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-primary/20 text-primary hover:bg-primary/10 font-space"
                onClick={() => setAuthStep('login')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (authStep === 'forgot') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-primary/20">
          <CardHeader className="text-center">
            <div className="w-12 h-12 verdix-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold font-space">Reset Password</CardTitle>
            <CardDescription className="font-space">Enter your email to receive a password reset link</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email" className="font-space">Email Address</Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full verdix-gradient text-white hover:opacity-90 font-space">
                Send Reset Link
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-primary/20 text-primary hover:bg-primary/10 font-space"
                onClick={() => setAuthStep('login')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 verdix-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
            <img 
              src="/lovable-uploads/adca2f61-27ff-4ff5-bfa9-934915da9ddc.png" 
              alt="Verdix Logo" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <h1 className="text-3xl font-bold verdix-text-gradient font-space mb-2">VERDIX</h1>
          <p className="text-muted-foreground font-space">YouTube Content Testing Platform</p>
        </div>

        <Tabs value={authStep} onValueChange={(value) => setAuthStep(value as 'login' | 'signup')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="font-space">Login</TabsTrigger>
            <TabsTrigger value="signup" className="font-space">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-space">Welcome Back</CardTitle>
                <CardDescription className="font-space">Sign in to your VERDIX account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-space">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-space">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-0 h-full px-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="link"
                      className="px-0 font-space text-primary"
                      onClick={() => setAuthStep('forgot')}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <Button type="submit" className="w-full verdix-gradient text-white hover:opacity-90 font-space">
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-space">Create Account</CardTitle>
                <CardDescription className="font-space">Join VERDIX to start testing your content</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-space">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-space">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="font-space">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-space">Company/Channel Name</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your YouTube Channel"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="access-code" className="font-space">Access Code</Label>
                    <Input
                      id="access-code"
                      type="text"
                      placeholder="Enter your access code"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground font-space">
                      Contact your team admin for an access code
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="font-space">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-0 h-full px-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="font-space">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full verdix-gradient text-white hover:opacity-90 font-space">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground font-space">
            Need help? <Link to="/support" className="text-primary hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
