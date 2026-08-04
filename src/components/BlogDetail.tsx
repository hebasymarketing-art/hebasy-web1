import { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './supabase';
import { useSupabaseQuery } from '../hooks/useSupabaseQuery';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  slug: string;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const fetchPost = useCallback(async () => {
    if (!slug) {
      return { data: null, error: null };
    }
    const { data, error } = await supabase
      .from('Blog')
      .select('id, title, content, image_url, created_at, slug')
      .eq('slug', slug)
      .single();
    return { data: data as BlogPost | null, error };
  }, [slug]);

  const { data: post, loading, error, refetch } = useSupabaseQuery<BlogPost>(fetchPost, {
    cacheKey: slug ? `blog_post_${slug}` : undefined,
  });

  const title = post?.title?.trim() || 'Untitled blog post';
  const content = post?.content?.trim() || 'No content available for this post yet.';

  if (loading) {
    return (
      <section className="min-h-screen bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto animate-pulse">
          <div className="h-3 w-24 bg-gray-200 rounded mb-6" />
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-6" />
          <div className="h-4 bg-gray-200 rounded w-40 mb-12" />
          <div className="h-[500px] bg-gray-200 rounded-[2rem] mb-12" />
          <div className="h-4 bg-gray-200 rounded w-full mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full mb-3" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </section>
    );
  }

  if (!post && error && !error.toLowerCase().includes('no rows') && !error.toLowerCase().includes('json object requested')) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white px-6 py-24">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-6">Unable to Load This Post</h1>
          <p className="text-gray-500 mb-10">We could not load this article right now. Please check your connection and try again.</p>
          <button
            onClick={refetch}
            className="px-8 py-4 bg-[#001f3f] text-white font-black rounded-full uppercase tracking-[0.2em] text-xs hover:bg-[#00aaff] transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white px-6 py-24">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-6">Blog Post Not Found</h1>
          <p className="text-gray-500 mb-10">We could not find the blog article you were looking for. Please return to the blog list or try a different link.</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-8 py-4 bg-[#001f3f] text-white font-black rounded-full uppercase tracking-[0.2em] text-xs hover:bg-[#00aaff] transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#00aaff] font-black tracking-[0.3em] text-[10px] uppercase">Blog post</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-black text-[#001f3f] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-500 font-bold">
            {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 mb-12">
          <img
            src={post.image_url}
            alt={post.title}
            loading="lazy"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <div className="whitespace-pre-line text-base leading-relaxed font-medium">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
