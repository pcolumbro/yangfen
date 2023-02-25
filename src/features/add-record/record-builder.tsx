import { Box, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

const RecordBuilder = () => {

	const [query, setQuery] = useState<string>('');

	return(
		<Box>
			<FormControl>
				<InputLabel></InputLabel>
				<TextField
					variant="outlined"
					size="small"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</FormControl>
		</Box>			
	);
};
export default RecordBuilder;
