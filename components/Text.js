import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({ editor }) {
	return (
		<div className="yellow__container w-full mt-2 mb-0 px-5">
			<TextEditor editor={editor} />
			<TextInput editor={editor} />
		</div>
	);
}
