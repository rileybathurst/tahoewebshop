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