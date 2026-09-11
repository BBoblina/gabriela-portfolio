import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen px-12 py-12 relative">

            <a
                href="mailto:gabrielaarrabaco@gmail.com"
                className="absolute top-12 right-12 text-[15px] hover:underline"
            >
                gabrielaarrabaco@gmail.com
            </a>

            <div className="min-h-[80vh] flex items-center justify-center">

                <Image
                    src="/images/contact/bunny.png"
                    alt="Gabriela's bunny logo"
                    width={500}
                    height={500}
                    className="w-[min(35vw,500px)] h-auto"
                />

            </div>

        </main>
    );
}