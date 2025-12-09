<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    public function index(): Response
    {
        $services = [
            [
                'id' => 1,
                'title' => 'Landing Page',
                'subtitle' => 'High Conversion',
                'description' => 'Halaman web super cepat yang dioptimalkan khusus untuk konversi. Kami mengubah pengunjung menjadi pelanggan melalui arsitektur website yang memprioritaskan performa',
                'icon' => 'Rocket',
                'metrics' => ['3.2s Load Time', '94+ PageSpeed', 'Premium Design'],
            ],
            [
                'id' => 2,
                'title' => 'Company Profile',
                'subtitle' => 'Premium Branding',
                'description' => 'Website korporat yang elegan untuk membangun kredibilitas dan kepercayaan klien. Jadikan website sebagai kantor pusat digital yang merepresentasikan profesionalitas perusahaan Anda.',
                'icon' => 'Building2',
                'metrics' => ['SEO Optimized', 'Professional Design', 'Fast-load'],
            ],
            [
                'id' => 3,
                'title' => 'E-Course Platform',
                'subtitle' => 'Learning Systems',
                'description' => 'Platform edukasi yang scalable, lengkap dengan fitur pelacakan progres siswa, kurikulum terstruktur, hingga integrasi pembayaran yang seamless.',
                'icon' => 'GraduationCap',
                'metrics' => ['LMS Ready', 'Payment Gateway', 'Analytics'],
            ],
            [
                'id' => 4,
                'title' => 'E-Commerce',
                'subtitle' => 'Online Store',
                'description' => 'Toko online berperforma tinggi yang dilengkapi manajemen inventaris, sistem pembayaran aman, serta fitur yang dirancang khusus untuk meningkatkan penjualan.',
                'icon' => 'ShoppingCart',
                'metrics' => ['Multi-Payment', 'Inventory Management', 'Complex Features'],
            ],
            [
                'id' => 5,
                'title' => 'Custom Web App',
                'subtitle' => 'Bespoke Solutions',
                'description' => 'Aplikasi web yang dibangun spesifik dari nol, dirancang khusus untuk menjawab tantangan dan kebutuhan unik operasional bisnis Anda.',
                'icon' => 'Code2',
                'metrics' => ['API Integration', 'Scalable', 'Real-time'],
            ],
        ];

        $projects = [
            [
                'id' => 1,
                'title' => 'Nexus Finance',
                'category' => 'Fintech Platform',
                'description' => 'A comprehensive financial dashboard with real-time analytics and portfolio management.',
                'image' => '/images/projects/project-1.jpg',
                'techStack' => ['Laravel', 'React', 'PostgreSQL', 'Redis'],
                'color' => '#6366f1',
            ],
            [
                'id' => 2,
                'title' => 'Meridian Academy',
                'category' => 'E-Learning Platform',
                'description' => 'Interactive learning platform serving 50,000+ students with adaptive course delivery.',
                'image' => '/images/projects/project-2.jpg',
                'techStack' => ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
                'color' => '#8b5cf6',
            ],
            [
                'id' => 3,
                'title' => 'Pulse Commerce',
                'category' => 'E-Commerce Solution',
                'description' => 'High-performance marketplace handling 10,000+ daily transactions with sub-second load times.',
                'image' => '/images/projects/project-3.jpg',
                'techStack' => ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
                'color' => '#a855f7',
            ],
        ];

        $videoTestimonials = [
            [
                'id' => 1,
                'videoThumbnail' => '/storage/testimonials/thumbnails/masdidi.png',
                'videoUrl' => '/storage/testimonials/videos/didigrafis.mp4',
                'clientName' => 'Didi Maulana',
                'role' => 'Founder, Pondok Grafis',
            ],
            [
                'id' => 2,
                'videoThumbnail' => '/images/testimonials/thumbnails/yuven.jpg',
                'videoUrl' => '/storage/testimonials/videos/yuven.mp4',
                'clientName' => 'Yuven Lie',
                'role' => 'Founder, Editor Amplifier',
            ],

        ];

        $quoteTestimonials = [
            [
                'id' => 1,
                'name' => 'Didi Maulana',
                'company' => 'Pondok Grafis',
                'role' => 'Founder',
                'quote' => 'Menurutku, website yang dibuat oleh PBM Agency sangat bagus banget, responsif dan sejauh ini tidak ada bug. Tampilannya modern serta ngga ngebosenin. Cocok banget yang punya bisnis e-course atau mau buat website recomended banget bikin disini.',
                'avatar' => '/images/avatars/avatar-1.jpg',
            ],
            [
                'id' => 2,
                'name' => 'Yuven Lie',
                'company' => 'Editor Amplifier',
                'role' => 'Founder',
                'quote' => 'Working with PBM was seamless. They understood our educational mission and built a platform that serves 50,000+ students daily.',
                'avatar' => '/images/avatars/avatar-2.jpg',
            ],

        ];

        $faqs = [
            [
                'id' => 1,
                'question' => 'Berapa lama waktu pengerjaan proyek?',
                'answer' => 'Durasi proyek bervariasi tergantung kompleksitasnya. Landing Page biasanya membutuhkan 2-3 minggu, Company Profile 4-6 minggu, dan platform E-Course 8-12 minggu. Kami akan memberikan timeline detail saat sesi konsultasi awal.',
                'category' => 'timeline',
                'color' => '#22c55e',
            ],
            [
                'id' => 2,
                'question' => 'Teknologi apa yang Anda gunakan?',
                'answer' => 'Kami spesialis dalam teknologi web modern: Laravel & React untuk aplikasi full-stack yang handal, dan Vue.js untuk antarmuka interaktif. Semua proyek sudah mencakup desain responsif, optimasi SEO, dan gratis SSL.',
                'category' => 'tech',
                'color' => '#3b82f6',
            ],
            [
                'id' => 3,
                'question' => 'Bagaimana skema harganya?',
                'answer' => 'Kami menawarkan harga fleksibel: berbasis proyek untuk cakupan kerja yang jelas, paket retainer untuk pengembangan berkelanjutan, dan pembayaran bertahap (termin) untuk proyek besar. Harga mulai dari Rp 1.000.000 untuk Landing Page, sedangkan solusi Enterprise disesuaikan dengan kebutuhan.',
                'category' => 'pricing',
                'color' => '#f59e0b',
            ],
            [
                'id' => 4,
                'question' => 'Apakah ada layanan support setelah proyek selesai?',
                'answer' => 'Tentu saja. Semua proyek sudah termasuk dukungan teknis selama 30 hari pasca-peluncuran. Kami juga menawarkan paket maintenance bulanan yang mencakup update sistem, patch keamanan, pemantauan performa, dan penambahan fitur.',
                'category' => 'support',
                'color' => '#8b5cf6',
            ],
            [
                'id' => 5,
                'question' => 'Bisakah integrasi dengan sistem yang sudah ada?',
                'answer' => 'Ya, kami dapat melakukan integrasi mulus dengan infrastruktur Anda saat ini. Baik itu koneksi ke CRM, payment gateway, atau database lama, kami memastikan data tidak hilang pada sistem bisnis Anda.',
                'category' => 'tech',
                'color' => '#3b82f6',
            ],
        ];

        return Inertia::render('welcome', [
            'services' => $services,
            'projects' => $projects,
            'videoTestimonials' => $videoTestimonials,
            'quoteTestimonials' => $quoteTestimonials,
            'faqs' => $faqs,
        ]);
    }
}
