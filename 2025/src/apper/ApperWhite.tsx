export function ApperWhite() {
	return (
		<>
			<div className="-top-24 absolute left-12 grid w-full grid-cols-12">
				<div
					className="-rotate-[10deg] col-span-5 col-start-2 h-[125px] bg-white"
					style={{
						borderBottomLeftRadius: "500px 250px",
					}}
				/>
			</div>
			<div className="absolute top-36 left-11 z-10 grid w-full rotate-1 grid-cols-12">
				<div className="col-span- col-start-3 h-[190px] rounded-t-full rounded-br-full bg-white" />
			</div>
			<div className="absolute bottom-16 left-10 grid w-full grid-cols-12">
				<div className="-rotate-6 z-20 col-span-3 col-start-3 h-10 rounded-t-full rounded-b-2xl bg-white" />
			</div>
			<div className="absolute top-28 left-12 grid w-full grid-cols-12">
				<div className="-rotate-6 col-span-4 col-start-3 h-52 rounded-[40px] bg-white" />
			</div>
			<div className="-rotate-6 absolute top-14 left-6 grid w-full grid-cols-12">
				<div
					className="col-span-2 col-start-8 h-60 bg-white "
					style={{
						borderTopLeftRadius: "400px 600px",
						borderBottomLeftRadius: "150px 200px",
					}}
				/>
			</div>
		</>
	);
}
