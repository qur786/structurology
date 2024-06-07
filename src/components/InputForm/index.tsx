import { TabContext, TabList, TabListProps, TabPanel } from "@mui/lab";
import { Box, Chip, Tab, Typography } from "@mui/material";
import { useState } from "react";

export function InputForm(): JSX.Element {
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
          <TabPanel value="corroison">Coming Soon...</TabPanel>
          <TabPanel value="p-multiplier">Coming Soon...</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
