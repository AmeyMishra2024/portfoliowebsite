import { Users, DollarSign, Heart, Rocket, Award, Target } from 'lucide-react';

export default function Cosmobots() {
  const achievements = [
    {
      icon: DollarSign,
      value: '$20,000+',
      label: 'Funding Secured',
      color: 'from-sky-600 to-blue-600',
    },
    {
      icon: Heart,
      value: '1,000+',
      label: 'Volunteer Hours',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: Users,
      value: '2+',
      label: 'Teams Managed',
      color: 'from-sky-400 to-blue-500',
    },
    {
      icon: Rocket,
      value: '350',
      label: 'Personal Hours',
      color: 'from-sky-500 to-cyan-500',
    },
  ];

  const responsibilities = [
    {
      title: 'Community Outreach',
      description: 'Directed programs to increase STEM opportunities in underrepresented areas, bringing robotics education to underserved communities.',
      icon: Users,
    },
    {
      title: 'Team Management',
      description: 'Managed two robotics teams along with various STEM competition teams, coordinating schedules, resources, and strategies.',
      icon: Target,
    },
    {
      title: 'Fundraising',
      description: 'Secured over $20,000 in funding for diverse teams within the organization through grants, sponsorships, and community partnerships.',
      icon: DollarSign,
    },
    {
      title: 'Program Development',
      description: 'Developed and implemented educational programs, workshops, and training sessions for students of all skill levels.',
      icon: Rocket,
    },
  ];

  const programs = [
    {
      title: 'Food & Toy Drives',
      description: 'Coordinated multiple drives to support local families, collecting and distributing essential items to those in need.',
      impact: '100+ families served',
    },
    {
      title: 'STEM Education Programs',
      description: 'Brought hands-on robotics and engineering education to underrepresented areas, inspiring the next generation of engineers.',
      impact: '200+ students reached',
    },
    {
      title: 'Robotics Team Support',
      description: 'Provided mentorship, resources, and guidance to multiple FTC teams, helping them achieve competitive success.',
      impact: '3 teams supported',
    },
    {
      title: 'Community Workshops',
      description: 'Organized workshops on programming, CAD design, and robot building for students from diverse backgrounds.',
      impact: '50+ workshops conducted',
    },
  ];

  const teams = [
    {
      name: 'FTC 25679 The Cosmobots',
      role: 'Founder & Team Captain',
      description: 'Primary competitive team focused on FIRST Tech Challenge competitions',
      achievements: ['Ranked top 0.5% globally', 'League Championship winners', 'International Premier finalists'],
    },
    {
      name: 'FTC 8790',
      role: 'Team Captain',
      description: 'Established competitive team with strong regional performance',
      achievements: ['League finalist', 'Regional runner-up', 'International Premier finalists'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Cosmobots Robotics</h1>
          <p className="text-xl text-slate-700 mb-2">Founder & CEO</p>
          <p className="text-lg text-slate-700">June 2024 - Present | Houston, TX</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Cosmobots Robotics is a nonprofit organization dedicated to providing STEM education and robotics
                opportunities to students in underrepresented communities. Our mission is to inspire the next
                generation of engineers, scientists, and innovators through hands-on learning experiences.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                As Founder and CEO, I oversee all operations, from team management and fundraising to community
                outreach and program development, ensuring that every student has access to quality STEM education.
              </p>
            </div>
            <div className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <Rocket size={64} className="mx-auto mb-2 text-slate-400" />
                <p className="text-slate-500">Organization Photo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${achievement.color} text-white rounded-lg shadow-lg p-6 text-center`}>
                <Icon size={48} className="mx-auto mb-3" />
                <h3 className="text-3xl font-bold mb-2">{achievement.value}</h3>
                <p className="text-sm opacity-90">{achievement.label}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((resp, index) => {
              const Icon = resp.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="bg-sky-100 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={28} className="text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{resp.title}</h3>
                    <p className="text-slate-600">{resp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Community Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 hover:bg-sky-50 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {program.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Teams Managed</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
                  <p className="text-slate-700">{team.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4">{team.description}</p>
                  <h4 className="font-bold text-slate-900 mb-3">Team Achievements</h4>
                  <ul className="space-y-2">
                    {team.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <Award size={16} className="text-sky-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Volunteer Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">1,000+</div>
              <p className="text-slate-600">Total Volunteer Hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">350</div>
              <p className="text-slate-600">Personal Contribution Hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">200+</div>
              <p className="text-slate-600">Students Impacted</p>
            </div>
          </div>
          <p className="text-slate-700 text-center leading-relaxed">
            Through Cosmobots Robotics, we've created lasting impact in our community by providing STEM education,
            mentorship, and support to students who might not otherwise have access to these opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Outreach Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-200 rounded-lg aspect-square flex items-center justify-center hover:bg-slate-300 transition-colors">
                  <div className="text-center">
                    <Users size={32} className="mx-auto mb-1 text-slate-400" />
                    <p className="text-slate-500 text-xs">Outreach {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Team Activities</h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-200 rounded-lg aspect-square flex items-center justify-center hover:bg-slate-300 transition-colors">
                  <div className="text-center">
                    <Rocket size={32} className="mx-auto mb-1 text-slate-400" />
                    <p className="text-slate-500 text-xs">Activity {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-white rounded-lg shadow-2xl shadow-sky-100 p-8 text-slate-900">
          <h2 className="text-3xl font-bold mb-4">Looking Forward</h2>
          <p className="text-lg text-slate-700 mb-6">
            Cosmobots Robotics continues to grow, expanding our reach to more communities and providing even more
            opportunities for students to explore STEM fields. Our goal is to create a lasting impact by nurturing
            the next generation of innovators and problem-solvers.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Short-term Goals</h3>
              <ul className="space-y-1 text-slate-700">
                <li>- Expand to 3 additional schools</li>
                <li>- Secure $30K in funding for 2025</li>
                <li>- Launch summer robotics camp</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Long-term Vision</h3>
              <ul className="space-y-1 text-slate-700">
                <li>- Establish permanent makerspaces</li>
                <li>- Create scholarship programs</li>
                <li>- Partner with local universities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}











