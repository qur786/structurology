import { Add, InfoOutlined } from "@mui/icons-material";
import { Typography, TextField, Grid, FormLabel, Button } from "@mui/material";
import { PMultiplierFormNames, PMultiplierSchema } from "./utils";
import { FieldArray, Form, Formik } from "formik";
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
        soilLayers: [],
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
        console.log(errors.soilLayers);
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
                <FieldArray
                  name="soilLayers"
                  render={(arrayHelpers) => (
                    <>
                      <Grid container item xs={12}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            ":hover":
                              values.soilLayers.length === 6
                                ? {
                                    cursor: "not-allowed",
                                  }
                                : {},
                          }}
                          startIcon={<Add />}
                          onClick={() => {
                            if (values.soilLayers.length < 6) {
                              arrayHelpers.push(0);
                            }
                          }}
                        >
                          Add Soil Layer
                        </Button>
                      </Grid>
                      {values.soilLayers.map((_, index) => (
                        <Grid item xs={12} sm={5}>
                          <FormLabel
                            sx={{
                              fontSize: 12,
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            Soil Layer {index + 1}{" "}
                            <InfoOutlined fontSize="small" />
                          </FormLabel>
                          <TextField
                            fullWidth
                            name={`${PMultiplierFormNames.soilLayers}.${index}`}
                            type="number"
                            variant="filled"
                            value={values.soilLayers[index]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={readOnly}
                            error={touched.soilLayers && !!errors.soilLayers}
                            helperText={
                              touched.soilLayers &&
                              Array.isArray(errors.soilLayers)
                                ? errors.soilLayers[index]
                                : ""
                            }
                          />
                        </Grid>
                      ))}
                    </>
                  )}
                />
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
});
