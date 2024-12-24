// src/components/SingleDashboardCard.tsx
import React from 'react';

// Define the props interface for SingleDashboardCard
interface SingleDashboardCardProps {
  number: number;
  subheading: string;
  icon: React.ComponentType;  // The first icon is a React component
  icon2: React.ComponentType; // The second icon is also a React component
  backgroundColor: string;
}

const SingleDashboardCard: React.FC<SingleDashboardCardProps> = ({ number, subheading, icon: Icon, icon2: Icon2, backgroundColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg`} style={{ backgroundColor }}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-lightGray">{number}</h2>
          <p className="text-sm text-lightGray">{subheading}</p>
        </div>
        <div>
          {/* Render the first icon */}
          <Icon className="w-10 h-10 text-black opacity-50" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-lightGray">More Info</p>
        {/* Render the second icon */}
        <Icon2 className="w-6 h-6 text-lightGray" />
      </div>
    </div>
  );
};

export default SingleDashboardCard;
