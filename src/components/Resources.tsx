import React from 'react';
import { Phone, Book, Video, Users } from 'lucide-react';

const resources = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "24/7 Helpline",
    description: "Immediate support available at 1-800-273-8255",
    link: "https://www.nimh.nih.gov/health/find-help"
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Mental Health Articles",
    description: "Expert-written resources on various topics",
    link: "https://medium.com/tag/mental-health"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Wellness Videos",
    description: "Guided meditation and therapeutic content",
    link: "https://youtube.com/playlist?list=PL8UZmotLI9NWHue_7ctU0A94VeDwBGBFx&si=lhMztDxB9lUVAZpE"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Support Groups",
    description: "Connect with others in moderated groups",
    link: "https://mentalhealthsupportgroups.org/"
  }
];

export default function Resources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {resources.map((resource, index) => (
        <div key={index} className="glass-card rounded-xl p-6 hover-effect">
          <div className="text-violet-400 mb-4">{resource.icon}</div>
          <h3 className="text-lg font-semibold text-violet-300 mb-2">{resource.title}</h3>
          <p className="text-gray-400 mb-4">{resource.description}</p>
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
      ))}
    </div>
  );
}