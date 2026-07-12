export const BOX_OFFICE_EMAIL = 'perryplayersboxoffice@gmail.com'

// Opens Gmail's compose window in a new tab, pre-addressed to the box office.
// Unlike mailto: links, this works for visitors who use Gmail in the browser
// and have no desktop mail app configured.
export function emailLink(subject = '', body = '') {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: BOX_OFFICE_EMAIL })
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)
  return `https://mail.google.com/mail/?${params.toString()}`
}
