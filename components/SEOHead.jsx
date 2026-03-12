import Head from 'next/head';

export default function SEOHead({
  title = 'Treva, Where Creativity Meets Technology',
  description = 'Treva is a full-service digital agency in Bengaluru helping brands grow with strategy, design, performance marketing, and intelligent technology solutions.',
  image = '/og-image.jpg',
  url = 'https://treva.in',
  type = 'website',
  keywords = 'digital marketing agency Bengaluru, performance marketing, social media marketing, Google Ads, Meta Ads, SEO agency India, branding agency, web development, app development, digital marketing company Bangalore',
}) {
  const fullTitle = title.includes('Treva') ? title : `${title} | Treva`;

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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Treva',
            serviceType: 'Digital Marketing Agency',
            description,
            url: 'https://treva.in',
            telephone: '+91-70229-22526',
            email: 'info@treva.in',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '4, 2nd Floor, Tarang Complex, Attiguppe, Chandra Layout Main Rd, Vijayanagar',
              addressLocality: 'Bengaluru',
              addressRegion: 'Karnataka',
              postalCode: '560040',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 12.9116,
              longitude: 77.6389,
            },
            openingHours: 'Mo-Fr 09:00-18:00',
            sameAs: [
              'https://instagram.com/treva',
              'https://linkedin.com/company/treva',
              'https://twitter.com/treva',
            ],
          }),
        }}
      />

      {/* Favicon */}
      <link rel="icon" href="/treva-fav.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}
