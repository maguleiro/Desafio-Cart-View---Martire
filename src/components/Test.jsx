const Test = ({ theme }) => {

	return (
		<h1 className={`
			${theme === "light" ? "bg-info text-dark" : "bd-dark text-white"}
			`}
			>
		Test		
		</h1>
	);
};

export default Test;