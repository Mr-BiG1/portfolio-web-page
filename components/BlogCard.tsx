import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface Props {
    blog: BlogPost;
}

export default function BlogCard({ blog }: Props) {
    return (
        <div className="bg-secondary p-6 rounded-lg shadow-md">
            {blog.cover_image && (
                <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-60 object-cover rounded-md mb-4"
                />
            )}

            <h2 className="text-2xl font-bold text-primary mb-2">{blog.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">
                {new Date(blog.created_at).toLocaleDateString()}
            </p>
            <p className="text-muted-foreground mb-4 line-clamp-3">
                {blog.content}
            </p>

            <Link
                href={`/blog/${blog.slug}`}
                className="text-primary font-semibold hover:underline"
            >
                Read More →
            </Link>
        </div>
    );
}
