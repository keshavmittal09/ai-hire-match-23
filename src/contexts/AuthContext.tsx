import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import { mockUsers } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, full_name: string, type: 'candidate' | 'recruiter') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  // const signup = async (email: string, password: string, full_name: string, type: 'candidate' | 'recruiter') => {
  //   // Mock signup
  //   const newUser: User = {
  //     id: Math.floor(Math.random() * 10000),
  //     email,
  //     full_name,
  //     type,
  //     is_admin: false
  //   };
  //   setUser(newUser);
  //   localStorage.setItem('user', JSON.stringify(newUser));
  // };
  // inside AuthContext.signup
const signup = async (email: string, password: string, type: 'candidate' | 'recruiter') => {
  setIsLoading(true);
  try {
    // Perform sign up
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;

    // If signUp returned a user (some projects auto-confirm), create profile now.
    const userId = data.user?.id ?? null;

    if (userId) {
      // user session exists and auth.uid() will match — safe to upsert
      const { error: upsertError } = await supabase
        .from('profiles')
        .upsert({ id: userId, full_name: '', headline: '', location: '', skills: [], type });
      if (upsertError) throw upsertError;
      await refreshUser();
    } else {
      // No immediate session (email confirmation required). Do NOT try to upsert.
      // Optionally inform the user they must confirm their email, and create profile on first login.
      // Example: show message or set localStorage flag to remind the user to complete profile after verify.
      console.info('Signup succeeded — please verify email. Profile will be created on first login.');
    }

  } finally {
    setIsLoading(false);
  }
}


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
