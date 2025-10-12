import {useState} from 'react';
import {motion} from 'motion/react';

function Navigation({ onLinkClick }) {
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        onLinkClick();
    };

    return (
    <ul className="nav-ul">
        <li className="nav-li">
            <motion.a 
                className="nav-link" 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Home
            </motion.a>
        </li>
        <li className="nav-li">
            <motion.a 
                className="nav-link" 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                About
            </motion.a>
        </li>
        <li className="nav-li">
            <motion.a 
                className="nav-link" 
                href="#work" 
                onClick={(e) => handleSmoothScroll(e, '#work')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Work
            </motion.a>
        </li>
        <li className="nav-li">
            <motion.a 
                className="nav-link" 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Contact
            </motion.a>
        </li>
    </ul>
    )
}
const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">   
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a  
                    href="/"
                    className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                    Rafi
                </a>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                    className="w-6 h-6" 
                    alt="toggle" 
                    />
                </button>
                <nav className="hidden sm:flex">
                    <Navigation onLinkClick={handleLinkClick} />
                </nav>
            </div>    
        </div>
        {isOpen &&(
            <motion.div className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 0.3 }}
            >
                <nav className="pb-5">
                    <Navigation onLinkClick={handleLinkClick} />
                </nav>
            </motion.div>
        )}
    </div>
  );
};

export default Navbar;