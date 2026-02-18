import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Show } from './ContentRow';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RankingRowProps {
    title?: string;
    shows: Show[];
    onShowClick?: (show: Show) => void;
}

export default function RankingRow({ title = "Top 10 Series", shows, onShowClick }: RankingRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="pt-12 pb-10 space-y-4">
            <div className="container mx-auto px-6 flex justify-between items-center mb-6">
                <h2 className="text-lg md:text-[21px] font-bold text-white whitespace-nowrap flex items-center gap-4">
                    {title}
                </h2>
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-[34px] h-[34px] rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-[34px] h-[34px] rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            <div
                ref={rowRef}
                className="flex overflow-x-auto gap-[24px] pb-8 pt-4 scrollbar-hide scroll-smooth no-scrollbar px-6 xl:px-[calc((100vw-1280px)/2+24px)] 2xl:px-[calc((100vw-1536px)/2+24px)]"
            >
                {shows.slice(0, 10).map((show, index) => (
                    <div
                        key={show.id}
                        onClick={() => onShowClick?.(show)}
                    >
                        <div className="relative w-[200px] h-[255px] flex-shrink-0 flex items-center group cursor-pointer">
                            <div className="relative w-full h-full rounded-[8px] flex overflow-visible">
                                {/* Card Image */}
                                <motion.div
                                    className="absolute right-0 top-0 w-[170px] h-[255px] rounded-[8px] overflow-hidden border border-white/10 bg-gray-900 z-10"
                                    whileHover={{ scale: 1.05, zIndex: 20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img src={show.image} alt={show.title} className="w-full h-full object-cover" />
                                </motion.div>

                                <div className="absolute left-0 bottom-[35px] text-[100px] font-bold leading-none z-20 text-stroke select-none flex flex-col justify-center translate-y-1/2"
                                    style={{
                                        fontFamily: 'var(--font-product-sans)',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        width: '43px',
                                        height: '70px'
                                    }}>
                                    <p className="leading-none">{index + 1}</p>
                                </div>
                            </div>

                            <p className="absolute -bottom-8 left-[30px] text-[15px] font-medium text-white opacity-80 truncate w-[170px]">
                                {show.title}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="min-w-[40px] shrink-0" />
            </div>
        </div>
    );
}
