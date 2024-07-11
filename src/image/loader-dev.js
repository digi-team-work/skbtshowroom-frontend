export default function myImageLoader({ src, width, quality }) {  
  return `http://skbt-main.local:3000/${src}?w=${width}&q=${quality || 75}`
}
