import Image from 'next/image';

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/linda-l%C3%B6ttiger-678867223/"
				target="_blank"
				rel="noreferrer"
			>
				<Image
					alt="linkedin-link"
					src="/linkedin.png"
					width={20}
					height={20}
				/>
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://github.com/lottiger"
				target="_blank"
				rel="noreferrer"
			>
				<Image
					alt="github-link"
					src="/githubIcon.webp"
					width={20}
					height={20}
				/>
			</a>
		</div>
	);
};

export default SocialMediaIcons;
