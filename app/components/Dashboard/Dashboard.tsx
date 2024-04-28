import Item from "./Item";
import getTasks from "@/app/actions/getTasks";

const Dashboard = ({ tasks }: { tasks: any }) => {
	if (tasks.length == 0)
		return (
			<div className="min-h-screen flex items-center justify-center flex-col">
				<h1 className="text-white text-[5rem] jura translate-y-[-5rem]">
					No tasks yet.
				</h1>
			</div>
		);

	return (
		<div className="min-h-screen pb-20 xl:pb-10">
			<div className="w-[95vw] xl:w-[90vw] mx-auto p-4 xl:p-8 rounded-xl bg-black shadow-xl mt-28">
				{tasks.map((task: any) => (
					<Item task={task} key={task.id} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
