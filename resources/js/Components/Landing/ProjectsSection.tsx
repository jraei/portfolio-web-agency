import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    techStack: string[];
    color: string;
    url?: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

function ProjectCard({
    project,
    index,
    totalCards,
}: {
    project: Project;
    index: number;
    totalCards: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'start start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.9, 1]);

    // Calculate the top offset for stacking effect
    const stickyTop = 100 + index * 20; // Each card stacks 20px lower

    return (
        <motion.div
            ref={cardRef}
            className="sticky"
            style={{
                top: `${stickyTop}px`,
                zIndex: index + 1,
                scale,
                opacity,
            }}
        >
            <div
                className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border sm:rounded-3xl"
                style={{
                    boxShadow: `0 25px 80px -15px ${project.color}50, 0 10px 40px -20px ${project.color}40`,
                }}
            >
                {/* Solid Background - Prevents text bleed through */}
                <div className="absolute inset-0 bg-card" />

                {/* Card Background Gradient */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        background: `linear-gradient(135deg, ${project.color}25, transparent 50%, ${project.color}10)`,
                    }}
                />

                <div className="relative flex flex-col lg:flex-row">
                    {/* Mockup Image Area */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-muted/50 to-background lg:aspect-auto lg:min-h-[420px] lg:w-1/2">
                        {/* Placeholder Mockup Frame */}
                        <div className="absolute inset-4 flex items-center justify-center sm:inset-8 lg:inset-10">
                            <div className="relative w-full max-w-md">
                                {/* Laptop Frame */}
                                <div className="relative rounded-t-xl bg-secondary/80 p-2 sm:rounded-t-2xl sm:p-4">
                                    {/* Screen */}
                                    <div
                                        className="relative aspect-[16/10] overflow-hidden rounded-lg bg-background"
                                        style={{
                                            boxShadow: `inset 0 0 40px ${project.color}15`,
                                        }}
                                    >
                                        {/* Real Project Image */}
                                        <img
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                        />

                                        {/* Optional: Overlay gradient untuk estetika jika gambar terlalu terang */}
                                        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" /> */}
                                    </div>
                                </div>

                                {/* Laptop Base */}
                                <div className="h-2 rounded-b-xl bg-secondary/60 sm:h-4 sm:rounded-b-2xl" />
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl sm:h-60 sm:w-60"
                            style={{ backgroundColor: `${project.color}30` }}
                        />
                    </div>

                    {/* Content Area */}
                    <div className="relative flex flex-col justify-center bg-card p-6 sm:p-8 lg:w-1/2 lg:p-12">
                        {/* Category */}
                        <span
                            className="mb-3 inline-block font-mono text-xs tracking-widest uppercase sm:mb-4"
                            style={{ color: project.color }}
                        >
                            {project.category}
                        </span>

                        {/* Title */}
                        <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground uppercase sm:mb-6 sm:text-3xl lg:text-4xl">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-6 font-mono text-xs leading-relaxed text-muted-foreground sm:mb-8 sm:text-sm">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6 sm:mb-8">
                            <span className="mb-3 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                                <Code2 className="h-3 w-3" />
                                Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-border bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground transition-all duration-300 hover:border-primary/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* View Project Button */}
                        <a
                            className="group/btn inline-flex w-fit cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-mono text-xs tracking-wider uppercase transition-all duration-300 sm:text-sm"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: `${project.color}20`,
                                borderColor: `${project.color}50`,
                                borderWidth: '1px',
                                color: project.color,
                            }}
                        >
                            View Project
                            <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 sm:h-4 sm:w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function MobileProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="w-[85vw] flex-shrink-0 snap-center sm:w-[70vw]"
        >
            <a // Bungkus div utama dengan anchor
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-transform active:scale-95"
                style={{
                    boxShadow: `0 15px 60px -15px ${project.color}30`,
                }}
            >
                <div
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card"
                    style={{
                        boxShadow: `0 15px 60px -15px ${project.color}30`,
                    }}
                >
                    {/* Solid Background */}
                    <div className="absolute inset-0 bg-card" />

                    {/* Mockup */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted/50 to-background">
                        <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="h-full w-full object-cover object-top"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative bg-card p-5">
                        <span
                            className="mb-2 inline-block font-mono text-xs tracking-widest uppercase"
                            style={{ color: project.color }}
                        >
                            {project.category}
                        </span>
                        <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground uppercase">
                            {project.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 font-mono text-xs leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-xs text-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: Sticky stacking layout
    if (!isMobile) {
        return (
            <section
                id="projects"
                className="relative bg-background py-24 lg:py-40"
            >
                {/* Background */}
                <div className="noise pointer-events-none absolute inset-0" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 text-center lg:mb-32"
                    >
                        <span className="mb-3 inline-block font-mono text-xs tracking-widest text-primary uppercase sm:mb-4">
                            {'// SELECTED WORKS'}
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                            Featured{' '}
                            <span className="text-gradient">Projects</span>
                        </h2>
                    </motion.div>

                    {/* Stacking Cards - Increased spacing */}
                    <div className="relative">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="mb-16 lg:mb-24"
                                style={{
                                    marginBottom:
                                        index === projects.length - 1
                                            ? 0
                                            : undefined,
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    totalCards={projects.length}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Spacer for last card to unstick */}
                    <div className="h-48 lg:h-64" />
                </div>
            </section>
        );
    }

    // Mobile: Horizontal snap scroll
    return (
        <section
            id="projects"
            className="relative bg-background py-16 sm:py-20"
        >
            {/* Background */}
            <div className="noise pointer-events-none absolute inset-0" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 px-4 text-center sm:mb-12"
            >
                <span className="mb-3 inline-block font-mono text-xs tracking-widest text-primary uppercase">
                    {'// SELECTED WORKS'}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase sm:text-3xl">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
            </motion.div>

            {/* Horizontal Scroll Container */}
            <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
                <div className="w-2 flex-shrink-0" />
                {projects.map((project) => (
                    <MobileProjectCard key={project.id} project={project} />
                ))}
                <div className="w-2 flex-shrink-0" />
            </div>

            {/* Scroll Hint */}
            <div className="mt-6 flex justify-center gap-1.5">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-border/50"
                    />
                ))}
            </div>
        </section>
    );
}
