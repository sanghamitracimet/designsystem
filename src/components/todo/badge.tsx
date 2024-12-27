import { BadgeProps } from '@/types';
import { LuClock4 } from 'react-icons/lu';



const colorMap = {
  high: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-400',
    darkText: 'dark:text-red-400',
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-400',
    darkText: 'dark:text-blue-400',
  },
  low: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-400',
    darkText: 'dark:text-green-400',
  },
  medium: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-400',
    darkText: 'dark:text-yellow-400',
  },
  done: {
    bg: 'bg-gray-400',
    text: 'text-white',
    border: 'border-gray-400',
    darkText: 'dark:text-gray-400',
  },

};

const Badge: React.FC<BadgeProps> = ({ level, label }) => {
  const { bg, text, border, darkText } = colorMap[level];

  return (
    <span
      className={`flex flex-row gap-1 items-center ${bg} ${text} ${border} text-xs font-medium me-2 px-2.5 py-0.5 rounded ${darkText} border`}
    >
      <LuClock4 />
      {label}
    </span>
  );
};

export default Badge;
