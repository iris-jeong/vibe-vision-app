import Image from "next/image";

export default function TextEditor({ font }) {
	return (
		<div className="green__container flex">
			<div className="blue__container text-sm w-fit pl-10 pr-3">
				{font}
			</div>
			<div className="flex hidden">
				<span className="px-1 md:px-2 cursor-pointer">
					<Image
						src="icons/unlocked.svg"
						alt="Lock icon"
						width={24}
						height={24}
					/>
				</span>
				<span className="mx-1 d:px-2 cursor-pointer">
					<Image
						src="icons/capital-a.svg"
						alt="Font icon"
						width={25}
						height={25}
					/>
				</span>
			</div>
		</div>
	);
}
