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

        return Inertia::render('welcome', [
            'services' => $services,
            'projects' => $projects,
        ]);
    }
}
