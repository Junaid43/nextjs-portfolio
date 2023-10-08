import React, { useId } from "react";

export default function Certification({ data }: { data: any }) {
  const { details, maintitle } = data;

  const id = useId();
  return (
    <>
      <section id="certificate">
        <h2 className="pb-2 bold font-bold uppercase">{maintitle}</h2>

        {details.map(
          ({ title, location }: { title: string; location: string }) => (
            <div
              key={`${id}`}
              className="bg-grey px-6 py-6 border-t-[6px] border-balck mb-6"
            >
              <li
                key={`${id}_${title}`}
                className="text-black bold text-xl list-none"
              >
                {title}
                <span key={`${id}_${location}`} className="text-base">
                  ({location})
                </span>
              </li>
            </div>
          )
        )}
      </section>
    </>
  );
}
