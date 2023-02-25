import { Container } from "@mui/material";
import CheckAuthButton from "../../components/check-auth";
import LoginButton from "../../components/login-button";
import RecordBuilder from "../../features/add-record/record-builder";

export const ReportBuilder = () => {
	return (
		<Container>
			<LoginButton/>
			<CheckAuthButton/>
			<RecordBuilder />
		</Container>
	);
};
export default ReportBuilder;