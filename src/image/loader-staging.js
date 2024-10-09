export default function myImageLoader({ src, width, quality }) {    
  // SKBT_HTTP_HOST="http://skbt-main.local:3000"
  // SKBT_SUBFOLDER="/onlineshowroom"
  // https://skbt-main.digi-team.work/onlineshowroom
  return `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}/${src}?w=${width}&q=${quality || 75}`
}
