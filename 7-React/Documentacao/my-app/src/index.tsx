import Profile from "./components/Profile";

export default function Gallery() {
	return (
		<section>
			<h1>Cientistas incríveis</h1>
			<div className='flex gap-1'>
				<Profile />
				<Profile />
				<Profile />
			</div>
		</section>
	);
}