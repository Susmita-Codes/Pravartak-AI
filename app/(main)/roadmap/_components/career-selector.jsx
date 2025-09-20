'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import {
  Code,
  Palette,
  TrendingUp,
  Users,
  Shield,
  Database,
  Brain,
  Megaphone,
  Calculator,
  Building,
  Search,
  Rocket,
  Loader2,
} from 'lucide-react';

const careerCategories = [
  {
    id: 'technology',
    name: 'Technology',
    icon: Code,
    careers: [
      {
        id: 'frontend-developer',
        title: 'Frontend Developer',
        description: 'Build user interfaces and web experiences',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
        avgSalary: '₹8-25 LPA',
        demand: 'High',
        icon: Code,
      },
      {
        id: 'backend-developer',
        title: 'Backend Developer',
        description: 'Build server-side applications and APIs',
        skills: ['Node.js', 'Python', 'Databases', 'Cloud'],
        avgSalary: '₹10-30 LPA',
        demand: 'High',
        icon: Database,
      },
      {
        id: 'fullstack-developer',
        title: 'Full Stack Developer',
        description: 'End-to-end web application development',
        skills: ['Frontend', 'Backend', 'DevOps', 'Databases'],
        avgSalary: '₹12-35 LPA',
        demand: 'Very High',
        icon: Code,
      },
      {
        id: 'data-scientist',
        title: 'Data Scientist',
        description: 'Extract insights from data using ML and statistics',
        skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
        avgSalary: '₹15-40 LPA',
        demand: 'Very High',
        icon: Brain,
      },
      {
        id: 'cybersecurity-specialist',
        title: 'Cybersecurity Specialist',
        description: 'Protect systems and data from cyber threats',
        skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
        avgSalary: '₹12-35 LPA',
        demand: 'High',
        icon: Shield,
      },
    ],
  },
  {
    id: 'design',
    name: 'Design & Creative',
    icon: Palette,
    careers: [
      {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        description: 'Design user-centered digital experiences',
        skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
        avgSalary: '₹6-20 LPA',
        demand: 'High',
        icon: Palette,
      },
      {
        id: 'product-designer',
        title: 'Product Designer',
        description: 'Design end-to-end product experiences',
        skills: ['Design Thinking', 'User Research', 'Strategy', 'Prototyping'],
        avgSalary: '₹10-25 LPA',
        demand: 'High',
        icon: Rocket,
      },
    ],
  },
  {
    id: 'business',
    name: 'Business & Management',
    icon: TrendingUp,
    careers: [
      {
        id: 'product-manager',
        title: 'Product Manager',
        description: 'Drive product strategy and execution',
        skills: ['Strategy', 'Analytics', 'Communication', 'Agile'],
        avgSalary: '₹15-50 LPA',
        demand: 'Very High',
        icon: TrendingUp,
      },
      {
        id: 'business-analyst',
        title: 'Business Analyst',
        description: 'Analyze business processes and requirements',
        skills: ['Analysis', 'Documentation', 'SQL', 'Process Mapping'],
        avgSalary: '₹8-25 LPA',
        demand: 'High',
        icon: Calculator,
      },
      {
        id: 'consultant',
        title: 'Management Consultant',
        description: 'Advise organizations on strategic decisions',
        skills: ['Strategy', 'Problem Solving', 'Communication', 'Analysis'],
        avgSalary: '₹12-40 LPA',
        demand: 'High',
        icon: Building,
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing & Sales',
    icon: Megaphone,
    careers: [
      {
        id: 'digital-marketer',
        title: 'Digital Marketing Specialist',
        description: 'Drive online marketing campaigns and growth',
        skills: ['SEO/SEM', 'Social Media', 'Analytics', 'Content Marketing'],
        avgSalary: '₹5-20 LPA',
        demand: 'High',
        icon: Megaphone,
      },
      {
        id: 'growth-hacker',
        title: 'Growth Hacker',
        description: 'Drive rapid business growth through experiments',
        skills: ['Analytics', 'A/B Testing', 'Product Marketing', 'Data'],
        avgSalary: '₹8-25 LPA',
        demand: 'High',
        icon: TrendingUp,
      },
    ],
  },
];

export default function CareerSelector({ onCareerSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCareer, setLoadingCareer] = useState(null);

  const handleCareerSelect = async (career) => {
    setLoadingCareer(career.id);
    
    try {
      // Generate AI roadmap for the selected career
      const response = await fetch('/api/roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ career: career.title }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Pass the career with AI-generated roadmap data
        const enhancedCareer = {
          ...career,
          aiRoadmap: result.data
        };
        onCareerSelect(enhancedCareer);
      } else {
        console.error('Failed to generate roadmap:', result.error);
        // Still proceed with career selection but without AI roadmap
        onCareerSelect(career);
      }
    } catch (error) {
      console.error('Error generating roadmap:', error);
      // Still proceed with career selection but without AI roadmap
      onCareerSelect(career);
    } finally {
      setLoadingCareer(null);
    }
  };

  const filteredCategories = careerCategories.map(category => ({
    ...category,
    careers: category.careers.filter(career =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  })).filter(category => category.careers.length > 0);

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'Very High': return 'bg-green-100 text-green-800 border-green-200';
      case 'High': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Search */}
      <div className="max-w-md mx-auto px-4">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search careers, skills, or technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2"
          size="sm"
        >
          All Categories
        </Button>
        {careerCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2"
              size="sm"
            >
              <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.slice(0, 4)}</span>
            </Button>
          );
        })}
      </div>

      {/* Career Cards */}
      <div className="space-y-6 sm:space-y-8 px-4">
        {filteredCategories
          .filter(category => selectedCategory === null || category.id === selectedCategory)
          .map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              <h2 className="text-xl sm:text-2xl font-bold">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.careers.map((career) => {
                const CareerIcon = career.icon;
                return (
                  <Card 
                    key={career.id} 
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => onCareerSelect(career)}
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                            <CareerIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-base sm:text-lg group-hover:text-purple-600 transition-colors leading-tight">
                              {career.title}
                            </CardTitle>
                            <Badge className={`${getDemandColor(career.demand)} mt-1 text-xs`}>
                              {career.demand} Demand
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                      <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">{career.description}</p>

                      <div>
                        <p className="text-xs sm:text-sm font-medium mb-2">Key Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {career.skills.slice(0, 4).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {career.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{career.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t gap-3 sm:gap-0">
                        <div>
                          <p className="text-xs text-muted-foreground">Avg. Salary</p>
                          <p className="text-sm sm:text-base font-semibold text-green-600">{career.avgSalary}</p>
                        </div>
                        <Button 
                          size="sm" 
                          className="group-hover:bg-purple-600 group-hover:text-white transition-colors w-full sm:w-auto text-xs sm:text-sm"
                          onClick={() => handleCareerSelect(career)}
                          disabled={loadingCareer === career.id}
                        >
                          {loadingCareer === career.id ? (
                            <>
                              <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Rocket className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                              View Roadmap
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No careers found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or browse all categories
          </p>
        </div>
      )}
    </div>
  );
}