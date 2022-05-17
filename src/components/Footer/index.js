import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href=""
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href=""
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href=""
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/stack-overflow.png")}
						alt="Stack-OverFlow"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;