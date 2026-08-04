import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabase';
import { useSupabaseQuery } from '../hooks/useSupabaseQuery';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image_url: string;
  slug: string;
  created_at: string;
}

export default function BlogList() {
  const fetchBlogs = useCallback(async () => {
    const { data, error } = await supabase
      .from('Blog')
      .select('id, title, content, image_url, slug, created_at')
      .order('created_at', { ascending: false });
    return { data: data as BlogPost[] | null, error };
  }, []);

  const { data: posts, loading, error, refetch } = useSupabaseQuery<BlogPost[]>(fetchBlogs, {
    cacheKey: 'blog_list',
  });

  const formattedPosts = useMemo(() => {
    return (posts ?? []).map(post => ({
      ...post,
      date: new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }));
  }, [posts]);

  if (loading) {
  return (
    <section id="blog" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="h-10 bg-gray-200 rounded-md w-1/3 animate-pulse mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[1, 2].map((n) => (
            <div key={n} className="animate-pulse">
              <div className="bg-gray-200 aspect-[16/10] rounded-[1.5rem] mb-8" />
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  return (
    <section id="blog" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#00aaff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#001f3f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-[#00aaff] font-black tracking-[0.4em] text-[10px] uppercase mb-3">Insights & Updates</h4>
            <h2 className="text-5xl md:text-6xl font-black text-[#001f3f] tracking-tighter leading-[0.9]">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001f3f] to-[#00aaff]">BLOG.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-xs text-xs leading-relaxed">
            ለዲጂታል ማርኬቲንግ ስኬት የሚረዱ አዳዲስ መረጃዎች እና የ Hebasy ጥበቦች።
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {formattedPosts.map((post) => (
            <article key={post.slug} className="group relative">
              <Link
                to={`/blog/${post.slug}`}
                aria-label={`Read more about ${post.title}`}
                className="group block h-full cursor-pointer rounded-[1.5rem] bg-white text-inherit transition-shadow duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,31,63,0.2)]"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-100 aspect-[16/10] mb-8">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="px-2 pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-[9px] font-black tracking-[0.3em] text-[#00aaff] uppercase">
                      {post.date}
                    </span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>

                  <h3 className="text-2xl font-black text-[#001f3f] group-hover:text-[#00aaff] transition-colors duration-300 leading-[1.1] mb-4 tracking-tight uppercase">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed mb-6">
                    {post.content}
                  </p>

                  <div className="inline-flex items-center space-x-3 text-[#001f3f] group-hover:text-[#00aaff] transition-colors">
                    <span className="text-[10px] font-black tracking-widest uppercase">Read More</span>
                    <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#00aaff] group-hover:bg-[#00aaff] transition-all duration-300">
                      <svg className="w-3 h-3 text-[#001f3f] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {formattedPosts.length === 0 && !loading && (
          <div className="text-center py-24 text-gray-500 uppercase text-xs tracking-[0.4em] font-black">
            {error ? 'Unable to load blog posts. Check your connection.' : 'No blog posts available yet.'}
          </div>
        )}

        {error && formattedPosts.length > 0 && (
          <div className="flex flex-col items-center gap-3 mt-10">
            <p className="text-gray-400 text-xs font-medium">Showing cached posts — network unavailable.</p>
            <button
              onClick={refetch}
              className="text-[10px] font-black tracking-widest uppercase text-[#001f3f] border border-gray-200 rounded-full px-5 py-2 hover:border-[#00aaff] hover:text-[#00aaff] transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}