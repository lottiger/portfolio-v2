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
	title: 'Portfolio',
	description: 'Portfolio of Linda Löttiger',
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
