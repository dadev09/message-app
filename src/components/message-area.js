import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MessageList from "./message-list"

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: 'center',
  },
});

export default function MessageArea({
  errorMessages,
  warningMessages,
  infoMessages,
  removeMessage,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MessageList
        messages={errorMessages}
        title={'Error Type 1'}
        type={1}
        backgroundColor={'#F56236'}
        removeMessage={removeMessage}
      />
      <MessageList
        messages={warningMessages}
        title={'Warning Type 2'}
        type={1}
        backgroundColor={'#FCE788'}
        removeMessage={removeMessage}
      />
      <MessageList
        messages={infoMessages}
        title={'Info Type 3'}
        type={1}
        backgroundColor={'#88FCA3'}
        removeMessage={removeMessage}
      />
    </div>
  )
}
