import { TabContext, TabList, TabListProps, TabPanel } from "@mui/lab";
import { Box, Chip, Tab, Typography } from "@mui/material";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { CorroisonForm } from "../CorroisonForm";
import { PMultiplierForm } from "../PMultiplierForm";

export const InputForm = forwardRef<
  { submit: (values: unknown) => void },
  {
    readOnly?: boolean;
  }
>(({ readOnly }, ref): JSX.Element => {
  const [tab, setTab] = useState("corroison");
  const CorroisonFormRef = useRef<{ submitForm: () => Promise<void> }>(null);
  const PMultiplierFormRef = useRef<{ submitForm: () => Promise<void> }>(null);

  useImperativeHandle(ref, () => ({
    submit: () => {
      if (tab === "corroison") {
        CorroisonFormRef.current?.submitForm();
      } else if (tab === "p-multiplier") {
        PMultiplierFormRef.current?.submitForm();
      }
    },
  }));

  const handleTabChange: TabListProps["onChange"] = (_event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <Typography variant="caption" sx={{ opacity: 0.7 }}>
        All fields are required
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleTabChange} textColor="primary">
              <Tab
                icon={
                  <Chip
                    label="Corroison"
                    color="primary"
                    variant="outlined"
                    sx={{
                      backgroundColor: tab === "corroison" ? "#d5e9f2" : "",
                    }}
                  />
                }
                value="corroison"
              />
              <Tab
                icon={
                  <Chip
                    label="P Multiplier"
                    color="primary"
                    variant="outlined"
                    sx={{
                      backgroundColor: tab === "p-multiplier" ? "#d5e9f2" : "",
                    }}
                  />
                }
                value="p-multiplier"
              />
            </TabList>
          </Box>
          <TabPanel value="corroison">
            <CorroisonForm ref={CorroisonFormRef} readOnly={readOnly} />
          </TabPanel>
          <TabPanel value="p-multiplier">
            <PMultiplierForm ref={PMultiplierFormRef} readOnly={readOnly} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
});
