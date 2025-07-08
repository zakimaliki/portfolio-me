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
            <section id="posts" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            My Blog Posts
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
        <section id="posts" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        My Blog Posts
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Thoughts, tutorials, and insights about web development, programming, and technology.
                    </p>
                    {error && (
                        <p className="text-red-600 mt-2 text-sm">
                            {error} - Showing sample posts below
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {/* Post Image */}
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                {post.thumbnail ? (
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-6xl">📝</span>
                                )}
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span>{post.pubDate}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.description}
                                </p>

                                {/* Categories */}
                                {post.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.categories.slice(0, 3).map((category, catIndex) => (
                                            <span
                                                key={catIndex}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Read More Link */}
                                <div className="flex gap-3">
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        Read on Medium
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href={`https://medium.com/@${USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                    >
                        View All Posts on Medium
                    </a>
                </div>
            </div>
        </section>
    );
} 