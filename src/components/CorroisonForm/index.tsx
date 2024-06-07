import { InfoOutlined } from "@mui/icons-material";
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  Grid,
  FormLabel,
} from "@mui/material";

export function CorroisonForm(): JSX.Element {
  return (
    <Grid container gap={2}>
      <Grid item>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Corrosion Details
        </Typography>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={12} sm={5}>
          <FormLabel
            sx={{
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            Consider Method <InfoOutlined fontSize="small" />
          </FormLabel>
          <Select
            fullWidth
            variant="filled"
            value="Aggressive Romanoff Method"
            displayEmpty
          >
            <MenuItem value="Aggressive Romanoff Method">
              Aggressive Romanoff Method
            </MenuItem>
            <MenuItem value="Method 2">Method 2</MenuItem>
            <MenuItem value="Method 3">Method 3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormLabel
            sx={{
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            Resistivity (ohm-cm) <InfoOutlined fontSize="small" />
          </FormLabel>
          <TextField fullWidth type="number" variant="filled" value={900} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormLabel
            sx={{
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            Design Life (years) <InfoOutlined fontSize="small" />
          </FormLabel>
          <TextField fullWidth type="number" variant="filled" value={30} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormLabel
            sx={{
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            Zinc Coating (mils) <InfoOutlined fontSize="small" />
          </FormLabel>
          <TextField fullWidth type="number" variant="filled" value={3} />
        </Grid>
      </Grid>
    </Grid>
  );
}
