import Head from "next/head";

export const PageTitle = ({
  name,
  description,
  url,
}: {
  name: string;
  description?: string;
  url?: string;
}) => {
  return (
    <Head>
      <title>Togue | {name}</title>
      <meta name="description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
};
