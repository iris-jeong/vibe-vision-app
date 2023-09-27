export default function GenerateButtons() {
	return (
		<div className="buttons__container w-full flex justify-around md:order-3">
			<div className="button__container">
				<button
					className="bg-[#8b6ce0] px-8 py-4 rounded-md text-white"
					type="button"
				>
					Swap Colors
				</button>
			</div>
			<div className="green__container">
				<button
					className="bg-[#8b6ce0] px-8 py-4 rounded-md text-white"
					type="button"
				>
					Swap Fonts
				</button>
			</div>
		</div>
	);
}
