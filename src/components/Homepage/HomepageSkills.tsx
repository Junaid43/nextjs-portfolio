"use client";
import React, { useState } from "react";

export default function HomepageSkills({ data }: { data: any }) {
  // const { soft, technicalskill } = data;

  const [activeTab, setActiveTab] = useState("soft");

  const setBg = (active: any) =>
    activeTab === active ? "bg-black" : "bg-blue";

  const setTextAlign = (tab: any) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "technical"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn--skills ${setBg(el)} ${setTextAlign(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );

  return (
    <>
      <section id="skills">
        <div className="max-w-7xl mx-auto py-5">
          {tabs}
          <ul
            className={`flex flex-row flex-wrap content-start list-none gap-2 py-4 `}
          >
            {data[activeTab].map(
              ({ icon, text }: { icon: any; text: string }) => (
                <li key={text} className="skills">
                  <span>{icon}</span> {text}
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
