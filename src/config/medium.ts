// Medium Integration Configuration
export const MEDIUM_CONFIG = {
    // Ganti dengan username Medium Anda (tanpa @)
    USERNAME: 'zakimaliki',

    // Jumlah post yang akan ditampilkan
    POSTS_LIMIT: 6,

    // RSS feed URL
    get RSS_URL() {
        return `https://medium.com/feed/@${this.USERNAME}`;
    },

    // API endpoint untuk mengkonversi RSS ke JSON
    get API_URL() {
        return `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(this.RSS_URL)}`;
    }
}; 