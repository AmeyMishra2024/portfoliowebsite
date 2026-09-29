import { BookOpen, Microscope, Award, FileText, Rocket } from 'lucide-react';

export default function Research() {
  const publications = [
    {
      title: 'Separating Catalog-Update Effects from Solver and Hub-State Effects in Return-to-Hub Debris Routing',
      journal: 'ISMSIT 2026',
      status: 'Accepted',
      year: '2026',
      description: 'Independent computational study separating changes in orbital catalog inputs from solver and hub-state effects in debris routing. Accepted September 26, 2026 (Paper 266). I am the corresponding author and speaker. Conference acceptance is distinct from proceedings publication.',
      topics: ['Orbital Debris', 'Routing', 'Sensitivity Analysis', 'Computational Research'],
      doi: '',
    },
    {
      title: 'Space Debris and Their Impact',
      journal: 'American Journal of Student Research',
      status: 'Published',
      year: '2024',
      description: 'Study of orbital debris growth, collision risks, operational impacts, and mitigation strategies.',
      topics: ['Orbital Mechanics', 'Space Sustainability', 'Debris Mitigation', 'Environmental Impact'],
      doi: 'https://doi.org/10.70251/HYJR2348.34247252',
    },
  ];

  const researchExperiences = [
    {
      title: 'Electromagnetic Energy Harvesting',
      role: 'Summer Research Intern at Rice University',
      period: 'Summer research',
      description: 'Investigated electromagnetic energy harvesting for low-power electronics using microcontroller test systems and simulation.',
      achievements: ['Compared prototype behavior under varying conditions', 'Evaluated feasibility, applications, and limitations', 'Presented at the London International Conference', 'Submitted a manuscript for publication; acceptance is not claimed'],
    },
    {
      title: 'Humanoid Arm and Inverse Kinematics',
      role: 'Independent researcher mentored by a Stanford PhD student',
      period: 'Independent robotics research',
      description: 'Designed and 3D-printed an arm, integrated motors and sensors, and developed inverse kinematics with Java, Arduino, and OpenCV. This was mentorship by a PhD student rather than a Stanford institutional appointment.',
      achievements: ['Integrated vision and motion control', 'Tested hardware and algorithms on a physical arm'],
    },
    {
      title: 'International Space Apps Challenge',
      role: 'Global Nominee',
      period: '2024-2025',
      description: 'Participated in global competition focusing on space-related challenges. Developed ORCA (Orbital Recycling and Construction Array) project.',
      achievements: [
        'Selected as Global Nominee from thousands of participants worldwide',
        'Developed custom neural network for debris analysis',
        'Created comprehensive business plan for space debris recycling',
        'Designed mechanical systems using advanced CAD software',
      ],
    },
    {
      title: 'NASA Space Center U Program',
      role: 'Gene Kranz Scholarship Recipient',
      period: '2024',
      description: 'Prestigious program at NASA Johnson Space Center focusing on advanced aerospace concepts and hands-on engineering challenges.',
      achievements: [
        'Awarded Gene Kranz Scholarship for academic excellence',
        'Winner: Thermodynamics event',
        'Runner-up: Cryogenics event',
        'Collaborated with NASA engineers and scientists',
      ],
    },
  ];

  const researchAreas = [
    {
      title: 'Space Debris Analysis',
      icon: Rocket,
      description: 'Study of orbital debris tracking, collision prediction, and mitigation strategies using advanced computational methods.',
    },
    {
      title: 'Neural Network Applications',
      icon: Microscope,
      description: 'Development of custom CNN models for exoplanet identification and space debris classification using NASA datasets.',
    },
    {
      title: 'Sustainable Systems',
      icon: BookOpen,
      description: 'Research into sustainable urban planning, environmental technologies, and eco-friendly engineering solutions.',
    },
  ];

  const competitions = [
    { name: 'NASA Space Apps Challenge', status: 'Regional Winner and Global Semifinalist', year: 'ORCA' },
    { name: 'eCYBERMISSION', status: 'Texas State Second Place', year: '2024' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Research & Development</h1>
          <p className="text-xl text-slate-800">
            Orbital debris routing, energy harvesting, and robot perception and control
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-lg shadow-2xl shadow-sky-900/40 p-6 text-center">
            <FileText size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Published</h3>
            <p className="text-sky-100">Research Paper</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg shadow-2xl shadow-sky-900/40 p-6 text-center">
            <Award size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">NASA</h3>
            <p className="text-sky-100">Global Nominee</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-sky-700 text-white rounded-lg shadow-2xl shadow-sky-900/40 p-6 text-center">
            <Rocket size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Scholarship</h3>
            <p className="text-sky-100">Gene Kranz Award</p>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Publications</h2>
          {publications.map((pub, index) => (
            <div key={index} className="border-l-4 border-sky-600 pl-6 mb-6 last:mb-0">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{pub.title}</h3>
                  <p className="text-lg text-sky-700 font-semibold">{pub.journal}</p>
                </div>
                <div className="text-right">
                  <span className="bg-sky-100 text-sky-800 px-4 py-1 rounded-full text-sm font-semibold">
                    {pub.status}
                  </span>
                  <p className="text-slate-600 mt-1">{pub.year}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                {pub.description}{' '}
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold underline-offset-4 hover:underline"
                  >
                    DOI link
                  </a>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {pub.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Research Experience</h2>
          {researchExperiences.map((exp, index) => (
            <div key={index} className="bg-white/95 rounded-lg shadow-xl overflow-hidden border border-sky-100/40">
              <div className="bg-gradient-to-r from-sky-700 to-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-sky-100">{exp.role}</p>
                  <p className="text-sky-100">{exp.period}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-6">{exp.description}</p>
                <h4 className="font-bold text-slate-900 mb-3">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Research Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={40} className="text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Research Competitions</h2>
          <div className="space-y-4">
            {competitions.map((comp, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{comp.name}</h3>
                  <p className="text-slate-600">{comp.status}</p>
                </div>
                <div className="text-slate-500 font-medium">{comp.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-50 via-white to-slate-100 rounded-lg shadow-2xl shadow-sky-900/20 p-8 text-slate-900 border border-sky-100/60">
          <h2 className="text-3xl font-bold mb-4">ORCA: scope and limitations</h2>
          <p className="text-lg text-slate-800 mb-6">
            The routing study uses computational models to examine return-to-hub debris collection.
            The models do not establish physical capture, detumbling, towing, recycling, or manufacturing feasibility.
            Simplified sensing and screening-level guidance require further validation before operational use.
          </p>
          <a href="https://orcadebriscleanup.space/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold">Explore ORCA</a>
        </div>
      </section>
    </div>
  );
}
