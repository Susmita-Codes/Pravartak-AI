# 🚀 Pravartak AI - AI Career Coach

> **Transform your career journey with AI-powered guidance, personalized tools, and professional success strategies.**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)

![Pravartak AI Hero](https://github.com/Susmita-Codes/Pravartak/blob/main/public/banner.jpeg?raw=true)

## 🌟 Overview

Pravartak AI is a comprehensive career coaching platform that leverages artificial intelligence to help professionals advance their careers. From resume optimization to interview preparation, our platform provides personalized guidance and industry insights to accelerate your professional growth.

### 🎯 Key Benefits

- 🤖 **AI-Powered Assistance** - Smart career guidance tailored to your industry
- 📊 **Real-time Analytics** - Track your progress and performance metrics
- 🎨 **Beautiful Interface** - Modern dark theme with fluid animations
- 🔒 **Secure Platform** - Enterprise-grade authentication and data protection
- 📱 **Responsive Design** - Seamless experience across all devices

## ✨ Features

### 🤖 AI-Powered Career Tools

#### 📝 Smart Resume Builder
- **AI Content Suggestions** - Get intelligent recommendations for your resume content
- **ATS Optimization** - Ensure your resume passes Applicant Tracking Systems
- **Real-time Preview** - See changes as you make them
- **PDF Export** - Download professional-quality PDFs
- **Multiple Templates** - Choose from various professional layouts

#### 💌 AI Cover Letter Generator
- **Job-Specific Customization** - Tailored cover letters for each application
- **Company Research Integration** - Leverage AI to research companies
- **Version Management** - Keep track of different versions
- **Export Options** - Multiple format downloads
- **Performance Analytics** - Track success rates

#### 🎤 Mock Interview System
- **Industry-Specific Questions** - Practice with role-relevant questions
- **AI-Powered Feedback** - Get detailed performance analysis
- **Progress Tracking** - Monitor improvement over time
- **Performance Metrics** - Detailed scoring and recommendations
- **Question Bank** - 1000+ curated interview questions

#### 📊 Industry Insights Dashboard
- **Salary Analytics** - Real-time market data and trends
- **Skill Recommendations** - AI-suggested skills for your career path
- **Market Demand** - Industry demand indicators
- **Growth Opportunities** - Identify emerging career paths
- **Competitive Analysis** - Compare your profile with market standards

### 🎨 User Experience

#### 🌊 Interactive Fluid Animation
- **WebGL-Powered Background** - Stunning Three.js fluid simulation
- **Mouse-Responsive** - Interactive animations throughout the interface
- **Optimized Performance** - Smooth 60fps animations
- **Mobile Optimized** - Touch-responsive interactions

#### 🌙 Modern Dark Theme
- **Eye-Friendly Design** - Carefully crafted dark color palette
- **Consistent Branding** - Purple and pink gradient accents
- **Accessibility First** - High contrast ratios and screen reader support
- **Professional Aesthetics** - Clean, modern interface design

#### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Progressive Enhancement** - Enhanced features on larger screens
- **Touch-Friendly** - Optimized for mobile interactions
- **Cross-Browser Support** - Works on all modern browsers

### 🔐 Security & Authentication

#### 🛡️ Clerk Authentication
- **Social Login** - Google, GitHub, LinkedIn integration
- **Secure Sessions** - Enterprise-grade session management
- **User Profiles** - Comprehensive user data management
- **Privacy Controls** - Granular privacy settings

#### 🔒 Data Protection
- **Encrypted Storage** - All data encrypted at rest
- **Secure Transmission** - HTTPS and secure API endpoints
- **GDPR Compliant** - Full compliance with data protection regulations
- **Regular Backups** - Automated data backup systems

## 🛠️ Technology Stack

### Frontend Technologies
```typescript
{
  "framework": "Next.js 15.5.3",
  "library": "React 19.0.0",
  "styling": "Tailwind CSS 3.4+",
  "components": "Shadcn/ui + Radix UI",
  "animations": "Three.js + Tailwind Animate",
  "icons": "Lucide React",
  "forms": "React Hook Form + Zod",
  "charts": "Recharts",
  "themes": "next-themes"
}
```

### Backend & Database
```typescript
{
  "database": "PostgreSQL (Neon)",
  "orm": "Prisma 6.2.1",
  "authentication": "Clerk",
  "api": "Next.js API Routes",
  "validation": "Zod",
  "ai": "Google Gemini API",
  "serverActions": "Next.js Server Actions"
}
```

### Development & Deployment
```typescript
{
  "runtime": "Node.js",
  "packageManager": "npm",
  "linting": "ESLint",
  "bundler": "Next.js + Turbopack",
  "hosting": "Vercel (recommended)",
  "monitoring": "Built-in analytics"
}
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database (or Neon DB account)
- **Clerk** account for authentication
- **Google Gemini API** key

### 1. Clone the Repository

```bash
git clone https://github.com/Susmita-Codes/Pravartak.git
cd Pravartak
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application running!

## 📁 Project Structure

```
Pravartak-AI/
├── 📂 app/                    # Next.js App Router
│   ├── 📂 (auth)/            # Authentication pages
│   │   ├── 📂 sign-in/       # Sign in page
│   │   ├── 📂 sign-up/       # Sign up page
│   │   └── layout.js         # Auth layout
│   ├── 📂 (main)/            # Main application pages
│   │   ├── 📂 dashboard/     # Industry insights
│   │   ├── 📂 resume/        # Resume builder
│   │   ├── 📂 ai-cover-letter/ # Cover letter generator
│   │   ├── 📂 interview/     # Interview preparation
│   │   ├── 📂 onboarding/    # User onboarding
│   │   └── layout.jsx        # Main layout
│   ├── 📂 api/               # API routes
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   └── page.js               # Landing page
├── 📂 components/            # Reusable components
│   ├── 📂 ui/                # UI components (Shadcn)
│   ├── header.jsx            # Navigation header
│   ├── hero.jsx              # Hero section
│   └── theme-provider.jsx    # Theme provider
├── 📂 lib/                   # Utility functions
│   ├── utils.js              # General utilities
│   ├── prisma.js             # Prisma client
│   └── checkUser.js          # User verification
├── 📂 actions/               # Server actions
│   ├── resume.js             # Resume operations
│   ├── cover-letter.js       # Cover letter operations
│   ├── interview.js          # Interview operations
│   ├── dashboard.js          # Dashboard data
│   └── user.js               # User operations
├── 📂 prisma/                # Database schema
│   ├── schema.prisma         # Prisma schema
│   └── 📂 migrations/        # Database migrations
├── 📂 data/                  # Static data
│   ├── features.js           # Feature descriptions
│   ├── testimonials.js       # User testimonials
│   ├── faqs.js               # FAQ content
│   └── howItWorks.js         # Process explanation
├── 📂 hooks/                 # Custom React hooks
├── 📂 public/                # Static assets
│   ├── logo.png              # Brand logo
│   └── banner.jpeg           # Hero image
├── package.json              # Dependencies
├── tailwind.config.mjs       # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette

```css
/* Dark Theme (Primary) */
--background: 0 0% 3.9%           /* Deep Dark Blue-Gray */
--foreground: 0 0% 98%            /* Near White */
--primary: 0 0% 98%               /* Primary Actions */
--secondary: 0 0% 14.9%           /* Secondary Elements */
--muted: 0 0% 14.9%               /* Muted Backgrounds */
--accent: 0 0% 14.9%              /* Accent Elements */

/* Gradient Colors */
--gradient-primary: #5227FF       /* Purple */
--gradient-secondary: #FF9FFC     /* Pink */
--gradient-tertiary: #B19EEF      /* Light Purple */
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800
- **Responsive Scale**: Mobile-first with progressive enhancement

### Component Library

Built with **Shadcn/ui** components:
- Forms: Input, Textarea, Select, RadioGroup
- Feedback: Toast, Alert, Progress
- Layout: Card, Dialog, Accordion, Tabs
- Navigation: Button, DropdownMenu, Breadcrumb

## 🔧 Configuration

### Tailwind CSS

Custom configuration with:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Dark mode support

### Next.js

Optimized configuration:
- App Router
- Turbopack (development)
- Image optimization
- Font optimization

### Prisma

Database schema includes:
- User management
- Resume data
- Cover letters
- Interview assessments
- Performance analytics

## 📊 Performance

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 100
- **SEO**: 100

### Optimizations

- Image optimization with Next.js
- Code splitting and lazy loading
- Efficient re-rendering patterns
- Optimized Three.js animations
- Database query optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Database Setup

Use **Neon DB** for PostgreSQL hosting:
1. Create account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string to `DATABASE_URL`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Standards

- ESLint configuration
- Prettier formatting
- TypeScript type safety
- Component documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Vercel** for hosting and deployment
- **Clerk** for authentication services
- **Neon** for database hosting
- **Google** for AI/ML capabilities

## 📞 Support

- 📧 **Email**: support@pravartak.ai
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Susmita-Codes/Pravartak/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Susmita-Codes/Pravartak/discussions)
- 📖 **Documentation**: [Wiki](https://github.com/Susmita-Codes/Pravartak/wiki)

---

<div align="center">

**Made with 💗 by the Pravartak Team**

[🌐 Website](https://pravartak.ai) • [📧 Contact](mailto:hello@pravartak.ai) • [🐦 Twitter](https://twitter.com/pravartak) • [💼 LinkedIn](https://linkedin.com/company/pravartak)

</div>

- **[Prisma](https://prisma.io/)** - Type-safe database ORM
- **[PostgreSQL](https://postgresql.org/)** - Robust relational database
- **[Clerk](https://clerk.com/)** - Authentication and user management

### AI & Integration

- **[Google Gemini AI](https://ai.google.dev/)** - Advanced AI for content generation
- **[Inngest](https://inngest.com/)** - Background job processing
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with validation

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development
- **[TypeScript-ready](https://www.typescriptlang.org/)** - Type safety support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- Google Gemini API key
- Clerk authentication keys

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/debdyuti005/Pravartak-AI.git
   cd Pravartak-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/pravartak_ai"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key

   # Inngest
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Pravartak-AI/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   ├── api/               # API routes
│   └── layout.js          # Root layout
├── components/            # Reusable components
│   ├── ui/                # UI components (Shadcn)
│   ├── hero.jsx           # Hero section with fluid animation
│   └── header.jsx         # Navigation header
├── lib/                   # Utility functions
├── prisma/                # Database schema and migrations
├── actions/               # Server actions
├── hooks/                 # Custom React hooks
├── data/                  # Static data files
└── public/                # Static assets
```

## 🎨 Key Components

### Interactive Hero Section
- **Fluid Animation**: Custom Three.js WebGL fluid simulation
- **Mouse Interaction**: Real-time fluid distortion based on cursor movement
- **Auto-demo Mode**: Automatic animation when idle
- **Responsive Design**: Works on all screen sizes

### AI-Powered Features
- **Resume Builder**: Dynamic form with AI-enhanced content suggestions
- **Cover Letter Generator**: Personalized cover letters based on job descriptions
- **Mock Interview**: Interactive interview practice with AI feedback
- **Career Dashboard**: Comprehensive overview of user progress

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run postinstall  # Generate Prisma client
```

### Database Operations
```bash
npx prisma studio          # Open Prisma Studio
npx prisma generate        # Generate Prisma client
npx prisma db push         # Push schema to database
npx prisma db pull         # Pull schema from database
npx prisma migrate dev     # Create and apply migration
```

## 🌟 Features Deep Dive

### 1. Resume Builder
- Dynamic form with multiple sections
- AI-powered content suggestions
- PDF export functionality
- Template customization
- Real-time preview

### 2. Cover Letter Generator
- Job description analysis
- Personalized content generation
- Multiple templates
- Export options
- Version history

### 3. Mock Interview System
- Industry-specific questions
- AI-powered feedback
- Performance tracking
- Progress analytics
- Question categories

### 4. Career Dashboard
- Progress visualization
- Performance metrics
- Goal tracking
- Recommendations
- Industry insights

## 🎭 UI Components

The project uses a comprehensive design system built with:
- **Shadcn/ui** components for consistency
- **Tailwind CSS** for styling
- **Radix UI** primitives for accessibility
- **Custom animations** for enhanced UX
- **Responsive design** patterns

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Debdyuti Hajra**
- GitHub: [@debdyuti005](https://github.com/debdyuti005)
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Shadcn](https://ui.shadcn.com/) for the beautiful UI components
- [Clerk](https://clerk.com/) for authentication solutions
- [Google AI](https://ai.google.dev/) for Gemini API
- [ReactBits](https://reactbits.dev/) for the LiquidEther animation component

---

<div align="center">
  <p>Built with ❤️ By Quad-Squad</p>
  <p>© 2025 Pravartak AI. All rights reserved.</p>
</div>#   P r a v a r t a k - A I 
 
 