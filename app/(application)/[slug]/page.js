export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}
export default function Page({ params }) {
  return <h1>{params.slug}</h1>;
}
