
import { FileSearch } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SupplyChainScannerProps {
  className?: string;
}

const SupplyChainScanner = ({ className }: SupplyChainScannerProps) => {
  return (
    <Card className={`${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <FileSearch className="h-5 w-5" />
          <span>Supply Chain Scanner</span>
        </CardTitle>
        <CardDescription>Analyze and optimize your product chains</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 p-6 border border-dashed rounded-lg flex flex-col items-center justify-center text-center">
          <div className="mb-3 p-3 rounded-full bg-blue-500/10">
            <FileSearch className="h-6 w-6 text-blue-500" />
          </div>
          <h4 className="text-lg font-medium mb-1">Scan Your Supply Chain</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Upload your supply chain data for AI analysis and optimization recommendations
          </p>
          <Button>Upload Data</Button>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Recent Scans</h4>
          <div className="space-y-2">
            {[
              { name: "Coffee Supply Chain", date: "12 Aug 2025", score: 87 },
              { name: "Textile Production", date: "28 Jul 2025", score: 64 },
            ].map((scan) => (
              <div 
                key={scan.name}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm">{scan.name}</p>
                  <p className="text-xs text-muted-foreground">{scan.date}</p>
                </div>
                <div className="flex items-center">
                  <div 
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      scan.score >= 80 ? 'bg-green-500/10 text-green-600' : 
                      scan.score >= 60 ? 'bg-yellow-500/10 text-yellow-600' : 
                      'bg-red-500/10 text-red-600'
                    }`}
                  >
                    {scan.score}% Sustainable
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplyChainScanner;
