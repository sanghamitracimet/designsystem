import React from 'react';

interface SingleDashboardCardProps {
  number: number;
  subheading: string;
  icon: React.ComponentType;
  icon2: React.ComponentType;
  backgroundColor: string;
}

const SingleDashboardCard: React.FC<SingleDashboardCardProps> = ({ number, subheading, icon: Icon, icon2: Icon2, backgroundColor }) => {
  return (
    <div className={`rounded-sm shadow-lg`} style={{ backgroundColor }}>
      <div className="flex justify-between items-center mb-2 px-4 py-4">
        <div>
          <h2 className="text-3xl font-semibold text-white">{number}</h2>
          <p className="text-md text-white mt-2">{subheading}</p>
        </div>
        <div>
          <Icon className="w-14 h-14 text-black opacity-50 hover:scale-110" />
        </div>
      </div>
      <div className="pl-6 pr-6 pt-1 pb-1 flex justify-center gap-2 items-center mt-4 bg-black opacity-45 hover:opacity-70">
        <p className="text-sm text-lightGray">More Info</p>
        <Icon2 className="w-4 h-4 text-lightGray" />
      </div>
    </div>
  );
};

export default SingleDashboardCard;
