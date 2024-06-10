import { Add, InfoOutlined } from "@mui/icons-material";
import { Typography, TextField, Grid, FormLabel, Button } from "@mui/material";
import { PMultiplierFormNames, PMultipliersSchema } from "./utils";
import { FieldArray, Form, Formik } from "formik";
import { Fragment, forwardRef, useImperativeHandle } from "react";
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
        input: [
          {
            start: 0,
            end: 0,
            soilLayer: 0,
          },
        ],
      }}
      validationSchema={PMultipliersSchema}
      onSubmit={(values) => {
        const jsonData = JSON.stringify(values, null, 2);
        downloadJSONFile(jsonData);
      }}
    >
      {function Component({ submitForm, values, handleChange, handleBlur }) {
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
              <Grid container item spacing={4}>
                <FieldArray
                  name="input"
                  render={(arrayHelpers) => (
                    <>
                      {values.input.map((_, index) => (
                        <Fragment key={index}>
                          <Grid item xs={12} alignItems="center">
                            <Typography textAlign="center">
                              Soil Layer {index + 1}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormLabel
                              sx={{
                                fontSize: 12,
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              P Multiplier start{" "}
                              <InfoOutlined fontSize="small" />
                            </FormLabel>
                            <TextField
                              fullWidth
                              name={`input.${index}.${PMultiplierFormNames.start}`}
                              type="number"
                              variant="filled"
                              value={values.input[index].start}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={readOnly}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
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
                              name={`input.${index}.${PMultiplierFormNames.end}`}
                              type="number"
                              variant="filled"
                              value={values.input[index].end}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={readOnly}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormLabel
                              sx={{
                                fontSize: 12,
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              Soil Layer <InfoOutlined fontSize="small" />
                            </FormLabel>
                            <TextField
                              fullWidth
                              name={`input.${index}.${PMultiplierFormNames.soilLayer}`}
                              type="number"
                              variant="filled"
                              value={values.input[index].soilLayer}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={readOnly}
                            />
                          </Grid>
                        </Fragment>
                      ))}
                      <Grid container item xs={12}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            ":hover":
                              values.input.length === 6
                                ? {
                                    cursor: "not-allowed",
                                  }
                                : {},
                          }}
                          startIcon={<Add />}
                          onClick={() => {
                            if (values.input.length < 6) {
                              arrayHelpers.push({
                                start: 0,
                                end: 0,
                                soilLayer: 0,
                              });
                            }
                          }}
                        >
                          Add Soil Layer
                        </Button>
                      </Grid>
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
