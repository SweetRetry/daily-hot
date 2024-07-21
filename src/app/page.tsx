import CardContainer from "@/components/card/CardContainer";
// import RenderWrap from "@/components/RenderWrap";
import { SocialItem } from "@/types/social";

const getData = async () => {
  const res = await fetch(
    "http://localhost:3000/api/hot-list?group=tiktok&group=juejin",
  );
  const data = await res.json();
  return data as SocialItem[];
};

export default async function Home() {
  const data = await getData();
  return (
    <section className="-mx-3 flex flex-wrap gap-y-4">
      {data.map((item) => (
        // <RenderWrap key={item.id} id={item.id}>
          <div className="xl:w-1/4 px-3 mobile:w-full tablet:w-1/2 pc:w-1/3">
            <CardContainer item={item} />
          </div>
        // </RenderWrap>
      ))}
    </section>
  );
}
