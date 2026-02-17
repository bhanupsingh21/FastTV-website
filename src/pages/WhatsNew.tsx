import { assets } from '../assets/figma_assets';

// What's New show data - Row 1
const comingSoonRow1 = [
    { title: 'Adhantari', image: 'wnAdhantari' },
    { title: 'Damaged 3', image: 'ts5Damaged3' },
    { title: 'Barcode', image: 'wnBarcode' },
    { title: 'Bessharam Rang', image: 'wnBessharam' },
    { title: 'Judwa Jaal', image: 'wnJudwaJaal' },
    { title: 'Bhootatlela', image: 'wnBhootatlela' },
    { title: 'Boys With Toys', image: 'wnBoysWithToys' },
];

// What's New show data - Row 2
const comingSoonRow2 = [
    { title: 'Checkmate', image: 'wnCheckmate' },
    { title: 'Damaged 2', image: 'wnDamaged2' },
    { title: 'Ishq Gunah', image: 'wnIshqGunah' },
    { title: 'Bessharam Rang', image: 'wnBessharam2' },
    { title: 'Make Me Up', image: 'wnMakeMeUp' },
    { title: 'Masti Express', image: 'wnMastiExpress' },
    { title: 'Kaamraj', image: 'wnKaamraj' },
];

const allShows = [...comingSoonRow1, ...comingSoonRow2];

export default function WhatsNew() {
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
                    <h1 className="text-[64px] md:text-[80px] font-bold leading-tight tracking-tight">
                        What's New on FastTV
                    </h1>
                    <p className="text-[20px] text-white/80 mt-4">
                        Fresh stories. New twists. Latest releases.
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

            {/* Coming Soon Section */}
            <div className="px-24 mt-8 pb-20">
                <h2 className="text-[20px] font-bold text-[#00e5ff] italic mb-8">Coming soon...</h2>

                {/* Show Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-6 gap-y-10">
                    {allShows.map((show, index) => (
                        <div key={`${show.title}-${index}`}>
                            {/* Poster */}
                            <div className="w-full aspect-[170/255] rounded-lg overflow-hidden border border-white/10">
                                <img
                                    src={assets[show.image as keyof typeof assets]}
                                    alt={show.title}
                                    className="w-full h-full object-cover"
                                />
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
