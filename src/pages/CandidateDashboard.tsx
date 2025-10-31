import { useState } from 'react';
import { TopNav } from '@/components/TopNav';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Upload, X, Plus, TrendingUp } from 'lucide-react';
import { ScoreBadge } from '@/components/ScoreBadge';

export const CandidateDashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    title: 'Senior Backend Engineer',
    location: 'Bengaluru, India',
    summary: 'Passionate about building scalable systems',
    skills: ['Python', 'PostgreSQL', 'Docker'],
    availability: 'immediate',
    desiredSalary: '80000-120000'
  });
  
  const [newSkill, setNewSkill] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleAddSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      if (!file.type.includes('pdf')) {
        toast.error('Please upload a PDF file');
        return;
      }
      setResumeFile(file);
      toast.success('Resume selected');
    }
  };

  const handleSaveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      toast.success('Profile updated successfully!');
      setIsSaving(false);
    }, 1000);
  };

  const handleUploadResume = () => {
    if (!resumeFile) {
      toast.error('Please select a resume file');
      return;
    }
    // Simulate upload
    toast.success('Resume uploaded successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <TopNav />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {user?.full_name}!</h1>
            <p className="text-muted-foreground">
              Manage your profile to get discovered by top recruiters
            </p>
          </div>

          {/* Score Card */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Your Profile Score</p>
                  <ScoreBadge 
                    score={87} 
                    size="lg"
                    breakdown={{
                      skills: 0.60,
                      experience: 0.20,
                      credibility: 0.05,
                      freshness: 0.02
                    }}
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    <TrendingUp size={12} className="inline mr-1" />
                    +5 points this week
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium mb-1">Complete your profile to increase score</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✓ Basic info completed</li>
                    <li>✓ Skills added</li>
                    <li className="text-warning">○ Add certifications (+3)</li>
                    <li className="text-warning">○ Verify LinkedIn (+5)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Upload your latest resume (PDF, max 10MB)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />
                <Label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm font-medium mb-1">
                    {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF up to 10MB
                  </p>
                </Label>
              </div>
              {resumeFile && (
                <Button onClick={handleUploadResume} className="w-full">
                  <Upload size={16} className="mr-2" />
                  Upload Resume
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Profile Details */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>This information will be visible to recruiters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  value={profile.title}
                  onChange={(e) => setProfile(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Senior Backend Engineer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Bengaluru, India"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  value={profile.summary}
                  onChange={(e) => setProfile(prev => ({ ...prev, summary: e.target.value }))}
                  placeholder="Brief summary of your experience and expertise..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  />
                  <Button type="button" onClick={handleAddSkill} size="icon">
                    <Plus size={18} />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="pl-3 pr-1">
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-2 hover:text-destructive"
                      >
                        <X size={14} />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <select
                    id="availability"
                    value={profile.availability}
                    onChange={(e) => setProfile(prev => ({ ...prev, availability: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="immediate">Immediate</option>
                    <option value="2_weeks">2 Weeks</option>
                    <option value="1_month">1 Month</option>
                    <option value="2_months">2 Months</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary">Desired Salary Range (USD)</Label>
                  <Input
                    id="salary"
                    value={profile.desiredSalary}
                    onChange={(e) => setProfile(prev => ({ ...prev, desiredSalary: e.target.value }))}
                    placeholder="e.g., 80000-120000"
                  />
                </div>
              </div>

              <Button 
                onClick={handleSaveProfile} 
                className="w-full"
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Profile'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
