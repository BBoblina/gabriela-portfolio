import Image from "next/image";

type OrqidLayoutProps = {
    images: string[];
    title: string;
};

export default function OrqidLayout({
    images,
    title,
}: OrqidLayoutProps) {
    return (
        <div
            className="
                w-full
                px-4
                md:px-0
                md:mt-[clamp(113px,calc(56px+7.8vw),142px)]
            "
        >

            {/* Logo principal ORQID */}

            <div
                className="
                    w-[full%]
                    mx-auto
                    md:w-[62%]
                    md:ml-[20%]
                "
            >
                <Image
                    src={images[0]}
                    alt={`${title} - logo principal`}
                    width={1600}
                    height={1600}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 90vw, 50vw"
                />
            </div>


            {/* Petit logo ORQID */}

            <div
                className="
        w-[80%]
        ml-auto
        mt-4
        translate-x-4
        md:w-[31%]
        md:mr-[4%]
        md:-mt-24
        md:translate-x-6
    "
            >
                <Image
                    src={images[1]}
                    alt={`${title} - petit logo`}
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 45vw, 25vw"
                />
            </div>

        </div>
    );
}