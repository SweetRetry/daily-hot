export async function GET() {
  const res = await fetch("https://aweme.snssdk.com/aweme/v1/hot/search/list/");
  const data = await res.json();

  const list: ListItem[] = data.data.word_list.map(
    (item: Record<string, any>) => {
      return {
        id: item.group_id,
        title: item.word,
        hot: Number(item.hot_value),
        url: `https://www.douyin.com/hot/${encodeURIComponent(item.sentence_id)}`,
        mobileUrl: `https://www.douyin.com/hot/${encodeURIComponent(item.sentence_id)}`,
      };
    },
  );

  return Response.json({
    updateTime: data.data.active_time,
    list,
  });
}
