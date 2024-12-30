import { BadgeProps } from '@/types';
import { LuClock4 } from 'react-icons/lu';



const colorMap = {
  high: {
    bg: 'bg-lightRed',
    text: 'text-red',
    border: 'border-red',
    darkText: 'dark:text-red',
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-400',
    darkText: 'dark:text-blue-400',
  },
  low: {
    bg: 'bg-lightGreen',
    text: 'text-green',
    border: 'border-green',
    darkText: 'dark:text-green',
  },
  medium: {
    bg: 'bg-lightYellow',
    text: 'text-warning-default',
    border: 'border-warning-default',
    darkText: 'dark:text-warning-default',
  },
  done: {
    bg: 'bg-gray',
    text: 'text-white',
    border: 'border-gray',
    darkText: 'dark:text-gray',
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
