import React, { useId } from "react";

export default function AboutMe({ data }: { data: any }) {
  const { title, body } = data;
  const id = useId();
  return (
    <>
      <section id="about">
        <h2 className="pb-2 bold font-bold uppercase">{title}</h2>
        <div>
          {body?.map((el: string, i: any) => (
            <p key={`${id}_${i}`} className="pb-2">
              {el}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
