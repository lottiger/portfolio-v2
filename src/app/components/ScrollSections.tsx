'use client';
import { useEffect, useState } from 'react';
import Dots from './Dots';

const ScrollSections = () => {
	const [selectedPage, setSelectedPage] = useState('home');

	useEffect(() => {
		const ids = ['home', 'skills', 'projects', 'testimonials', 'contact'];
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setSelectedPage(entry.target.id);
						break;
					}
				}
			},
			{ threshold: 0.5 },
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Dots
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>

			<section id="home" className="min-h-screen">
				Home
			</section>
			<section id="about" className="min-h-screen">
				About
			</section>
			<section id="skills" className="min-h-screen">
				Skills
			</section>

			<section id="projects" className="min-h-screen">
				Projects
			</section>
			<section id="testimonials" className="min-h-screen">
				Testimonials
			</section>
			<section id="contact" className="min-h-screen">
				Contact
			</section>
		</>
	);
};

export default ScrollSections;
