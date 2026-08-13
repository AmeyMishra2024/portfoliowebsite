import { Brain, GitBranch, Network, Code2, Gauge, Sparkles, ShieldCheck, LineChart, ExternalLink } from 'lucide-react';
import type { SyntheticEvent } from 'react';

export default function CSExperience() {
  const highlights = [
    {
      title: 'Inverse Kinematics + Trajectory Planning',
      description:
        'Multi-DOF outtake control with IK solvers, spline-based planners, and field-centric drive alignment backed by simulation runs before on-field validation.',
      icon: Network,
    },
    {
      title: 'Advanced Control Loops',
      description:
        'Square-root PID experimentation, adaptive gain scheduling, motion profiling, and feedforward tuning with latency budgeting for fast cycle times.',
      icon: Gauge,
    },
    {
      title: 'Sensing & Autonomy',
      description:
        'AprilTag + IMU fusion, pose estimation, state machines for reliable autonomous and tele-op assists with redundancy for drift and occlusion.',
      icon: Brain,
    },
    {
      title: 'Libraries & Reuse',
      description:
        'Custom mechanism libraries, command-based abstractions, telemetry overlays, and config-driven tuning with documentation for drive-team rollout.',
      icon: Code2,
    },
    {
      title: 'Reliability & QA Leadership',
      description:
        'Fault-injection tests, match-play dry runs, and checklists that keep driver stations, batteries, and autos stable through eliminations.',
      icon: ShieldCheck,
    },
  ];

  const droneShowcase = [
    { title: 'Drone Regional Champions', image: '/images/drone-regional-champions.jpg' },
    { title: 'Electric Vehicle', image: '/images/electric-vehicle.jpg' },
    { title: 'Electric Car', image: '/images/electric-car.jpg' },
  ];

  const placeholderImage = '/images/placeholder.svg';

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = placeholderImage;
  };

  const tools = [
    'Road Runner pathing + custom spline planners with feedforward fitting',
    'FTC SDK command-based patterns and hardware abstraction layers',
    'OpenCV vision pipelines for detection + aiming and lighting compensation',
    'Real-time dashboards for tuning (telemetry overlays, log export)',
    'Version control + code reviews with Git and protected-branch workflows',
  ];

  const codebases = [
    {
      name: '25679-MTI',
      url: 'https://github.com/AmeyMishra2024/25679-MTI',
      language: 'Java',
      description:
        'FTC Java codebase for Team 25679 competition development, focused on autonomous routines, mechanism control, and match-ready robot software.',
    },
    {
      name: 'Centerstage-Robot',
      url: 'https://github.com/AmeyMishra2024/Centerstage-Robot',
      language: 'CAD / Design',
      description:
        'CenterStage robot design repository documenting CAD work, mechanism planning, and build concepts for FTC competition hardware.',
    },
    {
      name: 'FTC-active-intake-outtake',
      url: 'https://github.com/AmeyMishra2024/FTC-active-intake-outtake',
      language: 'FTC Design',
      description:
        'Active intake and outtake mechanism project for FTC, capturing design iterations for faster transfer, scoring consistency, and serviceable assembly.',
    },
    {
      name: 'HCA',
      url: 'https://github.com/AmeyMishra2024/HCA',
      language: 'Hack Club Arcade',
      description:
        'Collection of Hack Club Arcade projects showing rapid prototyping across small software builds, interaction experiments, and learning-focused code.',
    },
    {
      name: 'Logitech-Camera-Mount',
      url: 'https://github.com/AmeyMishra2024/Logitech-Camera-Mount',
      language: 'CAD / Fabrication',
      description:
        'Custom camera mount design for Logitech hardware, built around practical mounting, alignment, and fabrication constraints.',
    },
    {
      name: 'portfoliowebsite',
      url: 'https://github.com/AmeyMishra2024/portfoliowebsite',
      language: 'TypeScript',
      description:
        'React, TypeScript, and Tailwind portfolio site that organizes engineering work, robotics achievements, research, and project documentation.',
    },
    {
      name: 'Starship-Launch-Tower',
      url: 'https://github.com/AmeyMishra2024/Starship-Launch-Tower',
      language: 'CAD / Aerospace',
      description:
        'Aerospace-inspired launch tower design project exploring large-scale structure concepts, mechanical layout, and model-based engineering practice.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-sky-50">
      <section className="bg-gradient-to-r from-white via-sky-100 to-sky-200 text-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">CS Experience</h1>
          <p className="text-xl text-slate-800">
            FTC + drone software leadership: autonomy, controls, and resilient match systems
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/95 rounded-lg shadow-xl p-6 border border-sky-100/40 flex gap-4"
              >
                <div className="bg-sky-100 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={28} className="text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="text-sky-600" />
            <h2 className="text-3xl font-bold text-slate-900">Tooling & Practices</h2>
          </div>
          <ul className="space-y-3 text-slate-700">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-sky-50 via-white to-slate-100 rounded-lg shadow-2xl shadow-sky-900/40 p-8 text-slate-900 border border-sky-100/60">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-sky-700" />
            <h2 className="text-3xl font-bold text-slate-900">Recent Focus</h2>
          </div>
          <p className="text-slate-800 leading-relaxed">
            Building reliable autonomous + tele-op assists by combining IK-driven motion with adaptive control loops and
            telemetry-driven iteration. Emphasis on fast tuning cycles, robust sensing, drive-team usability, and
            reusable libraries that move from prototype to competition quickly with clear documentation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-slate-800">
            <span className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-sky-100/70 shadow-sm">
              <LineChart size={16} className="text-sky-700" />
              Auto KPIs for path time + accuracy
            </span>
            <span className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-sky-100/70 shadow-sm">
              <ShieldCheck size={16} className="text-sky-700" />
              Checklists + failsafes for eliminations
            </span>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="text-sky-700" />
            <h2 className="text-3xl font-bold text-slate-900">Codebases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {codebases.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-lg border border-sky-100/60 p-5 hover:border-sky-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-sm font-semibold text-sky-700 mt-1">{repo.language}</p>
                  </div>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-sky-600 flex-shrink-0 mt-1" />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{repo.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-sky-700" />
            <h2 className="text-3xl font-bold text-slate-900">Drone Programming & Autonomy</h2>
          </div>
          <p className="text-slate-800 mb-6">
            Python-based flight stacks, sensor fusion (IMU + optical flow), and waypoint navigation tuned for RADC competitions and field demos.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {droneShowcase.map((photo) => (
              <div key={photo.title} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                  <p className="text-slate-700 text-sm mt-1">Autonomy, navigation, and reliability testing.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
