import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const RecordBuilder = () => {

	const [query, setQuery] = useState<string>('');

	return (
		<>
			<Box>
				<Grid container>
					<Grid item xs={12} md={3}>
						<Stack spacing={2}>
							<FormControl fullWidth>
								<TextField
									id="search"
									label="Supplement Search"
									variant="outlined"
									size="small"
									value={query}
									onChange={e => setQuery(e.target.value)}
								/>
							</FormControl>
							<Button color='info' variant='contained'>Add Custom Suppplement</Button>
							<Stack spacing={2}>

							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} md={9}>
						<Box>
							Report Display
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box></Box>
		</>
	);
};
export default RecordBuilder;
