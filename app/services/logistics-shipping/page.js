import WhyChoose from "@/app/components/WhyChoose";
import React from "react";
import Image from "next/image";
import ServicesDetailed from "@/app/components/logistics-shipping/ServicesDetailed";
import LogisticsServices from "@/app/components/logistics-shipping/ServicesPoints.js/ServicePoints";
import Quote from "@/app/components/Quote";

function page() {
  return (
    <div>
      <div className="flex justify-center">
        <ServicesDetailed/>
      </div>
      <div className="flex justify-center">
        <LogisticsServices/>
      </div>
      <div className="mt-10">
        <WhyChoose />
        <Quote/>
      </div>
    </div>
  );
}

export default page;
