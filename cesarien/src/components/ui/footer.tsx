const Footer = () => {


    const anner = new Date();

    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; {anner.getFullYear()} Cesarien. Tous droits réservés.</p>
            <p>
            <a href="/mentions-legales" className="text-white-400 hover:underline">
                Mentions Légales
            </a>
            </p>
        </div>
        </footer>
    );
}

export default Footer;