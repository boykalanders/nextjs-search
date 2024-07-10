import { connectToElasticsearch } from "../_lib/elasticsearch";
import { NextResponse } from 'next/server'

export async function GET(req) {
  try{
    const client = await connectToElasticsearch();
    
    const query = await req.nextUrl.searchParams;
    const term = await query.get("term");
    const page = await query.get("page");
    const { body } = await client.search({
      index: "search-search-priorurls",
      from: page,
      size: 20,
      body: {
        query: {
          match : {
            title: `%${term}%`,
            // content: `%${term}%`
          },
        },
      },
    });

    let searchResults = body.hits.hits;
    return NextResponse.json(searchResults, {status:200});
  } catch(err) {
    console.error(err)
  }
}
