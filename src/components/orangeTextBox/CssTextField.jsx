import { styled, TextField } from "@mui/material";
export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fcae05",
  },
  "& .css-1gpdw0k-MuiInputBase-root-MuiFilledInput-root::after": {
    border: "2px solid #F0B125",
  },
  "& .MuiOutlinedInput-root": {
    
    border:"1px solid black",
    borderTop:"2px solid black",
    padding:"0 !important",
    borderRadius:"8px",
    

    "&.Mui-focused fieldset": {
      // borderColor: "#F0B125",
      border:"1px solid black",
      borderTop:"2px solid black",
    },
  },
  "& .MuiInputBase-input":{
    padding:"3%",
  }
});
