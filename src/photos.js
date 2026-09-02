// Loads every image in each Photos subfolder — drop new photos in and
// they appear on the site automatically after a refresh.

const campGlob = import.meta.glob("./Photos/Children's Camp/*", {
  eager: true,
  import: 'default',
})
const mainstageGlob = import.meta.glob('./Photos/MainStage/*', {
  eager: true,
  import: 'default',
})
const posterGlob = import.meta.glob('./Photos/Current Show Poster/*', {
  eager: true,
  import: 'default',
})
const seasonGlob = import.meta.glob('./Photos/Season Posters/*', {
  eager: true,
  import: 'default',
})

function showTitle(path) {
  if (/little shop/i.test(path)) return 'Little Shop of Horrors'
  if (/hairspray/i.test(path)) return 'Hairspray'
  if (/driving miss daisy/i.test(path)) return 'Driving Miss Daisy'
  if (/parade/i.test(path)) return 'Parade'
  if (/peter pan/i.test(path)) return 'Peter Pan'
  if (/shrek/i.test(path)) return 'Shrek – The Musical'
  if (/anastasia/i.test(path)) return 'Anastasia - The Musical'
  if (/addams family/i.test(path)) return 'Addams Family'
  return 'Perry Players MainStage'
}

export const campPhotos = Object.entries(campGlob).map(([path, src]) => ({
  src,
  alt: 'Perry Players youth summer camp performance',
}))

export const mainstagePhotos = Object.entries(mainstageGlob).map(([path, src]) => ({
  src,
  caption: showTitle(path),
  alt: `Scene from ${showTitle(path)} at Perry Players`,
}))

// The season lineup, in performance order. Each entry finds its poster in
// the Season Posters folder by filename; shows without a poster yet get a
// styled placeholder until the file is added.
const seasonOrder = [
  { title: 'Finding Nemo', match: /nemo/i, kids: true },
  { title: 'Into the Woods', match: /into the woods/i },
  { title: 'The Sound of Music', match: /sound of music/i },
  { title: 'Little Women', match: /little women/i },
  { title: 'Ragtime', match: /ragtime/i },
  { title: 'Sister Act', match: /sister act/i },
]

export const seasonShows = seasonOrder.map((show) => {
  const entry = Object.entries(seasonGlob).find(([path]) => show.match.test(path))
  return { title: show.title, kids: show.kids, src: entry ? entry[1] : null }
})

// Portrait art for tall poster slots; wide art for banner slots.
// Falls back to whatever is in the folder if only one image exists.
const posterEntries = Object.entries(posterGlob)
const portraitEntry = posterEntries.find(([path]) => /portrait/i.test(path))
const wideEntry = posterEntries.find(([path]) => /landscape|wide|banner/i.test(path))

export const showPosterPortrait = (portraitEntry || posterEntries[0])?.[1]
export const showPosterWide = (wideEntry || posterEntries[0])?.[1]
