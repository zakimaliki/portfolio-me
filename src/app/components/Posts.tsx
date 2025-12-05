'use client';

import { useState, useEffect } from 'react';
import { MEDIUM_CONFIG } from '../../config/medium';

interface MediumPost {
    title: string;
    description: string;
    link: string;
    pubDate: string;
    thumbnail?: string;
    categories: string[];
}

export default function Posts() {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Menggunakan konfigurasi Medium
    const { USERNAME, API_URL, POSTS_LIMIT } = MEDIUM_CONFIG;

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                setLoading(true);

                // Menggunakan RSS feed Medium
                const response = await fetch(API_URL);
                const data = await response.json();

                if (data.status === 'ok') {
                    const mediumPosts: MediumPost[] = data.items.slice(0, POSTS_LIMIT).map((item: any) => ({
                        title: item.title,
                        description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                        link: item.link,
                        pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        thumbnail: item.thumbnail || null,
                        categories: item.categories || []
                    }));

                    setPosts(mediumPosts);
                } else {
                    throw new Error('Failed to fetch Medium posts');
                }
            } catch (err) {
                console.error('Error fetching Medium posts:', err);
                setError('Failed to load posts from Medium');

                // Fallback ke data dummy jika gagal
                setPosts([
                    {
                        title: 'The Code and The Caffeine: Exploring the Relationship Between Coffee and Programmer Productivity',
                        description: 'Discover how coffee consumption affects programming productivity and the science behind the caffeine-coder relationship.',
                        link: 'https://medium.com/@zakimaliki/the-code-and-the-caffeine-exploring-the-relationship-between-coffee-and-programmer-productivity-7912e49bf679',
                        pubDate: 'December 15, 2024',
                        categories: ['Programming', 'Productivity', 'Coffee']
                    },
                    {
                        title: 'Masa Depan Pendidikan: Peran Kunci Kecerdasan Buatan (AI) dalam Meningkatkan Pembelajaran',
                        description: 'Eksplorasi tentang bagaimana AI dapat merevolusi sistem pendidikan dan meningkatkan kualitas pembelajaran di masa depan.',
                        link: 'https://medium.com/@zakimaliki/masa-depan-pendidikan-peran-kunci-kecerdasan-buatan-ai-dalam-meningkatkan-pembelajaran-5c895a5fbc37',
                        pubDate: 'December 10, 2024',
                        categories: ['AI', 'Education', 'Technology']
                    },
                    {
                        title: 'Mengenal Tentang NFT',
                        description: 'Panduan lengkap tentang NFT (Non-Fungible Token) dan bagaimana teknologi blockchain mengubah dunia digital.',
                        link: 'https://medium.com/@zakimaliki/mengenal-tentang-nft-ef5698f4b8ac',
                        pubDate: 'December 5, 2024',
                        categories: ['NFT', 'Blockchain', 'Cryptocurrency']
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, []);

    if (loading) {
        return (
            <section id="posts" className="py-20 sm:py-28 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            My Blog Posts
                        </h2>
                        <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                            Loading posts from Medium...
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="posts" className="py-20 sm:py-28 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        My Blog Posts
                    </h2>
                    <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Thoughts, tutorials, and insights about web development, programming, and technology.
                    </p>
                    {error && (
                        <p className="text-amber-600 mt-3 text-sm">
                            {error} - Showing sample posts below
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {posts.map((post, index) => (
                        <a
                            key={index}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group h-full bg-white rounded-xl border border-gray-200 hover:border-blue-400 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 active:scale-95 flex flex-col"
                        >
                            {/* Post Image */}
                            <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                                {post.thumbnail ? (
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <span className="text-4xl sm:text-6xl">📝</span>
                                )}
                            </div>

                            {/* Post Content */}
                            <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                {/* Date */}
                                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                                    </svg>
                                    <span>{post.pubDate}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {post.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                                    {post.description}
                                </p>

                                {/* Categories */}
                                {post.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.categories.slice(0, 2).map((category, catIndex) => (
                                            <span
                                                key={catIndex}
                                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Read More Link */}
                                <div className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-all duration-300">
                                    Read Article
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12 sm:mt-16">
                    <a 
                        href="https://medium.com/@zakimaliki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        View More Articles on Medium
                    </a>
                </div>
            </div>
        </section>
    );
} 