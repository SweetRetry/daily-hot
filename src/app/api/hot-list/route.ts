import { list } from "@/config/list";
import dayjs from "dayjs";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const group = req.nextUrl.searchParams.getAll("group");
  const arraySchema = z
    .array(z.string())
    .min(1, "数组长度至少为 1")
    .max(6, "数组长度至多为 6");
  const validationResult = arraySchema.safeParse(group);
  if (validationResult.success) {
    const shouldRequestList = list.filter((item) =>
      validationResult.data.includes(item.id),
    );

    const res = await Promise.all(
      shouldRequestList.map(async (item) => {
        const response = await fetch(`http://localhost:3000/${item.api}`);
        const data = (await response.json()) as {
          updateTime: string;
          list: ListItem[];
        };

        return {
          id: item.id,
          name: item.name,
          fetchTime: dayjs(),
          ...data,
        };
      }),
    );

    return Response.json(res);
  } else {
    return Response.json({
      message: validationResult.error.message,
    });
  }
}
