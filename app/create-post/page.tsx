'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase'

export default function CreatePost() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [slug, setSlug] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const { error } = await supabase.from('posts').insert([
            { title, content, slug },
        ])

        if (error) {
            setError(error.message)
        } else {
            router.push('/') // redirect to homepage or blog list
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full border p-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Slug"
                    className="w-full border p-2"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    className="w-full border p-2"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">
                    Publish
                </button>
            </form>
        </div>
    )
}
