// lib/blogService.ts

import { supabase } from "./supabaseClient"
import { BlogPost } from "../types/blog"

export async function fetchBlogs(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) return null
    return data
}

export async function createBlog(blog: Omit<BlogPost, 'id' | 'created_at'>) {
    const { title, slug, content,cover_image } = blog

    const { data, error } = await supabase
        .from('blogs')
        .insert({
            title,
            slug: slug || null,
            content,
            cover_image: cover_image || null, // 💥 correct field name
        })

    if (error) throw error
    return data
}
