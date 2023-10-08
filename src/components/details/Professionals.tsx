import React from "react";

export default function Professionals({ data }: { data: any }) {
  const { title, experiences } = data;
  return (
    <>
      <section id="professional">
        <h2 className="pb-2 bold font-bold uppercase">{title}</h2>
        <div className="flex flex-col gap-6">
          {experiences.map(
            ({
              role,
              description,
              current,
            }: {
              role: string;
              description: string;
              current: boolean;
            }) => (
              <div key={role} className="flex flex-col rounded-lg ">
                <span className={`h-2 ${current ? "bg-blue" : "bg-black"}`} />
                <div className="bg-grey-light p-6 drop-shadow-md">
                  <h3>{role}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
