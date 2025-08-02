export default async function Page({ params }: { params: { slug: string } }) {
  return <div>Blog {params.slug}</div>;
}