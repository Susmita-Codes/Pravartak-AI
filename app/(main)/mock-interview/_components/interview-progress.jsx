'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
  Circle,
  Timer,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InterviewProgress({ 
  currentQuestion, 
  totalQuestions, 
  progress, 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext,
  jobRole 
}) {
  const [sessionTime, setSessionTime] = useState(0);

  // Track session time
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getQuestionStatus = (questionIndex) => {
    if (questionIndex < currentQuestion - 1) return 'completed';
    if (questionIndex === currentQuestion - 1) return 'current';
    return 'upcoming';
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4 md:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">
              Question {currentQuestion} of {totalQuestions}
            </h2>
            <p className="text-muted-foreground">
              {jobRole ? `Mock Interview for ${jobRole}` : 'Mock Interview Session'}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4" />
              <span>Session: {formatTime(sessionTime)}</span>
            </div>
            <Badge variant="outline" className="px-3">
              {Math.round(progress)}% Complete
            </Badge>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-6">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Started</span>
            <span>{currentQuestion} / {totalQuestions}</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Question Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const status = getQuestionStatus(index);
            return (
              <div 
                key={index}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                  status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : status === 'current'
                    ? 'bg-primary text-primary-foreground ring-2 ring-primary/20'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {status === 'completed' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-4">
          <Button 
            onClick={onPrevious}
            disabled={!canGoPrevious}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Take your time</span>
          </div>

          <Button 
            onClick={onNext}
            disabled={!canGoNext}
            className="flex items-center gap-2"
          >
            <span className="hidden sm:inline">
              {currentQuestion === totalQuestions ? 'Finish' : 'Next'}
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress Statistics */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
          <div className="text-center">
            <div className="text-lg font-semibold text-green-600">
              {currentQuestion - 1}
            </div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              1
            </div>
            <div className="text-xs text-muted-foreground">Current</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-500">
              {totalQuestions - currentQuestion}
            </div>
            <div className="text-xs text-muted-foreground">Remaining</div>
          </div>
        </div>

        {/* Quick Tips for Mobile */}
        <div className="md:hidden mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            💡 Tip: Rotate your device to landscape for a better experience
          </p>
        </div>
      </CardContent>
    </Card>
  );
}