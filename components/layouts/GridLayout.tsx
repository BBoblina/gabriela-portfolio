import Image from "next/image";

type GridLayoutProps = {
    images: string[];
    title: string;
};

export default function GridLayout({
    images,
    title,
}: GridLayoutProps) {
    return (
        <div
            className="
                px-6
                grid
                grid-cols-1
                gap-6
                md:px-0
                md:mt-[clamp(113px,calc(56px+7.8vw),142px)]
                md:grid-cols-2
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
    );
}