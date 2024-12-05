const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm text-gray-400">
                        We simplify the visa process and help people explore global opportunities. Let us guide your journey.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="text-sm text-gray-400">Email: support@visanavigator.com</p>
                    <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
                    <p className="text-sm text-gray-400">Location: 123 Visa St., Global City</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-full hover:bg-blue-600"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-full hover:bg-blue-400"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-full hover:bg-blue-800"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Visa Navigator. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
