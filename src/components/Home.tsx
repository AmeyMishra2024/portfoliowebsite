import { Mail, Phone, Linkedin, MapPin, Award, Rocket, Users, Sparkles } from 'lucide-react';

export default function Home() {
  const skills = [
    'Team Leadership',
    'Project Management',
    'Robotics Programming',
    'Engineering Design',
    'CAD (Fusion 360)',
    'Python & JavaScript',
    'Community Outreach',
    'Strategic Planning',
  ];

  const certifications = [
    'Autodesk Fusion 360',
    'Python (OpenEDG, Microsoft ITS)',
    'Adobe Photoshop & Illustrator',
    'JavaScript (W3Schools)',
    'FAA Certified Recreational Drone Pilot',
  ];

  const stats = [
    {
      icon: Award,
      value: 'Top 0.5%',
      label: 'FTC global ranking (Team 8790)',
    },
    {
      icon: Users,
      value: '3',
      label: 'Robotics & STEM teams founded/led',
    },
    {
      icon: Rocket,
      value: '200+',
      label: 'Students reached through Cosmobots programs',
    },
  ];

  const summaryHighlights = [
    'Founder of Cosmobots Robotics, delivering STEM access to underserved schools.',
    'FTC captain leading teams to top 0.5% global performance with strong mechanical and software strategy.',
    'Researching aerospace + AI applications through NASA programs and competitive challenges.',
  ];

  const languages = [
    { name: 'English', level: 'Native/Bilingual' },
    { name: 'Hindi', level: 'Full Professional' },
    { name: 'Spanish', level: 'Limited' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative bg-gradient-to-r from-slate-950 via-sky-900 to-sky-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Amey Mishra
              </h1>
              <p className="text-2xl text-sky-300 mb-6">
                Aerospace, robotics, and community-centered engineering
              </p>
              <p className="text-lg text-sky-100/90 leading-relaxed mb-6">
                Student engineer blending aerospace ambition with hands-on robotics leadership. I build teams,
                secure resources, and design hardware/software systems that compete nationally while expanding STEM
                access in Houston.
              </p>
              <div className="bg-white/10 border border-sky-500/30 rounded-xl p-6 mb-8 backdrop-blur">
                <div className="flex items-center gap-2 text-sky-100 font-semibold mb-3">
                  <Sparkles size={18} className="text-sky-300" />
                  <span>Quick summary</span>
                </div>
                <ul className="space-y-2 text-sky-100">
                  {summaryHighlights.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-sky-300 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:amey.mishra2020@gmail.com"
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 px-6 py-3 rounded-lg transition-colors font-semibold shadow-lg shadow-sky-900/30"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://linkedin.com/in/amey-mishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors border border-white/10"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/60 border border-sky-800/50 rounded-lg aspect-square flex items-center justify-center shadow-2xl shadow-sky-900/50">
                <div className="text-center p-8">
                  <Rocket size={120} className="mx-auto mb-4 text-sky-300" />
                  <p className="text-sky-200/80">Professional Photo Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-sky-600 to-blue-600 rounded-xl shadow-2xl shadow-sky-900/40 p-6 text-center hover:shadow-blue-900/50 transition-shadow">
                <Icon className="mx-auto mb-4 text-white" size={48} />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sky-100">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-8 border border-sky-100/30">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-100 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-8 border border-sky-100/30">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Certifications</h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="text-sky-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:amey.mishra2020@gmail.com" className="text-slate-900 hover:text-sky-600">
                  amey.mishra2020@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-sky-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a href="tel:8324220725" className="text-slate-900 hover:text-sky-600">
                  (832) 422-0725
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-sky-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-slate-900">Houston, TX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-sky-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/amey-mishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-sky-600"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 rounded-lg shadow-xl p-8 border border-sky-100/40 mt-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Languages</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="bg-slate-50 rounded-lg p-4 border border-sky-100/40">
                <p className="text-lg font-bold text-slate-900">{lang.name}</p>
                <p className="text-slate-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 via-blue-700 to-blue-600 rounded-lg shadow-2xl shadow-sky-900/40 p-8 mt-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-2">
            <p className="text-xl font-semibold">Harmony School of Advancement</p>
            <p className="text-sky-100">Houston, Texas</p>
            <p className="text-sky-100">Expected Graduation: May 2027 (High School Diploma)</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Honor Roll: 9th, 10th, 11th Grade</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">National Honor Society</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Student Council President</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">AP Scholar with Distinction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
