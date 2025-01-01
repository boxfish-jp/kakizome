import { Apper } from "./apper/Apper";
import { Lower } from "./lower/Lower";

export function Ji() {
	return (
		<section className="relative w-full items-center">
			<div className="flex flex-col items-center ">
				<Apper />
				<Lower />
			</div>
			<div
				className="absolute top-5 left-8 h-[650px] w-20 bg-white"
				style={{
					borderTopRightRadius: "90px 800px",
					borderBottomRightRadius: "120px 350px",
				}}
			/>
		</section>
	);
}
