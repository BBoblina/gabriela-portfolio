import Image from "next/image";

type OpenDataLayoutProps = {
    images: string[];
    title: string;
};

export default function OpenDataLayout({
    images,
    title,
}: OpenDataLayoutProps) {
    return (
        <div
            className="
                w-full
                px-2
                md:px-0
                md:mt-[clamp(113px,calc(56px+7.8vw),142px)]
            "
        >

            {/* Affiche Open Data */}

            <div
                className="
                    w-full
                    md:w-[62%]
                    md:ml-[8%]
                "
            >
                <Image
                    src={images[0]}
                    alt={title}
                    width={1600}
                    height={2200}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

        </div>
    );
}