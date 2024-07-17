import CardContainer from "@/components/card/CardContainer";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/hot-list?group=tiktok");
  const data = await res.json();
  return data as {
    id: string;
    name: string;
    fetchTime: string;
    updateTime: string;
    list: ListItem[];
  }[];
};

export default async function Home() {
  const data = await getData();
  return (
    <section className="p-3 flex flex-wrap -mx-3 gap-y-4">
      {data.map((item) => (
        <CardContainer item={item} key={item.id} />
      ))}
    </section>
  );
}
