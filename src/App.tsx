import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionSection from './components/VisionSection';
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import ProductsSection from './components/ProductsSection';
import RoboCupSection from './components/RoboCupSection';
import FoxsyTokenSection from './components/FoxsyTokenSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import FaqSection from './components/FaqSection';
import RoadmapSection from './components/RoadMapSection';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AchievementsSection from './components/AchievementsSection';
import UpdatesSection from './components/UpdatesSection';
import MediaSection from './components/MediaSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
    <Header />
    <HeroSection />
    <AboutSection />
    <VisionSection />
    <ProductsSection />
    <RoboCupSection />
    <FoxsyTokenSection />
    <OpportunitiesSection />
    <FaqSection />
    <RoadmapSection />
    <PartnersSection />
    <TeamSection />
    <AchievementsSection />
    <UpdatesSection />
    <MediaSection />
    <JoinSection />
    <Footer />
    </ThemeProvider>
   </>
  );
}

export default App;