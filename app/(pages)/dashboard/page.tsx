import getCurrentUser from "@/app/actions/getCurrentUser";
import getTasks from "@/app/actions/getTasks";
import Dashboard from "@/app/components/Dashboard/Dashboard";

const Page = async () => {
	let tasks = await getTasks();
	const currentUser = await getCurrentUser();

	return (
		<>
			<Dashboard tasks={tasks} />
		</>
	);
};

export default Page;
