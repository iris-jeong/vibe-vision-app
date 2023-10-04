import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import Image from "next/image";

export default function GenerateButtons() {
	const { colors } = useContext(AppContext);
	const backgroundColor = colors.primary;

	const handleGeneratePalette = () => {
		//Generate a random color palette.
		//Update the app context colors.
	};

	return (
		<div className="buttons__container w-full flex justify-around md:order-3">
			<div className="button__container">
				<button
					style={{ backgroundColor: backgroundColor }}
					className="px-8 py-5 rounded-md text-white font-semibold flex"
					type="button"
					onClick={handleGeneratePalette}
				>
					Swap
					<Image
						className="mx-2"
						src="icons/swap-white.svg"
						width={24}
						height={24}
					/>
					Colors
				</button>
			</div>
			<div className="green__container">
				<button
					style={{ backgroundColor: backgroundColor }}
					className="px-8 py-5 rounded-md text-white font-semibold flex"
					type="button"
				>
					Swap
					<Image
						className="mx-2"
						src={"icons/swap-white.svg"}
						width={24}
						height={24}
					/>
					Fonts
				</button>
			</div>
		</div>
	);
}
