import { fetchMedia } from "@/shared/api";
import { getMediaParam } from "@/shared/api/const";
import { mediaTypeMaps } from "@/shared/api/maps";
import { Media, MediaResponse } from "@/shared/api/types";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const type = searchParams.get("type");

  if (!type || !page) {
    return Response.json({ message: "type and page required" });
  }
  const param = getMediaParam(type);
  if (!param) {
    return new Response("invalid type", { status: 404 });
  }
  if (!("page" in param?.query)) {
    return new Response("unsupported type", {status: 400});
  }

  const mapResponse = mediaTypeMaps[param.type];
  const res = await fetchMedia<MediaResponse<Media[]>>(param.url, {
    ...param.query,
    page,
  }).then((data) => ({ ...data, results: data.results.map(mapResponse) }));

  return Response.json(res);
};
