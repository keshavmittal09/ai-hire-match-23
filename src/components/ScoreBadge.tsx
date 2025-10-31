import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ScoreBadgeProps {
  score: number;
  breakdown?: {
    skills: number;
    experience: number;
    credibility: number;
    freshness: number;
  };
  size?: 'sm' | 'md' | 'lg';
}

export const ScoreBadge = ({ score, breakdown, size = 'md' }: ScoreBadgeProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'score-high';
    if (score >= 60) return 'score-mid';
    return 'score-low';
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`inline-flex items-center gap-1 rounded-full border font-semibold ${getScoreColor(score)} ${sizeClasses[size]} cursor-help`}>
            <span>Match: {score}%</span>
          </div>
        </TooltipTrigger>
        {breakdown && (
          <TooltipContent className="w-64">
            <div className="space-y-2">
              <p className="font-semibold text-sm">Score Breakdown</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Skills Match:</span>
                  <span className="font-medium">{Math.round(breakdown.skills * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-medium">{Math.round(breakdown.experience * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Credibility:</span>
                  <span className="font-medium">{Math.round(breakdown.credibility * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Freshness:</span>
                  <span className="font-medium">{Math.round(breakdown.freshness * 100)}%</span>
                </div>
              </div>
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
