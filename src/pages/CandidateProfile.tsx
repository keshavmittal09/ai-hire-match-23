import { useParams, useNavigate } from 'react-router-dom';
import { TopNav } from '@/components/TopNav';
import { mockCandidates } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScoreBadge } from '@/components/ScoreBadge';
import { VerificationBadge } from '@/components/VerificationBadge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Briefcase, GraduationCap, Award, Download, Mail, Linkedin, Github, ArrowLeft } from 'lucide-react';

export const CandidateProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = mockCandidates.find(c => c.candidate_id === Number(id));

  if (!candidate) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <div className="container mx-auto px-4 py-8">
          <p>Candidate not found</p>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <TopNav />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Button>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={candidate.avatar} alt={candidate.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {getInitials(candidate.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-1">{candidate.name}</h1>
                      <p className="text-xl text-muted-foreground mb-3">{candidate.title}</p>
                      {candidate.headline && (
                        <p className="text-sm text-muted-foreground italic">{candidate.headline}</p>
                      )}
                    </div>
                    <ScoreBadge 
                      score={candidate.score}
                      breakdown={candidate.score_breakdown}
                      size="lg"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {candidate.location}
                    </div>
                    {candidate.availability && (
                      <div>
                        Available: <span className="text-foreground font-medium capitalize">{candidate.availability.replace('_', ' ')}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {candidate.badges.map((badge, idx) => (
                      <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
                        <VerificationBadge type={badge as any} size={14} />
                        <span className="text-xs capitalize">{badge.replace('_', ' ')}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button>
                      <Mail size={16} className="mr-2" />
                      Contact
                    </Button>
                    {candidate.resume_url && (
                      <Button variant="outline">
                        <Download size={16} className="mr-2" />
                        Download Resume
                      </Button>
                    )}
                    {candidate.linkedin_url && (
                      <Button variant="outline" size="icon">
                        <Linkedin size={16} />
                      </Button>
                    )}
                    {candidate.github_url && (
                      <Button variant="outline" size="icon">
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          {candidate.summary && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-muted-foreground">{candidate.summary}</p>
              </CardContent>
            </Card>
          )}

          {/* Skills */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {candidate.top_skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          {candidate.experience && candidate.experience.length > 0 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase size={20} />
                  Experience
                </h2>
                <div className="space-y-6">
                  {candidate.experience.map((exp, idx) => (
                    <div key={idx}>
                      {idx > 0 && <Separator className="mb-6" />}
                      <div>
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <p className="text-muted-foreground mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.start} - {exp.end}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {exp.bullets.map((bullet, bidx) => (
                            <li key={bidx} className="text-muted-foreground">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Education */}
          {candidate.education && candidate.education.length > 0 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap size={20} />
                  Education
                </h2>
                <div className="space-y-4">
                  {candidate.education.map((edu, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Certifications */}
          {candidate.certifications && candidate.certifications.length > 0 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award size={20} />
                  Certifications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {candidate.certifications.map((cert, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
