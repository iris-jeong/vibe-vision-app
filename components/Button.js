import Image from "next/image";

export default function Button({ style, type, src, alt, onClick }) {
	return (
		<div className="orange__container">
			<button
				style={style}
				className="px-8 py-5 rounded-md font-semibold flex flex-wrap"
				type="button"
				onClick={onClick}
			>
				Swap
				<Image
					className="mx-2"
					src={src}
					alt={alt}
					width={24}
					height={24}
				/>
				{type}
			</button>
		</div>
	);
}
