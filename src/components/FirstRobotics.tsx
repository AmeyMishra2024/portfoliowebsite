import { Trophy, Users, Code, Wrench, Target, Award } from 'lucide-react';

export default function FirstRobotics() {
  const team8790Achievements = [
    'League Finalist and Regional Runner-up',
    'League Connect Award Winner (3x)',
    'Regionals Qualifier (3x)',
    'Top 0.5% of over 8,000 global teams',
    'First place in Houston event',
    'League Championship winner',
    'Regional playoffs participant',
    'Finalist at Carolinas International Premier event',
    'Participated in Michiana International Premier Playoffs',
  ];

  const team25679Achievements = [
    'Founded and captained FTC 25679',
    'Serving as mechanical lead since 2024',
    'Extensive software development experience',
    'Custom algorithm development',
    'Advanced robotics mechanisms',
  ];

  const technicalSkills = [
    {
      title: 'Mechanical Design',
      description: 'Effective design strategies for actuator use, working within constraints to create robots that effectively solve challenges, complex hardware mechanisms',
    },
    {
      title: 'Software Development',
      description: 'Adaptive inverse kinematics, custom path planner algorithms, Square root PID experimentation, custom library development for mechanism implementation',
    },
    {
      title: 'Problem Solving',
      description: 'Strategic approach to game analysis, constraint-based design optimization, iterative development and testing',
    },
  ];

  const robotShowcase = [
    {
      name: 'Cosmobots 25679: Modular Arm Bot',
      focus: 'Adaptive arm with inverse kinematics and custom path planner for precise scoring and rapid cycling.',
      design: '3DOF shoulder-elbow-wrist stack, compliant intake, square-root PID tuning, and quick-swap end effector plates.',
    },
    {
      name: 'FTC 8790: Low CG Cycler',
      focus: 'Low center-of-gravity chassis built for fast cycles and stability under defense.',
      design: 'Belt-driven lift, wide intake funnel, reinforced drivetrain rails, and optimized weight distribution for acceleration.',
    },
    {
      name: 'Autonomous Skills Bot',
      focus: 'Built to maximize autonomous points with reliable sensor fusion and repeatable trajectories.',
      design: 'AprilTag + IMU fusion, custom spline pathing, and field-oriented drive tuning for tight accuracy tolerances.',
    },
    {
      name: 'Off-Season R&D Prototype',
      focus: 'Testbed for new actuators and controls before season kickoff.',
      design: 'Swappable gearbox bays, multi-config superstructure, and telemetry overlays to accelerate iteration.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="bg-gradient-to-r from-slate-950 via-sky-900 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">FIRST Tech Challenge</h1>
          <p className="text-xl text-sky-200">
            Competitive robotics excellence through innovation and teamwork
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-lg shadow-2xl shadow-sky-900/40 p-6 text-center">
            <Trophy size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Top 0.5%</h3>
            <p className="text-sky-100">Global Ranking</p>
          </div>
          <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-lg shadow-2xl shadow-sky-900/40 p-6 text-center">
            <Award size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">3x Winner</h3>
            <p className="text-sky-100">Connect Award</p>
          </div>
          <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-lg shadow-2xl shadow-sky-900/40 p-6 text-center">
            <Users size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Team Captain</h3>
            <p className="text-sky-100">Leadership Role</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-sky-700 text-white p-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Trophy size={32} />
                FTC 8790
              </h2>
              <p className="text-sky-100 mt-2">Team Captain | League Finalist</p>
            </div>
            <div className="p-6">
              <div className="bg-sky-50 rounded-lg p-4 mb-6">
                <div className="aspect-video bg-slate-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <Wrench size={64} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-slate-500">Team 8790 Robot Photo</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Achievements</h3>
              <ul className="space-y-2">
                {team8790Achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-700 text-white p-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Code size={32} />
                FTC 25679 The Cosmobots
              </h2>
              <p className="text-blue-100 mt-2">Founder | Team Captain | Mechanical Lead</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="aspect-video bg-slate-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <Target size={64} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-slate-500">Team 25679 Robot Photo</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Role & Contributions</h3>
              <ul className="space-y-2">
                {team25679Achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="border-l-4 border-sky-600 pl-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.title}</h3>
                <p className="text-slate-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Competition Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center hover:bg-slate-300 transition-colors">
                <div className="text-center">
                  <Trophy size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-500 text-sm">Competition Photo {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mt-12 border border-sky-100/40">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Robots & Design Notes</h2>
            <p className="text-slate-600 text-sm">Drop photos for each bot in the placeholders.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {robotShowcase.map((robot, index) => (
              <div key={robot.name} className="bg-slate-50 rounded-lg p-6 border border-sky-100/50 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <div className="aspect-video rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                  Robot Image {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{robot.name}</h3>
                  <p className="text-slate-700">{robot.focus}</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-sky-100/60">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {robot.design}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
