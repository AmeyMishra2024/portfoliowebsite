import { Award, Building2, Zap, Medal, Trophy } from 'lucide-react';

export default function ScienceOlympiad() {
  const regionalWins = [
    { event: 'Tower', years: '9th & 10th Grade', count: 2 },
    { event: 'Air Trajectory', years: '9th & 10th Grade', count: 2 },
    { event: 'Flight', years: '9th Grade', count: 1 },
    { event: 'Helicopter', years: '10th Grade', count: 1 },
    { event: 'Electric Vehicle', years: '10th Grade', count: 1 },
  ];

  const stateWins = [
    { event: 'Wheeled Vehicle', place: '3rd Place', year: 'State' },
    { event: 'Solar Power', place: '4th Place', year: 'State' },
  ];

  const allMedals = [
    { type: 'Regional Gold', count: 6 },
    { type: 'Regional Silver', count: 1 },
    { type: 'Regional Bronze', count: 4 },
    { type: 'State Gold', count: 1 },
    { type: 'State Bronze', count: 2 },
  ];

  const skills = [
    {
      title: 'Engineering Design',
      description: 'Advanced CAD modeling, structural analysis, iterative prototyping, and optimization of building events',
      icon: Building2,
    },
    {
      title: 'Physics Application',
      description: 'Trajectory calculations, aerodynamics testing, energy system optimization, and precision engineering',
      icon: Zap,
    },
    {
      title: 'Problem Solving',
      description: 'Analytical thinking, constraint-based optimization, rapid testing and iteration, data-driven improvements',
      icon: Award,
    },
  ];

  const eventShowcase = [
    {
      name: 'Tower',
      years: '9th & 10th Grade',
      highlight: 'Lightweight truss geometry tuned for max efficiency; optimized glue joints via test rigs.',
    },
    {
      name: 'Air Trajectory',
      years: '9th & 10th Grade',
      highlight: 'Consistent launch using calibrated spring constants and iterative angle/payload testing.',
    },
    {
      name: 'Helicopter',
      years: '10th Grade',
      highlight: 'Dual-rotor rubber-powered design focusing on lift duration and balanced mass distribution.',
    },
    {
      name: 'Electric Vehicle',
      years: '10th Grade',
      highlight: 'Precision timing with encoder feedback and friction-managed wheelbase for straight runs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50 text-slate-900">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Science Olympiad</h1>
          <p className="text-xl text-slate-700">
            Team President | Engineering Events Specialist
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-sky-100 to-white text-slate-900 border border-sky-200 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Trophy size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">President</h3>
            <p className="text-slate-700">2 Years</p>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-white text-slate-900 border border-sky-200 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Medal size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">7x</h3>
            <p className="text-slate-700">Regional 1st Place</p>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-white text-slate-900 border border-sky-200 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Award size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">1x</h3>
            <p className="text-slate-700">State Gold Medal</p>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-white text-slate-900 border border-sky-200 rounded-lg shadow-lg shadow-sky-100 p-6 text-center">
            <Building2 size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Building</h3>
            <p className="text-slate-700">Events Specialist</p>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Leadership Role</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="aspect-square bg-slate-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <Award size={64} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-slate-500">Team Photo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Harmony Science Olympiad Team President
              </h3>
              <p className="text-slate-700 mb-4">
                Led the Harmony Science Olympiad team for two consecutive years (9th & 10th grade),
                overseeing team strategy, member development, and competition preparation.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700">
                    Organized practice sessions and coordinated with event coaches
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700">
                    Mentored newer team members in engineering and building events
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700">
                    Developed team strategies for maximizing points across all events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold">Regional Championships</h2>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1st Place Finishes</h3>
              <div className="space-y-3">
                {regionalWins.map((win, index) => (
                  <div key={index} className="bg-sky-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900">{win.event}</h4>
                        <p className="text-sm text-slate-600">{win.years}</p>
                      </div>
                      <div className="bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {win.count}x
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6">
              <h2 className="text-2xl font-bold">State Championships</h2>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Top Finishes</h3>
              <div className="space-y-3">
                {stateWins.map((win, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <h4 className="font-bold text-slate-900 text-lg">{win.event}</h4>
                    <p className="text-blue-700 font-semibold">{win.place}</p>
                    <p className="text-sm text-slate-600">{win.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Skills Developed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.title}</h3>
                  <p className="text-slate-600">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mb-16 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Medal Count</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {allMedals.map((medal, index) => (
              <div key={index} className="text-center bg-slate-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-slate-900">{medal.count}</div>
                <div className="text-sm text-slate-600 mt-1">{medal.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Competition Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center hover:bg-slate-300 transition-colors">
                <div className="text-center">
                  <Medal size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-500 text-sm">Event Photo {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mt-12 border border-sky-100/40">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Event Builds</h2>
            <p className="text-slate-600 text-sm">Add photos for each build in the placeholders.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventShowcase.map((event, index) => (
              <div key={event.name} className="bg-slate-50 rounded-lg p-5 border border-sky-100/50 hover:shadow-lg transition-shadow flex flex-col gap-3">
                <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 text-sm">
                  Event Image {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{event.name}</h3>
                  <p className="text-slate-600 text-sm">{event.years}</p>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{event.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
