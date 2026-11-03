import type { GalleryImage } from "@/data/product-pages/waitlist";
import type { Review } from "@/data/reviews";

const base = "/images/products/hydrogen-prebiotic";

export const prebioticGallery: GalleryImage[] = [
  { src: `${base}/gallery-1.jpg`, alt: "Hydrogen prebiotic powder pouch, crisp apple flavor, with green apple and powder" },
  { src: `${base}/gallery-2.jpg`, alt: "Hydrogen powder being poured into a glass of water, creating a dissolving effect" },
  { src: `${base}/gallery-3.png`, alt: "Hydrogen prebiotic powder new formula in green apple flavor, with apple slices" },
  { src: `${base}/gallery-4.jpg`, alt: "Hydrogen prebiotic stick labeled Crisp Apple on a black textured background" },
  { src: `${base}/gallery-5.jpg`, alt: "Hydrogen prebiotic stick and packet next to a glass of water in natural light" },
  { src: `${base}/gallery-6.jpg`, alt: "Pouring hydrogen prebiotic powder into a glass of water outdoors" },
];

export const prebioticAttributes = [
  { icon: `${base}/attrs/h2-certified.png`, label: "H2 Certified" },
  { icon: `${base}/attrs/sugar-free.png`, label: "Sugar Free" },
  { icon: `${base}/attrs/gluten-free.png`, label: "Gluten Free" },
  { icon: `${base}/attrs/natural-flavors.png`, label: "Natural Flavors" },
  { icon: `${base}/attrs/caffeine-free.png`, label: "Caffeine Free" },
];

export const prebioticBenefits = [
  {
    icon: `${base}/benefit-energy.png`,
    title: "Energy",
    body: "Hydrogen helps fuel your cells to support sustained, natural energy—no caffeine, no sugar, no crash. Just clean momentum that keeps you going strong.",
  },
  {
    icon: `${base}/benefit-clarity.png`,
    title: "Clarity",
    body: "Hydrogen has been shown to support sharper thinking and mental clarity. Imagine moving through your day with focus and presence—less fog, more flow.",
  },
  {
    icon: `${base}/benefit-gut.png`,
    title: "Gut Health",
    body: "Hydrogen and prebiotic fiber work better together—contributing to a healthier gut, reducing inflammation, and helping boost digestion, immunity, and mood. Recover faster and feel your best—inside and out.",
  },
];

export const prebioticTiming = [
  { icon: `${base}/timing/morning.png`, label: "In the Morning" },
  { icon: `${base}/timing/gym.png`, label: "Before the Gym" },
  { icon: `${base}/timing/workout.png`, label: "After a Workout" },
  { icon: `${base}/timing/commute.png`, label: "On the way to work" },
  { icon: `${base}/timing/slump.png`, label: "In that afternoon slump" },
];

const t = `${base}/testimonials`;
export const prebioticTestimonials = [
  {
    avatar: `${t}/natalie-p.png`,
    title: "My Favorite Supplement",
    body: "I went into this with dubious expectation. Honestly blown away at the taste alone, and felt awesome the rest of the day. This is easily my favorite supplement to take.",
    name: "Natalie P.",
  },
  {
    avatar: `${t}/alex-o.png`,
    title: "Left Me Craving More.",
    body: "One of the most delicious drinks I've every tasted. Left me craving more. The fact that I got both the benefits of hydrogen gas and a prebiotic from that blew my mind.",
    name: "Alex O.",
  },
  {
    avatar: `${t}/tim-a.png`,
    title: "Wow! Well Done",
    body: "Wow! I was not expecting this to be this good. I usually have to power through these types of powder mixtures, but I’d choose to drink this even without all of the health benefits. Well done.",
    name: "Tim A.",
  },
  {
    avatar: `${t}/penny-m.png`,
    title: "Seriously IN LOVE",
    body: "I’m seriously loving the Echo Hydrogen Sticks! They've totally become my go-to whenever I need a little pick-me-up. I feel way more focused and energized after drinking one without the jitters or weird anxiety that I usually get from coffee or energy drinks. 🙌",
    name: "Penny M.",
  },
  {
    avatar: `${t}/trayce-w.png`,
    title: "Amazed- The Energy Boost!",
    body: "I was amazed by the energy boost. It gave me when I used the hydrogen pack. The taste was spot on. I enjoy using them on the trail to give me that added boost while I run.",
    name: "Trayce W.",
  },
  {
    avatar: `${t}/valarie-s.png`,
    title: "Surprisingly Delicious!",
    body: "The hydrogen prebiotic from Echo is genius, why not help improve your gut health with both hydrogen AND a prebiotic?! The crisp apple flavor is surprisingly delicious… and I don’t even normally like apple flavored things!",
    name: "Valarie S.",
  },
];

// The design marked some of these "Verified by Shop"; that badge is omitted (verified stays false for those).
export const prebioticReviews: Review[] = [
  { name: "Clarke", when: "2 weeks ago", verified: true, rating: 5, title: "5 stars", body: "5 stars", helpfulYes: 0 },
  {
    name: "Carla",
    when: "2 weeks ago",
    verified: true,
    rating: 5,
    title: "Love it!!",
    body: "I started 30 days ago with this product and what a difference it makes with my energy and my digestion, definitely tell the difference!",
    helpfulYes: 0,
  },
  {
    name: "robert",
    when: "2 weeks ago",
    verified: true,
    rating: 5,
    title: "Great flavor",
    body: "Feel better with a great flavor . Best way to start the day !",
    helpfulYes: 0,
  },
  {
    name: "Elizabeth",
    when: "4 months ago",
    verified: false,
    rating: 5,
    title: "5 Stars",
    body: "An absolutely addicting apple flavor that has a hint of sweetness and the instant fizz is so good. Dissolves quickly",
    helpfulYes: 0,
  },
  { name: "Eloy", when: "5 months ago", verified: false, rating: 5, title: "5 Stars", body: "Great taste it will buy again for sure", helpfulYes: 0 },
  {
    name: "Esther",
    when: "5 months ago",
    verified: false,
    rating: 5,
    title: "5 Stars",
    body: "This product is absolutely amazing! It is the cheapest version that you can get of hydrogen water into you for the health benefits and it works like if you were actually creating your own hydrogen water or you had a hydrogen machine.",
    helpfulYes: 0,
  },
  {
    name: "Linda",
    when: "5 months ago",
    verified: false,
    rating: 5,
    title: "5 Stars",
    body: "This hydrogen probiotic drink has a delicious apple flavor and is healthy to drink!",
    helpfulYes: 0,
  },
  {
    name: "Angela",
    when: "6 months ago",
    verified: false,
    rating: 5,
    title: "5 Stars",
    body: "Really strong and makes me pucker from the sourness but i dillute it and its pretty tasty. Make sure the water is not too cold or it wont dissolve as fast.",
    helpfulYes: 0,
  },
  { name: "Graham", when: "7 months ago", verified: false, rating: 5, title: "5 Stars", body: "Love this", helpfulYes: 0 },
  { name: "Lowell", when: "8 months ago", verified: false, rating: 5, title: "5 Stars", body: "Love it very well designed", helpfulYes: 0 },
  {
    name: "Merwin D.",
    when: "8 months ago",
    verified: true,
    rating: 5,
    title: "Refreshing, Convenient, and Great for Daily Gut Support",
    body: "I’ve been using the Echo Water Hydrogen Prebiotic Stick Pack and I really like how simple it is. I just mix it into a bottle of water and drink it right away. The taste is light and refreshing, and it actually helps me drink more water during the day. I’ve also noticed my digestion feels better and my energy feels more steady. It’s an easy addition to my routine and I’ll definitely keep using it.",
    helpfulYes: 0,
  },
  {
    name: "Activate @. I.",
    when: "8 months ago",
    verified: true,
    rating: 5,
    title: "Keeps hydrated",
    body: "I really didn't expect the results. Within few days I am seeing the difference between normal water and hydrogen water. It's keeps me hydrated. I would like to get more of these packs. Thanks to echo hydrogen.",
    helpfulYes: 0,
  },
];
