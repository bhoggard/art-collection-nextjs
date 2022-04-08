import type { NextApiRequest, NextApiResponse } from "next"
const AsyncAirtable = require("asyncairtable")

const api_key = process.env.AIRTABLE_API_KEY || ""
const base_id = process.env.AIRTABLE_BASE_ID || ""

const asyncAirtable = new AsyncAirtable(api_key, base_id)

type Data = {
  name: string
}

type ArtworkImage = {
  url: string
  height: number
  width: number
}

type Artwork = {
  title: String
  images: [ArtworkImage?]
}

const recordToArtwork = (record: AirtableRecord<FieldSet>): Artwork => {
  const title = record.get("title")?.toString() ?? ""
  console.log(title)
  return { title, images: [] }

  const imagesData = record.get("public images") as Array<any>
  let images: [ArtworkImage?] = []

  imagesData.forEach((image: any) => {
    const url = image.get("url") as string
    const height = image.get("height") as number
    const width = image.get("width") as number
    images.push({ url, height, width })
  })

  return { title, images }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const artworks: Artwork[] = []
  const items = await asyncAirtable.select("works", { view: "HomePageView" })
  console.log(items)

  res.status(200).json({ name: "John Doe" })
}
