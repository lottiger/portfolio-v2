'use client';

const Dots = ({ selectedPage, setSelectedPage }: DotGroupProps) => {
	const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

	return (
		<div className="flex flex-col gap-6 fixed top-[40%] right-7 z-50">
			<a
				href="#home"
				className={`${
					selectedPage === 'home' ? selectedStyles : 'bg-dark-grey'
				} w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage('home')}
			/>

			<a
				href="#about"
				className={`${
					selectedPage === 'about' ? selectedStyles : 'bg-dark-grey'
				} w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage('about')}
			/>

			<a
				href="#skills"
				className={`${
					selectedPage === 'skills' ? selectedStyles : 'bg-dark-grey'
				} w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage('skills')}
			/>

			<a
				href="#projects"
				className={`${
					selectedPage === 'projects'
						? selectedStyles
						: 'bg-dark-grey'
				} w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage('projects')}
			/>

			<a
				href="#testimonials"
				className={`${
					selectedPage === 'testimonials'
						? selectedStyles
						: 'bg-dark-grey'
				} w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage('testimonials')}
			/>

			<a
				href="#contact"
				className={`${
					selectedPage === 'contact' ? selectedStyles : 'bg-dark-grey'
				} w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage('contact')}
			/>
		</div>
	);
};

export default Dots;
