import Image from "next/image";
import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({
	font,
	isHeader,
	defaultValue,
	setIsNotificationShown,
	setNotification,
	isFontListShown,
	setIsFontListShown,
}) {
	return (
		<div className="yellow__container w-full mb-0">
			<TextEditor
				font={font}
				setIsNotificationShown={setIsNotificationShown}
				setNotification={setNotification}
				isFontListShown={isFontListShown}
				setIsFontListShown={setIsFontListShown}
			/>
			<TextInput isHeader={isHeader} defaultValue={defaultValue} />
		</div>
	);
}
