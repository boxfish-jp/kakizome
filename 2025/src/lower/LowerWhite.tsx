export function LowerWhite() {
	return (
		<>
			<div className="-top-5 -rotate-4 absolute left-10 grid w-full grid-cols-12">
				<div
					className="col-span-5 col-start-3 h-32 bg-white "
					style={{
						borderRadius: "0% 47% 1% 0% / 0% 36% 0% 0% ",
					}}
				/>
			</div>
			<div className="absolute top-0 left-10 grid w-full grid-cols-12">
				<div
					className="col-span-6 col-start-3 h-72 bg-white "
					style={{
						borderBottomLeftRadius: "25%",
						borderBottomRightRadius: "50%",
					}}
				/>
			</div>
			<div className="-top-24 absolute left-0 grid w-full grid-cols-12">
				<div className="-rotate-[40deg] col-span-2 col-start-11 h-[450px] bg-white" />
			</div>
		</>
	);
}
