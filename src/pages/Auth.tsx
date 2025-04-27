
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { TreeDeciduous } from "lucide-react";

type UserRole = "business" | "farmer" | "verifier" | "supporter";

const Auth = () => {
  const [authMethod, setAuthMethod] = useState<"mobile" | "email">("mobile");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("business");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (authMethod === "mobile" && mobileNumber.length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }
    if (authMethod === "email" && !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    // In a real application, this would call an API to send an OTP
    toast.success(`OTP sent to your ${authMethod === "mobile" ? "mobile" : "email"}`);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    // In a real application, this would verify the OTP with the backend
    toast.success("Authentication successful!");
    
    // Mock user account creation
    setTimeout(() => {
      toast.success(`Your GreenBlock Digital Identity has been created!`);
      navigate("/dashboard");
    }, 1500);
  };

  const roleDescriptions = {
    business: "For SMEs, corporations, and distributors seeking to improve their sustainability impact.",
    farmer: "For individual farmers, cooperatives, and conservation projects generating carbon credits.",
    verifier: "For licensed validators who certify regenerative activities and carbon credits.",
    supporter: "For customers, donors, and volunteers interested in supporting regenerative projects."
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/90 via-purple-900/80 to-blue-900/90 p-4">
      <div className="flex items-center gap-2 font-semibold text-white mb-8">
        <TreeDeciduous className="h-8 w-8 text-green-400" />
        <span className="text-2xl">GreenBlock</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to GreenBlock</CardTitle>
          <CardDescription>
            Join the regenerative economy platform. Sign up to start your journey.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {!isOtpSent ? (
            <>
              <Tabs defaultValue="mobile" onValueChange={(v) => setAuthMethod(v as "mobile" | "email")}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                
                <TabsContent value="mobile" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Phone Number (with country code)</Label>
                    <Input 
                      id="mobile" 
                      placeholder="+254 7XX XXX XXX" 
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2 mt-6">
                <Label htmlFor="role">Select Your Role</Label>
                <Select value={selectedRole} onValueChange={(value) => setSelectedRole(value as UserRole)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business User</SelectItem>
                    <SelectItem value="farmer">Farmer/Conservation Project</SelectItem>
                    <SelectItem value="verifier">Verifier/Inspector</SelectItem>
                    <SelectItem value="supporter">General Supporter</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-2">
                  {roleDescriptions[selectedRole]}
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium">Verify your {authMethod}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter the 6-digit code sent to your {authMethod === "mobile" ? mobileNumber : email}
                </p>
              </div>
              
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <div className="text-center">
                <Button variant="link" onClick={handleSendOtp} className="text-sm">
                  Didn't receive a code? Resend
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}
          >
            {isOtpSent ? "Verify & Continue" : "Continue"}
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-4 text-white/70 text-center text-sm">
        <p>
          By signing up, you agree to GreenBlock's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Auth;
