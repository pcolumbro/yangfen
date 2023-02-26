import { Container, Stack } from "@mui/material";
import CheckAuthButton from "../../components/check-auth";
import LoginButton from "../../components/login-button";
import LogoutButton from "../../components/logout-button";
import RecordBuilder from "../../features/add-record/record-builder";

export const ReportBuilder = () => {
	return (
		<Container>
			<Stack direction="row" spacing={2}>
				<LoginButton/>
				<LogoutButton />
				<CheckAuthButton/>
			</Stack>
			<RecordBuilder />
		</Container>
	);
};
export default ReportBuilder;