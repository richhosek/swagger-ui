import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Iterable } from "immutable"

export default class OperationSummaryMethod extends PureComponent {

  static propTypes = {
    operationProps: PropTypes.instanceOf(Iterable).isRequired,
    method: PropTypes.string.isRequired,
  }

  static defaultProps = {
    operationProps: null,
  }
  render() {

    let {
      method,
    } = this.props

    // change the color of the method span by translating method to badgeType
    let badgeType = "default"
    switch(method) {
        case "put":
            badgeType = "warning"
            break
        case "del":
        case "delete":
            badgeType = "error"
            break
        case "get":
            badgeType = "success"
            break
        case "post":
            badgeType = "info"
            break
    }

    return (
      <span className={`badge badge-sm badge-ol badge-${badgeType}`}>{method.toUpperCase()}</span>
    )
  }
}
