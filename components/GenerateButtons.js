import { useContext } from "react";
import { AppContext } from "@components/AppContext";

export default function GenerateButtons() {
	const { colors } = useContext(AppContext);
	const backgroundColor = colors[0];

	return (
		<div className="buttons__container w-full flex justify-around md:order-3">
			<div className="button__container">
				<button
					style={{ backgroundColor: backgroundColor }}
					className="px-8 py-4 rounded-md text-white"
					type="button"
				>
					Swap Colors
				</button>
			</div>
			<div className="green__container">
				<button
					style={{ backgroundColor: backgroundColor }}
					className="px-8 py-4 rounded-md text-white"
					type="button"
				>
					Swap Fonts
				</button>
			</div>
		</div>
	);
}
