import { queryExecute } from "../route";
import { connection } from "../route";

export async function GET(req, {params}) {
    const qData = Object.fromEntries(req.nextUrl.searchParams)

    const data = await queryExecute('select * from members where id=? && password=?', [qData.id, qData.password]);

    connection.end();
    return Response.json(data);
}
