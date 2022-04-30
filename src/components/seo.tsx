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
    <Helmet>

      // ! I'm not sure this works so do some test deploying but I couldnt as google was having issues crawling the site
      <script type="application/ld+json">{`
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "${seo.title}"
  }
`}</script>
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