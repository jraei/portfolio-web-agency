import ContactSection from '@/Components/Landing/ContactSection';
import FAQSection from '@/Components/Landing/FAQSection';
import HeroSection from '@/Components/Landing/HeroSection';
import ProjectsSection from '@/Components/Landing/ProjectsSection';
import ServicesSection from '@/Components/Landing/ServicesSection';
import TestimonialsSection from '@/Components/Landing/TestimonialsSection';
import { Head } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    metrics: string[];
}

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    techStack: string[];
    color: string;
}

interface VideoTestimonial {
    id: number;
    videoThumbnail: string;
    videoUrl: string;
    clientName: string;
    role: string;
}

interface QuoteTestimonial {
    id: number;
    name: string;
    company: string;
    role: string;
    quote: string;
    avatar: string;
}

interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: string;
    color: string;
}

interface WelcomeProps {
    services: Service[];
    projects: Project[];
    videoTestimonials: VideoTestimonial[];
    quoteTestimonials: QuoteTestimonial[];
    faqs: FAQ[];
}

export default function Welcome({
    services,
    projects,
    videoTestimonials,
    quoteTestimonials,
    faqs,
}: WelcomeProps) {
    return (
        <>
            <Head title="PBM Agency - We Build Digital Ecosystems">
                <meta
                    name="description"
                    content="PBM Agency crafts high-conversion Landing Pages, Company Profiles, E-Course Platforms, E-Commerce, and Custom Web Applications. We build digital ecosystems that drive results."
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </Head>

            <main className="relative bg-background">
                <HeroSection />
                <ServicesSection services={services} />
                <ProjectsSection projects={projects} />
                <TestimonialsSection
                    videoTestimonials={videoTestimonials}
                    quoteTestimonials={quoteTestimonials}
                />
                <FAQSection faqs={faqs} />
                <ContactSection />
            </main>
        </>
    );
}
