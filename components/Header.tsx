export default function Header() {
    return (
        <header className="flex items-center justify-between mb-24">
            <h1 className="text-xs uppercase tracking-[0.2em] font-medium">
                Gabriela Arrabaço
            </h1>

            <a
                href="/contact"
                className="text-xs uppercase tracking-[0.2em] hover:underline"
            >
                Contact
            </a>
        </header>
    );
}