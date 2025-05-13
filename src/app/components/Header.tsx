'use client';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import useMediaQuery from '@/hooks/useMediaQuery';

const NavLink = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<a
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
			className={`${
				selectedPage === lowerCasePage ? 'text-yellow' : ''
			} hover:text-yellow transition duration-300`}
		>
			{page}
		</a>
	);
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedPage, setSelectedPage] = useState('home');
	const isDesktop = useMediaQuery('(min-width: 768px)');
	useEffect(() => {
		const sectionIds = [
			'home',
			'about',
			'projects',
			'testimonials',
			'contact',
		];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.id;
						setSelectedPage(id);
					}
				});
			},
			{ threshold: 0.5 }, // 50% of section must show
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header className="fixed top-0 w-full z-50 py-4 px-6 shadow-md gra">
			<div className="flex items-center justify-between max-w-5xl mx-auto">
				<span className="font-serif text-3xl">LL</span>

				{/* Desktop Nav */}
				{isDesktop ? (
					<nav aria-label="Main navigation">
						<ul className="flex list-none gap-6 text-lg font-semibold">
							{[
								'Home',
								'About',
								'Projects',
								'Testimonials',
								'Contact',
							].map((page) => (
								<li key={page}>
									<NavLink
										page={page}
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</li>
							))}
						</ul>
					</nav>
				) : (
					// Mobile menu toggle
					<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Menu className="h-6 w-6" />
					</button>
				)}
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-[250px] backdrop-blur-2xl bg-white/20 shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out
				${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
			`}
			>
				<div className="flex justify-end mb-8">
					<button onClick={() => setIsMenuOpen(false)}>
						<X className="h-6 w-6" />
					</button>
				</div>
				<ul className="flex flex-col gap-6 text-lg font-semibold ml-[33%]">
					{[
						'Home',
						'About',
						'Projects',
						'Testimonials',
						'Contact',
					].map((page) => (
						<li key={page}>
							<NavLink
								page={page}
								selectedPage={selectedPage}
								setSelectedPage={(p) => {
									setSelectedPage(p);
									setIsMenuOpen(false); // stäng meny vid klick
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
