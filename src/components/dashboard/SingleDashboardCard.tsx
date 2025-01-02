import React from 'react';

interface SingleDashboardCardProps {
  number: number;
  subheading: string;
<<<<<<< HEAD
  icon: React.ElementType;  // The first icon is a React component
  icon2: React.ElementType; // The second icon is also a React component
=======
  icon: React.ComponentType;
  icon2: React.ComponentType;
>>>>>>> 40aeb4b715abce6d997640aba3b8a62ccd755c24
  backgroundColor: string;
}

const SingleDashboardCard: React.FC<SingleDashboardCardProps> = ({ number, subheading, icon: Icon, icon2: Icon2, backgroundColor }) => {
  return (
    <div className={`rounded-sm shadow-lg`} style={{ backgroundColor }}>
      <div className="flex justify-between items-center mb-4 p-6 ">
        <div>
          <h2 className="text-2xl font-semibold text-lightGray">{number}</h2>
          <p className="text-sm text-lightGray">{subheading}</p>
        </div>
        <div>
          <Icon className="w-10 h-10 text-black opacity-50" />
        </div>
      </div>
      <div className="pl-6 pr-6 pt-1 pb-1 flex justify-between items-center mt-4 bg-black opacity-45">
        <p className="text-sm text-lightGray">More Info</p>
        <Icon2 className="w-4 h-4 text-lightGray" />
      </div>
    </div>
  );
};

export default SingleDashboardCard;
