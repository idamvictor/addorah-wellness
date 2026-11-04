/**
 * Site-wide copy. Contact details and the brand description are placeholders
 * for Addorah Wellness to replace with real details.
 */
export const site = {
  name: "Addorah Wellness",
  description:
    "Addorah Wellness is dedicated to making the benefits of hydrogen water accessible to everyone. We bring cutting-edge hydrogen water and filtration technology into your home and your day — for better health, vitality, and longevity.",
  supportEmail: "support@addorahwellness.com",
  salesEmail: "sales@addorahwellness.com",
  copyrightYear: 2026,
  /**
   * Shown to customers who choose "Bank transfer" at checkout.
   * PLACEHOLDERS: replace with the business account before going live.
   */
  bankTransfer: {
    bankName: "Your Bank Name",
    accountName: "Addorah Wellness Ltd",
    accountNumber: "0000000000",
  },
  disclaimer:
    "These products are not intended to diagnose, treat, cure, or prevent any disease. Content on this site is for informational purposes only and should not be considered medical advice. Individual results may vary. Always consult a healthcare professional before use. Use of this site constitutes acceptance of our Terms of Use and Privacy Policy.",
};

export const announcements = [
  "1,200+ verified 5-star reviews",
  "Get a free water quality report today",
  "Free shipping on the ECHO Flask",
  "Join the waitlist for the ECHO Forty and ECHO One today",
  "ECHO products are HSA/FSA eligible",
];

export type FooterLink = { label: string; href?: string };

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Hydrogen Products",
    links: [
      { label: "Echo Flask™", href: "/products/echo-flask" },
      { label: "Echo Forty", href: "/products/echo-forty" },
      { label: "Echo One", href: "/products/echo-one" },
      { label: "Hydrogen Prebiotic" },
      { label: "Echo Ultimate™" },
      { label: "Echo H2® Flow" },
      { label: "Echo Revive™" },
      { label: "Echo Refresh" },
    ],
  },
  {
    title: "Filters/Parts",
    links: [
      { label: "WH Water Filter" },
      { label: "Echo RO System" },
      { label: "Pitcher Filter" },
      { label: "Replacement Filters" },
      { label: "Replacement Parts" },
      { label: "Faucets" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { label: "Become a Wholesaler" },
      { label: "Wholesaler Login" },
      { label: "Store Locator" },
      { label: "Become an Affiliate" },
      { label: "Affiliate Login" },
      { label: "Become an Ambassador" },
      { label: "Corporate Gifting" },
      { label: "3rd Party Registration" },
    ],
  },
];

export const supportLinks: FooterLink[] = [
  { label: "My Account" },
  { label: "Submit Return Request" },
  { label: "Support Center" },
  { label: "Warranty Claim Review" },
  { label: "Store Locator" },
  { label: "Newsroom" },
  { label: "Blog" },
  { label: "Leave a Review" },
  { label: "Subscribe to SMS" },
  { label: "Subscribe & Save Info" },
  { label: "Referral Program" },
];

export const policyLinks: FooterLink[] = [
  { label: "Return Policy" },
  { label: "Shipping Policy" },
  { label: "Warranty Policy" },
  { label: "Privacy Policy" },
];

export const socialLinks = [
  { label: "Facebook", icon: "/images/brand/social-facebook.svg" },
  { label: "X", icon: "/images/brand/social-x.svg" },
  { label: "Instagram", icon: "/images/brand/social-instagram.svg" },
  { label: "YouTube", icon: "/images/brand/social-youtube.svg" },
  { label: "TikTok", icon: "/images/brand/social-tiktok.svg" },
];

export const paymentMethods = [
  { label: "Visa", icon: "/images/brand/pay-visa.svg" },
  { label: "Mastercard", icon: "/images/brand/pay-mastercard.svg" },
  { label: "American Express", icon: "/images/brand/pay-amex.svg" },
  { label: "PayPal", icon: "/images/brand/pay-paypal.svg" },
  { label: "Apple Pay", icon: "/images/brand/pay-applepay.svg" },
];
