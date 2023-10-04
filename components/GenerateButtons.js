import Button from "./Button";

export default function GenerateButtons() {
	const generatePalette = () => {
		console.log("generating palette");
		//Generate a random color palette.
		//Update the app context colors.
	};

	const generateFonts = () => {
		console.log("generating fonts");
	};

	return (
		<div className="red__container w-full flex justify-around md:order-3">
			{["Colors", "Fonts"].map((button) => {
				return (
					<Button
						type={button}
						src="icons/swap-white.svg"
						alt={`Swap ${button}`}
						onClick={
							button === "Colors"
								? generatePalette
								: generateFonts
						}
					/>
				);
			})}
		</div>
	);
}
