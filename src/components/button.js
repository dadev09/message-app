import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 100,
    height: 50,
    margin: 5,
    backgroundColor: '#3db8cc',

    '&:hover': {
      backgroundColor: '#43d5ec',
    }
  },
});

export default function BasicButton({ title, onClick }) {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained" onClick={onClick}>
      {title}
    </Button>
  )
}
