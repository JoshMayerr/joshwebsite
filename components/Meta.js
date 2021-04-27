import { NextSeo } from "next-seo";

const Meta = () => (
  <>
    <NextSeo
      title="Josh Mayer's Wonderful Website"
      description="Take a look at Josh Mayer's personal website. See a log of all of his best work and more..."
      canonical="https://www.joosh.me/"
      openGraph={{
        url: "https://www.joosh.me",
        title: "Josh Mayer",
        description:
          "Take a look at Josh Mayer's personal website. See a log of all of his best work and more...",
        images: [
          {
            url:
              "https://images.ctfassets.net/ufnqka13dgbp/3L0SGJxmYHgkjp8uE10gf0/4fd153f0cbc0c6040332fb0f78dfec57/JMWEB1.jpg",
            width: 800,
            height: 600,
            alt: "Josh Image Alt",
          },
          {
            url:
              "https://images.ctfassets.net/ufnqka13dgbp/2isOztk3H8sDiIPCe9FtF3/e212c3492a6e8b53f1b3c2db0c79fef0/JMWEB2.jpg",
            width: 900,
            height: 800,
            alt: "Josh Image Alt Second",
          },
          {
            url:
              "https://images.ctfassets.net/ufnqka13dgbp/3L0SGJxmYHgkjp8uE10gf0/4fd153f0cbc0c6040332fb0f78dfec57/JMWEB1.jpg",
          },
          {
            url:
              "https://images.ctfassets.net/ufnqka13dgbp/2isOztk3H8sDiIPCe9FtF3/e212c3492a6e8b53f1b3c2db0c79fef0/JMWEB2.jpg",
          },
        ],
        site_name: "Josh Mayer",
      }}
      twitter={{
        handle: "@jooshmayer",
        site: "@joosh.me",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export default Meta;
