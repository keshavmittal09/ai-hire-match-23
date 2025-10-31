import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const SearchBar = ({ 
  onSearch, 
  placeholder = "Describe your ideal candidate... (e.g., senior Python backend engineer with microservices experience)",
  autoFocus = false 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-center">
        <Sparkles className="absolute left-4 text-primary" size={20} />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-12 pr-24 py-6 text-base"
          autoFocus={autoFocus}
        />
        <Button 
          type="submit"
          className="absolute right-2"
          disabled={!query.trim()}
        >
          <Search size={18} className="mr-2" />
          Search
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2 ml-1">
        💡 Try: "backend engineer with Python and AWS" or "frontend developer React TypeScript"
      </p>
    </form>
  );
};
