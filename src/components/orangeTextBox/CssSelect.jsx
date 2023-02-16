import { Select, styled } from "@mui/material";
export const CssSelect = styled(Select)({
  "& label.Mui-focused": {
    color: "#fcae05",
  },

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
