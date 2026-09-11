import Image from "next/image";

type FestivalLayoutProps = {
    images: string[];
    title: string;
};

export default function FestivalLayout({
    images,
    title,
}: FestivalLayoutProps) {
    return (
        <div
            className="
                px-6
                space-y-6
                md:px-0
                md:space-y-0
                md:mt-[clamp(113px,calc(56px+7.8vw),142px)]
                md:grid
                md:grid-cols-2
                md:gap-6
                md:items-start
            "
        >

            {/* Colonne gauche */}

            <div className="space-y-6">

                {/* Hero */}

                <div className="festival-hero">
                    <Image
                        src={images[0]}
                        alt={title}
                        width={1600}
                        height={1000}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>


                {/* Lineup */}

                <div className="festival-lineup">
                    <Image
                        src={images[1]}
                        alt={title}
                        width={1600}
                        height={1000}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

            </div>


            {/* Colonne droite */}

            <div className="space-y-6">

                {/* Map */}

                <div className="festival-map">
                    <Image
                        src={images[2]}
                        alt={title}
                        width={1600}
                        height={1000}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>


                {/* Tickets */}

                <div className="festival-tickets">
                    <Image
                        src={images[3]}
                        alt={title}
                        width={1600}
                        height={1000}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

            </div>

        </div>
    );
}