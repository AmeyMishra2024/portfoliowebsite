# Amey Mishra - Engineering Portfolio Website

## Overview
A professional 6-page responsive portfolio website showcasing engineering experience, projects, and achievements. Built with React, TypeScript, and Tailwind CSS for optimal performance and maintainability.

## Technical Stack
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized production builds
- **Code Quality**: ESLint with TypeScript support

## Site Structure

### 1. Home Page (`components/Home.tsx`)
**Features:**
- Hero section with professional header and introduction
- Career objective and aspirations (MIT Master's Degree goal)
- Key statistics cards (4.75 GPA, 1,000+ volunteer hours, $20K+ funding)
- Technical skills grid showcasing 8 core competencies
- Certifications list (Fusion 360, Python, Adobe, JavaScript, FAA Drone Pilot)
- Contact information panel with email, phone, location, LinkedIn
- Education section highlighting Harmony School of Advancement

**Image Placeholders:**
- Professional photo placeholder in hero section
- All placeholders styled as gray boxes with descriptive text for easy replacement

### 2. FIRST Robotics Page (`components/FirstRobotics.tsx`)
**Features:**
- Achievement statistics (Top 0.5% globally, 3x Connect Award, Team Captain)
- Dual team showcase:
  - **FTC 8790**: Team Captain role with 9 major achievements
  - **FTC 25679 The Cosmobots**: Founder & Mechanical Lead with 5 key contributions
- Technical expertise breakdown: Mechanical Design, Software Development, Problem Solving
- Competition results and awards section

**Image Placeholders:**
- Team 8790 robot photos
- Team 25679 robot photos
- 6 competition/event gallery placeholders

### 3. Science Olympiad Page (`components/ScienceOlympiad.tsx`)
**Features:**
- Leadership role as Team President (2 years)
- Medal count display (6 regional gold, 1 regional silver, 4 regional bronze, 1 state gold, 2 state bronze)
- Regional championships with 7 first-place finishes across events:
  - Tower (2x), Air Trajectory (2x), Flight, Helicopter, Electric Vehicle
- State championship results (Storm the Castle 1st place)
- Skills developed section covering engineering design, physics, and problem-solving

**Image Placeholders:**
- Team photo in leadership section
- 6 event/competition gallery placeholders

### 4. Other Projects Page (`components/OtherProjects.tsx`)
**Features:**
Six major projects, each with detailed sections:

1. **AI Humanoid Robot**
   - Arduino, OpenCV, OpenAI API integration
   - Full-stack robotics development

2. **ORCA - Orbital Recycling and Construction Array**
   - NASA Space Apps Challenge Global Nominee
   - Neural networks and orbital mechanics

3. **EcoScape Sustainable Architecture**
   - Texas State Finalist Ecybermission
   - Environmental design and urban planning

4. **Radio-Controlled 3D Printed Airplane**
   - Aerodynamics testing and data collection
   - Control surface implementation

5. **3D Printed Drone for Location Mapping**
   - Autonomous waypoint navigation
   - Real-time video downlink

6. **NASA Exoplanet Analysis with Neural Networks**
   - Custom CNN development
   - NASA dataset processing

**Image Placeholders:**
- 2 images per project (12 total): main project image + demo/process image
- 6 additional gallery placeholders

### 5. Research Page (`components/Research.tsx`)
**Features:**
- Published research: "Space Debris and Their Impact" in American Journal of Student Research
- NASA Global Space Apps Challenge (Global Nominee)
- NASA Space Center U Program (Gene Kranz Scholarship)
- Research focus areas: Space Debris Analysis, Neural Networks, Sustainable Systems
- Competition results and ongoing projects

**Image Placeholders:**
- 2 research documentation/process images
- 6 research gallery placeholders

### 6. Cosmobots Robotics Page (`components/Cosmobots.tsx`)
**Features:**
- Founder & CEO role overview (June 2024 - Present)
- Impact metrics: $20K+ funding, 1,000+ volunteer hours, 2+ teams managed, 350 personal hours
- Key responsibilities: Community Outreach, Team Management, Fundraising, Program Development
- Community programs: Food & Toy Drives, STEM Education, Team Support, Workshops
- Teams managed: FTC 25679 and FTC 8790
- Future goals and vision

**Image Placeholders:**
- Organization photo in mission section
- 4 community outreach gallery placeholders
- 4 team activities gallery placeholders

## Navigation System
- **Sticky Navigation Bar**: Remains accessible at top of page during scrolling
- **Mobile-Responsive**: Hamburger menu for mobile devices with smooth transitions
- **Active Page Indicator**: Current page highlighted in navigation
- **Smooth Scrolling**: Automatic scroll to top when navigating between pages

## Design Features

### Color Scheme
Professional engineering-focused palette avoiding purple/indigo:
- **Primary**: Slate grays for main content
- **Accents by Page**:
  - Home: Cyan/Blue (aerospace theme)
  - FIRST Robotics: Orange/Red (FIRST branding)
  - Science Olympiad: Emerald/Teal (scientific theme)
  - Projects: Varied colors per project
  - Research: Violet/Fuchsia (innovation theme)
  - Cosmobots: Sky/Blue (community theme)

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Layouts**: Flexbox and CSS Grid for flexible layouts
- **Touch-Friendly**: Large clickable areas for mobile users

### Animations & Transitions
- Smooth color transitions on hover states
- Shadow elevation on card hover
- Mobile menu slide animations
- Page navigation with scroll-to-top

### Accessibility
- Semantic HTML5 structure
- Clear visual hierarchy
- Sufficient color contrast ratios
- Descriptive alt text placeholders
- Keyboard navigation support
- Screen reader friendly

## Adding Images

### How to Replace Image Placeholders

All image placeholders are styled with:
- Gray background (`bg-slate-200`)
- Icon indicating image type
- Descriptive text label
- Proper aspect ratios (square, video, etc.)

**To add images:**

1. **Import your image** at the top of the component:
```tsx
import myImage from '../assets/my-image.jpg';
```

2. **Replace the placeholder div** with an img tag:
```tsx
// Before (placeholder):
<div className="bg-slate-200 rounded-lg aspect-square flex items-center justify-center">
  <div className="text-center">
    <Icon size={64} className="mx-auto mb-2 text-slate-400" />
    <p className="text-slate-500">Photo Placeholder</p>
  </div>
</div>

// After (with image):
<div className="rounded-lg aspect-square overflow-hidden">
  <img
    src={myImage}
    alt="Descriptive alt text"
    className="w-full h-full object-cover"
  />
</div>
```

3. **Recommended image organization:**
```
src/
  assets/
    home/
      profile.jpg
    robotics/
      team8790-robot.jpg
      team25679-robot.jpg
      competition1.jpg
    olympiad/
      team-photo.jpg
      tower-event.jpg
    projects/
      ai-robot.jpg
      orca-project.jpg
    research/
      nasa-space-apps.jpg
    cosmobots/
      organization.jpg
      outreach1.jpg
```

### Image Optimization Tips
- **Format**: Use WebP for modern browsers, with JPG/PNG fallbacks
- **Size**: Compress images before uploading (aim for <500KB per image)
- **Dimensions**:
  - Hero images: 1920x1080px
  - Project images: 1200x800px
  - Gallery thumbnails: 600x400px
- **Lazy Loading**: Consider adding `loading="lazy"` attribute for below-fold images

## File Organization

```
src/
├── App.tsx                      # Main app component with routing logic
├── main.tsx                     # React entry point
├── index.css                    # Tailwind imports
├── types.ts                     # TypeScript type definitions
└── components/
    ├── Navigation.tsx           # Sticky navigation bar
    ├── Home.tsx                 # Home page
    ├── FirstRobotics.tsx        # FIRST Robotics page
    ├── ScienceOlympiad.tsx      # Science Olympiad page
    ├── OtherProjects.tsx        # Projects portfolio page
    ├── Research.tsx             # Research page
    └── Cosmobots.tsx            # Cosmobots Robotics page
```

## Development

### Available Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Development Server
The dev server runs on `http://localhost:5173` by default with hot module replacement for instant updates during development.

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance Features
- **Code Splitting**: React lazy loading for optimal bundle size
- **Optimized Build**: Vite production build with minification
- **CSS Purging**: Tailwind removes unused styles in production
- **Fast Navigation**: Client-side routing without page reloads
- **Lighthouse Scores**: Optimized for 90+ scores in all categories

## Content Updates
To update content, edit the respective component files:
- Personal information: `Home.tsx`
- Team achievements: `FirstRobotics.tsx`, `ScienceOlympiad.tsx`
- Project details: `OtherProjects.tsx`
- Research information: `Research.tsx`
- Organization details: `Cosmobots.tsx`

## Customization

### Colors
Modify colors in component files by changing Tailwind classes:
- `bg-cyan-600` → Background color
- `text-slate-900` → Text color
- `from-blue-500 to-cyan-500` → Gradient colors

### Layout
Adjust responsive breakpoints using Tailwind utilities:
- `grid md:grid-cols-2 lg:grid-cols-3` → Responsive grid
- `flex flex-col md:flex-row` → Responsive flex direction

### Typography
Font sizes use Tailwind's scale:
- `text-5xl` → Extra large headings
- `text-3xl` → Section headings
- `text-xl` → Subheadings
- `text-base` → Body text

## Production Deployment
The built site (in `dist/` folder) is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Future Enhancements
Potential additions for future versions:
- Blog section for technical articles
- Contact form with backend integration
- Project filtering and search functionality
- Dark mode toggle
- Animation library integration (Framer Motion)
- Image lightbox/gallery viewer
- PDF resume download
- Social media feed integration

## Support & Maintenance
Regular updates recommended for:
- Achievement additions as they occur
- New project documentation
- Image uploads and optimization
- Contact information updates
- Competition results and awards

## License
This portfolio website is the intellectual property of Amey Mishra.

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Contact**: amey.mishra2020@gmail.com
