import { namespaces } from "@/config/namespaces";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LargeMenuItem from "./LargeMenuItem";
import photo from "../../../public/static/400x400.png";
import Image from "next/image";
import React from "react";

export default function LargeMenu({ menu, namespace }) {
  const locale = useLocale();
  if (!namespace) {
    namespace = namespaces.navigation;
  }
  const t = useTranslations(namespace);

  const {
    id,
    text,
    header,
    ariaLabel,
    paths = {},
    role = "menuitem",
    content = [],
  } = menu;

  let href = paths[locale] || "#";
  href = href.replace("[locale]", locale);

  return (
    <React.Fragment>
      <Link className='hover:opacity-50 cursor-pointer' href={href} role={role}>
        {t(text)}
      </Link>
      <div
        className='absolute top-0 -translate-x-48 transition 
      group-hover:translate-y-5 group-focus-within:translate-y-5 translate-y-0 opacity-0 invisible 
      overflow-hidden
      group-hover:opacity-100 group-focus-within:opacity-100
      group-hover:visible group-focus-within:visible duration-500 ease-in-out 
      group-hover:transform z-50 min-w-[860px]  
      group-focus-within:transform z-50 min-w-[860px] '
      >
        <div className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
          {/* The triangle */}
          <div className='w-10 group h-10 bg-black transform rotate-45  absolute top-1 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm '></div>

          <div className='relative z-10 bg-white p-3  rounded-xl'>
            <div className='grid grid-cols-[4fr,1fr] gap-8  '>
              <div>
                <p className='uppercase tracking-wider text-gray-500 font-medium text-[13px]'>
                  {t(header)}
                </p>
                <ul className='mt-3 text-[15px]'>
                  {content &&
                    content.map((item) => {
                      return (
                        <LargeMenuItem
                          key={item.id}
                          menuItem={item}
                        ></LargeMenuItem>
                      );
                    })}
                </ul>
              </div>
              <div className='flex justify-center items-center h-full'>
                <Image src={photo} alt='something'></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
