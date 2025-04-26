"use client";

import BlogForm from "@/components/BlogForm";

export default function CreatePostPage() {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>
            <BlogForm />
        </div>
    );
}
