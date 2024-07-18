export const MetadataDefault = {
  title: "Siam Kubota Online Showroom",
  description: "Siam Kubota Online Showroom",
  keywords: [
    "Siam Kubota",
    "Showroom",
    "สยามคูโบต้าคอร์ปอเรชั่น",
    "ผู้ผลิตแทรกเตอร์คูโบต้า"
  ],
  openGraph:{
    type: "website",
    title: "Siam Kubota Online Showroom",
    description: "Siam Kubota Online Showroom",
    locale: "th_TH",
    url: `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`,
    siteName: "Siam Kubota",
    images: [{url:`${process.env.SKBT_BASEPATH}/assets/img/share/og-image.jpg`, width: 1200,height: 630, type:'image/jpeg'}],
  },
  twitter : {
    card: "summary_large_image",
    title: "Siam Kubota Online Showroom",
    description: "Siam Kubota Online Showroom",
    images: [`${process.env.SKBT_BASEPATH}/assets/img/share/og-image.jpg`]
  }
};