import { useState } from 'react';
import Hero from '../components/Hero';
import ContentRow, { type Show } from '../components/ContentRow';
import RankingRow from '../components/RankingRow';
import { assets } from '../assets/figma_assets';
import DownloadSection from '../components/DownloadSection';
import FAQSection from '../components/FAQSection';
import SeriesDemoModal from '../components/SeriesDemoModal';
import ExclusiveRow from '../components/ExclusiveRow';
import ScrollAnimation from '../components/ScrollAnimation';

const Home = () => {
    const [selectedShow, setSelectedShow] = useState<Show | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowClick = (show: Show) => {
        setSelectedShow(show);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const recentShows: Show[] = [
        { id: 1, title: "Adhantari", image: assets.imgRectangle4, isNew: true },
        { id: 2, title: "Damaged 3", image: assets.imgRectangle5, isNew: true },
        { id: 3, title: "Barcode", image: assets.imgRectangle6, isNew: true },
        { id: 4, title: "Bessharam Rang", image: assets.imgRectangle7, isNew: true },
        { id: 5, title: "Judwa Jaal", image: assets.imgRectangle8, isNew: true },
        { id: 6, title: "Bhootatlela", image: assets.imgRectangle9, isNew: true },
        { id: 7, title: "Boys With Toys", image: assets.imgRectangle10, isNew: true },
        { id: 8, title: "Checkmate", image: assets.imgRectangle11, isNew: true },
    ];

    const top10Shows: Show[] = [
        { id: 1, title: "Flight Attendant", image: assets.imgRectangle14 },
        { id: 2, title: "Dhappa", image: assets.imgRectangle15 },
        { id: 3, title: "Ek Secret Crime", image: assets.imgRectangle16 },
        { id: 4, title: "Evaru Eppudu Ekkada", image: assets.imgRectangle17 },
        { id: 5, title: "Damaged 3", image: assets.imgRectangle5 }, // reused
        { id: 6, title: "Gud Boy", image: assets.imgRectangle18 },
        { id: 7, title: "Hankaar", image: assets.imgRectangle19 },
        { id: 8, title: "Hasratein 2", image: assets.imgRectangle20 },
        { id: 9, title: "Bessharam Rang", image: assets.imgRectangle7 },
        { id: 10, title: "Barcode", image: assets.imgRectangle6 },
    ];

    const exclusiveShows: Show[] = [
        { id: 1, title: "Naagin Ka Badla", image: assets.imgNaagin, logo: assets.imgNaaginLogo, logoClassName: "h-[66px]" },
        { id: 2, title: "Badass Begum", image: assets.imgBadass, logo: assets.imgBadassLogo, logoClassName: "h-[66px]" },
        { id: 3, title: "Yeh Hai Sanak", image: assets.imgSanak, logo: assets.imgSanakLogo, logoClassName: "h-[66px]" },
        { id: 4, title: "Binni Ki Kitaab", image: assets.imgBinni, logo: assets.imgBinniLogo, logoClassName: "h-[66px]" },
        { id: 5, title: "Hasratein 3", image: assets.imgHasratein3, logo: assets.imgHasrateinLogo, logoClassName: "h-[35px] max-w-[160px]" },
        { id: 6, title: "Red Room", image: assets.imgRedRoom, logo: assets.imgRedRoomLogo, logoClassName: "h-[35px] max-w-[160px]" },
        { id: 7, title: "Judwa Jaal", image: assets.imgJudwaJaal, logo: assets.imgJudwaJaalLogo },
    ];

    return (
        <>
            <ScrollAnimation>
                <Hero />
            </ScrollAnimation>
            <main className="pb-12 space-y-12">
                <ScrollAnimation delay={0.2} className="relative z-20 pl-0 mt-10">
                    <ContentRow
                        title="Stories Worth Your Time"
                        shows={recentShows}
                        onShowClick={handleShowClick}
                    />
                </ScrollAnimation>
                {/* Divider Line */}
                <div className="container mx-auto px-6">
                    <hr className="border-white/10" />
                </div>
                <ScrollAnimation delay={0.1}>
                    <RankingRow
                        title="Trending Stories"
                        shows={top10Shows}
                        onShowClick={handleShowClick}
                    />
                </ScrollAnimation>
                <ScrollAnimation delay={0.1}>
                    <DownloadSection />
                </ScrollAnimation>
                <ScrollAnimation delay={0.1}>
                    <ExclusiveRow
                        title="Experience It on FastTV"
                        shows={exclusiveShows.map(show => ({
                            ...show,
                            videoUrl: assets.videoDemo // Adding video for exclusive section
                        }))}
                        onShowClick={handleShowClick}
                    />
                </ScrollAnimation>
                <ScrollAnimation delay={0.1}>
                    <FAQSection />
                </ScrollAnimation>
            </main>

            <SeriesDemoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                show={selectedShow}
            />
        </>
    );
};

export default Home;
