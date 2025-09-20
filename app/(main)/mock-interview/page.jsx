'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  CheckCircle,
  Clock,
  Mic,
  MicOff,
  Volume2,
  Loader2,
  Sparkles,
  Brain,
} from 'lucide-react';
import InterviewProgress from './_components/interview-progress';
import QuestionDisplay from './_components/question-display';
import VoiceRecorder from './_components/voice-recorder';
import JobRoleSetup from './_components/job-role-setup';
import AnalysisResults from './_components/analysis-results';

export default function MockInterviewPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isInterviewCompleted, setIsInterviewCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [jobRole, setJobRole] = useState('');
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const [error, setError] = useState('');
  const [finalAnalysis, setFinalAnalysis] = useState(null);
  const [isGeneratingAnalysis, setIsGeneratingAnalysis] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const generateQuestions = async (role) => {
    setIsGeneratingQuestions(true);
    setError('');
    
    try {
      const response = await fetch('/api/mock-interview/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobRole: role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate questions');
      }

      setQuestions(data.questions);
      setJobRole(data.jobRole);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setAnalysisHistory([]);
      setError('');
      
      return true;
    } catch (error) {
      console.error('Error generating questions:', error);
      setError(error.message);
      return false;
    } finally {
      setIsGeneratingQuestions(false);
    }
  };

  const startInterview = async (role) => {
    const success = await generateQuestions(role);
    if (success) {
      setIsInterviewStarted(true);
      setSessionStartTime(new Date());
    }
  };

  const goToNextQuestion = async () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      await completeInterview();
    }
  };

  const completeInterview = async () => {
    setIsGeneratingAnalysis(true);
    
    try {
      const response = await fetch('/api/mock-interview/final-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          history: analysisHistory,
          jobRole: jobRole 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFinalAnalysis(data);
      }
    } catch (error) {
      console.error('Error generating final analysis:', error);
    } finally {
      setIsGeneratingAnalysis(false);
      setIsInterviewCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const restartInterview = () => {
    setCurrentQuestionIndex(0);
    setIsInterviewStarted(false);
    setIsInterviewCompleted(false);
    setQuestions([]);
    setAnswers({});
    setAnalysisHistory([]);
    setSessionStartTime(null);
    setJobRole('');
    setError('');
    setFinalAnalysis(null);
  };

  const saveAnswer = (questionId, audioBlob, duration, analysisData = null) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        audioBlob,
        duration,
        timestamp: new Date(),
        analysis: analysisData,
      }
    }));

    // Add to analysis history if we have analysis data
    if (analysisData) {
      setAnalysisHistory(prev => [...prev, {
        questionId,
        question: currentQuestion?.question,
        ...analysisData
      }]);
    }
  };

  // Job role setup screen
  if (!isInterviewStarted && !isInterviewCompleted) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold gradient-text">
              AI-Powered Mock Interview
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Practice with AI-generated questions tailored to your role
          </p>
        </div>

        {error && (
          <Alert className="mb-6">
            <AlertDescription className="text-red-600">
              {error}
            </AlertDescription>
          </Alert>
        )}

        <JobRoleSetup 
          onStartInterview={startInterview}
          isGenerating={isGeneratingQuestions}
        />

        <Card className="p-8 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                AI Features
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  AI-generated questions for your specific role
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  Content evaluation with scoring (1-5)
                </li>
                <li className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-blue-500" />
                  Speech analysis (pace, pauses, filler words)
                </li>
                <li className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-orange-500" />
                  Comprehensive final analysis report
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  5 carefully curated questions
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Timed responses (2-4 minutes per question)
                </li>
                <li className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-purple-500" />
                  Voice recording for each answer
                </li>
                <li className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-orange-500" />
                  Instant feedback and scoring
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Interview completion screen
  if (isInterviewCompleted) {
    const totalDuration = sessionStartTime ? 
      Math.round((new Date() - sessionStartTime) / 1000 / 60) : 0;
    const answeredQuestions = Object.keys(answers).length;

    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Interview Completed!</h1>
          <p className="text-xl text-muted-foreground">
            Great job completing your mock interview for <strong>{jobRole}</strong>
          </p>
        </div>

        <Card className="p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500">{totalQuestions}</div>
              <div className="text-muted-foreground">Questions Asked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500">{answeredQuestions}</div>
              <div className="text-muted-foreground">Answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500">{totalDuration}m</div>
              <div className="text-muted-foreground">Total Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">
                {finalAnalysis?.metrics?.avgContentScore || 'N/A'}
              </div>
              <div className="text-muted-foreground">Avg Score</div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Final Analysis */}
          {isGeneratingAnalysis ? (
            <div className="text-center py-8">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">
                Analyzing your performance with AI...
              </p>
            </div>
          ) : finalAnalysis ? (
            <AnalysisResults 
              analysis={finalAnalysis}
              questions={questions}
              answers={answers}
              analysisHistory={analysisHistory}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Analysis unavailable at the moment.
              </p>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" onClick={restartInterview}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Take Another Interview
            </Button>
            <Button onClick={() => window.print()}>
              Print Analysis Report
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Main interview interface
  return (
    <div className="container mx-auto py-4 px-4 max-w-6xl">
      <div className="mb-6">
        <InterviewProgress 
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          progress={progress}
          onPrevious={goToPreviousQuestion}
          onNext={goToNextQuestion}
          canGoPrevious={currentQuestionIndex > 0}
          canGoNext={true}
          jobRole={jobRole}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Question Panel */}
        <div className="lg:col-span-2">
          <QuestionDisplay 
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            jobRole={jobRole}
          />
        </div>

        {/* Recording Panel */}
        <div>
          <VoiceRecorder 
            questionId={currentQuestion?.id}
            timeLimit={currentQuestion?.timeLimit}
            onSaveAnswer={saveAnswer}
            existingAnswer={answers[currentQuestion?.id]}
            onNext={goToNextQuestion}
            currentQuestion={currentQuestion}
            jobRole={jobRole}
          />
        </div>
      </div>
    </div>
  );
}