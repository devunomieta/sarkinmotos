export default function Footer() {
  return (
    <footer className="relative z-50 w-full bg-black border-t border-white/10 py-12 flex flex-col items-center justify-center text-center">
      <div className="text-gray-400 text-sm">
        Built by{" "}
        <a 
          href="https://devunomieta.xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-[var(--color-gold)] transition-colors font-medium border-b border-transparent hover:border-[var(--color-gold)] pb-0.5"
        >
          @devunomieta
        </a>
      </div>
    </footer>
  );
}
