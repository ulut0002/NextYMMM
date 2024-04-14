import Head from "next/head";

export default function PageMeta({
  charset = "UTF-8",
  title = "Next Yeminli Mali Müşavirlik",
  description = "Next",
  keywords = "Next Yeminli Mali Müşavirlik - Adana",
  author = "Next Yeminli Mali Müşavirlik",
  viewport = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  },
  link = [],
  og = {
    title: title,
    description: description,
    image: "",
    url: "",
    twitter_card: "summary_large_image",
  },
  robots = "index, follow",
  themeColor = "#ffffff",
}) {
  return (
    <Head>
      <meta charSet={charset} />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={author} />
      <meta name={viewport.name} content={viewport.content} />
      <meta name='robots' content={robots} />
      <meta name='theme-color' content={themeColor} />

      {/* Open Graph Tags */}
      <meta property='og:title' content={og.title} />
      <meta property='og:description' content={og.description} />
      <meta property='og:image' content={og.image} />
      <meta property='og:url' content={og.url} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content={og.twitter_card} />

      {/* Additional Link Elements */}
      {link.map((l, index) => (
        <link
          key={index}
          rel={l.rel}
          href={l.href}
          type={l.type}
          sizes={l.sizes}
        />
      ))}
    </Head>
  );
}
