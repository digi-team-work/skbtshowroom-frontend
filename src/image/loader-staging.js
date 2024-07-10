export default function myImageLoader({ src, width, quality }) {  
  return `https://skbt-main.digi-team.work/onlineshowroom/${src}?w=${width}&q=${quality || 75}`
}