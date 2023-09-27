import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({
	font,
	value,
	fontSize,
	fontWeight,
	lineHeight,
}) {
	return (
		<div className="yellow__container w-full mt-2 mb-0">
			<TextEditor font={font} />
			<TextInput
				defaultValue={value}
				fontSize={fontSize}
				fontWeight={fontWeight}
				lineHeight={lineHeight}
			/>
		</div>
	);
}
