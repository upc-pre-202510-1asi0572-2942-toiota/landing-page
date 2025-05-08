import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Pricing } from "./components/pricing";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
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
      <About data={t('About', { returnObjects: true })} />
      <Team data={t('Team', { returnObjects: true })} />
      <Contact data={t('Contact')} />
      <Footer data={t('Footer', { returnObjects: true })} />
    </div>
  );
};

export default App;
