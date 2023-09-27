import "@styles/illustration.css";
import Image from "next/image";

export default function Illustration() {
	return (
		<aside className="w-full px-6 md:px-0">
			<div className="header">
				<div className="header-buttons button1"></div>
				<div className="header-buttons button2"></div>
				<div className="header-buttons button3"></div>
			</div>
			<div className="screen">
				<div className="sun">
					<div className="sun-outline">
						<div className="sun-circle"></div>
						<div className="eyes"></div>
						<div className="cheeks"></div>
						<div className="smile"></div>
					</div>
				</div>
				{/* .sun */}

				<div className="inner-screen">
					<div className="textbox">
						<div className="textbox-circle circle1"></div>
						<div className="textbox-circle circle2"></div>
						<div className="textbox-circle circle3"></div>
						<div className="textbox-circle circle4"></div>
						<p>Vibe Vision</p>
						<div className="underline"></div>
					</div>
					<div className="color-block"></div>
				</div>
				<div className="panel">
					<div className="colorboxes">
						<div className="colorbox colorbox1"></div>
						<div className="colorbox colorbox2"></div>
					</div>
					{/* .colorboxes */}

					<div className="text-editor">
						<div className="icon-container">
							<Image
								src="icons/capital-a.svg"
								alt="Uppercase letter A"
								width={24}
								height={24}
							/>
						</div>
						<div className="icon-container">
							<div className="icon">
								<Image
									src="icons/align-left.svg"
									alt="Align left"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div className="icon-container">
							<div className="icon">
								<Image
									src="icons/align-center.svg"
									alt="Align center"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div className="icon-container">
							<div className="icon">
								<Image
									src="icons/align-right.svg"
									alt="Align right"
									width={24}
									height={24}
								/>
							</div>
						</div>
					</div>
					{/* .text-editor */}

					<div className="extras">
						<div className="circle extras-circle1"></div>
						<div className="circle extras-circle2"></div>
						<div className="circle extras-circle3"></div>
					</div>
					{/* .extras */}
				</div>
			</div>
			{/* .screen */}
		</aside>
	);
}
