import "../styles/globals.css";

			export const metadata = {
				title: "Off Code",
				description: "Developed by GOAT Team",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
        );
		  }
