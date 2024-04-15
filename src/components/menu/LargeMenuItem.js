import { namespaces } from "@/config/namespaces";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function LargeMenuItem({ menuItem, namespace }) {
  const { id, text, subtext, ariaLabel, paths, role } = menuItem;

  const locale = useLocale();
  if (!namespace) {
    namespace = namespaces.navigation;
  }

  let href = paths[locale] || "#";
  href = href.replace("[locale]", locale);

  const t = useTranslations(namespace);
  return (
    <li>
      <Link
        href={href}
        className='block -mx-2  p-2 rounded-lg 
      hover:bg-gradient-to-br
     hover:from-indigo-50
     hover:to-pink-50 
     hover:via-blue-50 
     transition ease-in-out duration-300 text-gray-800 font-semibold
      hover:text-indigo-600'
      >
        {t(text)}
        <p className='font-normal text-gray-500 '>{t(subtext)}</p>
      </Link>
    </li>
  );
}
