import { MapPin, Bookmark } from 'lucide-react';
import { Candidate } from '@/types';
import { ScoreBadge } from './ScoreBadge';
import { VerificationBadge } from './VerificationBadge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

interface CandidateCardProps {
  candidate: Candidate;
  showActions?: boolean;
}

export const CandidateCard = ({ candidate, showActions = true }: CandidateCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(candidate.profile_url);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="p-6 card-hover cursor-pointer" onClick={handleCardClick}>
      <div className="flex gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={candidate.avatar} alt={candidate.name} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {getInitials(candidate.name)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground">{candidate.name}</h3>
              <p className="text-sm text-muted-foreground">{candidate.title}</p>
            </div>
            <ScoreBadge 
              score={candidate.score} 
              breakdown={candidate.score_breakdown}
            />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin size={14} />
            <span>{candidate.location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {candidate.top_skills.slice(0, 4).map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {candidate.top_skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{candidate.top_skills.length - 4} more
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {candidate.summary_snippet}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {candidate.badges.map((badge, idx) => (
                <VerificationBadge 
                  key={idx} 
                  type={badge as any}
                />
              ))}
            </div>
            
            {showActions && (
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Bookmark size={14} className="mr-1" />
                  Save
                </Button>
                <Button 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(candidate.profile_url);
                  }}
                >
                  View Profile
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
