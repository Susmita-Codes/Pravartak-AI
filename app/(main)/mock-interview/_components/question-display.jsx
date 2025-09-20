'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, HelpCircle, Target } from 'lucide-react';

export default function QuestionDisplay({ question, questionNumber, jobRole }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Hard':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-lg px-3 py-1">
              Question {questionNumber}
            </Badge>
            <Badge variant="secondary">
              {question.category}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge 
              className={`text-white ${getDifficultyColor(question.difficulty)}`}
            >
              {question.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {formatTime(question.timeLimit)}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Main Question */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
              <HelpCircle className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2 leading-relaxed">
                {question.question}
              </h2>
            </div>
          </div>
        </div>

        {/* Role Context */}
        {jobRole && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="font-medium text-sm">Interview Context</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This question is tailored for a <strong>{jobRole}</strong> position. 
              Consider how your experience and skills align with this role when answering.
            </p>
          </div>
        )}

        {/* Question Tips */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-sm">Tips for answering:</span>
          </div>
          
          <ul className="text-sm text-muted-foreground space-y-2 ml-6">
            {question.category === 'Introduction' && (
              <>
                <li>• Keep it concise and relevant to the role</li>
                <li>• Highlight your key achievements and skills</li>
                <li>• Show enthusiasm for the opportunity</li>
              </>
            )}
            {question.category === 'Technical' && (
              <>
                <li>• Use the STAR method (Situation, Task, Action, Result)</li>
                <li>• Be specific about technologies and methodologies used</li>
                <li>• Quantify your impact where possible</li>
              </>
            )}
            {question.category === 'Behavioral' && (
              <>
                <li>• Provide a specific example from your experience</li>
                <li>• Focus on your thought process and actions</li>
                <li>• Demonstrate growth and learning from the experience</li>
              </>
            )}
            {question.category === 'Problem Solving' && (
              <>
                <li>• Break down your problem-solving approach step by step</li>
                <li>• Explain your reasoning and decision-making process</li>
                <li>• Mention tools or frameworks you might use</li>
              </>
            )}
            {question.category === 'Leadership' && (
              <>
                <li>• Describe the situation and challenges faced</li>
                <li>• Explain your leadership style and approach</li>
                <li>• Highlight the outcome and lessons learned</li>
              </>
            )}
          </ul>
        </div>

        {/* Time Guidance */}
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-sm text-blue-800 dark:text-blue-200">
              Time Allocation Suggestion
            </span>
          </div>
          <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <div>• Think: 10-15 seconds</div>
            <div>• Structure your answer: 15-30 seconds</div>
            <div>• Main response: {Math.floor(question.timeLimit * 0.7)} seconds</div>
            <div>• Wrap up: 10-15 seconds</div>
          </div>
        </div>

        {/* Common Follow-ups */}
        {question.category !== 'Introduction' && (
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-4 w-4 text-amber-600" />
              <span className="font-medium text-sm text-amber-800 dark:text-amber-200">
                Be prepared for follow-ups like:
              </span>
            </div>
            <div className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
              <div>• "Can you give me another example?"</div>
              <div>• "What would you do differently?"</div>
              <div>• "How did that experience change you?"</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}