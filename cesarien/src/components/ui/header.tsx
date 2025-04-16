import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold"><Link href="/"  >Cesarien</Link></h1>
      </div>
    </header>
  );
}

export default Header;