import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: '0 5px',
  },
  message: {
    height: 40,
    padding: 20,
    margin: '5px 0',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    display: 'flex',
    right: 10,
    cursor: 'pointer',

    '&:hover': {
      fontWeight: 'bold',
    }
  }
});

export default function MessageList({
  messages,
  title,
  type,
  backgroundColor,
  removeMessage,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>{title}</h2>
      <div>{`Count ${messages.length}`}</div>
      {messages.map((message, index) => (
        <div
          key={index}
          className={classes.message}
          style={{backgroundColor: backgroundColor}}
        >
          {message.message}
          <span
            className={classes.button}
            onClick={() => removeMessage(type, messages, index)}
          >
            Clear
          </span>
        </div>
      ))}
    </div>
  )
}
