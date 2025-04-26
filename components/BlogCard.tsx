import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Image from "next/image";
interface Props {
    blog: BlogPost;
}

export default function BlogCard({ blog }: Props) {
    return (
        <div className="bg-secondary p-6 rounded-lg shadow-md">
            {blog.cover_image && (
                <Image
                    src={blog.cover_image}
                    alt={blog.title}
                    width={1200}
                    height={500}
                    className="rounded-md mb-6 w-full max-h-96 object-cover"
                    priority
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
