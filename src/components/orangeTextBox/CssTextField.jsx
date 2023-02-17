import { styled, TextField } from "@mui/material";
export const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    border: "1px solid black",
    borderTop: "2px solid black",
    padding: "0 !important",
    borderRadius: "5px",
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: "bold",

    "&.Mui-focused fieldset": {
      border: "1px solid black",
      borderTop: "2px solid black",
    },
  },
  "& .MuiInputBase-input": {
    padding: "3%",
  },
});
