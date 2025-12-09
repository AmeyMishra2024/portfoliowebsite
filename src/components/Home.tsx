import { Mail, Phone, Linkedin, Github, MapPin, Award, Code, Rocket } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Amey Mishra
              </h1>
              <p className="text-2xl text-cyan-400 mb-6">
                Aerospace & Aeronautical Engineering
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Dedicated high school student with a passion for leadership, robotics, and scientific exploration.
                Aspiring to pursue Aerospace and Aeronautical Engineering with the goal of graduating with a
                Master's Degree from MIT.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:amey.mishra2020@gmail.com"
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://linkedin.com/in/amey-mishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-700 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <Rocket size={120} className="mx-auto mb-4 text-cyan-400" />
                  <p className="text-gray-400">Professional Photo Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <Award className="mx-auto mb-4 text-cyan-600" size={48} />
            <h3 className="text-3xl font-bold text-slate-900 mb-2">4.75</h3>
            <p className="text-gray-600">GPA</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <Code className="mx-auto mb-4 text-cyan-600" size={48} />
            <h3 className="text-3xl font-bold text-slate-900 mb-2">1,000+</h3>
            <p className="text-gray-600">Volunteer Hours</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <Rocket className="mx-auto mb-4 text-cyan-600" size={48} />
            <h3 className="text-3xl font-bold text-slate-900 mb-2">$20K+</h3>
            <p className="text-gray-600">Funding Secured</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-100 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-cyan-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Certifications</h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:amey.mishra2020@gmail.com" className="text-slate-900 hover:text-cyan-600">
                  amey.mishra2020@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a href="tel:8324220725" className="text-slate-900 hover:text-cyan-600">
                  (832) 422-0725
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-slate-900">Houston, TX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-cyan-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/amey-mishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-cyan-600"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-lg p-8 mt-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-2">
            <p className="text-xl font-semibold">Harmony School of Advancement</p>
            <p className="text-cyan-100">Houston, Texas</p>
            <p className="text-cyan-100">Expected Graduation: May 2027</p>
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
