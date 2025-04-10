import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Moduline logo" width={50} height={50} className="rounded" />
          <h1 className="text-2xl font-bold">Moduline</h1>
        </div>
        <nav className="space-x-4">
          <a href="#garaze" className="hover:underline">Naše Garáže</a>
          <a href="#proces" className="hover:underline">Ako to funguje</a>
          <a href="#galeria" className="hover:underline">Galéria</a>
          <a href="#kontakt" className="hover:underline">Kontakt</a>
        </nav>
      </header>
    </div>
  );
}
