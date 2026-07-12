import { seasonShows } from './photos.js'

// Season details for the 2026–27 season. Dates are per-show; performances
// run Fri & Sat 7:30 PM and Sun 2:30 PM, tickets on sale ~2 weeks before opening.
const details = {
  Wicked: {
    slug: 'wicked',
    tagline: 'The untold story of the witches of Oz',
    synopsis:
      "Long before Dorothy drops in, two girls meet at Shiz University: Elphaba — born with emerald-green skin, smart, fiery, and misunderstood — and Glinda, beautiful, ambitious, and wildly popular. Their unlikely friendship is tested as the world pulls them in opposite directions: one becomes Glinda the Good, the other the Wicked Witch of the West. With Stephen Schwartz's soaring score, including 'Defying Gravity' and 'Popular,' Wicked looks at everything you thought you knew about Oz from a whole new angle.",
    auditions: 'July 6 – 7, 2026',
    performances: 'September 11 – 20, 2026',
    ticketsOnSale: 'August 28, 2026',
  },
  Hamilton: {
    slug: 'hamilton',
    tagline: 'The story of America then, told by America now',
    synopsis:
      "Lin-Manuel Miranda's revolutionary musical tells the story of Alexander Hamilton — a penniless immigrant orphan who rises to become George Washington's right-hand man and the nation's first Treasury Secretary. Blending hip-hop, jazz, R&B, and Broadway, Hamilton follows his meteoric rise, his passionate marriage to Eliza Schuyler, and his fateful rivalry with Aaron Burr. It's the story of founding a nation — ambition, legacy, love, and loss — like you've never heard it before.",
    auditions: 'September 14 – 15, 2026',
    performances: 'November 6 – 15, 2026',
    ticketsOnSale: 'October 23, 2026',
  },
  'Matilda Jr.': {
    slug: 'matilda-jr',
    tagline: 'A little girl with big dreams — and even bigger powers',
    synopsis:
      "Based on Roald Dahl's beloved book, Matilda Jr. is the story of Matilda Wormwood, an extraordinary little girl with a vivid imagination and a sharp mind — stuck with parents who don't appreciate her and a terrifying headmistress, Miss Trunchbull, who despises children. With the help of her kind teacher Miss Honey and a few remarkable powers of her own, Matilda dares to take a stand and change her own story. Performed by our talented young actors, with Tim Minchin's witty, inventive songs.",
    auditions: 'October 19 – 20, 2026',
    performances: 'December 11 – 13, 2026',
    ticketsOnSale: 'November 27, 2026',
  },
  Ragtime: {
    slug: 'ragtime',
    tagline: 'Three families. One American dream.',
    synopsis:
      "Based on E.L. Doctorow's sweeping novel, Ragtime weaves together the stories of three families at the dawn of the twentieth century: a well-to-do family in New Rochelle, a bold Harlem ragtime pianist named Coalhouse Walker Jr., and a Jewish immigrant father and daughter chasing a better life. Their paths cross with historical figures like Harry Houdini, Evelyn Nesbit, and Booker T. Washington as America itself changes around them. Stephen Flaherty and Lynn Ahrens' stunning score makes this one of the most powerful musicals ever written.",
    auditions: 'December 7 – 8, 2026',
    performances: 'February 12 – 21, 2027',
    ticketsOnSale: 'January 29, 2027',
  },
  13: {
    slug: '13',
    tagline: 'Growing up is hard — especially in a brand new town',
    synopsis:
      "From Tony Award-winner Jason Robert Brown, 13 follows Evan Goldman, a New York City kid whose life is turned upside down when his parents' divorce lands him in small-town Indiana — right before his thirteenth birthday. Determined to make his bar mitzvah the coolest party in town, Evan has to navigate new friendships, first crushes, cliques, and every hilarious, awkward moment of being almost-thirteen. Performed entirely by a cast of young performers, 13 is fresh, funny, and full of heart.",
    auditions: 'January 25 – 26, 2027',
    performances: 'March 19 – 21, 2027',
    ticketsOnSale: 'March 5, 2027',
  },
  'West Side Story': {
    slug: 'west-side-story',
    tagline: 'Two gangs. Two lovers. One unforgettable story.',
    synopsis:
      "Shakespeare's Romeo and Juliet collides with the streets of 1950s New York in one of the greatest musicals of all time. The Jets and the Sharks battle for their corner of the Upper West Side — until Tony, a Jet, falls hopelessly in love with Maria, the sister of the Sharks' leader. Leonard Bernstein's electrifying score and Stephen Sondheim's lyrics gave the world 'Maria,' 'Tonight,' 'America,' and 'Somewhere' — and a love story that still breaks hearts seventy years on.",
    auditions: 'March 1 – 2, 2027',
    performances: 'April 30 – May 9, 2027',
    ticketsOnSale: 'April 16, 2027',
  },
  Hairspray: {
    slug: 'hairspray',
    tagline: 'Big hair. Big heart. Big dreams.',
    synopsis:
      "It's 1962 in Baltimore, and lovable big-haired teen Tracy Turnblad has one dream: to dance on the Corny Collins Show. When she wins a spot on the show, Tracy becomes an overnight sensation — and uses her newfound fame to fight for what's right, campaigning to integrate the show so everyone can dance together. Bursting with Marc Shaiman and Scott Wittman's irresistible songs like 'Good Morning Baltimore' and 'You Can't Stop the Beat,' Hairspray is a big, bright, joyful party of a musical.",
    auditions: 'May 17 – 18, 2027',
    performances: 'July 16 – 25, 2027',
    ticketsOnSale: 'July 2, 2027',
  },
}

export const season = seasonShows.map((show, i) => ({
  ...show,
  ...details[show.title],
  number: i + 1,
}))

export function getShow(slug) {
  return season.find((show) => show.slug === slug)
}
