module.exports = {
  siteMetadata: {
    title: "tahoewebshop",
    siteUrl: "https://tahoewebshop.com",
    url: "https://tahoewebshop.com", // No trailing slash allowed!
    description:
      'Building & Maintaining your web presence.',
    // image: 'https://ebpt.s3-us-west-1.amazonaws.com/images/emerald-bay-pt-og_image.jpg', // Path to your image you placed in the 'static' folder
    // ogImage: 'https://ebpt.s3-us-west-1.amazonaws.com/images/emerald_bay_physical_therapy-og_image.jpg',
    // twitterImage: 'https://ebpt.s3-us-west-1.amazonaws.com/images/emerald_bay_physical_therapy-twitter_image.jpg',
    openingHours: 'Mo, Tu, We, Th, Fr 08:00-18:00',
    telephone: '(530)386-6296',
    logo: '/images/icon.png',
    areaServed: 'Tahoe, California',
    author: 'Riley Bathurst',
    location: {
      '@type': 'Place',
      'address': {
        "@type": "PostalAddress",
        "streetAddress": "925 North Lake Blvd Suite 204-B",
        "addressLocality": "Tahoe City",
        "addressRegion": "CA",
        "postalCode": "96145",
      }
    },
    slogan: 'Building & Maintaining your web presence.',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
