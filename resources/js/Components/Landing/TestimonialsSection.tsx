import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import {
    Maximize,
    Pause,
    Play,
    Quote,
    Volume2,
    VolumeX,
    X,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

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

interface TestimonialsSectionProps {
    videoTestimonials: VideoTestimonial[];
    quoteTestimonials: QuoteTestimonial[];
}

function VideoCard({
    testimonial,
    index,
    isHovered,
    onHover,
    onOpen,
}: {
    testimonial: VideoTestimonial;
    index: number;
    isHovered: boolean;
    onHover: (id: number | null) => void;
    onOpen: (testimonial: VideoTestimonial) => void;
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
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-12">
                <p className="font-mono text-xs text-muted-foreground">
                    {testimonial.role}
                </p>
                <p className="font-semibold text-foreground">
                    {testimonial.clientName}
                </p>
            </div>
        </motion.div>
    );
}

function VideoPlayer({
    videoUrl,
    onClose,
}: {
    videoUrl: string;
    onClose: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handlePlayPause = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const handleMuteToggle = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }, [isMuted]);

    const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            videoRef.current.currentTime =
                percentage * videoRef.current.duration;
        }
    }, []);

    const handleFullscreen = useCallback(() => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
        }
    }, []);

    const handleTimeUpdate = useCallback(() => {
        if (videoRef.current) {
            const progress =
                (videoRef.current.currentTime / videoRef.current.duration) *
                100;
            setProgress(progress || 0);
        }
    }, []);

    const handleMouseMove = useCallback(() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false);
            }
        }, 2500);
    }, [isPlaying]);

    useEffect(() => {
        return () => {
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-background"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={videoUrl}
                className="h-full w-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                playsInline
                controlsList="nodownload"
            />

            {/* Play Overlay (Initial State) */}
            {!isPlaying && progress === 0 && (
                <motion.div
                    className="absolute inset-0 flex cursor-pointer items-center justify-center bg-background/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handlePlayPause}
                >
                    <motion.div
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play className="ml-1 h-8 w-8 fill-current" />
                    </motion.div>
                </motion.div>
            )}

            {/* Custom Controls */}
            <motion.div
                className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: showControls ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Progress Bar */}
                <div
                    className="mb-4 h-1 cursor-pointer rounded-full bg-foreground/20"
                    onClick={handleSeek}
                >
                    <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Play/Pause */}
                        <button
                            onClick={handlePlayPause}
                            className="rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-colors hover:bg-foreground/20"
                        >
                            {isPlaying ? (
                                <Pause className="h-5 w-5 text-foreground" />
                            ) : (
                                <Play className="h-5 w-5 text-foreground" />
                            )}
                        </button>

                        {/* Mute/Unmute */}
                        <button
                            onClick={handleMuteToggle}
                            className="rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-colors hover:bg-foreground/20"
                        >
                            {isMuted ? (
                                <VolumeX className="h-5 w-5 text-foreground" />
                            ) : (
                                <Volume2 className="h-5 w-5 text-foreground" />
                            )}
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Fullscreen */}
                        <button
                            onClick={handleFullscreen}
                            className="rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-colors hover:bg-foreground/20"
                        >
                            <Maximize className="h-5 w-5 text-foreground" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-background/50 p-2 backdrop-blur-sm transition-colors hover:bg-background/80"
            >
                <X className="h-5 w-5 text-foreground" />
            </button>
        </div>
    );
}

function MarqueeItem({ testimonial }: { testimonial: QuoteTestimonial }) {
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
                    <p className="text-sm font-medium text-foreground">
                        {testimonial.name}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection({
    videoTestimonials,
    quoteTestimonials,
}: TestimonialsSectionProps) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(
        null,
    );

    // Duplicate testimonials for seamless loop
    const marqueeItems = [
        ...quoteTestimonials,
        ...quoteTestimonials,
        ...quoteTestimonials,
    ];

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-background py-20 lg:py-32"
        >
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
                <span className="mb-3 inline-block font-mono text-xs tracking-widest text-primary uppercase sm:mb-4">
                    {'// CLIENT STORIES'}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                    Stories Of{' '}
                    <span className="text-gradient">Transformation</span>
                </h2>
            </motion.div>

            {/* Part A: Video Testimonials */}
            <div className="relative mb-16 lg:mb-24">
                {/* Gradient Masks */}
                <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
                <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

                <div className="no-scrollbar flex justify-start gap-4 overflow-x-auto px-8 py-4 sm:gap-6 lg:justify-center lg:gap-8">
                    {videoTestimonials.map((testimonial, index) => (
                        <VideoCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            isHovered={
                                hoveredId !== null &&
                                hoveredId !== testimonial.id
                            }
                            onHover={setHoveredId}
                            onOpen={setSelectedVideo}
                        />
                    ))}
                </div>
            </div>

            {/* Part B: Infinite Marquee */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
                <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

                {/* Marquee Track */}
                <div className="animate-marquee flex">
                    {marqueeItems.map((testimonial, index) => (
                        <MarqueeItem
                            key={`${testimonial.id}-${index}`}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <Dialog
                open={!!selectedVideo}
                onOpenChange={() => setSelectedVideo(null)}
            >
                <DialogContent className="max-w-4xl border-border bg-card p-0">
                    <DialogTitle className="sr-only">
                        {selectedVideo?.clientName}'s Testimonial Video
                    </DialogTitle>
                    {selectedVideo && (
                        <VideoPlayer
                            videoUrl={selectedVideo.videoUrl}
                            onClose={() => setSelectedVideo(null)}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
