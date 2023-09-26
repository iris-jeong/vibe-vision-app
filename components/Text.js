import Image from "next/image";
import React, { useEffect } from "react";
import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text({ font, isHeader, defaultValue }) {
	console.log(defaultValue);
	return (
		<div className="yellow__container flex-grow w-full">
			<TextEditor font={font} />
			<TextInput isHeader={isHeader} defaultValue={defaultValue} />
		</div>
	);
}
