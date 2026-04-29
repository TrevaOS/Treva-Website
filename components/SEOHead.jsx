import Head from 'next/head';

export default function SEOHead({
  title = 'Performance Marketing Agency in Bangalore | ₹15 Cr+ Google Ads Managed | Treva',
  description = "Treva is Bangalore's performance marketing agency with ₹15 Cr+ in Google Ads managed. We drive measurable ROI through Search, Shopping, and Performance Max campaigns. Get a free audit.",
  image = '/og-image.jpg',
  url = 'https://www.treva.in',
  type = 'website',
  keywords = 'performance marketing agency Bangalore, Google Ads agency Bengaluru, PPC agency Bangalore, Google Ads management India, Google Ads expert Bangalore, digital marketing agency Bengaluru, performance marketing agency India',
  schema = null,
  faqSchema = null,
}) {
  const fullTitle = title.includes('Treva') ? title : `${title} | Treva`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Treva',
    url: 'https://www.treva.in',
    logo: 'https://www.treva.in/treva-logo.png',
    description: "Bengaluru's performance marketing agency with ₹15 Crore+ in Google Ads managed. Specialising in Google Search Ads, Performance Max, Shopping, Remarketing, and YouTube Ads.",
    telephone: '+91-7022922526',
    email: 'info@treva.in',
    sameAs: [
      'https://www.instagram.com/treva.in',
      'https://www.linkedin.com/company/trevain/posts/?feedView=all',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Treva',
    description: "Bengaluru's performance marketing agency with ₹15 Crore+ in Google Ads managed. Specialising in Google Search Ads, Performance Max, Shopping, Remarketing, and YouTube Ads.",
    url: 'https://www.treva.in',
    telephone: '+91-7022922526',
    email: 'info@treva.in',
    priceRange: '₹₹₹',
    serviceType: [
      'Performance Marketing',
      'Google Ads Management',
      'PPC Agency',
      'Google Search Ads',
      'Performance Max Campaigns',
      'Google Shopping Ads',
      'Remarketing',
      'YouTube Ads',
      'Landing Page CRO',
    ],
    areaServed: [
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'Country', name: 'India' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560040',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9600',
      longitude: '77.5296',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://www.instagram.com/treva.in',
      'https://www.linkedin.com/company/trevain/posts/?feedView=all',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Treva',
    url: 'https://www.treva.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.treva.in/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const baseSchemas = [organizationSchema, localBusinessSchema, websiteSchema];
  const extraSchemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const faqSchemas = faqSchema ? [faqSchema] : [];
  const schemaPayload = [...baseSchemas, ...extraSchemas, ...faqSchemas];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#29C8D5" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Treva" />
      <meta property="og:locale" content="en_IN" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
      />

      {/* Favicon */}
      <link rel="icon" href="/treva-fav.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}
