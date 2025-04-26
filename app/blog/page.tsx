
import BlogCard from "@/components/BlogCard";
import { fetchBlogs } from "@/lib/blogService";

export default async function BlogListPage() {
    const blogs = await fetchBlogs();

    return (
        <div className="w-full px-4 sm:px-7 lg:px-30 py-20">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
