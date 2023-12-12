import { queryExecute } from "../route";
import { connection } from "../route";

export async function GET(req) {
    let qData = Object.fromEntries(req.nextUrl.searchParams)

    let data = await queryExecute("select * from memo where id=?", [qData.id]);

    await connection.end();
    return Response.json(data);
}



export async function POST(req) {
    const data = await req.json();
    await queryExecute("insert into memo (id, text, ch) values (?, ?, ?)", [data.id, data.text, data.ch]);
    const newData = await queryExecute("select * from memo where id=?", [data.id]);

    await connection.end();
    return Response.json(newData);
}

export async function DELETE(req) {
    const {id,num} = Object.fromEntries(  req.nextUrl.searchParams )

    await queryExecute(`delete from memo where num in (${num})`)
    const getData = await queryExecute("select * from memo where id=?",[id]);

    await connection.end();
    return Response.json(getData);
}