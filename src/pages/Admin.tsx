import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdminPanel from "@/components/AdminPanel";
import { Lock } from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password authentication (in production, use proper auth)
  const ADMIN_PASSWORD = "realestate2024";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-card border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <p className="text-muted-foreground">Enter password to access the admin panel</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-border focus:ring-primary"
                  required
                />
                {error && (
                  <p className="text-destructive text-sm mt-2">{error}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-elegant transition-all"
              >
                Login
              </Button>
            </form>
            <div className="mt-6 text-center">
              <a 
                href="/" 
                className="text-primary hover:underline"
              >
                ← Back to Website
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <AdminPanel />;
};

export default Admin;