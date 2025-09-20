'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Play,
  Loader2,
  Briefcase,
  Sparkles,
  Target,
} from 'lucide-react';

const popularRoles = [
  'Software Engineer',
  'Data Scientist',
  'Product Manager',
  'Marketing Manager',
  'Sales Representative',
  'Business Analyst',
  'UX/UI Designer',
  'DevOps Engineer',
  'Financial Analyst',
  'Project Manager',
  'Customer Success Manager',
  'Content Writer',
];

export default function JobRoleSetup({ onStartInterview, isGenerating }) {
  const [jobRole, setJobRole] = useState('');

  const handleStart = () => {
    if (jobRole.trim()) {
      onStartInterview(jobRole.trim());
    }
  };

  const handleRoleSelect = (role) => {
    setJobRole(role);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && jobRole.trim() && !isGenerating) {
      handleStart();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Briefcase className="h-6 w-6 text-blue-500" />
          <CardTitle className="text-2xl">Interview Setup</CardTitle>
        </div>
        <p className="text-muted-foreground">
          Enter your target job role to get personalized interview questions
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Job Role Input */}
        <div className="space-y-2">
          <Label htmlFor="jobRole" className="text-base font-medium">
            Job Role
          </Label>
          <Input
            id="jobRole"
            type="text"
            placeholder="e.g., Software Engineer, Product Manager, Data Scientist..."
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            onKeyPress={handleKeyPress}
            className="text-base py-3"
            disabled={isGenerating}
          />
          <p className="text-sm text-muted-foreground">
            Be specific about the role you're targeting for better questions
          </p>
        </div>

        {/* Popular Roles */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-muted-foreground">
            Or choose from popular roles:
          </Label>
          <div className="flex flex-wrap gap-2">
            {popularRoles.map((role) => (
              <Badge
                key={role}
                variant={jobRole === role ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
                onClick={() => handleRoleSelect(role)}
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* AI Features Preview */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg p-4 border">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span className="font-medium text-purple-700 dark:text-purple-300">
              AI-Powered Features
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-500" />
              <span>Role-specific questions</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-green-500" />
              <span>Real-time speech analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-orange-500" />
              <span>Content quality scoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-500" />
              <span>Comprehensive feedback</span>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <Button 
          onClick={handleStart}
          disabled={!jobRole.trim() || isGenerating}
          className="w-full py-6 text-lg"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating Questions...
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" />
              Start AI Mock Interview
            </>
          )}
        </Button>

        {isGenerating && (
          <div className="text-center text-sm text-muted-foreground">
            <p>AI is generating personalized questions for "{jobRole}"</p>
            <p>This may take 10-15 seconds...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}