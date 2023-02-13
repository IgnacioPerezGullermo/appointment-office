import React, { useState } from 'react';
import BranchForm from '../components/BranchForm/BranchForm.component';
import CreationNav from '../components/CreationNav/CreationNav';
import OrganizationForm from '../components/OrganizacionForm/OrganizacionForm.component';
import ServicesForm from '../components/ServicesForm/ServicesForm.component';
import StylistsForm from '../components/StylistsForm/StylistsForm.component';

const Dashboard = () => {
  const [Step, setStep] = useState('overview');
  function renderSwitch(step) {
    switch (step) {
      case 'branch':
        return (
          <div>
            <BranchForm />
          </div>
        );
      case 'stylist':
        return (
          <div>
            <StylistsForm />
          </div>
        );
      case 'services':
        return (
          <div>
            <ServicesForm />
          </div>
        );
      case 'organization':
        return (
          <div>
            <OrganizationForm />
          </div>
        );
      default:
        return <div className="grid-span-2">overview</div>;
    }
  }
  return (
    <div className="bg-neutral-400 container-xl w-screen h-screen grid grid-cols-2">
      <CreationNav setStep={setStep} />
      {renderSwitch(Step)}
    </div>
  );
};

export default Dashboard;
