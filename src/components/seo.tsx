// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    // openingHours: `${openingHours}`,
    // telephone: telephone,
    // areaServed: areaServed,
    // streetAddress: location.address.streetAddress,
    // addressLocality: location.address.addressLocality,
    // addressRegion: location.address.addressRegion,
    // postalCode: location.address.postalCode,
    // slogan: slogan,
    // gsv: gsv,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

export default SEO;
