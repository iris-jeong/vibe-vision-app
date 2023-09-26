import Image from "next/image";
import React, { useEffect } from "react";
import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({
	font,
	isHeader,
	defaultValue,
	setIsNotificationShown,
	setNotification,
}) {
	return (
		<div className="yellow__container flex-grow w-full mb-0">
			<TextEditor
				font={font}
				setIsNotificationShown={setIsNotificationShown}
				setNotification={setNotification}
			/>
			<TextInput isHeader={isHeader} defaultValue={defaultValue} />
		</div>
	);
}
