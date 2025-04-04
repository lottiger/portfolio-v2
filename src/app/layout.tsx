import type { Metadata } from 'next';
import { Roboto, Lora } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-sans',
});
const lora = Lora({
	subsets: ['latin'],
	weight: ['600'],
	variable: '--font-serif',
});

export const metadata: Metadata = {
	title: 'Portfolio of Linda Löttiger',
	description:
		'A joyful Frontend developer with a passion for backend, user experience and accessibility.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lora.variable} ${roboto.variable}`}>
				{children}
			</body>
		</html>
	);
}
