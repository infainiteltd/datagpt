import React from 'react';
import InfinityLogo from './InfinityLogo';
import DataGptText from './DataGptText';

const LogoWithDataGptText: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-32 h-32">
        <InfinityLogo />
      </div>
      <div className="w-64">
        <DataGptText />
      </div>
    </div>
  );
};

export default LogoWithDataGptText; 