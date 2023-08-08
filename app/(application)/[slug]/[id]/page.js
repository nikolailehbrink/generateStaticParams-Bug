export const dynamicParams = false;

export function generateStaticParams({ params: { slug } }) {
  // Always undefined
  console.log("slug: " + slug);
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export default function Page({ params }) {
  return (
    <h1>
      {params.slug}/{params.id}
    </h1>
  );
}
