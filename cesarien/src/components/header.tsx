import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex items-center justify-between">
                <Link className='flex items-center' href="/"  >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                    <h1 className="ml-3 text-2xl font-bold">Cesarien</h1>
                </Link>
                <div>
                    <Link className='text-2xl m-2 hover:text-gray-500' href="/connexion">Connexion</Link>
                    <Link className='text-2xl m-2 hover:text-gray-500' href="/inscription">Inscription</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;