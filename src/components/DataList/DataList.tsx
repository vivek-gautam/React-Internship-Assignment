import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const depatments = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

type checkSubaray = boolean[];
const checkedSubArray1: boolean[] = new Array(
  depatments[0].sub_departments.length
).fill(false);
const checkedSubArray2: boolean[] = new Array(
  depatments[1].sub_departments.length
).fill(false);
const checkedSubArrays: checkSubaray[] = [checkedSubArray1, checkedSubArray2];

function DataList() {
  const [expanded, setExpanded] = useState([false, false]);
  const [checkedD, setCheckedD] = useState<boolean[]>(
    new Array(depatments.length).fill(false)
  );
  const [checkedSub, setCheckedSub] =
    useState<checkSubaray[]>(checkedSubArrays);

  const handlecheckD = (index: number) => {
    if (checkedD[index] == true) {
      let count = 0;
      for (let i = 0; i < checkedSub[index].length; ++i) {
        if (checkedSub[index][i] == true) {
          ++count;
        }
      }
      if (count == checkedSub[index].length) {
        const newArrayT = [...checkedSub];
        newArrayT[index] = checkedSub[index].map((checkSub) => {
          if (checkSub == true) {
            checkSub = false;
          }
          return checkSub;
        });
        setCheckedSub(newArrayT);
      }
    } else {
      const newArray = [...checkedSub];
      newArray[index] = checkedSub[index].map((checkSub) => {
        if (checkSub == false) {
          checkSub = true;
        }
        return checkSub;
      });
      setCheckedSub(newArray);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "4%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "400",marginBottom:'20px' }}>
        Component 2
      </Typography>
      {depatments.map((depObj, index) => {
        const handleExpand = () => {
          const newArray = [...expanded];
          newArray[index] = !newArray[index];
          setExpanded(newArray);
        };

        return (
          <Accordion
            expanded={expanded[index]}
            elevation={0}
            disableGutters={true}
            sx={{ width: "40%",  paddingBottom: "10px",'&:before': {
              display: 'none',
          },backgroundColor:'#f8f8f8'}}
            key={Date.now() + index}
          >
            <AccordionSummary
              expandIcon={
                expanded[index] ? (
                  <RemoveIcon onClick={handleExpand} />
                ) : (
                  <AddIcon onClick={handleExpand} />
                )
              }
              aria-controls="accordion-content"
              id="accordion-header"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox
                checked={checkedD[index]}
                onClick={() => {
                  const newArray = [...checkedD];
                  newArray[index] = !checkedD[index];
                  setCheckedD(newArray);
                  handlecheckD(index);
                }}
              />
              <Typography sx={{ marginTop: "8px" }}>
                {depObj.department}
              </Typography>
            </AccordionSummary>
            {depObj.sub_departments.map((depSub, i) => {
              return (
                <AccordionDetails
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop:0,
                    padding:0,
                    marginLeft: "10%",
                  }}
                  key={Date.now() + i}
                >
                  <Checkbox
                    checked={checkedSub[index][i]}
                    onClick={() => {
                      const newArray = [...checkedSub];
                      newArray[index][i] = !checkedSub[index][i];
                      setCheckedSub(newArray);
                      let count = 0;
                      for (let k = 0; k < newArray[index].length; ++k) {
                        if (newArray[index][k] == true) {
                          ++count;
                        }
                      }
                      if (count == newArray[index].length) {
                        const newArray = [...checkedD];
                        newArray[index] = true;
                        setCheckedD(newArray);
                      } else {
                        const newArray = [...checkedD];
                        newArray[index] = false;
                        setCheckedD(newArray);
                      }
                    }}
                  />
                  <Typography>{depSub}</Typography>
                </AccordionDetails>
              );
            })}
          </Accordion>
        );
      })}
    </Box>
  );
}

export default DataList;
