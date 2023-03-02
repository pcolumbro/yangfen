import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import CheckAuthButton from "../../components/check-auth";
import LoginButton from "../../components/login-button";
import LogoutButton from "../../components/logout-button";
import RecordBuilder from "../../features/add-record/record-builder";

export const ReportBuilder = () => {
	return (
		<Container>
			<Stack style={{ marginBottom: "30px" }} direction="row" spacing={2}>
				<LoginButton />
				<LogoutButton />
				<CheckAuthButton />
				<Link to="/profile">Profile</Link>
			</Stack>
			{/* <RecordBuilder /> */}
		</Container>
	);
};
export default ReportBuilder;