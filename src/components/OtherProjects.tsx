import { Brain, Satellite, TreePine, Plane, Globe, Gauge, Users, Target, Cpu, Award } from 'lucide-react';
import type { SyntheticEvent } from 'react';

export default function OtherProjects() {
  const projects = [
    {
      title: 'Electric Car – Greenpower USA',
      icon: Gauge,
      color: 'from-emerald-700 to-teal-600',
      image: '/images/electric-car.jpg',
      description:
        'Standalone Greenpower build focused on efficiency and endurance scoring. Managed weight, aero drag, and driveline reliability within kit constraints while coordinating fabrication and race operations.',
      technologies: ['Greenpower electrical system', 'Telemetry logging', 'Drivetrain optimization', 'Race strategy'],
      features: [
        'Optimized chain tensioning, gearing, and tire selection for efficiency targets over endurance heats',
        'Driver change and pit-stop process designed for minimal downtime with safety/inspection checklists',
        'Battery management and cooling plan to keep voltage sag predictable late in runs',
      ],
      outcomes:
        'Met design-to-track goals under Greenpower rules while leading the team through test days, inspections, and race execution.',
    },
    {
      title: 'Autonomous Drone Platforms',
      icon: Satellite,
      color: 'from-sky-700 to-cyan-600',
      image: '/images/drone-regional-champions.jpg',
      description:
        'Custom UAVs for RADC with 3D-printed airframes, waypoint navigation, and sensor fusion for reliable field demos.',
      technologies: ['Python', 'IMU + optical flow', 'Waypoint navigation', '3D printing'],
      features: [
        'Autonomy stack with IMU fusion and altitude hold tuned for competition flight envelopes',
        'Carbon-reinforced prints and modular arms for quick swap after crashes',
        'Ground-station telemetry for live tuning and fail-safe triggers',
      ],
      outcomes:
        'Regional champion platform validated through repeated mission runs and post-flight log reviews.',
    },
    {
      title: 'AI Humanoid Robot',
      icon: Brain,
      color: 'from-sky-700 to-blue-700',
      image: '/images/humanoid robot.jpg',
      links: [
        { label: 'Project demo video', href: 'https://www.youtube.com/watch?v=bobJpkbLoXU' },
        { label: 'Project site', href: 'https://sites.google.com/view/stemsos3dprintedrobothead/pbl-project' },
        { label: 'Facial recognition system', href: 'https://sites.google.com/view/stem-sos-facial-recognition/home' },
      ],
      description:
        'Humanoid platform combining expressive motion, real-time perception, and natural interaction. Led the full stack across hardware, low-level firmware, computer vision, and AI behavior.',
      technologies: ['Arduino', 'OpenCV', 'OpenAI API', 'Python', 'C++'],
      features: [
        'Arduino-driven low-level motor control for smooth joint trajectories and current-safe actuation',
        'OpenCV pipelines for facial recognition, gaze alignment, and real-time gesture cues',
        'AI-driven interaction loop that adapts tone and responses to user behavior instead of scripted dialogs',
        'Modular behaviors that can be redeployed to future humanoid concepts',
      ],
      outcomes:
        'Integrated end-to-end perception and control stack with field demos that highlight adaptive behaviors.',
    },
    {
      title: 'Adaptive Inverse Kinematics Robot Arm',
      icon: Cpu,
      color: 'from-indigo-700 to-sky-600',
      image: '/images/humanoid-robot-arm.jpg',
      description:
        'Research arm using adaptive inverse kinematics for precise reach tasks and humanoid manipulation studies. Focused on accuracy under changing payloads and continuous retargeting.',
      technologies: ['Adaptive IK solvers', 'Precision encoders', 'Embedded control', 'Mechanism design'],
      features: [
        'Real-time IK updates with workspace limits and collision-aware envelopes',
        'Closed-loop control tuned for low backlash and consistent end-effector positioning',
        'Designed for integration with humanoid research platforms and tele-op assist modes',
      ],
      outcomes:
        'Validated adaptive IK routines with repeatable reach accuracy and a control stack ready for humanoid research experiments.',
    },
    {
      title: 'FTC 25679 – The Cosmobots',
      icon: Users,
      color: 'from-blue-700 to-sky-600',
      image: '/images/decodehighoprbot.png',
      link: 'https://sites.google.com/d/1Hadu3TdUw9_hliONlm7TmsH-GP5G60U6/p/1We2B4N7u3Sd1w5XnVvWt51gqpUO7Bjyo/edit',
      description:
        'Founded and captained FTC 25679, combining mechanical leadership with software strategy to reach top global rankings and international premier events.',
      technologies: ['Fusion 360', 'FTC SDK', 'Motion planning', 'Outreach ops'],
      features: [
        'Led drivetrain + outtake mechanisms with reliability-first CAD and pit-readiness checks',
        'Developed IK-driven outtake software, tuning square-root PID and feedforward profiles',
        'Built outreach pipeline and sponsor reporting that funded growth and travel',
        'Coordinated drivers, scouts, and pit crew for consistent elimination performance',
      ],
      outcomes:
        'Top 0.5% global ranking with international premier finals appearances; outreach scaled funding and student access.',
    },
    {
      title: 'VEX Robotics',
      icon: Target,
      color: 'from-red-600 to-orange-500',
      image: '/images/vexbot.jpg',
      description:
        'Competitive VEX builds emphasizing fast cycle drivetrains, clean wiring for serviceability, and autonomous routines tuned for match consistency.',
      technologies: ['VEX V5', 'Path planning', 'PID control', 'Driver practice frameworks'],
      features: [
        'Iterated drive bases for acceleration vs. traction trade-offs with robust gusseting',
        'Auton scripting with sensor resets and trajectory mirroring for both alliances',
        'Match-prep checklists to reduce failures between quals and eliminations',
      ],
      outcomes: 'Delivered reliable match performance with a repeatable codebase for new team members.',
    },
    {
      title: 'Science Olympiad Engineering',
      icon: Award,
      color: 'from-amber-600 to-yellow-500',
      image: '/images/electric-vehicle.jpg',
      description:
        'Building-event lead for Storm the Castle, Tower, Trajectory, Flight, and Electric Vehicle. Focused on structural efficiency, launch repeatability, and data-driven iteration.',
      technologies: ['CAD', 'Materials testing', 'Data logging', 'Competition strategy'],
      features: [
        'State-winning Storm the Castle launcher tuned with payload calibration and angle controls',
        'Tower efficiency testing with joint strength fixtures and compression rigs',
        'Flight/Trajectory builds refined through launch data collection and variance analysis',
      ],
      outcomes: 'State podiums across events with reusable documentation for younger builders.',
    },
    {
      title: 'ORCA - Orbital Recycling and Construction Array',
      icon: Satellite,
      color: 'from-blue-800 to-cyan-700',
      image: '/images/rocket-models.jpg',
      link: 'https://orcadebriscleanup.space/',
      description:
        'International Space Apps Challenge project emphasizing orbital debris analysis, neural networks, and mission design for capture and recycling.',
      technologies: ['Python', 'TensorFlow', 'Orbital mechanics', 'CAD prototyping'],
      features: [
        'Neural network pipeline to prioritize debris targets using orbital parameters and risk scoring',
        'Rendezvous planning and delta-v budgeting grounded in orbital mechanics',
        'Systems-level architecture balancing capture, processing, and re-deployment concepts',
      ],
      outcomes: 'Global Nominee honors with continued refinement of the debris analytics pipeline.',
      video: 'https://www.youtube.com/embed/dITm2Ox0KxU',
    },
    {
      title: 'EcoScape Sustainable Architecture',
      icon: TreePine,
      color: 'from-emerald-700 to-lime-600',
      image: '/images/more-rockets.jpg',
      description:
        'Sustainable architecture and systems-planning project coupling environmental data analysis with adaptable urban design.',
      technologies: ['Environmental Analysis', 'Urban Planning', 'CAD', 'Data Analytics'],
      link: 'https://sites.google.com/view/ecoscape-ecybermission/home',
      features: [
        'Utilized environmental data for informed design decisions',
        'Analyzed current ecological issues and solutions',
        'Created configurations adaptable to various climates',
        'Comprehensive sustainable infrastructure planning',
      ],
      outcomes: 'Texas State Finalist in the 2024 Ecybermission competition',
    },
    {
      title: 'Radio-Controlled 3D Printed Airplane',
      icon: Plane,
      color: 'from-sky-600 to-blue-500',
      description:
        'CAD designed and 3D printed aircraft for aerodynamics testing and data collection, implementing control surfaces for flight testing.',
      technologies: ['Fusion 360', '3D Printing', 'RC Systems', 'Aerodynamics'],
      features: [
        'Complete CAD design optimized for 3D printing',
        'Integration of flaps, spoilers, and control surfaces',
        'Aerodynamic data collection systems',
        'Iterative design and testing process',
      ],
      outcomes: 'Gained practical flight experience and collected valuable aerodynamic performance data for future aircraft designs.',
    },
    {
      title: 'NASA Exoplanet Analysis with Neural Networks',
      icon: Globe,
      color: 'from-indigo-700 to-sky-700',
      description:
        'Utilized AI and neural networks to search through NASA exoplanet datasets to identify potential candidates for habitable exoplanets.',
      technologies: ['Python', 'TensorFlow', 'Neural Networks', 'Data Science'],
      features: [
        'Custom CNN (Convolutional Neural Network) development',
        'Processing of NASA public datasets',
        'Pattern recognition for exoplanet identification',
        'Improved accuracy through iterative training',
      ],
      outcomes: 'Enhanced accuracy and consistency of exoplanet candidate identification through custom machine learning models.',
    },
  ];

  const projectVideos = projects
    .filter((project) => project.video)
    .map((project) => ({ title: project.title, url: project.video as string }));

  const combatRobotics = [
    {
      title: 'Drive System Shakedown',
      image: '/images/battlebot-1.jpg',
      note: 'Tanky drive with reinforced rails and quick-change wheels for pit-side swaps.',
    },
    {
      title: 'Impact-Ready Chassis',
      image: '/images/battlebot-2.jpg',
      note: 'Armored frame and low-CG layout stress-tested for repeated hits.',
    },
  ];

  const additionalGallery = [
    { title: 'Greenpower Electric Car', image: '/images/electric-car.jpg' },
    { title: 'Drone Regional Champions', image: '/images/drone-regional-champions.jpg' },
    { title: 'Humanoid Robot', image: '/images/humanoid robot.jpg' },
    { title: 'Adaptive IK Arm', image: '/images/humanoid-robot-arm.jpg' },
    { title: 'VEX Bot', image: '/images/vexbot.jpg' },
    { title: 'Combat Robot (Durability)', image: '/images/battlebot-1.jpg' },
    { title: 'Combat Robot (Drive)', image: '/images/battlebot-2.jpg' },
    { title: 'Cosmobots Outtake', image: '/images/decodehighoprbot.png' },
    { title: 'Science Olympiad EV', image: '/images/electric-vehicle.jpg' },
    { title: 'Meeting with Astronaut', image: '/images/meeting-with-astronaut.jpg' },
  ];

  const placeholderImage = '/images/placeholder.svg';

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = placeholderImage;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Projects Portfolio</h1>
          <p className="text-xl text-slate-800">
            Personal and academic engineering projects showcasing innovation and technical expertise
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white/95 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-sky-100/40">
                <div className={`bg-gradient-to-r ${project.color} text-white p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="bg-slate-200 rounded-lg aspect-square overflow-hidden flex items-center justify-center mb-4">
                      <img
                        src={project.image ?? placeholderImage}
                        alt={`${project.title} primary`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    </div>
                    {(project.links || project.link) && (
                      <div className="bg-slate-50 rounded-lg p-4 border border-sky-100/60">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Project Links</h4>
                        <ul className="space-y-2">
                          {project.link && (
                            <li>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-700 font-semibold hover:underline underline-offset-4"
                              >
                                Primary site
                              </a>
                            </li>
                          )}
                          {project.links?.map((linkItem) => (
                            <li key={linkItem.href}>
                              <a
                                href={linkItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-700 font-semibold hover:underline underline-offset-4"
                              >
                                {linkItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Overview</h3>
                        <p className="text-slate-700 leading-relaxed">{project.description}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-sky-100/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-sky-50 rounded-lg p-4 border border-sky-100/60">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Outcomes & Impact</h3>
                        <p className="text-slate-700">{project.outcomes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-sky-700" />
            <h2 className="text-3xl font-bold text-slate-900">Combat Robotics</h2>
          </div>
          <p className="text-slate-800 mb-6">
            Rapid-iteration bots focused on mechanical durability, torque-rich drive systems, and field-serviceable
            armor. Built to test drivetrains and weapon isolation under repeated impacts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {combatRobotics.map((bot) => (
              <div key={bot.title} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <div className="aspect-video bg-slate-200">
                  <img
                    src={bot.image}
                    alt={bot.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900">{bot.title}</p>
                  <p className="text-slate-700 text-sm mt-2">{bot.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {projectVideos.length > 0 && (
          <div className="mt-16 bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Videos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectVideos.map((video) => (
                <div key={video.title} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                  <div className="aspect-video bg-slate-200">
                    <iframe
                      className="w-full h-full"
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-900">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Additional Projects Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalGallery.map((photo) => (
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
