export type Expert = {
  name: string;
  title: string;
  /** Omitted for video-only endorsements. */
  quote?: string;
  /** Portrait used on the product page slider. */
  portrait: string;
  /** Wide photo for the home page tab panel; falls back to the portrait. */
  feature?: string;
  hasVideo?: boolean;
};

export const experts: Expert[] = [
  {
    name: "Ben Greenfield",
    title: "Author, Nutritionist, Physiologist, Fitness Coach",
    quote:
      "Hydrogenated water is far different than regular water. The way that hydrogen gas dissolved in water actually affects your cells... hydrogenated water can act as an exercise mimetic, just like ‘exercise in a pill...’",
    portrait: "/images/experts/ben-greenfield.jpg",
    feature: "/images/home/expert-ben-greenfield.png",
  },
  {
    name: "Chris Williamson",
    title: "Modern Wisdom",
    quote: "Get the Echo Flask. It's a game-changer. I Love It.",
    portrait: "/images/experts/chris-williamson.png",
  },
  {
    name: "Ben Giese",
    title: "RIDEBYND Podcast Host",
    quote:
      "I’ve been using ECHO Hydrogen Water for a few years now and it’s one of the simplest ways to feel better, think clearer, and show up at my best.",
    portrait: "/images/experts/ben-giese.jpg",
  },
  {
    name: "Tim Gray",
    title: "Community-First Biohacker",
    quote:
      "I don’t carry many gadgets. But here’s the test: if I notice skipping it, it stays. The Echo Flask made the cut.",
    portrait: "/images/experts/tim-gray.jpg",
  },
  {
    name: "Jesse James West",
    title: "YouTube Personality, Body Builder",
    quote:
      "If you’re serious about performance and longevity, upgrading your water is non-negotiable. Echo changed the game for me.",
    portrait: "/images/experts/jesse-james-west.jpg",
  },
  {
    name: "Andrew Huberman",
    title: "Neuroscientist",
    portrait: "/images/experts/andrew-huberman.jpg",
    hasVideo: true,
  },
];

/** Order of the product page slider (matches the design). */
export const sliderOrder = [
  "Andrew Huberman",
  "Chris Williamson",
  "Ben Greenfield",
  "Tim Gray",
  "Ben Giese",
  "Jesse James West",
];
