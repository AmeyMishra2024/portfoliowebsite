import { Activity, Award, Code, Gauge, Navigation, ShieldCheck, Target, Trophy, Users } from 'lucide-react';
import type { SyntheticEvent } from 'react';

export default function Drone() {
  const droneGallery = [
    { title: 'Drone Regional Champions', image: '/images/drone-regional-champions.jpg' },
  ];

  const metrics = [
    {
      icon: Trophy,
      value: 'Regional',
      label: 'Skills + All-Around Champion',
    },
    {
      icon: Navigation,
      value: '75 pts',
      label: 'Documented competition autonomous',
    },
    {
      icon: Target,
      value: '97%',
      label: 'Reported obstacle-avoidance accuracy',
    },
    {
      icon: Gauge,
      value: '125 pts',
      label: 'Time Warp piloting progression',
    },
  ];

  const responsibilities = [
    'Led autonomous programming, flight testing, piloting, strategy, documentation, and troubleshooting for HSA Hawks 96610A.',
    'Trained the navigator, copilot, and teammates while coordinating match communication and alliance strategy.',
    'Recorded flight data, failures, repairs, controller settings, and performance trends across practice cycles.',
    'Mentored less-experienced drone teams, including sister team 96610B and an elementary-school captain.',
  ];

  const platformDetails = [
    'Drone: CoDRONE EDU',
    'Controller: CoDRONE Controller',
    'Programming: Python',
    'Development: CoDRONE EDU Python environment',
    'Sensors: gyroscope, accelerometer, barometer, optical flow, front range finder, bottom range finder, and dual underside color sensors',
    'Primary limitations: drift, battery-dependent motion, noisy color sensing, and no direct position tracking',
  ];

  const autonomyFeatures = [
    'Autonomous paths through arches, keyholes, tunnels, loops, and landing targets',
    'Color recognition with LED output matched to landing-pad colors',
    'Height feedback for vertical correction during flight',
    'Front distance-sensor relocalization after major movement events',
    'Obstacle-avoidance routines, automated takeoff, and automated landing sequences',
    'Battery compensation and IMU correction experiments retained only when they improved reliability',
  ];

  const controlMethods = [
    {
      title: 'Height Feedback',
      description:
        'Used bottom range sensing to correct toward a target height. The final routine intentionally corrected upward from below the target to reduce oscillation.',
    },
    {
      title: 'Distance Relocalization',
      description:
        'Used the front range finder to reset position against field obstacles after important movements, balancing correction accuracy against match time.',
    },
    {
      title: 'Battery Compensation',
      description:
        'Tested a battery-level constant to reduce discharge-related variation, then removed it as the primary method because it could not correct air-current drift.',
    },
    {
      title: 'IMU Correction',
      description:
        'Evaluated pitch, yaw, and roll feedback. Unstable heading correction caused overcorrection, so it was paused to preserve a more reliable routine.',
    },
  ];

  const programmingResults = [
    'Built and iterated Python autonomous programs for repeatable competition runs',
    'Produced a 100-point autonomous routine during testing',
    'Recorded autonomous practice scores of 90-100 points',
    'Logged only three obstacle collisions across 25 autonomous test runs',
    'Only one of 25 logged autonomous runs resulted in complete failure',
    'Improved operating range from a narrow 65% battery window to roughly 60%-100% battery',
  ];

  const pilotingFocus = [
    'High-speed turning and rapid altitude changes',
    'Precision keyhole, arch, and small-opening navigation',
    'Blackout-area navigation and drift recovery',
    'Cube and bullseye landings, with most tested landings completed in under five seconds',
    'Controller response tuning for precision obstacles versus open-field speed',
  ];

  const strategyPoints = [
    'Built flexible teamwork plans around alliance partner strengths at loading stations, drop zones, pillars, and landing targets.',
    'Shifted the final 20 seconds toward Time Warp paths, endgame timing, and bullseye landing opportunities.',
    'Practiced with sister team 96610B, improving alliance scores from 85 to 157 points across five iterative runs.',
  ];

  const safetyItems = [
    'FAA TRUST certification and recreational-flyer requirements',
    'RADC CoDRONE certification',
    'Preflight inspection of drones, propellers, guards, batteries, and backup equipment',
    'Crash, repair, and failure logging, including three major incidents used for prevention reviews',
  ];

  const placeholderImage = '/images/placeholder.svg';

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = placeholderImage;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50 text-slate-900">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Competitive Drone Autonomy</h1>
          <p className="text-xl text-slate-800 max-w-4xl">
            Pilot-Captain and technical lead for HSA Hawks 96610A, focused on repeatable autonomous flight,
            competition piloting, sensor-based correction, and alliance strategy for the REC Foundation Aerial Drone
            Competition.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="bg-white rounded-lg border border-sky-100 shadow-lg p-6 text-center">
                <Icon className="mx-auto mb-3 text-sky-700" size={48} />
                <h3 className="text-2xl font-bold text-slate-900">{metric.value}</h3>
                <p className="text-slate-700">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-sky-700" />
                <h2 className="text-3xl font-bold text-slate-900">Role & Challenge</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                The central engineering problem was consistency. The CoDRONE EDU could not directly track field
                position, so air currents, battery voltage, sensor error, propeller condition, and accumulated drift
                could make identical commands produce different flight paths.
              </p>
              <ul className="space-y-2 text-slate-800">
                {responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-sky-100/60">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Platform</h3>
              <ul className="space-y-2 text-slate-700">
                {platformDetails.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Code size={16} className="text-sky-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <div className="flex items-center gap-3 mb-4">
              <Navigation className="text-sky-700" />
              <h2 className="text-3xl font-bold text-slate-900">Autonomous Flight System</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              The autonomous route handled takeoff, obstacle navigation, color detection, LED response, reverse paths,
              tunnel and arch traversal, keyhole passes, and landing-pad placement.
            </p>
            <ul className="space-y-2 text-slate-800">
              {autonomyFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-sky-700" />
              <h2 className="text-3xl font-bold text-slate-900">Programming Results</h2>
            </div>
            <ul className="space-y-2 text-slate-800">
              {programmingResults.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Control Methods Evaluated</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {controlMethods.map((method) => (
              <div key={method.title} className="border-l-4 border-sky-600 pl-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="text-sky-700" />
              <h2 className="text-3xl font-bold text-slate-900">Piloting Development</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Time Warp piloting improved from 45 to 125 points through repeated practice, controller tuning, and
              course-specific recovery work. Separate practice records also documented high cube-landing and blackout
              area success rates under a different scoring format.
            </p>
            <ul className="space-y-2 text-slate-800">
              {pilotingFocus.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-sky-700" />
              <h2 className="text-3xl font-bold text-slate-900">Competition Strategy</h2>
            </div>
            <ul className="space-y-3 text-slate-800">
              {strategyPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-sky-700" />
              <h2 className="text-3xl font-bold text-slate-900">Safety & Certifications</h2>
            </div>
            <ul className="space-y-2 text-slate-800">
              {safetyItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-sky-700" />
              <h2 className="text-3xl font-bold text-slate-900">Mentorship & Outreach</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              I helped mentor two developing drone teams, supported 96610B as a regional alliance partner, and guided
              an elementary-school captain whose team reached regional semifinals and qualified for championship-level
              competition through world skills ranking. I also demonstrated drone and engineering work to NASA
              representatives, school leadership, scholarship delegates, and community visitors.
            </p>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {droneGallery.map((photo) => (
              <div
                key={photo.title}
                className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-200">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
