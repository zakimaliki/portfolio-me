# Medium Integration untuk Portfolio

Komponen Posts di portfolio Anda telah diintegrasikan dengan Medium untuk menampilkan artikel blog secara otomatis.

## Cara Setup

### 1. Update Username Medium
Buka file `src/config/medium.ts` dan ganti `your-medium-username` dengan username Medium Anda (tanpa @):

```typescript
export const MEDIUM_CONFIG = {
    // Ganti dengan username Medium Anda (tanpa @)
    USERNAME: 'zakimaliki',
    // ...
};
```

### 2. Pastikan Medium RSS Feed Aktif
Medium secara otomatis menyediakan RSS feed untuk setiap user. Feed URL akan menjadi:
```
https://medium.com/feed/@your-username
```

## Fitur yang Tersedia

### ✅ Fitur yang Sudah Diimplementasi
- **Fetch otomatis**: Mengambil artikel terbaru dari Medium RSS feed
- **Loading state**: Menampilkan spinner saat loading
- **Error handling**: Fallback ke data dummy jika gagal fetch
- **Responsive design**: Tampilan yang responsif untuk semua device
- **Thumbnail support**: Menampilkan gambar thumbnail artikel jika tersedia
- **Categories/tags**: Menampilkan kategori artikel
- **Date formatting**: Format tanggal yang mudah dibaca
- **External links**: Link langsung ke artikel di Medium

### 📝 Data yang Ditampilkan
- Judul artikel
- Deskripsi singkat (150 karakter)
- Tanggal publikasi
- Thumbnail gambar (jika ada)
- Kategori/tags
- Link ke artikel lengkap

## Konfigurasi

### Jumlah Post
Anda bisa mengubah jumlah post yang ditampilkan di `src/config/medium.ts`:

```typescript
POSTS_LIMIT: 6, // Ubah sesuai kebutuhan
```

### Styling
Komponen menggunakan Tailwind CSS dan sudah responsive. Anda bisa menyesuaikan styling di `src/app/components/Posts.tsx`.

## Troubleshooting

### Jika Post Tidak Muncul
1. **Periksa username**: Pastikan username di `medium.ts` sudah benar
2. **Cek RSS feed**: Buka URL `https://medium.com/feed/@your-username` di browser
3. **Network issues**: Periksa console browser untuk error network
4. **CORS issues**: Jika ada masalah CORS, gunakan proxy atau backend API

### Fallback Data
Jika fetch gagal, komponen akan menampilkan 3 post dummy sebagai fallback. Ini memastikan portfolio tetap terlihat baik meskipun ada masalah dengan Medium API.

## API yang Digunakan

Komponen menggunakan [rss2json.com](https://rss2json.com/) untuk mengkonversi RSS feed Medium ke JSON. Ini adalah layanan gratis yang tidak memerlukan API key.

## Alternatif Implementasi

Jika Anda ingin implementasi yang lebih robust, pertimbangkan:

1. **Backend API**: Buat endpoint sendiri untuk fetch Medium data
2. **Medium API**: Gunakan Medium API resmi (memerlukan API key)
3. **Caching**: Implementasi caching untuk performa yang lebih baik
4. **ISR/SSG**: Gunakan Next.js ISR untuk pre-render data

## Contoh Hasil

Setelah setup, komponen akan menampilkan:
- Loading spinner saat fetch data
- Grid artikel dari Medium dengan thumbnail
- Tanggal publikasi dan kategori
- Tombol "Read on Medium" untuk setiap artikel
- Tombol "View All Posts on Medium" di bagian bawah 