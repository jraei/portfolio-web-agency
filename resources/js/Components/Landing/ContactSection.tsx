import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Check,
    Code2,
    Github,
    GraduationCap,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Rocket,
    Send,
    ShoppingCart,
    Sparkles,
    Twitter,
} from 'lucide-react';
import { useState } from 'react';

type ServiceType =
    | 'landing'
    | 'profile'
    | 'ecourse'
    | 'ecommerce'
    | 'custom'
    | null;
type BudgetType = 'small' | 'medium' | 'large' | null;

interface FormData {
    service: ServiceType;
    budget: BudgetType;
    contact: string;
}

const services = [
    { id: 'landing' as const, label: 'Landing Page', icon: Rocket },
    { id: 'profile' as const, label: 'Company Profile', icon: Building2 },
    { id: 'ecourse' as const, label: 'E-Course', icon: GraduationCap },
    { id: 'ecommerce' as const, label: 'E-Commerce', icon: ShoppingCart },
    { id: 'custom' as const, label: 'Custom App', icon: Code2 },
];

const budgets = [
    { id: 'small' as const, label: '< 5M', description: 'Starter' },
    { id: 'medium' as const, label: '5-15M', description: 'Growth' },
    { id: 'large' as const, label: '> 15M', description: 'Enterprise' },
];

// WhatsApp number - replace with actual number
const WHATSAPP_NUMBER = '6281234567890';

function StepIndicator({
    currentStep,
    totalSteps,
}: {
    currentStep: number;
    totalSteps: number;
}) {
    return (
        <div className="mb-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <motion.div
                    key={index}
                    className="relative h-1 overflow-hidden rounded-full"
                    initial={{ width: 32 }}
                    animate={{
                        width: index === currentStep ? 48 : 32,
                        backgroundColor:
                            index <= currentStep
                                ? 'hsl(270 95% 65%)'
                                : 'hsl(0 0% 15%)',
                    }}
                    transition={{ duration: 0.3 }}
                />
            ))}
        </div>
    );
}

function ServiceStep({
    selected,
    onSelect,
}: {
    selected: ServiceType;
    onSelect: (service: ServiceType) => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground sm:text-2xl">
                I'm interested in...
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {services.map((service) => {
                    const Icon = service.icon;
                    const isSelected = selected === service.id;

                    return (
                        <motion.button
                            key={service.id}
                            onClick={() => onSelect(service.id)}
                            className={`group relative flex flex-col items-center gap-3 rounded-xl border p-4 transition-all duration-300 ${
                                isSelected
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border/50 bg-card/50 hover:border-border hover:bg-card'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSelected && (
                                <motion.div
                                    className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    <Check className="h-3 w-3 text-primary-foreground" />
                                </motion.div>
                            )}
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                                    isSelected
                                        ? 'bg-primary/20'
                                        : 'bg-muted/50 group-hover:bg-muted'
                                }`}
                            >
                                <Icon
                                    className={`h-6 w-6 transition-colors ${
                                        isSelected
                                            ? 'text-primary'
                                            : 'text-muted-foreground group-hover:text-foreground'
                                    }`}
                                />
                            </div>
                            <span
                                className={`text-center font-mono text-xs tracking-wider uppercase ${
                                    isSelected
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                {service.label}
                            </span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
}

function BudgetStep({
    selected,
    onSelect,
}: {
    selected: BudgetType;
    onSelect: (budget: BudgetType) => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground sm:text-2xl">
                My budget is...
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                {budgets.map((budget) => {
                    const isSelected = selected === budget.id;

                    return (
                        <motion.button
                            key={budget.id}
                            onClick={() => onSelect(budget.id)}
                            className={`group relative flex flex-1 flex-col items-center gap-2 rounded-xl border p-4 transition-all duration-300 sm:p-6 ${
                                isSelected
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border/50 bg-card/50 hover:border-border hover:bg-card'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSelected && (
                                <motion.div
                                    className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    <Check className="h-3 w-3 text-primary-foreground" />
                                </motion.div>
                            )}
                            <span
                                className={`text-2xl font-bold sm:text-3xl ${
                                    isSelected
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                {budget.label}
                            </span>
                            <span
                                className={`font-mono text-xs tracking-wider uppercase ${
                                    isSelected
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                {budget.description}
                            </span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
}

function ContactStep({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground sm:text-2xl">
                Contact me at...
            </h3>
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Email or WhatsApp number"
                    className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-4 font-mono text-sm text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
                <div className="absolute inset-y-0 right-4 flex items-center">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
            </div>
        </motion.div>
    );
}

function SuccessState({ formData }: { formData: FormData }) {
    const handleWhatsApp = () => {
        const serviceLabel =
            services.find((s) => s.id === formData.service)?.label || 'Project';
        const budgetLabel =
            budgets.find((b) => b.id === formData.budget)?.label || '';
        const message = encodeURIComponent(
            `Hi! I just submitted a project inquiry for a ${serviceLabel} with a budget of ${budgetLabel}. I'd love to discuss this further!`
        );
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
            '_blank'
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
        >
            <motion.div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.2,
                }}
            >
                <Check className="h-10 w-10 text-primary" />
            </motion.div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">
                Project Submitted!
            </h3>
            <p className="mb-6 font-mono text-sm text-muted-foreground">
                We'll get back to you within 24 hours.
            </p>

            {/* WhatsApp CTA */}
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                <p className="mb-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Can't wait? Let's chat now!
                </p>
                <motion.button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-3 rounded-full border border-green-500/50 bg-green-500/10 px-6 py-3 font-mono text-sm tracking-wider text-green-400 transition-all duration-300 hover:border-green-500 hover:bg-green-500/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp Now
                </motion.button>
            </div>
        </motion.div>
    );
}

function Footer() {
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="border-t border-border/30 bg-background backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="mb-4 text-2xl font-bold text-foreground">
                            PBM<span className="text-gradient">.</span>
                        </h3>
                        <p className="mb-6 font-mono text-sm text-muted-foreground">
                            Crafting digital ecosystems that drive growth and
                            innovation.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-mono text-xs tracking-widest text-foreground uppercase">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Landing Pages',
                                'Company Profiles',
                                'E-Course Platforms',
                                'E-Commerce',
                                'Custom Development',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#services"
                                        className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-4 font-mono text-xs tracking-widest text-foreground uppercase">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'About Us',
                                'Projects',
                                'Testimonials',
                                'Careers',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-mono text-xs tracking-widest text-foreground uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                hello@pbmagency.com
                            </li>
                            <li className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary" />
                                +62 812 3456 7890
                            </li>
                            <li className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                                Jakarta, Indonesia
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">
                    <p className="font-mono text-xs text-muted-foreground">
                        © 2024 PBM Agency. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function ContactSection() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        service: null,
        budget: null,
        contact: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const canProceed = () => {
        if (step === 0) return formData.service !== null;
        if (step === 1) return formData.budget !== null;
        if (step === 2) return formData.contact.length > 0;
        return false;
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <>
            <section id="contact" className="relative bg-background py-20 lg:py-32">
                {/* Background */}
                <div className="noise pointer-events-none absolute inset-0" />

                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <span className="mb-3 inline-block font-mono text-xs tracking-widest text-primary uppercase sm:mb-4">
                            {'// START A PROJECT'}
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                            Let's <span className="text-gradient">Build</span>{' '}
                            Together
                        </h2>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:p-10"
                    >
                        {!isSubmitted ? (
                            <>
                                <StepIndicator
                                    currentStep={step}
                                    totalSteps={3}
                                />

                                <AnimatePresence mode="wait">
                                    {step === 0 && (
                                        <ServiceStep
                                            key="service"
                                            selected={formData.service}
                                            onSelect={(service) =>
                                                setFormData({
                                                    ...formData,
                                                    service,
                                                })
                                            }
                                        />
                                    )}
                                    {step === 1 && (
                                        <BudgetStep
                                            key="budget"
                                            selected={formData.budget}
                                            onSelect={(budget) =>
                                                setFormData({
                                                    ...formData,
                                                    budget,
                                                })
                                            }
                                        />
                                    )}
                                    {step === 2 && (
                                        <ContactStep
                                            key="contact"
                                            value={formData.contact}
                                            onChange={(contact) =>
                                                setFormData({
                                                    ...formData,
                                                    contact,
                                                })
                                            }
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="mt-8 flex items-center justify-between gap-4">
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        disabled={step === 0}
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Back
                                    </button>

                                    {step < 2 ? (
                                        <motion.button
                                            onClick={() => setStep(step + 1)}
                                            disabled={!canProceed()}
                                            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-mono text-sm text-primary-foreground transition-all disabled:cursor-not-allowed disabled:opacity-30"
                                            whileHover={{
                                                scale: canProceed() ? 1.02 : 1,
                                            }}
                                            whileTap={{
                                                scale: canProceed() ? 0.98 : 1,
                                            }}
                                        >
                                            Next
                                            <ArrowRight className="h-4 w-4" />
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            onClick={handleSubmit}
                                            disabled={
                                                !canProceed() || isSubmitting
                                            }
                                            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-mono text-sm text-primary-foreground transition-all disabled:cursor-not-allowed disabled:opacity-30"
                                            whileHover={{
                                                scale:
                                                    canProceed() &&
                                                    !isSubmitting
                                                        ? 1.02
                                                        : 1,
                                            }}
                                            whileTap={{
                                                scale:
                                                    canProceed() &&
                                                    !isSubmitting
                                                        ? 0.98
                                                        : 1,
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                                                        animate={{
                                                            rotate: 360,
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: 'linear',
                                                        }}
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Submit
                                                    <Send className="h-4 w-4" />
                                                </>
                                            )}
                                        </motion.button>
                                    )}
                                </div>
                            </>
                        ) : (
                            <SuccessState formData={formData} />
                        )}
                    </motion.div>

                    {/* Launch Button */}
                    {!isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8"
                        >
                            <motion.button
                                onClick={handleSubmit}
                                disabled={
                                    !canProceed() || step !== 2 || isSubmitting
                                }
                                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent py-5 font-mono text-lg font-semibold tracking-wider text-primary-foreground uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 sm:py-6"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                {/* Shimmer Effect */}
                                <motion.div
                                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ translateX: ['100%', '-100%'] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                    }}
                                />
                                <span className="relative flex items-center justify-center gap-3">
                                    Launch Project
                                    <Rocket className="h-5 w-5" />
                                </span>
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Fixed Footer (Revealed on Scroll) */}
            <Footer />
        </>
    );
}
