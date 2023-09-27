import React from 'react';
import PhonesCard from './PhonesCard';
import useGetPhones from '../../hook/useGetPhones';

const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div className='py-10'>
      <div className='container mx-auto'>
        {/* Banner here */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
          {phones?.map((phone) => (
            <PhonesCard key={phone.title} phone={phone}></PhonesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
