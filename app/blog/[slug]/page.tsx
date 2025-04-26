import { fetchBlogBySlug } from "@/lib/blogService";

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const blog = await fetchBlogBySlug(params.slug);

    if (!blog) {
        return (
            <div className="text-center py-32 text-muted-foreground">
                Blog not found
            </div>
        );
    }

    return (
        <div className="w-full px-4 sm:px-6 lg:px-20 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-primary">{blog.title}</h1>

                {blog.cover_image && (
                    <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg"
                    />
                )}

                <p className="text-sm text-muted-foreground mb-6">
                    {new Date(blog.created_at).toLocaleDateString()}
                </p>

                <div
                    className="prose prose-invert prose-lg max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </div>
    );
}
