import { TabContext, TabList, TabListProps, TabPanel } from "@mui/lab";
import { Box, Chip, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { CorroisonForm } from "../CorroisonForm";
import { PMultiplierForm } from "../PMultiplierForm";

export function InputForm({
  onSaveClick,
  readOnly,
}: {
  onSaveClick?: (values: unknown) => void;
  readOnly?: boolean;
}): JSX.Element {
  const [tab, setTab] = useState("corroison");

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
            <CorroisonForm onSubmitHook={onSaveClick} readOnly={readOnly} />
          </TabPanel>
          <TabPanel value="p-multiplier">
            <PMultiplierForm onSubmitHook={onSaveClick} readOnly={readOnly} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
