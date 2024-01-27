import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta property="og:title" content="Harsh Chandravanshi" />
      <meta
        property="og:description"
        content="Personal Portfolio of Harsh Chandravanshi"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://harshchandravanshi.tech" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/portfoliov2-8d7a9.appspot.com/o/metaData%2Fharshchandravanshi.tech.png?alt=media&token=d14e3d92-c10f-47cc-a6d3-e86d34032781"
      />
    </Head>
  );
};

export default CustomHead;
