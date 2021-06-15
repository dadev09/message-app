import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import Button from './button'
import Api from '../api'

const styles = () => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class MainPanel extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      errorMessages: [],
      warningMessages: [],
      infoMessages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { errorMessages, warningMessages, infoMessages } = this.state
    
    if (message.priority === 1) {
      this.setState({
        errorMessages: [message, ...errorMessages.slice()]
      })
    }

    if (message.priority === 2) {
      this.setState({
        warningMessages: [message, ...warningMessages.slice()]
      })
    }

    if (message.priority === 3) {
      this.setState({
        infoMessages: [message, ...infoMessages.slice()]
      })
    }
  }

  handleStart = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }

  render() {
    const isApiStarted = this.api.isStarted()
    const { classes } = this.props

    return (
      <div>
        <div className={classes.buttons}>
          <Button title={!isApiStarted ? 'Start' : 'Stop'} onClick={this.handleStart} />
          <Button title={'Clear'} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MainPanel)
