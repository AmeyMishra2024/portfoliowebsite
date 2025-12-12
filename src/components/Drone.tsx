import { Trophy, Award, Navigation } from 'lucide-react';
import type { SyntheticEvent } from 'react';

export default function Drone() {
  const droneGallery = [
    { title: 'Drone Regional Champions', image: '/images/drone-regional-champions.jpg' },
    { title: 'Electric Vehicle', image: '/images/electric-vehicle.jpg' },
    { title: 'Electric Car', image: '/images/electric-car.jpg' },
  ];

  const achievements = [
    'RADC Houston Regional Champions (multiple)',
    'Flight Operations Award at National Championship',
    'Autonomous obstacle navigation with Python + sensor fusion',
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
          <h1 className="text-5xl font-bold mb-4">Drone Program</h1>
          <p className="text-xl text-slate-800">Autonomous flight, competition strategy, and mission design</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-sky-100 shadow-lg p-6 text-center">
            <Trophy className="mx-auto mb-3 text-sky-700" size={48} />
            <h3 className="text-2xl font-bold text-slate-900">Champions</h3>
            <p className="text-slate-700">Regional Titles</p>
          </div>
          <div className="bg-white rounded-lg border border-sky-100 shadow-lg p-6 text-center">
            <Award className="mx-auto mb-3 text-sky-700" size={48} />
            <h3 className="text-2xl font-bold text-slate-900">Flight Ops</h3>
            <p className="text-slate-700">National Award</p>
          </div>
          <div className="bg-white rounded-lg border border-sky-100 shadow-lg p-6 text-center">
            <Navigation className="mx-auto mb-3 text-sky-700" size={48} />
            <h3 className="text-2xl font-bold text-slate-900">Autonomy</h3>
            <p className="text-slate-700">Sensor Fusion</p>
          </div>
        </div>

        <div className="bg-white/95 rounded-lg shadow-xl p-8 border border-sky-100/40">
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="text-sky-700" />
            <h2 className="text-3xl font-bold text-slate-900">Highlights</h2>
          </div>
          <ul className="space-y-2 text-slate-800">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
