// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// Im not sure what the rules on what goes here vs in the array?
const SEO = ({
  title,
  description,
  image,
  itemScope,
  itemType,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    defaultDescription,
    // defaultImage,
    // ogImage,
    // twitterImage,
    telephone,
    openingHours,
    areaServed,
    location,
    slogan,
    gsv,
    // can't have .anything secondary level
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image || defaultImage}`,
    // ogImage: ogImage,
    // twitterImage: twitterImage,
    url: `${siteUrl}${pathname}`,
    openingHours: `${openingHours}`,
    telephone: telephone,
    areaServed: areaServed,
    streetAddress: location.address.streetAddress,
    addressLocality: location.address.addressLocality,
    addressRegion: location.address.addressRegion,
    postalCode: location.address.postalCode,
    slogan: slogan,
    gsv: gsv,
    itemScope: itemScope,
    itemType: itemType
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "en-US",
        itemScope: `${seo.itemScope}`, // this seems to be working
        itemType: `${seo.itemType}`,
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.ogImage} />
      <meta property="og:type" content="website" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {/* {seo.image && <meta property="og:image" content={seo.ogImage} />} */}

      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {/* <meta name="twitter:card" content="summary_large_image" />
      {seo.image && <meta name="twitter:image" content={seo.twitterImage} />} */}

      {seo.openingHours && (
        <meta name="openingHours" content={seo.openingHours} />
      )}
      {seo.telephone && <meta name="telephone" content={seo.telephone} />}
      {seo.areaServed && <meta name="areaServed" content={seo.areaServed} />}
      {/* {seo.location && <meta name="location" content={seo.streetAddress + ', ' + seo.addressLocality + ', ' + seo.addressRegion + ', ' + seo.postalCode} />} */}
      {/* the layer down version of this didn't want to work so remove the wrapper */}
      <meta
        name="location"
        content={
          seo.streetAddress +
          ", " +
          seo.addressLocality +
          ", " +
          seo.addressRegion +
          ", " +
          seo.postalCode
        }
      />
      {seo.slogan && <meta name="slogan" content={seo.slogan} />}
      {/* <meta name="google-site-verification" content={seo.gsv} /> */}

      {/* <link rel="stylesheet" href="https://use.typekit.net/vgk8lss.css"></link> */}

      <meta name="theme-color" content="#1cb5e0" />

    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // image: PropTypes.string,
  // ogImage: PropTypes.string,
  // twitterImage: PropTypes.string,
  article: PropTypes.bool,
  openingHours: PropTypes.string,
  telephone: PropTypes.string,
  areaServed: PropTypes.string,
  location: PropTypes.string,
  slogan: PropTypes.string,
  // gsv: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  itemType: `https://schema.org/LocalBusiness`,
  itemScope: false,
  title: null,
  description: null,
  // image: null,
  // ogImage: null,
  // twitterImage: null,
  article: false,
  openingHours: null,
  telephone: null,
  areaServed: null,
  location: null,
  slogan: null,
  // gsv: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        
        openingHours
        telephone
        areaServed
        location {
          address {
            _type
            addressLocality
            addressRegion
            postalCode
            streetAddress
          }
        }
        slogan

        itemType
      }
    }
  }
`;


// defaultImage: image
// ogImage: image
// twitterImage: image
// gsv