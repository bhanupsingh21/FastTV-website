import { useState } from 'react';
import { assets } from '../assets/figma_assets';

// Top Series show data with rankings
const topSeriesShows = [
    { rank: 1, title: 'Flight Attendant', image: 'ts1FlightAttendant' },
    { rank: 2, title: 'Badass Begum', image: 'ts2BadassBegum' },
    { rank: 3, title: 'Ek Secret Crime', image: 'ts3EkSecretCrime' },
    { rank: 4, title: 'Evaru Eppudu Ekkada', image: 'ts4EvaruEppudu' },
    { rank: 5, title: 'Damaged 3', image: 'ts5Damaged3' },
    { rank: 6, title: 'Gud Boy', image: 'ts6GudBoy' },
    { rank: 7, title: 'Hankaar', image: 'ts7Hankaar' },
    { rank: 8, title: 'Hasratein 2', image: 'ts8Hasratein2' },
    { rank: 9, title: 'Game?', image: 'ts9Game' },
    { rank: 10, title: 'Dhappa', image: 'ts10Dhappa' },
];

const genres = ['Trending', 'Romance', 'Thriller', 'Comedy', 'Recently Added'];

export default function TopSeries() {
    const [activeGenre, setActiveGenre] = useState('Trending');

    return (
        <div className="relative min-h-screen">
            {/* Hero Section with Background Collage */}
            <div className="relative h-[560px] overflow-hidden">
                {/* Background collage image */}
                <div className="absolute inset-0">
                    <img
                        src={assets.imgBg}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040406]/70 to-[#040406]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-[90px]">
                    <h1 className="text-4xl md:text-[80px] font-bold leading-tight tracking-tight">
                        Explore Our Top Series
                    </h1>
                    <p className="text-[20px] text-white/80 mt-4">
                        Trending, binge-worthy short dramas loved by millions.
                    </p>

                    {/* Download CTA */}
                    <div className="mt-8 flex flex-col items-center gap-3">
                        <p className="text-[16px] text-white/90 font-medium">Download FastTV App</p>
                        <div className="flex gap-3">
                            <a href="#" className="block shrink-0 transition-transform hover:scale-105">
                                <img src={assets.img2} alt="Google Play" className="h-[50px] w-[160px] object-contain" />
                            </a>
                            <a href="#" className="block shrink-0 transition-transform hover:scale-105">
                                <img src={assets.img1} alt="App Store" className="h-[50px] w-[160px] object-contain" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Genre Filter Tabs */}
            <div className="px-6 md:px-24 mt-8">
                <div className="flex flex-wrap gap-3">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => setActiveGenre(genre)}
                            className={`px-6 py-2 rounded-md text-[15px] font-bold transition-all duration-200 cursor-pointer ${activeGenre === genre
                                ? 'bg-white text-black'
                                : 'bg-transparent border border-white/30 text-white hover:border-white/60'
                                }`}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            {/* Ranked Show Grid */}
            <div className="px-6 md:px-24 mt-10 pb-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-6 gap-y-10">
                    {topSeriesShows.map((show) => (
                        <div key={show.rank} className="relative group cursor-pointer">
                            {/* Card container */}
                            <div className="relative">
                                {/* Poster Image */}
                                <div className="w-[170px] h-[255px] rounded-lg overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={assets[show.image as keyof typeof assets]}
                                        alt={show.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Rank Number - Aligned to bottom edge */}
                                <span
                                    className="absolute -left-4 bottom-0 text-[100px] font-bold leading-[0.8] tracking-tighter z-10 drop-shadow-lg"
                                    style={{
                                        WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                                        color: 'transparent',
                                        backgroundImage: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.2))',
                                        WebkitBackgroundClip: 'text',
                                        fontFamily: 'Outfit, sans-serif'
                                    }}
                                >
                                    {show.rank}
                                </span>
                            </div>
                            {/* Title */}
                            <p className="text-[15px] text-white/80 mt-2">{show.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
