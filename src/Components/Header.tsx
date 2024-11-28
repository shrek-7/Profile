
// export default function Header({ }: Props) {
// 	return (
// 		<div className='p-10 text-left border-b border-gray-400'>
// 			<div className='text-lg font-bold items-center flex'>
// 				<p>Shrek <span className='text-3xl font-bold text-purple-400'>.</span></p>
// 				{/* <p className='ml-2 w-1 h-1 rounded-full bg-purple-400'></p> */}
// 			</div>
// 		</div>
// 	)
// }

import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className="shadow-md p-10 text-left border-b border-gray-400">
			<nav className="container mx-auto px-6">
				<div className="flex justify-between items-center">
					<div className='text-lg font-bold'>
						<p>Shrek <span className='text-3xl font-bold text-purple-400'>.</span></p>
					</div>
					<div className="hidden md:flex space-x-12 font-light">
						<a href="#about" className="text-white hover:text-purple-400 transition-colors duration-200">About</a>
						<a href="#skills" className="text-white hover:text-purple-400 transition-colors duration-200">Skills</a>
						<a href="#projects" className="text-white hover:text-purple-400 transition-colors duration-200">Projects</a>
						<a href="#contact" className="text-white hover:text-purple-400 transition-colors duration-200">Contact</a>
					</div>
					<div className="md:hidden">
						Hamburger
					</div>
				</div>
				{isMenuOpen && (
					<div className="mt-4 md:hidden">
						<a href="#about" className="block py-2 text-gray-300 hover:text-white transition-colors duration-200">About</a>
						<a href="#skills" className="block py-2 text-gray-300 hover:text-white transition-colors duration-200">Skills</a>
						<a href="#projects" className="block py-2 text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
						<a href="#contact" className="block py-2 text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Header



