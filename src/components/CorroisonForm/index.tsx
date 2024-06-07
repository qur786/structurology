import { InfoOutlined } from "@mui/icons-material";
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  Grid,
  FormLabel,
} from "@mui/material";
import { CorroisonFormNames, CorroisonSchema } from "./utils";
import { Form, Formik } from "formik";
import { forwardRef, useImperativeHandle } from "react";

export const CorroisonForm = forwardRef<
  { submitForm: () => Promise<void> },
  {
    readOnly?: boolean;
  }
>(({ readOnly }, ref): JSX.Element => {
  return (
    <Formik
      initialValues={{
        considerMethod: "Aggressive Romanoff Method",
        resistivity: 900,
        designLife: 30,
        zincCoating: 3,
      }}
      validationSchema={CorroisonSchema}
      onSubmit={(values) => {
        const jsonData = JSON.stringify(values, null, 2);
        const jsonBlob = new Blob([jsonData], { type: "application/json" });

        const url = URL.createObjectURL(jsonBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.json";

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }}
    >
      {function Component({
        submitForm,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) {
        useImperativeHandle(ref, () => ({
          submitForm,
        }));
        return (
          <Form>
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
                    value={values.considerMethod}
                    name={CorroisonFormNames.considerMethod}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.considerMethod && !!errors.considerMethod}
                    readOnly={readOnly}
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
                  <TextField
                    fullWidth
                    name={CorroisonFormNames.resistivity}
                    type="number"
                    variant="filled"
                    value={values.resistivity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.resistivity && !!errors.resistivity}
                    helperText={
                      touched.resistivity && !!errors.resistivity
                        ? errors.resistivity
                        : ""
                    }
                  />
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
                  <TextField
                    fullWidth
                    name={CorroisonFormNames.designLife}
                    type="number"
                    variant="filled"
                    value={values.designLife}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.designLife && !!errors.designLife}
                    helperText={
                      touched.designLife && !!errors.designLife
                        ? errors.designLife
                        : ""
                    }
                  />
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
                  <TextField
                    fullWidth
                    name={CorroisonFormNames.zincCoating}
                    type="number"
                    variant="filled"
                    value={values.zincCoating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.zincCoating && !!errors.zincCoating}
                    helperText={
                      touched.zincCoating && !!errors.zincCoating
                        ? errors.zincCoating
                        : ""
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
});
