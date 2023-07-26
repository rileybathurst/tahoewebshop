module.exports = {
  siteMetadata: {
    title: "tahoewebshop",
    siteUrl: "https://tahoewebshop.com",
    url: "https://tahoewebshop.com", // No trailing slash allowed!
    description:
      'Building & Maintaining your web presence.',
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
    itemType: 'LocalBusiness', // ? https://schema.org/
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeScriptHashes: false,
        directives: {
          "style-src": "'self' 'unsafe-inline'", // inline needed for gatsby and how it deals with things
          "script-src": "'self' 'unsafe-inline'",
          // the unsafe-inline on script-src is a problem for https://observatory.mozilla.org but without it the images break
          // "font-src": "'self' 'unsafe-inline' use.typekit.net",
        }
      }
    },
    // helps with the CSP in a substatial way
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Tahoe Web Shop`,
        short_name: `TWS`,
        start_url: `/`,
        icon: "src/images/favicon.svg"
      },
    },
  ],
};
