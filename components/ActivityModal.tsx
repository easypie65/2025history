import React from 'react';
import { Activity } from '../types';
import CloseIcon from './icons/CloseIcon';

interface ActivityModalProps {
  activity: Activity;
  onClose: () => void;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{activity.title}</h2>
          <p className="text-gray-600 mb-6">{activity.description}</p>
          
          {activity.videoUrl && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                <i className="fas fa-video mr-2 text-indigo-500"></i>활동 영상
              </h3>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
                <iframe
                  src={activity.videoUrl}
                  title={activity.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          {activity.pdfUrl && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                <i className="fas fa-file-pdf mr-2 text-red-500"></i>안내 자료
              </h3>
              <div className="w-full h-[70vh] rounded-lg shadow-md overflow-hidden">
                <iframe
                  src={activity.pdfUrl}
                  title={`${activity.title} PDF`}
                  frameBorder="0"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          {activity.sections && activity.sections.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                <i className="fas fa-camera-retro mr-2 text-teal-500"></i>활동 사진
              </h3>
              {activity.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8 last:mb-0">
                  {section.title && (
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">{section.title}</h4>
                  )}
                  {section.photos && section.photos.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {section.photos.map((photo, photoIndex) => (
                        <div key={photoIndex} className="group relative overflow-hidden rounded-lg shadow-md">
                          <img
                            src={photo.url}
                            alt={photo.description || `${activity.title} photo ${photoIndex + 1}`}
                            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                          />
                          {photo.description && (
                            <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                              <p className="text-white text-sm text-center font-semibold">{photo.description}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {section.padletUrl && (
                    <div className="mt-4 w-full h-[70vh] rounded-lg shadow-md overflow-hidden">
                      <iframe
                        src={section.padletUrl}
                        title={`${section.title || activity.title} Padlet`}
                        frameBorder="0"
                        className="w-full h-full"
                        allow="camera;microphone;geolocation"
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ActivityModal;
