import HeroSection from '@/Components/Landing/HeroSection';
import ProjectsSection from '@/Components/Landing/ProjectsSection';
import ServicesSection from '@/Components/Landing/ServicesSection';
import TestimonialsSection from '@/Components/Landing/TestimonialsSection';
import FAQSection from '@/Components/Landing/FAQSection';
import ContactSection from '@/Components/Landing/ContactSection';
import { Head } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    metrics: string[];
    gridArea: string;
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

interface Testimonial {
    id: number;
    name: string;
    company: string;
    role: string;
    quote: string;
    avatar: string;
    videoThumbnail: string;
    videoUrl: string;
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
    testimonials: Testimonial[];
    faqs: FAQ[];
}

export default function Welcome({ services, projects, testimonials, faqs }: WelcomeProps) {
    return (
        <>
            <Head title="PBM Agency - We Build Digital Ecosystems">
                <meta
                    name="description"
                    content="PBM Agency crafts high-conversion Landing Pages, Company Profiles, and E-Course Platforms. We build digital ecosystems that drive results."
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
                <TestimonialsSection testimonials={testimonials} />
                <FAQSection faqs={faqs} />
                <ContactSection />
            </main>
        </>
    );
}
