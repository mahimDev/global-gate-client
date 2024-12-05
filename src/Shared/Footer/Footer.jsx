import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-[#D4AF37] py-10 px-5 mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm text-[#BFAF87]">
                        We simplify the visa process and help people explore global opportunities. Let us guide your journey.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="text-sm text-[#BFAF87] space-y-2">
                        <li><Link href="/about" className="hover:text-[#D4AF37]">About</Link></li>
                        <li><Link href="/services" className="hover:text-[#D4AF37]">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
                        <li><Link href="/faq" className="hover:text-[#D4AF37]">FAQ</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="text-sm text-[#BFAF87]">Email: md286667@gmail.com</p>
                    <p className="text-sm text-[#BFAF87]">Phone: +8801749746072</p>
                    <p className="text-sm text-[#BFAF87]">Location: 7830 Faridpur , Dhaka , Bangladesh</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link
                            to="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#333333] rounded-full hover:bg-[#D4AF37]"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            to="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#333333] rounded-full hover:bg-[#D4AF37]"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                            to="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#333333] rounded-full hover:bg-[#D4AF37]"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#BFAF87] mt-8 pt-4 text-center">
                <p className="text-sm text-[#BFAF87]">
                    © {new Date().getFullYear()} Mahim. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
