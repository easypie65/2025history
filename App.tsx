
import React, { useState } from 'react';
import { Activity } from './types';
import { ACTIVITIES } from './constants';
import ActivityCard from './components/ActivityCard';
import ActivityModal from './components/ActivityModal';

const App: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 font-sans">
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
          🏫 3학년 활동 앨범 📸
        </h1>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
          우리의 빛나는 순간들, 여기에서 다시 만나보세요!
        </p>
      </header>

      <main className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ACTIVITIES.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={() => openModal(activity)}
            />
          ))}
        </div>
      </main>

      {selectedActivity && (
        <ActivityModal activity={selectedActivity} onClose={closeModal} />
      )}
      
      <footer className="text-center py-6 text-slate-500">
        <p>&copy; 2024 3학년 일동. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
