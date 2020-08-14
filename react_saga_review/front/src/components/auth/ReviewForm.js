import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [setValue] = React.useState("Controlled");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
      <button>버튼</button>
      <button>버튼2</button>
    </form>
  );
}
