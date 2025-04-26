"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";

interface BlogCardProps {
    blog: BlogPost;
}

function isValidImage(url: string | null | undefined): boolean {
    if (!url) return false;
    if (url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://")) {
        return true;
    }
    return false;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link href={`/blog/${blog.slug}`} className="block border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
            {isValidImage(blog.cover_image) ? (
                <div className="relative w-full h-60">
                    <Image
                        src={blog.cover_image!}
                        alt={blog.title}
                        fill
                        className="rounded-t-md object-cover"
                    />
                </div>
            ) : (
                <div className="w-full h-60 bg-muted flex items-center justify-center text-muted-foreground">
                    No Image
                </div>
            )}
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-muted-foreground text-sm">
                    {format(new Date(blog.created_at), "yyyy-MM-dd")}
                </p>
            </div>
        </Link>
    );
}
