import "@styles/illustration.css";
import Image from "next/image";

export default function Illustration() {
	return (
		<aside className="w-full px-6 md:px-0">
			<div class="header">
				<div class="header-buttons button1"></div>
				<div class="header-buttons button2"></div>
				<div class="header-buttons button3"></div>
			</div>
			<div class="screen">
				<div class="sun">
					<div class="sun-outline">
						<div class="sun-circle"></div>
						<div class="eyes"></div>
						<div class="cheeks"></div>
						<div class="smile"></div>
					</div>
				</div>
				{/* .sun */}

				<div class="inner-screen">
					<div class="textbox">
						<div class="textbox-circle circle1"></div>
						<div class="textbox-circle circle2"></div>
						<div class="textbox-circle circle3"></div>
						<div class="textbox-circle circle4"></div>
						<p>Vibe Vision</p>
						<div class="underline"></div>
					</div>
					<div class="color-block"></div>
				</div>
				<div class="panel">
					<div class="colorboxes">
						<div class="colorbox colorbox1"></div>
						<div class="colorbox colorbox2"></div>
					</div>
					{/* .colorboxes */}

					<div class="text-editor">
						<div class="icon-container">
							<Image
								src="icons/capital-a.svg"
								alt="Uppercase letter A"
								width={24}
								height={24}
							/>
						</div>
						<div class="icon-container">
							<div class="icon">
								<Image
									src="icons/align-left.svg"
									alt="Align left"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div class="icon-container">
							<div class="icon">
								<Image
									src="icons/align-center.svg"
									alt="Align center"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div class="icon-container">
							<div class="icon">
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

					<div class="extras">
						<div class="circle extras-circle1"></div>
						<div class="circle extras-circle2"></div>
						<div class="circle extras-circle3"></div>
					</div>
					{/* .extras */}
				</div>
			</div>
			{/* .screen */}
		</aside>
	);
}
