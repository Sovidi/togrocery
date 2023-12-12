import { queryExecute } from "../route";
import { connection } from "../route";

export async function GET(req) {
    const qData = Object.fromEntries(req.nextUrl.searchParams);

    const data = await queryExecute(`select * from match_member where id=? && sNum=?`, [qData.id, qData.num]);

    await connection.end();
    if (data.length) {return Response.json(true)}
    else {return Response.json(false)}
}

export async function DELETE(req) {
    const qData = Object.fromEntries(req.nextUrl.searchParams);
    
    const data = await queryExecute("delete from match_member where id=? && sNum=?", [qData.id, qData.num]);

    await connection.end();
    return Response.json(data);
}

export async function POST(req) {
    const qData = Object.fromEntries(req.nextUrl.searchParams);

    const data = await queryExecute("insert into match_member (id, sNum) values (?, ?)", [qData.id, qData.num]);

    await connection.end();
    return Response.json(data);
}