import Image from "next/image";

type OrdiUtileLayoutProps = {
    images: string[];
    title: string;
};

export default function OrdiUtileLayout({
    images,
    title,
}: OrdiUtileLayoutProps) {
    return (
        <div
            className="
                w-full
                px-1
                md:px-0
                md:mt-[clamp(80px,calc(40px+5vw),105px)]
            "
        >

            {/* Logo Ordi Utile */}

            <div
                className="
                    w-[85%]
                    mx-auto
                    md:w-[48%]
                "
            >
                <Image
                    src={images[0]}
                    alt={title}
                    width={1600}
                    height={1600}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 85vw, 50vw"
                />
            </div>

        </div>
    );
}