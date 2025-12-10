import { Brain, GitBranch, Network, Code2, Gauge, Sparkles } from 'lucide-react';

export default function Programming() {
  const highlights = [
    {
      title: 'Inverse Kinematics + Trajectory Planning',
      description: 'Multi-DOF outtake control with IK solvers, spline-based planners, and field-centric drive alignment.',
      icon: Network,
    },
    {
      title: 'Advanced Control Loops',
      description: 'Square-root PID experimentation, adaptive gain scheduling, motion profiling, and feedforward tuning.',
      icon: Gauge,
    },
    {
      title: 'Sensing & Autonomy',
      description: 'AprilTag + IMU fusion, pose estimation, state machines for reliable autonomous and tele-op assists.',
      icon: Brain,
    },
    {
      title: 'Libraries & Reuse',
      description: 'Custom mechanism libraries, command-based abstractions, telemetry overlays, and config-driven tuning.',
      icon: Code2,
    },
  ];

  const tools = [
    'Road Runner pathing + custom spline planners',
    'FTC SDK command-based patterns',
    'OpenCV vision pipelines for detection + aiming',
    'Real-time dashboards for tuning (telemetry overlays)',
    'Version control + code reviews with Git',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="bg-gradient-to-r from-slate-950 via-sky-900 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Programming</h1>
          <p className="text-xl text-sky-200">FTC software: autonomy, control, and reliability</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/95 rounded-lg shadow-xl p-6 border border-sky-100/40 flex gap-4">
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

        <div className="bg-gradient-to-r from-slate-950 via-sky-900 to-sky-700 rounded-lg shadow-2xl shadow-sky-900/40 p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles />
            <h2 className="text-3xl font-bold">Recent Focus</h2>
          </div>
          <p className="text-sky-100 leading-relaxed">
            Building reliable autonomous + tele-op assists by combining IK-driven motion with adaptive control loops and telemetry-driven iteration. Emphasis on fast tuning cycles, robust sensing, and reusable libraries that move from prototype to competition quickly.
          </p>
        </div>
      </section>
    </div>
  );
}
