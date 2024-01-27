"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='py-4 px-6 flex items-center justify-between border-b shadow '>
      <Link href="/" className="font-bold text-2xl">
        Harsh Chandravanshi
      </Link>
      <motion.ul className="hidden md:flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
