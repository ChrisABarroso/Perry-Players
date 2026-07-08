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

function showTitle(path) {
  if (/little shop/i.test(path)) return 'Little Shop of Horrors'
  if (/hairspray/i.test(path)) return 'Hairspray'
  if (/driving miss daisy/i.test(path)) return 'Driving Miss Daisy'
  if (/parade/i.test(path)) return 'Parade'
  if (/peter pan/i.test(path)) return 'Peter Pan'
  if (/shrek/i.test(path)) return 'Shrek – The Musical'
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

// Portrait art for tall poster slots; wide art for banner slots.
// Falls back to whatever is in the folder if only one image exists.
const posterEntries = Object.entries(posterGlob)
const portraitEntry = posterEntries.find(([path]) => /portrait/i.test(path))
const wideEntry = posterEntries.find(([path]) => /landscape|wide|banner/i.test(path))

export const showPosterPortrait = (portraitEntry || posterEntries[0])?.[1]
export const showPosterWide = (wideEntry || posterEntries[0])?.[1]
