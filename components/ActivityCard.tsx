
import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={activity.thumbnailUrl}
        alt={activity.title}
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {activity.title}
        </h3>
        <p className="text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          자세히 보기
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
