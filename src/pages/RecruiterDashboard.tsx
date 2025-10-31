import { useState, useEffect } from 'react';
import { TopNav } from '@/components/TopNav';
import { SearchBar } from '@/components/SearchBar';
import { CandidateCard } from '@/components/CandidateCard';
import { mockCandidates } from '@/data/mockData';
import { Candidate } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Star, Clock } from 'lucide-react';

export const RecruiterDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(mockCandidates);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);

    // Simulate AI search processing
    setTimeout(() => {
      const filtered = mockCandidates.filter(candidate => {
        const searchLower = query.toLowerCase();
        return (
          candidate.name.toLowerCase().includes(searchLower) ||
          candidate.title.toLowerCase().includes(searchLower) ||
          candidate.summary_snippet.toLowerCase().includes(searchLower) ||
          candidate.top_skills.some(skill => skill.toLowerCase().includes(searchLower))
        );
      });
      
      // Sort by score
      filtered.sort((a, b) => b.score - a.score);
      
      setFilteredCandidates(filtered);
      setIsSearching(false);
    }, 800);
  };

  const highScoringCandidates = mockCandidates.filter(c => c.score >= 85).slice(0, 3);
  const recentCandidates = mockCandidates.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <TopNav />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Your Next Hire</h1>
            <p className="text-muted-foreground">
              AI-powered candidate search with transparent scoring
            </p>
          </div>

          <div className="mb-8">
            <SearchBar onSearch={handleSearch} autoFocus />
          </div>

          {searchQuery ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">
                  {isSearching ? 'Searching...' : `${filteredCandidates.length} candidates found`}
                </h2>
              </div>
              
              <div className="space-y-4">
                {filteredCandidates.map(candidate => (
                  <CandidateCard key={candidate.candidate_id} candidate={candidate} />
                ))}
                {filteredCandidates.length === 0 && !isSearching && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No candidates found for your search.</p>
                    <p className="text-sm text-muted-foreground mt-2">Try different keywords or broader terms.</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Tabs defaultValue="high-scoring" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="high-scoring" className="flex items-center gap-2">
                  <Star size={16} />
                  <span className="hidden sm:inline">High Scoring</span>
                </TabsTrigger>
                <TabsTrigger value="recent" className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="hidden sm:inline">Recent</span>
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex items-center gap-2">
                  <TrendingUp size={16} />
                  <span className="hidden sm:inline">Trending</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="high-scoring" className="space-y-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">Top Matches</h2>
                  <p className="text-sm text-muted-foreground">
                    Candidates with the highest overall scores
                  </p>
                </div>
                {highScoringCandidates.map(candidate => (
                  <CandidateCard key={candidate.candidate_id} candidate={candidate} />
                ))}
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">Recently Joined</h2>
                  <p className="text-sm text-muted-foreground">
                    New candidates on the platform
                  </p>
                </div>
                {recentCandidates.map(candidate => (
                  <CandidateCard key={candidate.candidate_id} candidate={candidate} />
                ))}
              </TabsContent>

              <TabsContent value="trending" className="space-y-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">Trending Profiles</h2>
                  <p className="text-sm text-muted-foreground">
                    Most viewed candidates this week
                  </p>
                </div>
                {mockCandidates.slice(0, 3).map(candidate => (
                  <CandidateCard key={candidate.candidate_id} candidate={candidate} />
                ))}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};
