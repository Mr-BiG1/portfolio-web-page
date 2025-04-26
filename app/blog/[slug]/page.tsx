// import { fetchBlogBySlug } from "@/lib/blogService";
// import Image from "next/image";

// interface BlogDetailPageProps {
//     params: {
//         slug: string;
//     };
// }

// export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
//     const blog = await fetchBlogBySlug(params.slug);

//     if (!blog) {
//         return (
//             <div className="text-center py-32 text-muted-foreground">
//                 Blog not found
//             </div>
//         );
//     }

//     return (
//         <div className="w-full px-4 sm:px-6 lg:px-20 py-20">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-bold mb-4 text-primary">{blog.title}</h1>

//                 {blog.cover_image && (
//                     <Image
//                         src={blog.cover_image}
//                         alt={blog.title}
//                         width={1200}
//                         height={500}
//                         className="rounded-md mb-6 w-full max-h-96 object-cover"
//                         priority
//                     />
//                 )}

//                 <p className="text-sm text-muted-foreground mb-6">
//                     {new Date(blog.created_at).toLocaleDateString()}
//                 </p>

//                 <div
//                     className="prose prose-invert prose-lg max-w-none text-muted-foreground"
//                     dangerouslySetInnerHTML={{ __html: blog.content }}
//                 />
//             </div>
//         </div>
//     );
// }

import { fetchBlogBySlug } from "@/lib/blogService";

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

// Full updated page component
export default async function BlogDetailPage({ params }: { params: Promise<BlogDetailPageProps["params"]> }) {
    const resolvedParams = await params; // await the params
    const blog = await fetchBlogBySlug(resolvedParams.slug); // now use resolvedParams

    if (!blog) {
        return (
            <div className="text-center py-32 text-muted-foreground">
                Blog not found
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            {blog.cover_image && (
                <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8"
                />
            )}

            <p className="text-muted-foreground text-sm mb-8">
                {new Date(blog.created_at).toLocaleDateString()}
            </p>

            <div
                className="prose prose-lg text-muted-foreground max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
}
