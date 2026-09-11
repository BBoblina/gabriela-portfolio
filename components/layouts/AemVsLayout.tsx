import Image from "next/image";

type AemVsLayoutProps = {
    images: string[];
    title: string;
};

export default function AemVsLayout({
    images,
    title,
}: AemVsLayoutProps) {
    return (
        <div
            className="
                w-full
                px-6
                md:px-0
                md:mt-[clamp(95px,calc(48px+6vw),120px)]
            "
        >

            {/* Logo AEM-VS */}

            <div
                className="
                    w-[90%]
                    mx-auto
                    md:w-[75%]
                "
            >
                <Image
                    src={images[0]}
                    alt={`${title} - logo`}
                    width={1654}
                    height={1170}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 90vw, 50vw"
                />
            </div>


            {/* Tote bag */}

            <div
                className="
                    w-full
                    mt-6
                    md:w-[68%]
                    md:ml-auto
                    md:translate-x-8
                "
            >
                <Image
                    src={images[1]}
                    alt={`${title} - tote bag`}
                    width={2048}
                    height={1536}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

        </div>
    );
}