import { seasonShows } from './photos.js'

// Paste the season pass purchase link here when it's ready.
export const SEASON_PASS_URL = ''

// Season details for the 2026–27 season. Performances run Fri & Sat 7:30 PM
// and Sun 2:30 PM; tickets go on sale ~2 weeks before each opening night.
const details = {
  'Finding Nemo': {
    slug: 'finding-nemo',
    tagline: 'An unforgettable journey across the ocean',
    synopsis:
      "Just keep swimming! Based on the beloved Pixar film, Finding Nemo follows Marlin, an overprotective clownfish, as he crosses the entire ocean to find his son Nemo — who's been scooped up and dropped into a dentist's office fish tank. With the help of Dory, a cheerfully forgetful blue tang, Marlin discovers that the ocean is full of danger, wonder, and friends in the most unexpected places. Performed by our talented young actors, this is an adventure the whole family will love.",
    auditions: 'July 27 – 28, 2026',
    performances: 'September 4 – 13, 2026',
    ticketsOnSale: 'August 21, 2026',
  },
  'Into the Woods': {
    slug: 'into-the-woods',
    tagline: 'Be careful what you wish for',
    synopsis:
      "Stephen Sondheim and James Lapine's masterpiece weaves together the fairy tales you grew up with — Cinderella, Jack and the Beanstalk, Little Red Riding Hood, Rapunzel — around a baker and his wife who long for a child. To lift a witch's curse, they venture into the woods, where every wish comes true… and every wish has a price. Act One gives you the happily-ever-after; Act Two asks what happens next. Witty, haunting, and gorgeous, it's one of the greatest musicals ever written.",
    auditions: 'August 29 – 30, 2026',
    performances: 'October 16 – 25, 2026',
    ticketsOnSale: 'October 2, 2026',
  },
  'The Sound of Music': {
    slug: 'sound-of-music',
    tagline: 'The hills are alive',
    synopsis:
      "Rodgers and Hammerstein's final and most beloved collaboration. When the free-spirited Maria leaves the abbey to become governess to Captain von Trapp's seven children, she brings music back into a household that had forgotten how to sing. As romance blooms and the shadow of the Third Reich falls over Austria, the von Trapps must find the courage to hold onto what matters most. With 'My Favorite Things,' 'Do-Re-Mi,' 'Edelweiss,' and 'Climb Ev'ry Mountain,' it's a timeless story for every generation.",
    auditions: 'October 18 – 19, 2026',
    performances: 'December 11 – 20, 2026',
    ticketsOnSale: 'November 27, 2026',
  },
  'Little Women': {
    slug: 'little-women',
    tagline: 'Four sisters. One extraordinary story.',
    synopsis:
      "Based on Louisa May Alcott's cherished novel, Little Women follows the four March sisters — traditional Meg, wild and aspiring writer Jo, timid Beth, and romantic Amy — as they grow up in Civil War-era Massachusetts. Guided by their beloved Marmee while their father is away at war, the sisters discover love, loss, ambition, and the unbreakable bond of family. With a soaring score by Jason Howland and Mindi Dickstein, it's an intimate, heartfelt musical about finding your own astonishing voice.",
    auditions: 'December 13 – 14, 2026',
    performances: 'February 26 – March 7, 2027',
    ticketsOnSale: 'February 12, 2027',
  },
  Ragtime: {
    slug: 'ragtime',
    tagline: 'Three families. One American dream.',
    synopsis:
      "Based on E.L. Doctorow's sweeping novel, Ragtime weaves together the stories of three families at the dawn of the twentieth century: a well-to-do family in New Rochelle, a bold Harlem ragtime pianist named Coalhouse Walker Jr., and a Jewish immigrant father and daughter chasing a better life. Their paths cross with historical figures like Harry Houdini, Evelyn Nesbit, and Booker T. Washington as America itself changes around them. Stephen Flaherty and Lynn Ahrens' stunning score makes this one of the most powerful musicals ever written.",
    auditions: 'March 21 – 22, 2027',
    performances: 'May 14 – 23, 2027',
    ticketsOnSale: 'April 30, 2027',
  },
  'Sister Act': {
    slug: 'sister-act',
    tagline: 'A divine musical comedy',
    synopsis:
      "When disco diva Deloris Van Cartier witnesses a crime, the police hide her in the last place anyone would look — a convent! Disguised as a nun under the watchful eye of a disapproving Mother Superior, Deloris can't help herself: she transforms the convent's tone-deaf choir into a soulful, show-stopping sensation. With an original score by Tony and Oscar winner Alan Menken, Sister Act is a feel-good celebration of friendship, sisterhood, and finding your voice — heavenly fun from start to finish.",
    auditions: 'May 16 – 17, 2027',
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
