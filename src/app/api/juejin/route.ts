import dayjs from "dayjs";
export async function GET() {
  const res = await fetch(
    "https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot",
    { cache: "no-cache" },
  );
  const data = await res.json();

  const list: SocialItem[] = data.data.map((item: Record<string, any>) => {
    return {
      id: item.content.content_id,
      title: item.content.title,
      hot: Number(item.content_counter.hot_rank),
      url: `https://juejin.cn/post/${item.content.content_id}`,
      mobileUrl: `https://juejin.cn/post/${item.content.content_id}`,
    };
  });

  const current = dayjs().format("YYYY-MM-DD HH:mm:ss");

  return Response.json({
    updateTime: current,
    list,
  });
}
