export type Review = {
  name: string;
  /** Avatar text; defaults to the first letter of `name`. */
  initials?: string;
  when: string;
  verified: boolean;
  rating: number;
  title: string;
  body: string;
  helpfulYes: number;
  helpfulNo?: number;
};

export type ReviewSummary = {
  rating: number;
  /** Counts for 5, 4, 3, 2 and 1 stars, in that order. */
  distribution: [number, number, number, number, number];
  recommendPct: number;
  reviews: Review[];
};

export const flaskReviews: ReviewSummary = {
  rating: 4.6,
  distribution: [414, 92, 14, 8, 15],
  recommendPct: 93,
  reviews: [
    { name: "Isabel", when: "3 days ago", verified: false, rating: 5, title: "5 Stars", body: "love love my hydra flask!", helpfulYes: 0 },
    { name: "Jerome", when: "2 weeks ago", verified: true, rating: 5, title: "Excellent", body: "awesome device, I love it!", helpfulYes: 0 },
    {
      name: "Kimberly",
      when: "2 weeks ago",
      verified: true,
      rating: 5,
      title: "Amazing! So much more energy!",
      body: "I have been suffering from low energy and brain fog. I noticed that I’m sharper mentally. Can absorb more information without fatigue and the need for an afternoon nap. I’m delighted at the changes. I think that I’m sleeping better at night as well.",
      helpfulYes: 1,
    },
    {
      name: "Stephen",
      when: "2 weeks ago",
      verified: true,
      rating: 5,
      title: "Flask",
      body: "By far, the best hydrogen water bottle of its size of any I have used.",
      helpfulYes: 0,
    },
    { name: "Nuno", when: "2 weeks ago", verified: true, rating: 5, title: "5 stars", body: "5 stars", helpfulYes: 0 },
  ],
};
