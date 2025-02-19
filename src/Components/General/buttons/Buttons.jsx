import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Buttons = ({ arrayOfButtons, color }) => {
  return (
    <>
      {arrayOfButtons.map((button) => (
        <Button
          key={button.id}
          size="small"
          color={color}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {button.text}
        </Button>
      ))}
    </>
  );
};

Buttons.propTypes = {
  arrayOfButtons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  color: PropTypes.string
};

export default Buttons;
