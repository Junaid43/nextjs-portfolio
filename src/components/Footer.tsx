import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className=" bg-slate-100 ">
      <div className="py-6 max-w-7xl mx-auto">
        <p className="text-center">
          Copyright {currentYear}.JSOL Tech . All right reserved
        </p>
      </div>
    </section>
  );
};
