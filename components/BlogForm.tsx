"use client";

import { useState } from "react";
import { createBlog } from "@/lib/blogService";
import { useRouter } from "next/navigation";

export default function BlogForm() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");
    const [cover_image, setCoverImage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            await createBlog({ title, slug, content, cover_image })
            router.push("/blog");
        } catch (error) {
            alert("Error creating blog post");
            alert("Error creating blog post");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block mb-2 font-medium">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setSlug(e.target.value.toLowerCase().replace(/ /g, "-"));
                    }}
                    className="w-full p-3 rounded-md bg-secondary border border-primary/20"
                    required
                />
            </div>

            <div>
                <label className="block mb-2 font-medium">Cover Image URL</label>
                <input
                    type="text"
                    value={cover_image}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full p-3 rounded-md bg-secondary border border-primary/20"
                />
            </div>

            <div>
                <label className="block mb-2 font-medium">Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-3 rounded-md bg-secondary border border-primary/20"
                    rows={8}
                    required
                ></textarea>
            </div>

            <button type="submit" className="py-3 px-6 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Create Post
            </button>
        </form>
    );
}
