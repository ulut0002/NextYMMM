import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <h1 className='text-3xl font-bold text-red-600'></h1>
    </main>
  );
}
