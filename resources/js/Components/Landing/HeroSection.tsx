import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position for spotlight
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smooth spring animation for spotlight
    const springConfig = { damping: 25, stiffness: 150 };
    const spotlightX = useSpring(mouseX, springConfig);
    const spotlightY = useSpring(mouseY, springConfig);

    // Button magnetic effect
    const buttonX = useMotionValue(0);
    const buttonY = useMotionValue(0);
    const buttonSpringX = useSpring(buttonX, { damping: 15, stiffness: 150 });
    const buttonSpringY = useSpring(buttonY, { damping: 15, stiffness: 150 });

    // Auto-drift for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        let frame: number;
        let t = 0;

        const drift = () => {
            t += 0.005;
            mouseX.set(0.3 + Math.sin(t) * 0.2);
            mouseY.set(0.3 + Math.cos(t * 0.7) * 0.2);
            frame = requestAnimationFrame(drift);
        };

        frame = requestAnimationFrame(drift);
        return () => cancelAnimationFrame(frame);
    }, [isMobile, mouseX, mouseY]);

    // Mouse move handler
    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!containerRef.current || isMobile) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            mouseX.set(x);
            mouseY.set(y);

            // Magnetic button effect
            if (buttonRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect();
                const buttonCenterX = buttonRect.left + buttonRect.width / 2;
                const buttonCenterY = buttonRect.top + buttonRect.height / 2;
                const distanceX = e.clientX - buttonCenterX;
                const distanceY = e.clientY - buttonCenterY;
                const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

                if (distance < 150) {
                    const pull = (150 - distance) / 150;
                    buttonX.set(distanceX * pull * 0.3);
                    buttonY.set(distanceY * pull * 0.3);
                } else {
                    buttonX.set(0);
                    buttonY.set(0);
                }
            }
        },
        [isMobile, mouseX, mouseY, buttonX, buttonY],
    );

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    // Transform spotlight position to CSS custom properties
    const spotlightStyle = {
        '--x': useTransform(spotlightX, [0, 1], ['0%', '100%']),
        '--y': useTransform(spotlightY, [0, 1], ['0%', '100%']),
    } as React.CSSProperties;

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-background"
        >
            {/* Noise Overlay */}
            <div className="noise pointer-events-none absolute inset-0" />

            {/* Grid Background */}
            <div className="bg-grid absolute inset-0 opacity-40" />

            {/* Code Syntax Lines */}
            <div className="bg-code-syntax absolute inset-0 opacity-30" />

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                style={spotlightStyle}
            >
                {/* Radial Glow */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: `radial-gradient(ellipse 600px 400px at var(--x, 50%) var(--y, 50%), hsl(270 95% 65% / 0.15), transparent 70%)`,
                    }}
                />

                {/* Grid Reveal */}
                <div
                    className="spotlight-mask bg-grid absolute inset-0 opacity-80"
                    style={{
                        backgroundSize: '80px 80px',
                        backgroundImage: `
                            linear-gradient(hsl(270 95% 65% / 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(270 95% 65% / 0.2) 1px, transparent 1px)
                        `,
                    }}
                />
            </motion.div>

            {/* Floating Orbs */}
            <div className="animate-drift absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyber-violet/10 blur-3xl" />
            <div
                className="animate-drift absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-electric-indigo/10 blur-3xl"
                style={{ animationDelay: '-10s' }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="glass inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                            Digital Agency
                        </span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6 text-center"
                >
                    <span className="block text-4xl font-bold tracking-tight uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        <span className="text-gradient">We Build</span>
                    </span>
                    <span className="mt-2 block text-4xl font-bold tracking-tight text-foreground uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        Digital Ecosystems
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12 max-w-2xl text-center font-mono text-sm text-muted-foreground sm:text-base md:text-lg"
                >
                    <span className="text-primary">PBM Agency</span> — crafting
                    high-performance web solutions designed to maximize your
                    revenue and business scalability.
                </motion.p>

                {/* CTA Button - Magnetic */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    style={{ x: buttonSpringX, y: buttonSpringY }}
                >
                    <motion.button
                        ref={buttonRef}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group hover:glow-md relative overflow-hidden rounded-full bg-primary px-8 py-4 font-mono text-sm font-semibold tracking-wider text-primary-foreground uppercase transition-all duration-300"
                    >
                        {/* Button Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-violet via-electric-indigo to-cyber-violet opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Button Content */}
                        <span className="relative z-10 flex items-center gap-3">
                            Start Project
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </motion.button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                            Scroll
                        </span>
                        <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
