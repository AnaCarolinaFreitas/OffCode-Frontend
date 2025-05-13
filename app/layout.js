import "../styles/globals.css";
import Header from "@/components/Header";

			export const metadata = {
				title: "Off Code",
				description: "Developed by GOAT Team",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>
							<Header/>
							{children}
						</body>
					</html>
        );
		  }
