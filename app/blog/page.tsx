import supabase from '@/lib/supabase'

export default async function BlogPage() {
    const { data: posts, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false })

    if (error) return <p>Error fetching posts: {error.message}</p>

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            {posts.length === 0 ? (
                <p>No posts yet.</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="mb-6">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600 text-sm">{post.created_at}</p>
                        <p>{post.content.slice(0, 100)}...</p>
                    </div>
                ))
            )}
        </div>
    )
}
