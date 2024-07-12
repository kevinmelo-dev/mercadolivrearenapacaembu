'use client';

import React, { useState } from 'react';
import Areas from "@/components/Areas";
import Container from "@/components/Container";
import MobileTitle from "@/components/MobileTitle";
import Preview from "@/components/Preview";
import Description from "@/components/Description";
import Status from "@/components/Status";
import Checklist from "@/components/Checklist";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";

import { Area } from '@/utils/types';
import areasData from "@/utils/areasData";
import Header from '@/components/Header';

export default function Home() {
  const [selectedAreaId, setSelectedAreaId] = useState<number>(areasData[0].id);

  const handleAreaClick = (area: Area) => {
    setSelectedAreaId(area.id);
  };

  const selectedArea = areasData.find(area => area.id === selectedAreaId) || areasData[0];

  return (
    <main className="py-5 px-5 lg:px-20 lg:py-10">
      <Header />

      <div className="block sm:hidden">
        <Container>
          <MobileTitle text="ÁREAS DA ARENA"/>
          <Areas areas={areasData} onAreaClick={handleAreaClick} selectedAreaId={selectedAreaId} />
        </Container>
        
        <Container>
          <MobileTitle text="LOCALIZAÇÃO"/>
          <Preview url={selectedArea.location} height={52} />
        </Container>
        
        <Container>
          <MobileTitle text="SOBRE O ESPAÇO"/>
          <Description area={selectedArea} />
        </Container>

        <Container className="flex justify-between items-center">
          <MobileTitle text="STATUS DA OBRA"/>
          <Status status={selectedArea.status} />
        </Container>

        {selectedArea.checklist && <Checklist area={selectedArea} />}

        <Container>
          <MobileTitle text="PREVIEW 3D" />
          <Preview url={selectedArea.preview} height={52} />
        </Container>

        
        <Divider />

        <Footer />
      </div>

      <div className="hidden sm:flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Em construção</h1>
      </div>

    </main>
  );
}
