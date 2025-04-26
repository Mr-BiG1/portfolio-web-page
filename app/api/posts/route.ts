// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//     try {
//         const { title, slug, content, coverImage } = await request.json();

//         if (!title || !slug || !content) {
//             return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//         }

//         await sql`
//       INSERT INTO posts (title, slug, content, cover_image)
//       VALUES (${title}, ${slug}, ${content}, ${coverImage || null})
//     `;

//         return NextResponse.json({ message: "Blog created successfully" }, { status: 201 });
//     } catch (error) {
//         console.error("[POST ERROR]", error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }
