import React from "react"
import { Typography } from "@material-ui/core"

const component = props => {
  return (
    <Typography
      style={{
        margin: 0
      }}
      variant="h5"
    >
      {props.children}
    </Typography>
  )
}

export default component
