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
                'description' => 'Blazing fast, conversion-optimized landing pages that turn visitors into customers. Built with performance-first architecture.',
                'icon' => 'Rocket',
                'metrics' => ['3.2s Load Time', '94+ PageSpeed', 'A/B Ready'],
                'gridArea' => 'span 2 / span 2',
            ],
            [
                'id' => 2,
                'title' => 'Company Profile',
                'subtitle' => 'Premium Branding',
                'description' => 'Elegant corporate websites that establish authority and trust. Your digital headquarters.',
                'icon' => 'Building2',
                'metrics' => ['SEO Optimized', 'CMS Integrated', 'Multi-language'],
                'gridArea' => 'span 1 / span 1',
            ],
            [
                'id' => 3,
                'title' => 'E-Course Platform',
                'subtitle' => 'Learning Systems',
                'description' => 'Scalable educational platforms with progress tracking, certifications, and seamless payment integration.',
                'icon' => 'GraduationCap',
                'metrics' => ['LMS Ready', 'Payment Gateway', 'Analytics'],
                'gridArea' => 'span 1 / span 1',
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

        $testimonials = [
            [
                'id' => 1,
                'name' => 'Sarah Chen',
                'company' => 'Nexus Finance',
                'role' => 'CEO',
                'quote' => 'PBM transformed our vision into reality. The platform exceeded all expectations and drove 300% growth in user engagement.',
                'avatar' => '/images/avatars/avatar-1.jpg',
                'videoThumbnail' => '/images/testimonials/video-1.jpg',
                'videoUrl' => 'https://example.com/video-1.mp4',
            ],
            [
                'id' => 2,
                'name' => 'Marcus Rivera',
                'company' => 'Meridian Academy',
                'role' => 'Founder',
                'quote' => 'Working with PBM was seamless. They understood our educational mission and built a platform that serves 50,000+ students daily.',
                'avatar' => '/images/avatars/avatar-2.jpg',
                'videoThumbnail' => '/images/testimonials/video-2.jpg',
                'videoUrl' => 'https://example.com/video-2.mp4',
            ],
            [
                'id' => 3,
                'name' => 'Aisha Patel',
                'company' => 'Pulse Commerce',
                'role' => 'CTO',
                'quote' => 'The technical excellence and attention to detail blew us away. Our e-commerce platform handles 10x the traffic we anticipated.',
                'avatar' => '/images/avatars/avatar-3.jpg',
                'videoThumbnail' => '/images/testimonials/video-3.jpg',
                'videoUrl' => 'https://example.com/video-3.mp4',
            ],
            [
                'id' => 4,
                'name' => 'David Kim',
                'company' => 'TechStart Inc',
                'role' => 'Product Lead',
                'quote' => 'From concept to launch in 8 weeks. PBM\'s velocity and quality are unmatched in the industry.',
                'avatar' => '/images/avatars/avatar-4.jpg',
                'videoThumbnail' => '/images/testimonials/video-4.jpg',
                'videoUrl' => 'https://example.com/video-4.mp4',
            ],
        ];

        $faqs = [
            [
                'id' => 1,
                'question' => 'How long does a typical project take?',
                'answer' => 'Project timelines vary based on complexity. A landing page typically takes 2-3 weeks, company profiles 4-6 weeks, and e-course platforms 8-12 weeks. We\'ll provide a detailed timeline during our discovery call.',
                'category' => 'timeline',
                'color' => '#22c55e',
            ],
            [
                'id' => 2,
                'question' => 'What technologies do you use?',
                'answer' => 'We specialize in modern web technologies: Laravel & React for robust full-stack applications, Next.js for performance-critical sites, and Vue.js for reactive interfaces. All projects include responsive design, SEO optimization, and analytics integration.',
                'category' => 'tech',
                'color' => '#3b82f6',
            ],
            [
                'id' => 3,
                'question' => 'What are your pricing models?',
                'answer' => 'We offer flexible pricing: project-based for defined scopes, retainer packages for ongoing development, and milestone-based payments for larger projects. Pricing starts at Rp 5,000,000 for landing pages, with enterprise solutions quoted individually.',
                'category' => 'pricing',
                'color' => '#f59e0b',
            ],
            [
                'id' => 4,
                'question' => 'Do you provide ongoing support?',
                'answer' => 'Absolutely. All projects include 30 days of post-launch support. We also offer monthly maintenance packages covering updates, security patches, performance monitoring, and feature enhancements.',
                'category' => 'support',
                'color' => '#8b5cf6',
            ],
            [
                'id' => 5,
                'question' => 'Can you work with existing systems?',
                'answer' => 'Yes, we integrate seamlessly with existing infrastructure. Whether it\'s connecting to your CRM, payment gateways, or legacy databases, we ensure smooth data flow and minimal disruption to your operations.',
                'category' => 'tech',
                'color' => '#3b82f6',
            ],
        ];

        return Inertia::render('welcome', [
            'services' => $services,
            'projects' => $projects,
            'testimonials' => $testimonials,
            'faqs' => $faqs,
        ]);
    }
}
