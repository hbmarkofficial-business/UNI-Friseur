import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | UNI Friseur</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop UNI Friseur in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg, UNI Friseur"
        />
        <link rel="canonical" href="https://unifriseur.de" />

        {/* Open Graph */}
        <meta property="og:title" content="UNI Friseur | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unifriseur.de" />
        <meta property="og:image" content="https://unifriseur.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UNI Friseur | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://unifriseur.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "UNI Friseur",
            "image": "https://unifriseur.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Salomon-Idler-Straße 24C",
              "addressLocality": "Augsburg",
              "postalCode": "86159",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3341",
              "longitude": "10.8983"
            },
            "url": "https://unifriseur.de",
            "telephone": "+49 821 54091294",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 08:30-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/unifriseur",
              "https://www.instagram.com/unifriseur"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

