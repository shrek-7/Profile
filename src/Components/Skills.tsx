import React, { useState } from 'react'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMobx, SiNextdotjs, SiVite } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { MdDevices } from 'react-icons/md'

const skills = [
	{ name: "React", icon: FaReact, color: "text-blue-400", description: "A JavaScript library for building user interfaces" },
	{ name: "TypeScript", icon: SiTypescript, color: "text-blue-600", description: "A typed superset of JavaScript that compiles to plain JavaScript" },
	{ name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", description: "A high-level, interpreted programming language" },
	{ name: "HTML5", icon: SiHtml5, color: "text-orange-500", description: "The latest evolution of the standard that defines HTML" },
	{ name: "CSS3", icon: SiCss3, color: "text-blue-500", description: "The latest evolution of the Cascading Style Sheets language" },
	{ name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", description: "A utility-first CSS framework for rapidly building custom designs" },
	{ name: "Mobx", icon: SiMobx, color: "text-orange-500", description: "A predictable state container for JavaScript apps" },
	{ name: "Next.js", icon: SiNextdotjs, color: "text-white", description: "The React Framework for Production" },
	{ name: "Node.js", icon: FaNodeJs, color: "text-green-500", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine" },
	{ name: "Git", icon: FaGitAlt, color: "text-red-500", description: "A distributed version control system" },
	{ name: "VS Code", icon: TbBrandVscode, color: "text-blue-500", description: "A code editor redefined and optimized for building and debugging modern web and cloud applications" },
	{ name: "Vite", icon: SiVite, color: "text-purple-500", description: "A build tool that aims to provide a faster and leaner development experience for modern web projects" },
	{ name: "Responsive Design", icon: MdDevices, color: "text-pink-500", description: "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes" },

]

const Skills = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

	const handleItemClick = (clickedIndex: number) => {
		setExpandedIndex(prevIndex => prevIndex === clickedIndex ? null : clickedIndex)
	}

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-left mb-12">
					Skills
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<div
							key={index}
							className={`relative bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${index === expandedIndex ? 'col-span-2 row-span-2' : ''
								}`}
							onClick={() => handleItemClick(index)}
							tabIndex={0}
							role="button"
							aria-expanded={index === expandedIndex}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									handleItemClick(index)
								}
							}}
						>
							<div className={`absolute inset-0 bg-zinc-700  rounded-lg transition-opacity duration-300 ${index === expandedIndex ? 'border border-purple-400 shadow-xl' : ''
								}`} />
							<div className="relative z-10 flex flex-col items-center">
								<skill.icon
									className={`text-4xl ${skill.color} mb-4 transition-all duration-300 ease-in-out ${index === expandedIndex ? 'scale-150' : 'scale-100'
										}`}
								/>
								<span
									className={`text-gray-100 font-medium text-center transition-all duration-300 ease-in-out ${index === expandedIndex ? 'text-lg mb-4' : 'text-base'
										}`}
								>
									{skill.name}
								</span>
								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${index === expandedIndex ? 'max-h-40' : 'max-h-0'
										}`}
								>
									<p className="text-gray-300 text-sm text-center mt-2">
										{skill.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills

