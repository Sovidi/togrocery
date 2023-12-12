import { queryExecute } from "../route";
import { connection } from "../route";

export async function POST(req) {
    const qdata = await req.json();
    await queryExecute("insert into comment (sNum, id, nickname, text) values (?, ?, ?, ?)", [qdata.num, qdata.id, qdata.nickname, qdata.text])
    const data = await queryExecute("select * from comment where sNum=?", [qdata.num])

    connection.end();
    return Response.json(data);
}

export async function GET(req) {
    const qData = Object.fromEntries(req.nextUrl.searchParams);
    const data = await queryExecute("select * from comment where sNum=?", [qData.num])

    connection.end();
    return Response.json(data);
}
