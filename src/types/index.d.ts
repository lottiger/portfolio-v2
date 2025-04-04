declare module 'react-anchor-link-smooth-scroll' {
	const AnchorLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
	export default AnchorLink;
}

type LinkProps = {
	page: string;
	selectedPage: string;
	setSelectedPage: (value: string) => void;
};

type DotGroupProps = {
	selectedPage: string;
	setSelectedPage: (page: string) => void;
};
