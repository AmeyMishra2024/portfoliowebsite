import { Brain, Satellite, TreePine, Plane, Camera, Globe } from 'lucide-react';

export default function OtherProjects() {
  const projects = [
    {
      title: 'AI Humanoid Robot Research and Development',
      icon: Brain,
      color: 'from-sky-700 to-blue-700',
      description:
        'Designed and programmed a humanoid robot that blends physical motion with intelligent behavior. Handled the full stack development including motor control, computer vision, and AI integration.',
      technologies: ['Arduino', 'OpenCV', 'OpenAI API', 'Python', 'C++'],
      features: [
        'Advanced Arduino for low-level motor control creating realistic movement',
        'OpenCV integration for real-time visual perception',
        'OpenAI API integration for complex conversational abilities',
        'Dynamic, non-scripted task planning capabilities',
      ],
      outcomes: 'Successfully created a fully functional humanoid robot with advanced AI capabilities, demonstrating integration of hardware and software systems.',
    },
    {
      title: 'ORCA - Orbital Recycling and Construction Array',
      icon: Satellite,
      color: 'from-blue-700 to-cyan-600',
      description:
        '2025 NASA Global Space Apps Challenge project focused on space debris capture and recycling using advanced neural networks and orbital mechanics.',
      technologies: ['Python', 'TensorFlow', 'CAD Software', 'Orbital Mechanics'],
      features: [
        'Custom neural network to analyze debris data',
        'Orbital mechanics calculations for path planning',
        'High-level CAD design for capture mechanisms',
        'Comprehensive business plan for real-world implementation',
      ],
      outcomes: 'NASA Global Space Apps Challenge Global Nominee',
    },
    {
      title: 'EcoScape Sustainable Architecture',
      icon: TreePine,
      color: 'from-slate-800 to-sky-700',
      description:
        'Researched, designed, and planned a sustainable city based on current technologies, analyzing environmental data and ecological issues.',
      technologies: ['Environmental Analysis', 'Urban Planning', 'CAD', 'Data Analytics'],
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
      title: '3D Printed Drone for Location Mapping',
      icon: Camera,
      color: 'from-sky-800 to-cyan-600',
      description:
        'Custom-designed UAV with waypoint navigation capabilities for location mapping and aerial photography.',
      technologies: ['CAD', '3D Printing', 'Python', 'GPS Navigation', 'Computer Vision'],
      features: [
        'Autonomous waypoint navigation along set coordinates',
        'High-resolution camera with video downlink',
        'Real-time data collection and transmission',
        'Safety monitoring and fail-safe systems',
      ],
      outcomes: 'Successfully demonstrated autonomous navigation and mapping capabilities with continuous video feedback.',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="bg-gradient-to-r from-slate-950 via-sky-900 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Projects Portfolio</h1>
          <p className="text-xl text-sky-200">
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
                      <div className="bg-slate-200 rounded-lg aspect-square flex items-center justify-center mb-4">
                        <div className="text-center p-4">
                          <Icon size={64} className="mx-auto mb-2 text-slate-400" />
                          <p className="text-slate-500 text-sm">Project Image</p>
                        </div>
                      </div>
                      <div className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-center p-4">
                          <Camera size={48} className="mx-auto mb-2 text-slate-400" />
                          <p className="text-slate-500 text-sm">Demo/Process Image</p>
                        </div>
                      </div>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Additional Projects Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center hover:bg-slate-300 transition-colors">
                <div className="text-center">
                  <Camera size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-slate-500 text-sm">Project Image {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
