export default function myImageLoader({ src, width, quality }) {  
  return `https://www.siamkubota.co.th/onlineshowroom/${src}?w=${width}&q=${quality || 75}`
}