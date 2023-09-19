import Link from "next/link";

export default function Header() {
	return (
		<nav className="w-full h-24 flex items-center justify-between p-6 fixed top-0">
			<Link className="text-lg font-medium" href="/">
				Vibe Vision
			</Link>
		</nav>
	);
}
