import Image from "next/image";

type Presentation3DLayoutProps = {
    images: string[];
    title: string;
};

export default function Presentation3DLayout({
    images,
    title,
}: Presentation3DLayoutProps) {
    return (
        <div
            className="
                w-full
                px-2
                md:px-0
                md:mt-[clamp(113px,calc(56px+7.8vw),142px)]
            "
        >

            {/* Images 3D */}

            <div
                className="
                    w-full
                    space-y-4
                    md:w-[55%]
                    md:ml-[8%]
                "
            >
                {images.map((image) => (
                    <div key={image}>

                        {/* Image */}

                        <Image
                            src={image}
                            alt={title}
                            width={1600}
                            height={1000}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                    </div>
                ))}
            </div>

        </div>
    );
}