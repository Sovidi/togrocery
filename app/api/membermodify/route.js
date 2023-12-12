import { queryExecute } from "../route";
import { connection } from "../route";

export async function GET(req) {
    const qData = Object.fromEntries(req.nextUrl.searchParams);

    const data = await queryExecute(`select * from match_member where sNum=?`, [qData.num]);
    const modifydata = await queryExecute("update new_match set mCount=? where num=?", [data.length, qData.num]);
    const getdata = await queryExecute(`select * from new_match where num=?`, [qData.num]);
    
    connection.end();
    return Response.json(getdata)
}
