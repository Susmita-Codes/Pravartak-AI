'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MapPin,
  Target,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Clock,
  ChevronRight,
  Star,
  CheckCircle,
  Circle,
  Play,
} from 'lucide-react';
import CareerSelector from './_components/career-selector';
import RoadmapVisualization from './_components/roadmap-visualization';
import SkillsMatrix from './_components/skills-matrix';
import LearningResources from './_components/learning-resources';

export default function RoadmapPage() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('beginner');
  const [selectedPath, setSelectedPath] = useState('technical');

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
  };

  if (!selectedCareer) {
    return (
      <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Career Roadmap Generator
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Get a personalized career roadmap with skills, learning paths, and milestones 
            tailored to your chosen profession and experience level.
          </p>
        </div>

        <CareerSelector onCareerSelect={handleCareerSelect} />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-2 sm:gap-3">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            {selectedCareer.title} Roadmap
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Your personalized journey to becoming a {selectedCareer.title}
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setSelectedCareer(null)}
          className="flex items-center gap-2 w-full sm:w-auto text-sm"
        >
          <TrendingUp className="h-4 w-4" />
          Change Career
        </Button>
      </div>

      {/* Level and Path Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Target className="h-4 w-4 sm:h-5 sm:w-5" />
              Current Experience Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={currentLevel} onValueChange={setCurrentLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">
                  <div className="flex items-center gap-2">
                    <Circle className="h-4 w-4" />
                    Beginner (0-1 years)
                  </div>
                </SelectItem>
                <SelectItem value="intermediate">
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Intermediate (1-3 years)
                  </div>
                </SelectItem>
                <SelectItem value="advanced">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Advanced (3-5 years)
                  </div>
                </SelectItem>
                <SelectItem value="expert">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Expert (5+ years)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
              Focus Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedPath} onValueChange={setSelectedPath}>
              <SelectTrigger>
                <SelectValue placeholder="Select your path" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical Excellence</SelectItem>
                <SelectItem value="leadership">Leadership Track</SelectItem>
                <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="roadmap" className="space-y-4 sm:space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto p-1">
          <TabsTrigger value="roadmap" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Roadmap</span>
            <span className="xs:hidden">Map</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3">
            <Target className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Skills Matrix</span>
            <span className="xs:hidden">Skills</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Resources</span>
            <span className="xs:hidden">Learn</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3">
            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Community</span>
            <span className="xs:hidden">Team</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap">
          <RoadmapVisualization 
            career={selectedCareer}
            level={currentLevel}
            path={selectedPath}
          />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsMatrix 
            career={selectedCareer}
            level={currentLevel}
          />
        </TabsContent>

        <TabsContent value="resources">
          <LearningResources 
            career={selectedCareer}
            level={currentLevel}
          />
        </TabsContent>

        <TabsContent value="community">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community & Networking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Professional Networks</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-900/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn Groups</p>
                        <p className="text-sm text-muted-foreground">Join {selectedCareer.title} communities</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-green-900/20 border border-green-500/30 rounded-full flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium">Professional Associations</p>
                        <p className="text-sm text-muted-foreground">Industry-specific organizations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Events & Conferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-purple-900/20 border border-purple-500/30 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium">Industry Conferences</p>
                        <p className="text-sm text-muted-foreground">Annual {selectedCareer.title} events</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-orange-900/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Local Meetups</p>
                        <p className="text-sm text-muted-foreground">Network with peers in your area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Networking Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Attend at least 2 industry events per quarter</li>
                  <li>• Engage actively in online communities</li>
                  <li>• Offer help before asking for favors</li>
                  <li>• Follow up with new connections within 48 hours</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}