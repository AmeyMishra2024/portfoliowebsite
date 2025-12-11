import { BookOpen, Microscope, Award, Users, FileText, Rocket } from 'lucide-react';

export default function Research() {
  const publications = [
    {
      title: 'Space Debris and Their Impact',
      journal: 'American Journal of Student Research',
      status: 'Published',
      year: '2024',
      description: 'Comprehensive research on space debris, analyzing their trajectories, impact on orbital operations, and potential mitigation strategies.',
      topics: ['Orbital Mechanics', 'Space Sustainability', 'Debris Mitigation', 'Environmental Impact'],
    },
  ];

  const researchExperiences = [
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
    {
      name: 'NASA Global Conrad Challenge',
      status: 'Participant - Awaiting Results',
      year: '2025',
    },
    {
      name: 'Samsung Solve for Tomorrow',
      status: 'Participant - Awaiting Results',
      year: '2025',
    },
    {
      name: 'Ecybermission',
      status: 'Texas State Second Place',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Research & Development</h1>
          <p className="text-xl text-slate-800">
            Exploring frontiers in aerospace engineering, AI, and sustainable technologies
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
              <p className="text-slate-700 mb-4">{pub.description}</p>
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

          <div className="mt-8 bg-sky-50 rounded-lg p-6 border border-sky-100/60">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <FileText size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-500 text-sm">Research Documentation</p>
                </div>
              </div>
              <div className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Microscope size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-500 text-sm">Research Process</p>
                </div>
              </div>
            </div>
          </div>
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

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Research Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center hover:bg-slate-300 transition-colors">
                <div className="text-center">
                  <Microscope size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-500 text-sm">Research Image {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-100 via-sky-50 to-white rounded-lg shadow-2xl shadow-sky-900/40 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Research Impact</h2>
          <p className="text-lg text-sky-100 mb-6">
            My research focuses on addressing critical challenges in aerospace engineering and sustainable technologies.
            Through publications, competitions, and hands-on projects, I strive to contribute meaningful solutions to
            real-world problems while advancing scientific knowledge.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-sky-100">
                Working with space programs, university researchers, and industry partners to develop innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Future Goals</h3>
              <p className="text-sky-100">
                Continue research in aerospace engineering, focusing on space sustainability and advanced propulsion systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



