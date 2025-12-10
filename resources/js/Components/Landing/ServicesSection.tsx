import { motion } from 'framer-motion';
import {
    ArrowRight,
    BarChart3,
    Building2,
    Code2,
    CreditCard,
    Globe,
    GraduationCap,
    LineChart,
    Rocket,
    Shield,
    ShoppingCart,
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
}

interface ServicesSectionProps {
    services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
    Rocket,
    Building2,
    GraduationCap,
    ShoppingCart,
    Code2,
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
    'Multi-Payment': CreditCard,
    Inventory: ShoppingCart,
    Cart: ShoppingCart,
    API: Code2,
    Scalable: Zap,
    'Real-time': Zap,
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
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export default function ServicesSection({ services }: ServicesSectionProps) {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="services"
            className="relative min-h-screen w-full overflow-hidden bg-background py-24 sm:py-32"
        >
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
                        Setiap solusi kami rancang untuk memberikan impact
                        maksimal dan skalabilitas jangka panjang bagi bisnis
                        Anda.
                    </p>
                </motion.div>

                {/* Bento Grid - Asymmetric Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid auto-rows-[minmax(280px,auto)] gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                    {/* Service 1: Landing Page - Large Card */}
                    {services[0] && (
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-2 lg:col-span-2 lg:row-span-1"
                        >
                            <ServiceCard
                                service={services[0]}
                                size="large"
                                showStats
                            />
                        </motion.div>
                    )}

                    {/* Service 2: Company Profile */}
                    {services[1] && (
                        <motion.div
                            variants={itemVariants}
                            className="lg:row-span-1"
                        >
                            <ServiceCard service={services[1]} size="medium" />
                        </motion.div>
                    )}

                    {/* Service 3: E-Course */}
                    {services[2] && (
                        <motion.div variants={itemVariants}>
                            <ServiceCard service={services[2]} size="medium" />
                        </motion.div>
                    )}

                    {/* Service 4: E-Commerce */}
                    {services[3] && (
                        <motion.div variants={itemVariants}>
                            <ServiceCard service={services[3]} size="medium" />
                        </motion.div>
                    )}

                    {/* Service 5: Custom Web App */}
                    {services[4] && (
                        <motion.div variants={itemVariants}>
                            <ServiceCard service={services[4]} size="medium" />
                        </motion.div>
                    )}

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 lg:col-span-3"
                    >
                        <div className="group relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6 transition-all duration-500 hover:border-primary/50 sm:rounded-3xl sm:p-8">
                            {/* Animated Background */}
                            <div className="pointer-events-none absolute inset-0">
                                <motion.div
                                    className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl"
                                    animate={{
                                        scale: [1.2, 1, 1.2],
                                        opacity: [0.5, 0.3, 0.5],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </div>

                            <div className="relative flex h-full flex-col items-center justify-center text-center">
                                <span className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
                                    Ready to start?
                                </span>
                                <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground uppercase sm:text-3xl lg:text-4xl">
                                    Let's Build Something{' '}
                                    <span className="text-gradient">
                                        Extraordinary
                                    </span>
                                </h3>
                                <p className="mb-6 max-w-xl font-mono text-sm text-muted-foreground">
                                    Ceritakan ide atau kebutuhan bisnis Anda.
                                    Tim kami siap berdiskusi untuk menemukan
                                    solusi terbaik bagi Anda
                                </p>
                                <motion.button
                                    onClick={scrollToContact}
                                    className="group/btn inline-flex items-center gap-3 rounded-full border border-primary bg-primary/10 px-8 py-4 font-mono text-sm tracking-wider text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Started
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({
    service,
    size = 'medium',
    showStats = false,
}: {
    service: Service;
    size?: 'large' | 'medium';
    showStats?: boolean;
}) {
    const Icon = iconMap[service.icon] || Rocket;
    const isLarge = size === 'large';

    return (
        <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 sm:rounded-3xl">
            {/* Card Background Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Corner Accent */}
            <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

            {/* Content */}
            <div
                className={`relative z-10 flex h-full flex-col ${isLarge ? 'p-6 sm:p-8 lg:p-10' : 'p-5 sm:p-6'}`}
            >
                {/* Icon */}
                <div
                    className={`g mb-4 inline-flex rounded-xl bg-background/50 transition-all duration-300 ${isLarge ? 'p-2 sm:p-2' : 'p-1 sm:p-0.5'}`}
                >
                    <Icon
                        className={`text-primary ${isLarge ? 'h-7 w-7 sm:h-8 sm:w-8' : 'h-5 w-5 sm:h-6 sm:w-6'}`}
                    />
                </div>

                {/* Title & Subtitle */}
                <div className="mb-3">
                    <span className="mb-1 block font-mono text-xs tracking-widest text-primary uppercase">
                        {service.subtitle}
                    </span>
                    <h3
                        className={`font-bold tracking-tight text-foreground uppercase ${isLarge ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'}`}
                    >
                        {service.title}
                    </h3>
                </div>

                {/* Description */}
                <p
                    className={`mb-4 flex-1 font-mono text-muted-foreground ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}
                >
                    {service.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                    {service.metrics.map((metric) => {
                        const MetricIcon = getMetricIcon(metric);
                        return (
                            <div
                                key={metric}
                                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-2.5 py-1 transition-all duration-300 group-hover:border-primary/30 sm:px-3 sm:py-1.5"
                            >
                                <MetricIcon className="h-3 w-3 text-primary" />
                                <span className="font-mono text-xs text-muted-foreground">
                                    {metric}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Large Card Stats */}
                {showStats && (
                    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border/30 pt-6 sm:mt-8 sm:pt-8">
                        {[
                            { label: 'Avg. Load', value: '<3s' },
                            { label: 'Conversion', value: '+40%' },
                            { label: 'Uptime', value: '99.9%' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-gradient text-xl font-bold sm:text-2xl lg:text-3xl">
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
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 transition-all duration-500 group-hover:border-primary/30 sm:rounded-3xl" />
        </div>
    );
}
