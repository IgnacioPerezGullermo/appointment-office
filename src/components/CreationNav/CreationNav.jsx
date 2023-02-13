import React from 'react';
const CreationNav = ({ setStep }) => {
  const options = [
    { name: 'overview', title: 'Vista General', key: '1' },
    { name: 'organization', title: 'Empresa', key: '2' },
    { name: 'branch', title: 'Sucursales', key: '3' },
    { name: 'stylist', title: 'Estilistas', key: '4' },
    { name: 'services', title: 'Servicios', key: '5' },
  ];
  return (
    <div className="bg-neutral-900 w-60 h-screen pt-8">
      <img
        src="https://res.cloudinary.com/duilsmrmx/image/upload/v1676288009/x1hvcivkowplk4kmfyxn.png"
        alt="logo"
        className="mb-4"
      />
      <h1></h1>
      {options.map((opt) => {
        return (
          <button
            onClick={() => {
              setStep(opt.name);
            }}
            key={opt.key}
            className="bg-neutral-800 w-56 h-12 m-2 text-purple-400 rounded-md"
          >
            {opt.title}
          </button>
        );
      })}
    </div>
  );
};

export default CreationNav;
