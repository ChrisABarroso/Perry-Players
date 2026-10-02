import { seasonShows, showPosterPortrait } from './photos.js'

// Paste the season pass purchase link here when it's ready.
export const SEASON_PASS_URL = ''

// The show currently on stage. Its poster comes from the Current Show
// Poster folder.
const nowShowing = {
  title: 'Into the Woods',
  slug: 'into-the-woods',
  src: showPosterPortrait,
  nowShowing: true,
  tagline: 'Be careful what you wish for',
  synopsis:
    "Stephen Sondheim and James Lapine's masterpiece weaves together the fairy tales you grew up with — Cinderella, Jack and the Beanstalk, Little Red Riding Hood, Rapunzel — around a baker and his wife who long for a child. To lift a witch's curse, they venture into the woods, where every wish comes true… and every wish has a price. Witty, haunting, and gorgeous, it's one of the greatest musicals ever written.",
  performances: 'October 16 – 25, 2026',
}

// Details for each announced upcoming show. Performances run Thu, Fri & Sat
// 7:30 PM and Sun 2:30 PM. Add `ticketsOnSale` once the date is set; until
// then the show page says "Coming soon".
const details = {
  'She Loves Me': {
    slug: 'she-loves-me',
    tagline: 'A charming romantic comedy with a Christmastime finale',
    synopsis:
      "In 1934 Budapest, co-workers Georg and Amalia seemingly despise one another at Maraczek's Parfumerie. After both respond to a \"lonely hearts ad\" in the newspaper, they now live for the letters that they exchange, not knowing that the stranger they're falling in love with is their own worst enemy. Based on the play Parfumerie, on which the movies You've Got Mail, The Shop Around The Corner, and In The Good Old Summertime are also based, the plot may seem pleasantly familiar. She Loves Me is a charming comedy with an endearing innocence and a touch of old world elegance with a grand Christmas time finale.",
    auditions: 'October 10 – 11, 2026',
    auditionTimes: 'Doors open 6:30 PM · Auditions start 7:00 PM',
    performances: 'December 11 – 20, 2026',
  },
}

// Every show with its own page, in performance order. This list drives the
// Shows page, the Shows dropdown in the nav, and /shows/:slug.
export const shows = [
  nowShowing,
  ...seasonShows.map((show) => ({ ...show, ...details[show.title] })),
]

export function getShow(slug) {
  return shows.find((show) => show.slug === slug)
}
