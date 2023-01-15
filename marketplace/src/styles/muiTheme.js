import { makeStyles } from '@mui/styles';


// export const sxCompMagnifing = makeStyles({color: "white", marginTop: "100%", marginLeft: "115%", width: "60px", height: "35px"});
export const sxCompMagnifing = {color: "white", marginTop: "100%", marginLeft: "115%", width: "60px", height: "35px"};

export const sxSelectForm = {
        width: "188px",
        height: "39px",
        borderStyle: "none",
        borderRadius: "15px",
        color: "#0F1111",
        background: "#F0F2F2",
        display:"flex",
        flexDirection: "column",
        border: "2px solid #48c9ea",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "none"                        // default
        },
        "&.Mui-focused fieldset": {
                      // focus
          borderRadius: "13px"
        }
      }
    }
export const sxInputLabel = {
    fontSize: "23px",
    marginTop: "-5px",
    fontWeight: "bold",
}
export const sxInputField = {
    "& .MuiOutlinedInput-root": {
        width: "80px",
        height: "33px"
    }
}
export const sxButtonUpdate = {

        height: "30px",
        borderRadius: "10px",
        background: "#FFD814",
        marginLeft: "25px",
        marginTop: "1px",

}

