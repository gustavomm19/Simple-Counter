import React from "react";

//include images into your bundle
import SecondsCounter from "./seconds-counter.jsx";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = React.useState(0);
	React.useEffect(() => {
		const interval = setInterval(() => {
		  setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	  }, []);
	return (
		<div className="text-center">
			<SecondsCounter seconds={seconds/100000} />
		</div>
	);
};

export default Home;
