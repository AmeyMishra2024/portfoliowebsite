import { Trophy, Users, Code, Award } from 'lucide-react';
import type { SyntheticEvent } from 'react';

export default function FirstRobotics() {
  const team8790Achievements = [
    'League finalist and regional runner-up (captain)',
    'Houston Johnson League Championship winning alliance',
    'Connect Award winner (3x)',
    'Regionals qualifier (3x)',
    'Led CenterStage strategy and drive team',
  ];

  const team25679Achievements = [
    'League Finalist and Regional Runner-up',
    'International premier event finalists',
    'Regionals Qualifier (3x)',
    'Top 0.5% of over 8,000 global teams',
    'First place in Houston event',
    'League Championship winner',
    'Regional playoffs participant',
    'Finalist at Carolinas International Premier event',
    'Participated in Michiana International Premier Playoffs',
  ];

  const technicalSkills = [
    {
      title: 'Mechanical Design',
      description:
        'Effective design strategies for actuator use, working within constraints to create robots that effectively solve challenges, complex hardware mechanisms',
    },
    {
      title: 'Software Development',
      description:
        'Adaptive inverse kinematics, custom path planner algorithms, Square root PID experimentation, custom library development for mechanism implementation',
    },
    {
      title: 'Problem Solving',
      description:
        'Strategic approach to game analysis, constraint-based design optimization, iterative development and testing',
    },
  ];

  const robotShowcase = [
    {
      name: 'Into the Deep v1',
      image: '/images/itd1-bot.png',
      focus: 'Linear extensions + active intakes with multi-DOF outtake driven by inverse kinematics.',
      design:
        'Dual linear extension carriage, active intake with staged transfer, multi-axis outtake tuned with IK for accurate placement under load.',
    },
    {
      name: 'CenterStage Final Bot',
      image: '/images/csfinalbot.png',
      focus: 'Slide-powered hang with rail-based transfer and virtual 4-bar intake for fast cycles.',
      design:
        'Telescoping slides for endgame hang, rail-guided transfer channel, virtual 4-bar on intake for controlled approach angles.',
    },
    {
      name: 'Into the Deep Final Bot',
      image: '/images/carolinas-finalist-bot.png',
      focus: 'Carbon-fiber build with efficient intake/transfer/lift tuned for high tele-op scoring.',
      design:
        'CF paneling for stiffness and weight savings, low-latency transfer path, optimized lift gearing for rapid scoring runs.',
    },
    {
      name: 'Decode Final Bot',
      image: '/images/auradecode-bot.png',
      focus: 'Carbon-fiber shooter tuned for parabolic trajectories and early-season WR solo auto.',
      design:
        'CF superstructure, flywheel tuning for arc optimization, auto routines focused on consistency and speed.',
    },
  ];

  const photoGallery = [
    { title: 'FTC Team Pic', image: '/images/ftc-team.jpg' },
    { title: 'Page Header Pic', image: '/images/page-header.jpg' },
    { title: 'FTC League Winner', image: '/images/ftc-league-winner.jpg' },
    { title: 'Post FTC Finals', image: '/images/post-ftc-finals.jpg' },
    { title: 'FTC International Alliance Selections', image: '/images/ftc-international-alliance.jpg' },
    { title: 'Rocket Models (Other Projects)', image: '/images/rocket-models.jpg' },
    { title: 'SciOly Competition Picture', image: '/images/scioly-competition.jpg' },
    { title: 'FTC Random Pic', image: '/images/ftc-random.jpg' },
    { title: 'Premier International Finals FTC', image: '/images/premier-international-finals.jpg' },
    { title: 'FTC International Finalist Pics', image: '/images/ftc-international-finalist.jpg' },
    { title: 'Humanoid Bot', image: '/images/humanoid-bot.jpg' },
    { title: 'Meeting with Astronaut', image: '/images/meeting-with-astronaut.jpg' },
    { title: 'FTC Rookie Year Pic', image: '/images/ftc-rookie-year.jpg' },
    { title: 'Battlebot Image 2', image: '/images/battlebot-2.jpg' },
    { title: 'VEX Bot', image: '/images/vexbot.jpg' },
    { title: 'Michiana International Elims', image: '/images/michiana-elims.jpg' },
    { title: 'SciOly Comp Pic 2', image: '/images/scioly-comp-2.jpg' },
    { title: 'SciOly Tower', image: '/images/scioly-tower.jpg' },
    { title: 'SciOly Flight', image: '/images/scioly-flight.jpg' },
    { title: 'Humanoid Robot Arm', image: '/images/humanoid-robot-arm.jpg' },
    { title: 'Battlebot Image 1', image: '/images/battlebot-1.jpg' },
    { title: 'Robot Tour', image: '/images/robot-tour.jpg' },
    { title: 'FTC Regionals Setup Pics', image: '/images/ftc-regionals-setup.jpg' },
    { title: 'SciOly Comp Pic', image: '/images/scioly-comp.jpg' },
    { title: 'Drone Regional Champions', image: '/images/drone-regional-champions.jpg' },
    { title: 'More Rockets', image: '/images/more-rockets.jpg' },
    { title: 'Rubiks Cube Competition Picture', image: '/images/rubiks-cube-competition.jpg' },
    { title: 'Electric Vehicle', image: '/images/electric-vehicle.jpg' },
    { title: 'Electric Car', image: '/images/electric-car.jpg' },
  ];

  const placeholderImage = '/images/placeholder.svg';

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = placeholderImage;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50 text-slate-900">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">FIRST Tech Challenge</h1>
          <p className="text-xl text-slate-700">
            Competitive robotics excellence through innovation and teamwork
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-sky-100 to-white border border-sky-200 text-slate-900 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Trophy size={48} className="mx-auto mb-3 text-sky-700" />
            <h3 className="text-2xl font-bold mb-2">Top 0.5%</h3>
            <p className="text-slate-700">Global Ranking</p>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-white border border-sky-200 text-slate-900 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Award size={48} className="mx-auto mb-3 text-sky-700" />
            <h3 className="text-2xl font-bold mb-2">International Finalists</h3>
            <p className="text-slate-700">Premier event appearances</p>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-white border border-sky-200 text-slate-900 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Users size={48} className="mx-auto mb-3 text-sky-700" />
            <h3 className="text-2xl font-bold mb-2">Team Captain</h3>
            <p className="text-slate-700">Leadership Role</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Trophy size={32} />
                FTC 8790
              </h2>
              <p className="text-sky-100 mt-2">Team Captain | League Finalist</p>
            </div>
            <div className="p-6">
              <div className="bg-sky-50 rounded-lg p-4 mb-6">
                <div className="aspect-video bg-slate-200 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/csfinalbot.png"
                    alt="FTC 8790 final robot"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
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

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Code size={32} />
                FTC 25679 The Cosmobots
              </h2>
              <p className="text-blue-100 mt-2">Founder | Team Captain | Mechanical Lead</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="aspect-video bg-slate-200 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/decodehighoprbot.png"
                    alt="FTC 25679 Cosmobots robot"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Achievements</h3>
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

        <div className="bg-white/90 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Season Photo Wall</h2>
          <p className="text-slate-600 mb-6">Drop your photos into /public/images matching the names below.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photoGallery.map((photo) => (
              <div key={photo.title} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-200 flex items-center justify-center">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-4">
                  <p className="text-slate-800 font-semibold">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalSkills.map((skill) => (
              <div key={skill.title} className="border-l-4 border-sky-600 pl-4">
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
              <div
                key={i}
                className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center hover:bg-slate-300 transition-colors text-slate-600"
              >
                <div className="text-center">
                  <Trophy size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-600 text-sm">Competition Photo {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Design & Rendering</h2>
            <p className="text-slate-600 text-sm">Michiana render - CAD + visualization workflow.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
              <img
                src="/images/michianarender.png"
                alt="Michiana render"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-sky-100/60">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">CAD + Rendering Skills</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Built full assemblies with carbon fiber panels, linear extensions, custom gearboxes, and multi-DOF
                mechanisms, then rendered for sponsor-facing media and design reviews.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>- Fusion 360 multi-body workflows with parametric constraints</li>
                <li>- CAM-ready layouts and BOM discipline for quick fabrication</li>
                <li>- Material/lighting setups for clear mechanism visualization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Robots & Design Notes</h2>
            <p className="text-slate-600 text-sm">Images pull from /public/images/* - drop your photos there.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {robotShowcase.map((robot) => (
              <div
                key={robot.name}
                className="bg-slate-50 rounded-lg p-6 border border-sky-100/50 flex flex-col gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video rounded-lg bg-slate-200 overflow-hidden flex items-center justify-center text-slate-500 text-sm">
                  <img
                    src={robot.image}
                    alt={robot.name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{robot.name}</h3>
                  <p className="text-slate-700">{robot.focus}</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-sky-100/60">
                  <p className="text-slate-700 text-sm leading-relaxed">{robot.design}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

