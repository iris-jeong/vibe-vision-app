import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
	title: "Vibe Vision",
	description: "Generate your brand color palette and font pairings",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="overflow-x-hidden">
				<main className="min-h-screen w-full flex flex-col justify-center items-center">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
