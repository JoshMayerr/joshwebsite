import { NextSeo } from "next-seo";

const Meta = () => (
  <>
    <NextSeo
      title="Josh Mayer's Wonderful Website"
      description="Take a look at Josh Mayer's personal website. See a log of all of his best work and more..."
      canonical="https://www.joosh.me/"
      openGraph={{
        url: "https://www.joosh.me",
        title: "Josh Mayer's Wonderful Website",
        description:
          "Take a look at Josh Mayer's personal website. See a log of all of his best work and more...",
        images: [
          {
            url:
              "https://images.ctfassets.net/ufnqka13dgbp/3L0SGJxmYHgkjp8uE10gf0/a949009be395469871d32454e8d6297b/joshweb1.png",
            width: 800,
            height: 600,
            alt: "Josh Image Alt",
          },
          {
            url:
              "https://images.ctfassets.net/ufnqka13dgbp/2isOztk3H8sDiIPCe9FtF3/24267f34824b17d8dfcd09f9daf1b643/joshweb2.png",
            width: 900,
            height: 800,
            alt: "Josh Image Alt Second",
          },
        ],
        site_name: "Josh Mayer's Wonderful Website",
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
