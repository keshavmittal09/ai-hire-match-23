import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { RecruiterDashboard } from "./pages/RecruiterDashboard";
import { CandidateDashboard } from "./pages/CandidateDashboard";
import { CandidateProfile } from "./pages/CandidateProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, allowedType }: { children: React.ReactNode; allowedType?: 'candidate' | 'recruiter' }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  if (allowedType && user.type !== allowedType) {
    return <Navigate to={user.type === 'recruiter' ? '/recruiter' : '/candidate/dashboard'} replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to={user.type === 'recruiter' ? '/recruiter' : '/candidate/dashboard'} replace /> : <Home />} />
      <Route path="/auth/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
      <Route path="/auth/signup" element={!user ? <Signup /> : <Navigate to="/" replace />} />
      
      <Route 
        path="/recruiter" 
        element={
          <ProtectedRoute allowedType="recruiter">
            <RecruiterDashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/candidate/dashboard" 
        element={
          <ProtectedRoute allowedType="candidate">
            <CandidateDashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/candidate/:id" 
        element={
          <ProtectedRoute>
            <CandidateProfile />
          </ProtectedRoute>
        } 
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
