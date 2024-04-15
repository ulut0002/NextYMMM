import { namespaces } from "@/config/namespaces";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import ListMenuItem from "./ListMenuItem";

export default function ListMenu({ menu, namespace }) {
  const {
    id,
    text,
    header,
    ariaLabel,
    paths = {},
    role = "menuitem",
    content = [],
  } = menu;

  const locale = useLocale();
  if (!namespace) {
    namespace = namespaces.navigation;
  }
  const t = useTranslations(namespace);

  let href = paths[locale] || "#";
  href = href.replace("[locale]", locale);
  return (
    <React.Fragment>
      <Link href={href} className='hover:opacity-50 cursor-default '>
        {t(text)}
      </Link>
      <div
        className='absolute top-0 -left-2 transition 
  group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 
  group-hover:visible duration-500 ease-in-out 
  group-hover:transform z-50 min-w-[300px] transform'
      >
        <div className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
          <div className='w-10 h-10 bg-white transform rotate-45  absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm'></div>
          <div className='relative z-10'>
            <p className='uppercase tracking-wider text-gray-500 font-medium text-[13px]'>
              ABOUT
            </p>
            <ul className='mt-3 text-[15px]'>
              {content &&
                content.map((item) => {
                  return (
                    <li key={item.id}>
                      <ListMenuItem menuItem={item} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
