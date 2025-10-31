import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TopNav } from '@/components/TopNav';
import { Sparkles, Search, Users, Award, TrendingUp } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <TopNav />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center py-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm font-medium text-primary">AI-Powered Recruiting</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Perfect Candidates with
            <span className="gradient-text block mt-2">Natural Language Search</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Skip the endless scrolling. Describe who you're looking for, and our AI instantly surfaces verified, high-fit candidates with transparent scoring.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/auth/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto py-20">
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
              <Search className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Natural Language Search</h3>
            <p className="text-muted-foreground">
              Search like you talk. Our AI understands what you need and finds the perfect match.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Scoring</h3>
            <p className="text-muted-foreground">
              See exactly why a candidate matches your requirements with detailed score breakdowns.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
            <p className="text-muted-foreground">
              All candidates are verified through LinkedIn, GitHub, and email for authenticity.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center py-20">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your hiring?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join recruiters who are finding better candidates faster with AI-powered search.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <Link to="/auth/signup">Start Finding Talent</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
