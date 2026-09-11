import Image from "next/image";

type StackLayoutProps = {
    images: string[];
    title: string;
};

export default function StackLayout({
    images,
    title,
}: StackLayoutProps) {
    return (
        <div
            className="
                px-6
                space-y-8
                md:px-0
                md:mt-[clamp(113px,calc(56px+7.8vw),142px)]
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