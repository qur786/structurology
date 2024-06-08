import { InfoOutlined } from "@mui/icons-material";
import { Typography, TextField, Grid, FormLabel } from "@mui/material";
import { PMultiplierFormNames, PMultiplierSchema } from "./utils";
import { Form, Formik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { downloadJSONFile } from "../utils";

export const PMultiplierForm = forwardRef<
  { submitForm: () => Promise<void> },
  {
    readOnly?: boolean;
  }
>(({ readOnly }, ref) => {
  return (
    <Formik
      initialValues={{
        start: 0,
        end: 0,
        soilLayer1: 0,
        soilLayer2: 0,
        soilLayer3: 0,
        soilLayer4: 0,
        soilLayer5: 0,
        soilLayer6: 0,
      }}
      validationSchema={PMultiplierSchema}
      onSubmit={(values) => {
        const jsonData = JSON.stringify(values, null, 2);
        downloadJSONFile(jsonData);
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
                  P Multiplier
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
                    P Multiplier start <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.start}
                    type="number"
                    variant="filled"
                    value={values.start}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.start && !!errors.start}
                    helperText={
                      touched.start && !!errors.start ? errors.start : ""
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
                    P Multiplier end <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.end}
                    type="number"
                    variant="filled"
                    value={values.end}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.end && !!errors.end}
                    helperText={touched.end && !!errors.end ? errors.end : ""}
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
                    Soil Layer 1 <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.soilLayer1}
                    type="number"
                    variant="filled"
                    value={values.soilLayer1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.soilLayer1 && !!errors.soilLayer1}
                    helperText={
                      touched.soilLayer1 && !!errors.soilLayer1
                        ? errors.soilLayer1
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
                    Soil Layer 2 <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.soilLayer2}
                    type="number"
                    variant="filled"
                    value={values.soilLayer2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.soilLayer2 && !!errors.soilLayer2}
                    helperText={
                      touched.soilLayer2 && !!errors.soilLayer2
                        ? errors.soilLayer2
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
                    Soil Layer 3 <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.soilLayer3}
                    type="number"
                    variant="filled"
                    value={values.soilLayer3}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.soilLayer3 && !!errors.soilLayer3}
                    helperText={
                      touched.soilLayer3 && !!errors.soilLayer3
                        ? errors.soilLayer3
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
                    Soil Layer 4 <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.soilLayer4}
                    type="number"
                    variant="filled"
                    value={values.soilLayer4}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.soilLayer4 && !!errors.soilLayer4}
                    helperText={
                      touched.soilLayer4 && !!errors.soilLayer4
                        ? errors.soilLayer4
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
                    Soil Layer 5 <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.soilLayer5}
                    type="number"
                    variant="filled"
                    value={values.soilLayer5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.soilLayer5 && !!errors.soilLayer5}
                    helperText={
                      touched.soilLayer5 && !!errors.soilLayer5
                        ? errors.soilLayer5
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
                    Soil Layer 6 <InfoOutlined fontSize="small" />
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={PMultiplierFormNames.soilLayer6}
                    type="number"
                    variant="filled"
                    value={values.soilLayer6}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={readOnly}
                    error={touched.soilLayer6 && !!errors.soilLayer6}
                    helperText={
                      touched.soilLayer6 && !!errors.soilLayer6
                        ? errors.soilLayer6
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
