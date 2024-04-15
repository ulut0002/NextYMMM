import { namespaces } from "@/config/namespaces";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ListMenuItem({ menuItem, namespace }) {
  const { id, text, subtext, ariaLabel, paths, role } = menuItem;

  const locale = useLocale();
  if (!namespace) {
    namespace = namespaces.navigation;
  }

  let href = paths[locale] || "#";
  href = href.replace("[locale]", locale);

  const t = useTranslations(namespace);

  return (
    <Link
      href={href}
      className='bg-transparent bg-clip-text text-transparent 
bg-gradient-to-br  font-semibold
from-indigo-400
to-pink-700
via-blue-600

hover:to-indigo-600
hover:via-pink-400 py-1 block'
    >
      {t(text)}
    </Link>
  );
}
