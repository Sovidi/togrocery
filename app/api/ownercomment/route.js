import { queryExecute } from "../route";
import { connection } from "../route";

export async function GET(req) {
    let qData = Object.fromEntries(req.nextUrl.searchParams)
    let data = await queryExecute("select * from new_match where num=?", [qData.num]);
    
    await connection.end();
    return Response.json(data);
}