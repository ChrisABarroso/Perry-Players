import { seasonShows } from './photos.js'

// Paste the season pass purchase link here when it's ready.
export const SEASON_PASS_URL = ''

// Details for each announced show. Performances run Thu, Fri & Sat 7:30 PM
// and Sun 2:30 PM.
//
// WHEN TICKETS GO ON SALE: add `ticketsAvailable: true` to that show and the
// Buy Tickets buttons reappear across the site. Until then every page says
// tickets are on sale soon.
// WHEN A SHOW OPENS: add `nowShowing: true` so it is labelled Now Showing.
const details = {
  'She Loves Me': {
    slug: 'she-loves-me',
    tagline: 'A charming romantic comedy with a Christmastime finale',
    // Short version used on the home page hero card.
    blurb:
      "Two feuding co-workers at a 1930s Budapest parfumerie are secretly falling in love by letter — never guessing the stranger they adore is the person they can't stand.",
    synopsis:
      "In 1934 Budapest, co-workers Georg and Amalia seemingly despise one another at Maraczek's Parfumerie. After both respond to a \"lonely hearts ad\" in the newspaper, they now live for the letters that they exchange, not knowing that the stranger they're falling in love with is their own worst enemy. Based on the play Parfumerie, on which the movies You've Got Mail, The Shop Around The Corner, and In The Good Old Summertime are also based, the plot may seem pleasantly familiar. She Loves Me is a charming comedy with an endearing innocence and a touch of old world elegance with a grand Christmas time finale.",
    performances: 'December 11 – 20, 2026',
  },
}

// Every show with its own page, in performance order. This list drives the
// Shows page, the Shows dropdown in the nav, and /shows/:slug.
export const shows = seasonShows.map((show) => ({ ...show, ...details[show.title] }))

// The show featured on the home page: whatever is on stage now, or the next
// one announced.
export const featuredShow = shows.find((show) => show.nowShowing) || shows[0]

// True once any show has tickets for sale. Gates the Buy Tickets button in
// the nav so it never points at an empty box office.
export const ticketsOnSale = shows.some((show) => show.ticketsAvailable)

export function getShow(slug) {
  return shows.find((show) => show.slug === slug)
}
