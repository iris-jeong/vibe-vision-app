import Image from "next/image";

export default function FontList() {
	return (
		<div className="absolute bg-[#fafafa] w-[250px] h-[500px] overflow-hidden overflow-y-auto border-2 border-[#bdbdbd] rounded">
			<div className="flex justify-between border-b border-[#bdbdbd] px-3 py-2">
				<span className="font-semibold text-[14px]">Fonts</span>
				<Image
					src="icons/cancel.svg"
					alt="Cancel icon"
					width={20}
					height={20}
				/>
			</div>
			<div className="bg-[#f3f3f3] flex items-center px-3 py-3 border-b border-[#bdbdbd]">
				<Image
					src="icons/search.svg"
					alt="Search icon"
					width={18}
					height={18}
				/>
				<span className="pl-2 text-[13px]">Search fonts</span>
			</div>
			<div className="">
				<div className="bg-slate-50 pl-3 py-[5px]">ABeezee</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Abel</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Abhaya Libre</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Abril Fatface</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Aclonica</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Acme</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Adamina</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Adobe Blank</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Adobe Pro</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Aguafina</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Akaya Kanadaka</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Akronim</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Aksara Bali</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Akshar</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Adamina</div>
				<div className="bg-slate-50 pl-3 py-[5px]">Adobe Blank</div>
			</div>
		</div>
	);
}
