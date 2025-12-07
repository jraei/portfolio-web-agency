import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Quote, Volume2, VolumeX } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

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

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

function VideoCard({
    testimonial,
    index,
    isHovered,
    onHover,
    onOpen,
}: {
    testimonial: Testimonial;
    index: number;
    isHovered: boolean;
    onHover: (id: number | null) => void;
    onOpen: (testimonial: Testimonial) => void;
}) {
    const isOtherHovered = isHovered;

    return (
        <motion.div
            className="relative aspect-[9/16] w-48 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl sm:w-56 lg:w-64"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => onHover(testimonial.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onOpen(testimonial)}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            animate={{
                filter: isOtherHovered ? 'blur(2px)' : 'blur(0px)',
                opacity: isOtherHovered ? 0.6 : 1,
            }}
        >
            {/* Video Thumbnail Placeholder */}
            <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                    background: `linear-gradient(135deg, hsl(270 95% 25%), hsl(250 100% 20%))`,
                }}
            >
                {/* Grayscale overlay - removed on hover via parent */}
                <motion.div
                    className="absolute inset-0 bg-background/40"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Person Silhouette Placeholder */}
            <div className="absolute inset-0 flex items-end justify-center">
                <div className="mb-8 h-2/3 w-3/4 rounded-t-full bg-foreground/5" />
            </div>

            {/* Play Button */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
            >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 bg-background/20 backdrop-blur-sm">
                    <Play className="ml-1 h-6 w-6 fill-foreground text-foreground" />
                </div>
            </motion.div>

            {/* Name Tag */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-12">
                <p className="font-mono text-xs text-muted-foreground">{testimonial.role}</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="font-mono text-xs text-primary">{testimonial.company}</p>
            </div>
        </motion.div>
    );
}

function MarqueeItem({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="mx-4 flex w-80 flex-shrink-0 flex-col rounded-xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm sm:w-96">
            <Quote className="mb-4 h-6 w-6 text-primary/40" />
            <p className="mb-6 flex-1 font-mono text-sm leading-relaxed text-muted-foreground">
                "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20"
                    style={{
                        background: `linear-gradient(135deg, hsl(270 95% 35%), hsl(250 100% 35%))`,
                    }}
                >
                    <span className="font-mono text-xs text-foreground">
                        {testimonial.name.charAt(0)}
                    </span>
                </div>
                <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    // Duplicate testimonials for seamless loop
    const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="relative overflow-hidden bg-background py-20 lg:py-32">
            {/* Background */}
            <div className="noise pointer-events-none absolute inset-0" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 px-4 text-center lg:mb-16"
            >
                <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-primary sm:mb-4">
                    {'// CLIENT STORIES'}
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                    The <span className="text-gradient">Cinematic Trust</span>
                </h2>
            </motion.div>

            {/* Part A: Video Testimonials */}
            <div className="relative mb-16 lg:mb-24">
                {/* Gradient Masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

                <div className="no-scrollbar flex justify-center gap-4 overflow-x-auto px-8 py-4 sm:gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <VideoCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            isHovered={hoveredId !== null && hoveredId !== testimonial.id}
                            onHover={setHoveredId}
                            onOpen={setSelectedVideo}
                        />
                    ))}
                </div>
            </div>

            {/* Part B: Infinite Marquee */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

                {/* Marquee Track */}
                <div className="flex animate-marquee">
                    {marqueeItems.map((testimonial, index) => (
                        <MarqueeItem key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
                <DialogContent className="max-w-4xl border-border bg-card p-0">
                    <DialogTitle className="sr-only">
                        {selectedVideo?.name}'s Testimonial Video
                    </DialogTitle>
                    {selectedVideo && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-background">
                            {/* Video Placeholder */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                                <Play className="mb-4 h-16 w-16 text-foreground/50" />
                                <p className="font-mono text-sm text-muted-foreground">
                                    Video: {selectedVideo.name}'s Testimonial
                                </p>
                            </div>

                            {/* Controls */}
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="rounded-full bg-background/50 p-2 backdrop-blur-sm transition-colors hover:bg-background/80"
                                >
                                    {isMuted ? (
                                        <VolumeX className="h-5 w-5 text-foreground" />
                                    ) : (
                                        <Volume2 className="h-5 w-5 text-foreground" />
                                    )}
                                </button>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute right-4 top-4 rounded-full bg-background/50 p-2 backdrop-blur-sm transition-colors hover:bg-background/80"
                            >
                                <X className="h-5 w-5 text-foreground" />
                            </button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
