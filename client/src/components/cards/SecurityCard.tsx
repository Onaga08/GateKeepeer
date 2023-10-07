import React from 'react';
import Image, { StaticImageData } from 'next/image'

//import { GoUnverified, GoVerified } from "react-icons/fi";

type SecurityCardProps = {
    imageUrl: StaticImageData;
    title: string;
    description: string;
    accepted: boolean;
    onClick: () => void;
  };

  const SecurityCard: React.FC<SecurityCardProps> = ({ imageUrl, title, description, accepted, onClick }) => {
    return (
      <><div className="bg-white rounded-lg flex flex-col p-3 shadow-md overflow-hidden w-[30rem] h-[16rem]">
          <div className='flex justify-center'>
              <h3 className="text-3xl  mb-2">{title}</h3>
          </div>
          <div className='flex gap-3'>
          <Image alt="profile" className='rounded-lg' src = {imageUrl} height={45} width={100} />
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-col justify-bottom p-4 gap-2 m-1">
                  {/* {<GoVerified />} */}
                </div>
          </div>
                
            </div></>
    );
  };