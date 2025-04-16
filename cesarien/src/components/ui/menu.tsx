import Link from 'next/link';

const Menu = () => {
  return (
    <div className="bg-gray-500 text-white p-4">
      <ul className="container mx-auto flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="">About</Link>
        <Link className='align-self-end' href="/connexion">Connexion</Link>
      </ul>
    </div>
  );
}

export default Menu;