import { motion } from 'framer-motion';
import {
    BarChart3,
    Building2,
    CreditCard,
    Globe,
    GraduationCap,
    LineChart,
    Rocket,
    Shield,
    Zap,
    type LucideIcon,
} from 'lucide-react';

interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    metrics: string[];
    gridArea: string;
}

interface ServicesSectionProps {
    services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
    Rocket,
    Building2,
    GraduationCap,
};

const metricIcons: Record<string, LucideIcon> = {
    'Load Time': Zap,
    PageSpeed: BarChart3,
    'A/B Ready': LineChart,
    SEO: Globe,
    CMS: Shield,
    'Multi-language': Globe,
    LMS: GraduationCap,
    Payment: CreditCard,
    Analytics: LineChart,
};

function getMetricIcon(metric: string): LucideIcon {
    for (const [key, icon] of Object.entries(metricIcons)) {
        if (metric.includes(key)) return icon;
    }
    return Zap;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function ServicesSection({ services }: ServicesSectionProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background py-24 sm:py-32">
            {/* Background Elements */}
            <div className="noise pointer-events-none absolute inset-0" />
            <div className="bg-grid-sm absolute inset-0 opacity-20" />

            {/* Gradient Orbs */}
            <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center sm:mb-20"
                >
                    <span className="mb-4 inline-block font-mono text-xs tracking-widest text-primary uppercase">
                        {'// SERVICES'}
                    </span>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground uppercase sm:text-4xl md:text-5xl lg:text-6xl">
                        What We <span className="text-gradient">Deliver</span>
                    </h2>
                    <p className="mx-auto max-w-2xl font-mono text-sm text-muted-foreground sm:text-base">
                        Three core offerings. Infinite possibilities. Each
                        solution engineered for maximum impact and scalability.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Rocket;
                        const isLarge = index === 0;

                        return (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className={`group relative ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                            >
                                <div className="glass hover:glow-sm relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all duration-500 hover:border-primary/50 sm:p-8">
                                    {/* Card Background Gradient */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Corner Accent */}
                                    <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="group-hover:glow-sm mb-6 inline-flex rounded-xl border border-border/50 bg-background/50 p-3 transition-all duration-300 group-hover:border-primary/50">
                                            <Icon
                                                className={`${isLarge ? 'h-8 w-8' : 'h-6 w-6'} text-primary`}
                                            />
                                        </div>

                                        {/* Title & Subtitle */}
                                        <div className="mb-4">
                                            <span className="mb-1 block font-mono text-xs tracking-widest text-primary uppercase">
                                                {service.subtitle}
                                            </span>
                                            <h3
                                                className={`font-bold tracking-tight text-foreground uppercase ${isLarge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}
                                            >
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p
                                            className={`mb-6 font-mono text-muted-foreground ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}
                                        >
                                            {service.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.metrics.map((metric) => {
                                                const MetricIcon =
                                                    getMetricIcon(metric);
                                                return (
                                                    <div
                                                        key={metric}
                                                        className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 transition-all duration-300 group-hover:border-primary/30"
                                                    >
                                                        <MetricIcon className="h-3 w-3 text-primary" />
                                                        <span className="font-mono text-xs text-muted-foreground">
                                                            {metric}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Large Card Extra Content */}
                                        {isLarge && (
                                            <div className="mt-8 grid grid-cols-3 gap-4">
                                                {[
                                                    {
                                                        label: 'Avg. Load',
                                                        value: '<3s',
                                                    },
                                                    {
                                                        label: 'Conversion',
                                                        value: '+40%',
                                                    },
                                                    {
                                                        label: 'Uptime',
                                                        value: '99.9%',
                                                    },
                                                ].map((stat) => (
                                                    <div
                                                        key={stat.label}
                                                        className="text-center"
                                                    >
                                                        <div className="text-gradient text-2xl font-bold sm:text-3xl">
                                                            {stat.value}
                                                        </div>
                                                        <div className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                                                            {stat.label}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Border Glow */}
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 transition-all duration-500 group-hover:border-primary/30" />
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2"
                    >
                        <div className="group hover:glow-sm relative h-full overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6 transition-all duration-500 hover:border-primary/50 sm:p-8">
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <span className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
                                    Ready to start?
                                </span>
                                <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground uppercase sm:text-2xl">
                                    Let's Build Something{' '}
                                    <span className="text-gradient">
                                        Extraordinary
                                    </span>
                                </h3>
                                <button className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 font-mono text-sm tracking-wider text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                                    Get Started
                                    <Rocket className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
