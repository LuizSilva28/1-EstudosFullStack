import Profile from "./components/profile";

export default function App(){
  return (
		<div className="app">
			<Profile
				avatar="https://i.pinimg.com/564x/df/8c/ae/df8cae7eed9ef816cc517c9b04de58eb.jpg"
				name="John Doe"
				bio="Full-stack javascript developer at Acme Inc."
				email="john,doe@email.com"
				phone="+5511987654321"
				githubUrl="https://github.com"
				linkedinUrl="https://linkedin.com"
				twitterUrl="https://twitter.com"
			/>
		</div>
  );
}