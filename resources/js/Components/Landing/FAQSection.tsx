import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: string;
    color: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
}

function FAQItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: FAQ;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group"
        >
            <button
                onClick={onToggle}
                className={`w-full rounded-xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                    isOpen
                        ? 'border-primary/50 bg-primary/5'
                        : 'border-border/50 bg-card/50 hover:border-border hover:bg-card'
                }`}
                style={{
                    boxShadow: isOpen
                        ? `0 0 30px ${faq.color}20, inset 0 0 30px ${faq.color}05`
                        : 'none',
                }}
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        {/* Category Tag */}
                        <span
                            className="mb-2 inline-block rounded-full px-2 py-0.5 font-mono text-xs uppercase tracking-wider"
                            style={{
                                backgroundColor: `${faq.color}15`,
                                color: faq.color,
                            }}
                        >
                            {faq.category}
                        </span>

                        {/* Question */}
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                            {faq.question}
                        </h3>
                    </div>

                    {/* Toggle Icon */}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                    >
                        <ChevronDown
                            className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
                            style={{ color: isOpen ? faq.color : undefined }}
                        />
                    </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <p className="mt-4 border-t border-border/30 pt-4 font-mono text-sm leading-relaxed text-muted-foreground">
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
}

function StickyVisual({ activeColor }: { activeColor: string }) {
    return (
        <div className="sticky top-32 hidden lg:block">
            <motion.div
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border/30 bg-card/50"
                animate={{
                    boxShadow: `0 0 80px ${activeColor}30, inset 0 0 60px ${activeColor}10`,
                }}
                transition={{ duration: 0.5 }}
            >
                {/* Abstract 3D Visual */}
                <div className="relative h-48 w-48">
                    {/* Rotating Rings */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: `${activeColor}40` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className="absolute inset-4 rounded-full border-2"
                        style={{ borderColor: `${activeColor}30` }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className="absolute inset-8 rounded-full border-2"
                        style={{ borderColor: `${activeColor}20` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="flex h-20 w-20 items-center justify-center rounded-2xl"
                            style={{ backgroundColor: `${activeColor}15` }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <HelpCircle className="h-10 w-10" style={{ color: activeColor }} />
                        </motion.div>
                    </div>
                </div>

                {/* Background Glow */}
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at center, ${activeColor}10 0%, transparent 70%)`,
                    }}
                />

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Common Questions
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

    const activeColor = faqs.find((faq) => faq.id === openId)?.color ?? '#8b5cf6';

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative bg-background py-20 lg:py-32">
            {/* Background */}
            <div className="noise pointer-events-none absolute inset-0" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center lg:mb-16"
                >
                    <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-primary sm:mb-4">
                        {'// QUESTIONS'}
                    </span>
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                        Frequently <span className="text-gradient">Asked</span>
                    </h2>
                </motion.div>

                {/* Split Layout */}
                <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
                    {/* Left: Sticky Visual (Desktop Only) */}
                    <div className="lg:col-span-2">
                        <StickyVisual activeColor={activeColor} />
                    </div>

                    {/* Right: FAQ List */}
                    <div className="space-y-4 lg:col-span-3">
                        {faqs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => handleToggle(faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
