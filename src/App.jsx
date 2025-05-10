import React from "react";
import { Navigation } from "./components/public/navigation";
import { Header } from "./components/main/header";
import { Features } from "./components/main/features";
import { About } from "./components/about/about";
import { Pricing } from "./components/main/pricing";
import { Testimonials } from "./components/main/testimonials";
import { Team } from "./components/about/Team";
import { Contact } from "./components/help/contact";
import { Footer } from "./components/public/footer";
import SmoothScroll from "smooth-scroll";
import { useTranslation } from 'react-i18next';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navigation />
      <Header data={t('Header')} />
      <Features data={t('Features', { returnObjects: true })} />
      <Pricing data={t('Pricing', { returnObjects: true })} />
      <Testimonials data={t('Testimonials', { returnObjects: true })} />
      <Footer data={t('Footer', { returnObjects: true })} />
    </div>
  );
};

export default App;
