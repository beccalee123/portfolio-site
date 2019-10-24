// Assets
// Formidable Site
import Homepage from "./assets/formidable-site/homepage.pdf";
import WhatWeDo from "./assets/formidable-site/what-we-do.pdf";
import OurWork from "./assets/formidable-site/our-work.pdf";
import Careers from "./assets/formidable-site/careers.pdf";

// Formidable Case Studies
import Prix from "./assets/formidable-case-studies/prix.pdf";
import PWA from "./assets/formidable-case-studies/starbucks-pwa.pdf";
import StoreLocator from "./assets/formidable-case-studies/starbucks-store-locator.pdf";
import RNPharm from "./assets/formidable-case-studies/walmart-react-native-pharmacy.pdf";

// Formidable Collateral
import Hiring from "./assets/formidable-collateral/hiring.pdf";
import Biz from "./assets/formidable-collateral/flyer.pdf";
import Nails from "./assets/formidable-collateral/nail-art.jpg";
import Swag from "./assets/formidable-collateral/swag.jpg";

// Formidable Social
import URQL from "./assets/formidable-social-media/URQL.png";
import Saga from "./assets/formidable-social-media/redux-saga.png";
import Fast from "./assets/formidable-social-media/react-fast-compare.png";
import Culture from "./assets/formidable-social-media/company-culture.png";

export const marketingData = [
  {
    title: "Website Content",
    image: "./assets/website.png",
    alt: "preview of the Formidable.com homepage",
    description:
      "Led a full redesign of Formidable.com to improve company branding and messaging. I wrote new website copy, updated the content structure, and worked with Formidable's in-house designers and developers to carry out the vision. As a result, key pages saw traffic increases of 100 - 200% and bounce rates improved by 30%.",
    media1: Homepage,
    media1Name: "Homepage",
    media2: WhatWeDo,
    media2Name: "What We Do",
    media3: OurWork,
    media3Name: "Our Work",
    media4: Careers,
    media4Name: "Careers"
  },
  {
    title: "Case Studies",
    image: "./assets/case-study.png",
    alt: "preview of the Starbucks PWA case study",
    description:
      "Working closely with developers and clients, I wrote technical case studies that captured Formidable's work as a JavaScript consultancy. The case studies were a key component for business development, as they provided a glimpse of Formidable's technical expertise to prospective clients.",
    media1: PWA,
    media1Name: "Starbucks Progressive Web App",
    media2: Prix,
    media2Name: "Prix.ai Dynamic Pricing Dashboard",
    media3: StoreLocator,
    media3Name: "Starbucks Store Locator",
    media4: RNPharm,
    media4Name: "Walmart React Native Pharmacy"
  },
  {
    title: "Marketing Collateral",
    image: "./assets/swag-img.png",
    alt: "Preview of Formidable branded nail art",
    description:
      "I managed the conceptualization and creation of Formidable's suite of marketing collateral, from carefully written flyers to conference swag items. Flyers were created to capture Formidable in a single page so both prospective clients and prospective employees could quickly glean a clear understanding of the company.",
    media1: Biz,
    media1Name: "Business Development Flyer",
    media2: Hiring,
    media2Name: "Hiring Flyer",
    media3: Nails,
    media3Name: "Nail Art Swag",
    media4: Swag,
    media4Name: "Other Swag"
  },
  {
    title: "Social Media",
    image: "./assets/social-preview.png",
    alt: "Preview of Formidable URQL social post",
    description:
      "Through Twitter, Formidable was able to build a strong community, while cementing technical expertise, regularly exceeding the metrics of our competitors. The Formidable audience was extremely engaged and grew rapidly, increasing almost 140% from March 2017 to March 2018.",
    media1: URQL,
    media1Name: "URQL Open Source Release",
    media2: Fast,
    media2Name: "react-fast-compare Open Source Release",
    media3: Saga,
    media3Name: "redux-saga Blog Post Promotion",
    media4: Culture,
    media4Name: "Company Culture"
  }
];
