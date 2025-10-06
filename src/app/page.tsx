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
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759757250155-12cdba03.jpg"
          logoAlt="MemePulse Logo"
          brandName="MemePulse"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to MemePulse"
          subtitle="Your playful journey into the world of memecoins starts here!"
        />
      </div>
      <div id="about" className="scroll-mt-24">
        <CtaAbout
          title="About MemePulse"
          descriptions={[
            "MemePulse is not just a meme coin, it's a community-driven initiative aimed at creating fun and engaging opportunities in the crypto realm.",
            "We believe in transparency, creativity, and accessibility for all who wish to join our exciting journey through web3!"
          ]}
        />
      </div>
      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: 'left', image: 'https://example.com/step1.jpg', title: 'Step 1', description: 'Get your wallet ready!' },
            { position: 'center', image: 'https://example.com/step2.jpg', title: 'Step 2', description: 'Buy some meme tokens!' },
            { position: 'right', image: 'https://example.com/step3.jpg', title: 'Step 3', description: 'Join the community!' }
          ]}
        />
      </div>
      <div id="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="MemePulse Tokenomics"
          description="Discover our token distribution and community incentives."
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "5%", description: "Transaction Tax" },
            { value: "10%", description: "Liquidity" },
            { value: "15%", description: "Community Rewards" }
          ]}
        />
      </div>
      <div id="footer" className="scroll-mt-24">
        <BaseFooter
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} },
              { label: "How to Buy", onClick: () => {} },
              { label: "Tokenomics", onClick: () => {} }
            ]},
            { title: "Socials", items: [
              { label: "Twitter", onClick: () => {} },
              { label: "Discord", onClick: () => {} },
              { label: "Telegram", onClick: () => {} }
            ]},
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 MemePulse. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}