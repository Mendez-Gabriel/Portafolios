import { background, border } from "./Section3.module.css";
import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DataArrayIcon from "@mui/icons-material/DataArray";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import Items from "../../../Components/General/item/Items";
import Buttons from "../../../Components/General/buttons/Buttons";
import BUTTONS from "./Section3.data";

const Section3 = () => {
  return (
    <div className={background} id="Section3">
      <Box mx={2} py={8}>
        <Typography
          color="black"
          variant="h4"
          fontWeight="1000"
          textAlign="center"
        >
          What I Do?
        </Typography>
        <div className={border}></div>
        <Box display="flex" justifyContent="center" flexWrap="wrap" mt={8}>
          <Items
            icon={<CodeIcon color="black" />}
            text={"Language"}
            element={
              <Buttons arrayOfButtons={BUTTONS.Language} color={"success"} />
            }
          />
          <Items
            icon={<DataObjectIcon />}
            text={"Frameworks"}
            element={
              <Buttons arrayOfButtons={BUTTONS.Frameworks} color={"success"} />
            }
          />
          <Items
            icon={<DataArrayIcon />}
            text={"Libraries"}
            element={
              <Buttons arrayOfButtons={BUTTONS.Libraries} color={"success"} />
            }
          />
          <Items
            icon={<DynamicFormIcon />}
            text={"Tools"}
            element={
              <Buttons arrayOfButtons={BUTTONS.Tools} color={"success"} />
            }
          />
        </Box>
      </Box>
    </div>
  );
};

export default Section3;
