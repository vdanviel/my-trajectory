"use client";

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/component/ThemeContext';

const Introduction = () => {

  const {fontColor} = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden text-center z-10 mt-5">
      
        <div className="mb-5">
          <Image 
            src={"/victor-introduce.png"} 
            alt="Imagem de introdução" 
            width={200} 
            height={250} 
            className="object-contain"
            priority
          />
        </div>

      <div className="max-w-2xl mx-auto">
        
        <h2
          className="text-6xl font-extrabold text-transparent bg-clip-text pb-8"
          style={{backgroundColor: fontColor}}
        >
          Minha trajetória!
        </h2>

        <p
          className="text-xl font-medium leading-relaxed mx-8"
        >
          Bem-vindo à minha timeline! Este espaço é uma jornada visual pela minha história de vida. Aqui deixo os momentos marcantes, os desafios que enfrentei, as lições que aprendi e, acima de tudo, como superei cada obstáculo para chegar até aqui.
        </p>
      </div>

    </div>
  );
};

export default Introduction;