import { CheckCircle, Github, Linkedin, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface VerificationBadgeProps {
  type: 'linkedin_verified' | 'github_active' | 'email_verified';
  size?: number;
}

export const VerificationBadge = ({ type, size = 16 }: VerificationBadgeProps) => {
  const badges = {
    linkedin_verified: {
      icon: Linkedin,
      label: 'LinkedIn Verified',
      color: 'text-blue-600'
    },
    github_active: {
      icon: Github,
      label: 'GitHub Active',
      color: 'text-gray-800'
    },
    email_verified: {
      icon: Mail,
      label: 'Email Verified',
      color: 'text-green-600'
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex">
            <Icon size={size} className={badge.color} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{badge.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
