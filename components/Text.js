import Image from "next/image";
import React, { useEffect } from "react";
import TextEditor from "./TextEditor";
import TextInput from "./TextInput";

export default function Text() {
	return (
		<div className="orange__container w-full 1028px:w-3/5 flex order-2 1028px:order-1">
			<div className="yellow__container flex-grow w-full">
				<TextEditor font="Montserrat" />
				<TextInput
					isHeader={true}
					defaultValue="Curated colors and paired fonts in context."
				/>
				{/* */}
				<TextEditor font="Arial" />
				<TextInput
					isHeader={false}
					defaultValue="Ever scratched your head trying to pick the perfect colors and fonts for your project? Vibe vision generates combinations for you and updates the site in real-time to show you what it would look like in the real world. Get help generating your color palette and font pairing by chatting with the AI who can help you find what you’re looking for. P.S. All the text in this section is editable so feel free to put your own copy in here."
				/>
			</div>
		</div>
	);
}
