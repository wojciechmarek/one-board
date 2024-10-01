import { AboutSection, FeaturesSection, HomeSection, NavigationBar, PricingSection } from 'src/src/components/landing';

export const LandingPage = () => {
  return (
    <body className="bg-[#13121a] text-teal-200">
      <NavigationBar />
      <main>
        <HomeSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
      </main>
    </body>
  );
};
