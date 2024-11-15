import {
  AboutSection,
  FeaturesSection,
  Footer,
  HomeSection,
  Navigation,
  PricingSection,
} from 'src/src/routes/landing/components';

export const LandingPage = () => {
  return (
    <body className="bg-[#13121a] text-teal-200">
      <Navigation />
      <main>
        <HomeSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </body>
  );
};
