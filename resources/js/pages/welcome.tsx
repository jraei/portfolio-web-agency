import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Landing/HeroSection';
import ServicesSection from '@/Components/Landing/ServicesSection';
import ProjectsSection from '@/Components/Landing/ProjectsSection';

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

interface WelcomeProps {
    services: Service[];
    projects: Project[];
}

export default function Welcome({ services, projects }: WelcomeProps) {
    return (
        <>
            <Head title="PBM Agency - We Build Digital Ecosystems">
                <meta
                    name="description"
                    content="PBM Agency crafts high-conversion Landing Pages, Company Profiles, and E-Course Platforms. We build digital ecosystems that drive results."
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>

            <main className="relative bg-background">
                <HeroSection />
                <ServicesSection services={services} />
                <ProjectsSection projects={projects} />
            </main>
        </>
    );
}
