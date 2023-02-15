import { Select, styled } from "@mui/material";
export const CssSelect = styled(Select)({
  "& label.Mui-focused": {
    color: "#fcae05",
  },
  //   "& .css-1gpdw0k-MuiInputBase-root-MuiFilledInput-root::after": {
  //     borderBottom: "2px solid #F0B125",
  //   },

  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "#F0B125",
  // },

  "& .MuiOutlinedInput-root": {
    // "& fieldset": {
    //   borderColor: "#F0B125",
    // },
    "&:hover fieldset": {
      borderColor: "#F0B125",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F0B125",
    },
  },
});
