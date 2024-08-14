import { redirect } from 'next/navigation';

export default function Product() {
  const basePath = `${process.env.SKBT_BASEPATH}`;

  redirect(`${basePath}/product/%E0%B9%81%E0%B8%97%E0%B8%A3%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C`);
}
