import React from 'react';
import { IconType } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

interface SocialIcon {
  Icon: IconType;
  color: string;
}

export default function SocialIcons(): React.ReactElement {
  const icons: SocialIcon[] = [
    { Icon: FaFacebook, color: 'text-[#1E1E1E]' },
    { Icon: FaTwitter, color: 'text-[#1E1E1E]' },
    { Icon: FaInstagram, color: 'text-[#1E1E1E]' },
    { Icon: FaYoutube, color: 'text-[#FF9F0D]' },
  ];

  return (
    <div className="flex space-x-4">
      {icons.map(({ Icon, color }, index) => (
        <a
          key={index}
          href="#"
          className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
