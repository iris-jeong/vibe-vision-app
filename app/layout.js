import "@styles/globals.css";
import dynamic from "next/dynamic";
import { AppProvider } from "@components/AppContext";
import Footer from "@components/Footer";

export const metadata = {
	title: "Vibe Vision",
	description: "Generate your brand color palette and font pairings",
};

const DynamicHeader = dynamic(() => import("@components/Header"), {
	ssr: false,
});

export default function RootLayout({ children }) {
	return (
		<AppProvider>
			<html lang="en">
				<body className="overflow-x-hidden">
					<main className="min-h-screen w-full flex flex-col justify-center items-center">
						<DynamicHeader />
						{children}
						<Footer />
					</main>
				</body>
			</html>
		</AppProvider>
	);
}
