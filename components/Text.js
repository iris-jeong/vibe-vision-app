import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({
	fonts,
	value,
	fontSize,
	fontWeight,
	lineHeight,
	isHeader,
	editorId,
}) {
	return (
		<div className="yellow__container w-full mt-2 mb-0 px-5">
			<TextEditor editorId={editorId} />
			<TextInput
				defaultValue={value}
				fontSize={fontSize}
				fontWeight={fontWeight}
				lineHeight={lineHeight}
				isHeader={isHeader}
				editorId={editorId}
			/>
		</div>
	);
}
