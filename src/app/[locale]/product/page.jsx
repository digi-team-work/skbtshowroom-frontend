import { redirect } from 'next/navigation';

export default function Product() {
  const basePath = `${process.env.SKBT_BASEPATH}`;

  redirect(`${basePath}/product/1`);
}
