
import { TreeDeciduous, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ImpactVerificationProps {
  className?: string;
}

const ImpactVerification = ({ className }: ImpactVerificationProps) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TreeDeciduous className="h-5 w-5" />
          <span>Impact Verification</span>
        </CardTitle>
        <CardDescription>Verify and track your regenerative activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <Button variant="outline" className="mb-4 h-auto py-6 flex flex-col items-center gap-2">
              <Camera className="h-5 w-5" />
              <span>Capture New Activity</span>
            </Button>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Supported activities:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tree planting</li>
                <li>Soil restoration</li>
                <li>Ethical sourcing</li>
                <li>Waste reduction</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-medium mb-1">Verification Process</h4>
              <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                <li>Capture photo evidence</li>
                <li>AI analyzes and verifies impact</li>
                <li>Blockchain records the activity</li>
                <li>Tokens awarded to your wallet</li>
              </ol>
            </div>
            <div className="mt-4 text-xs bg-purple-500/10 rounded-md p-2">
              <p className="font-medium text-purple-700">AI-powered verification</p>
              <p className="text-muted-foreground mt-1">Our AI ensures all claimed activities are genuine and accurately measured for proper token rewards</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Recent Verifications</h4>
          <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
            {[
              { activity: "Tree planting", location: "Karura Forest", date: "Today, 2:30 PM", status: "Verified", tokens: 12 },
              { activity: "Soil restoration", location: "Athi River Farm", date: "Yesterday", status: "Processing", tokens: 0 },
              { activity: "Ethical sourcing", location: "Local Community Market", date: "Aug 15, 2025", status: "Verified", tokens: 8 },
            ].map((verification, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm">{verification.activity}</p>
                  <p className="text-xs text-muted-foreground">{verification.location} • {verification.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      verification.status === 'Verified' ? 'bg-green-500/10 text-green-600' : 
                      'bg-yellow-500/10 text-yellow-600'
                    }`}
                  >
                    {verification.status}
                  </div>
                  {verification.tokens > 0 && (
                    <div className="text-xs font-medium">+{verification.tokens} GBT</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactVerification;
