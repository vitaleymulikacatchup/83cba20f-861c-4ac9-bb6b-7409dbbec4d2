"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BaseFooter from '@/components/sections/layouts/footer/BaseFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 2,
  textAnimation: "slide"
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759756836723-0d29803e.jpg"
          logoAlt="MemePulse Logo"
          brandName="MemePulse"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <BillboardHero
          title="Welcome to MemePulse!"
          subtitle="Join the fun and start minting your memecoin today!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About MemePulse"
          descriptions={["MemePulse is a community-driven memecoin built for fun.", "We aim to create an engaging platform for all users."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          steps={[
            { position: "left", image: "", title: "Step 1: Connect Wallet", description: "Connect your crypto wallet to start buying." },
            { position: "center", image: "", title: "Step 2: Fund with ETH", description: "Fund your wallet with Ethereum for purchases." },
            { position: "right", image: "", title: "Step 3: Buy MemePulse", description: "Purchase MemePulse directly in the app." }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="MemePulse Tokenomics"
          description="Here’s how our tokenomics work:"
          tokenData={[
            { value: "1 Billion", description: "Total Supply" },
            { value: "Late 2023", description: "Launch Date" },
            { value: "10%", description: "Liquidity Pool" },
            { value: "5%", description: "Team Allocation" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <BaseFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759756836723-0d29803e.jpg"
          logoAlt="MemePulse Logo"
          copyrightText="© 2023 MemePulse. All Rights Reserved."
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} },
              { label: "Tokenomics", onClick: () => {} }
            ]},
            { title: "Support", items: [
              { label: "Contact", onClick: () => {} },
              { label: "FAQ", onClick: () => {} }
            ]},
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} }
            ]}
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}