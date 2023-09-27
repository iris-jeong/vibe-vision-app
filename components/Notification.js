import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import Image from "next/image";

export default function Notification() {
	const { notification, isNotificationShown } = useContext(AppContext);

	const getNotificationText = (type) => {
		if (type === "copy") {
			return "HEX color copied!";
		} else if (type === "lock") {
			return "Color locked!";
		}
	};

	return (
		<div
			className={`bg-[#00BB51] w-fit py-4 px-6 fixed z-20 flex justify-center items-center rounded text-white ease-in-out duration-300 ${
				isNotificationShown
					? "animate-slide-in-right transform translate-x-[-50%] inset-x-1/2 bottom-[50px] opacity-100"
					: "animate-slide-out-right transform translate-x-[-50%] inset-x-1/2 bottom-[-50px] opacity-0"
			}`}
		>
			<Image
				width={24}
				height={24}
				src="icons/approve.svg"
				alt="Success check mark icon"
			/>
			<div className="ml-2 whitespace-nowrap">
				{getNotificationText(notification)}
			</div>
		</div>
	);
}
