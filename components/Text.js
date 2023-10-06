import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({ editor }) {
	return (
		<div className="yellow__container w-full mb-0">
			<TextEditor editor={editor} />
			<TextInput editor={editor} />
		</div>
	);
}
