
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ImpactMetricsProps {
  className?: string;
}

const ImpactMetrics = ({ className }: ImpactMetricsProps) => {
  const data = [
    { name: 'Jan', carbon: 40, trees: 24 },
    { name: 'Feb', carbon: 30, trees: 13 },
    { name: 'Mar', carbon: 20, trees: 8 },
    { name: 'Apr', carbon: 27, trees: 18 },
    { name: 'May', carbon: 18, trees: 12 },
    { name: 'Jun', carbon: 23, trees: 11 },
    { name: 'Jul', carbon: 34, trees: 19 },
    { name: 'Aug', carbon: 45, trees: 28 },
  ];

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>Environmental Impact</CardTitle>
        <CardDescription>Your regenerative impact over time</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(23, 23, 23, 0.8)', borderRadius: '8px', border: 'none' }}
                labelStyle={{ color: 'white' }}
                itemStyle={{ color: 'white' }}
              />
              <Bar dataKey="carbon" fill="#4CAF50" name="Carbon Offset (kg)" />
              <Bar dataKey="trees" fill="#1EAEDB" name="Trees Planted" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-md bg-green-500/10 p-3">
            <p className="text-sm font-medium text-muted-foreground">Total Carbon Offset</p>
            <p className="text-2xl font-bold text-green-600">237 kg</p>
          </div>
          <div className="rounded-md bg-blue-500/10 p-3">
            <p className="text-sm font-medium text-muted-foreground">Trees Planted</p>
            <p className="text-2xl font-bold text-blue-600">133</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactMetrics;
