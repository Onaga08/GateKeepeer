import React from 'react';
import Image, { StaticImageData } from 'next/image'

type UserCardProps = {
  imageUrl: StaticImageData;
  title: string;
  description: string;
  onClick: () => void;
};



const UserCard: React.FC<UserCardProps> = ({ imageUrl, title, description, onClick }) => {
  return (
    <><div className="bg-white rounded-lg flex flex-col p-3 shadow-md overflow-hidden w-[30rem] h-[16rem]">
        <div className='flex justify-center'>
            <h3 className="text-3xl  mb-2">{title}</h3>
        </div>
        <div className='flex gap-3'>
        <Image alt="profile" className='rounded-lg' src = {imageUrl} height={45} width={100} />
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex flex-col justify-bottom p-4 gap-2 m-1">

                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
                      Reject
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
                      Accept
                  </button>
              </div>
        </div>
              
          </div></>
  );
};



export default UserCard;