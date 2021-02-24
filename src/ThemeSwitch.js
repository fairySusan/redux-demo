import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux';
import { themeAction } from './store/action/theme'

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
      // 这种方法的更新 跟 this.setState((state) => ({count: state.count + 1})) 一样的效果
      // this.state.count++;
      // this.setState({count: this.state.count});
      // console.log(this.state.count); 

      this.setState((state) => ({count: state.count + 1}))
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}
        >Red</button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  themeColor: state.themeColor
});

const mapDispatchToProps = (dispatch) => ({
  onSwitchColor: (color) => {
    dispatch(themeAction(color))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch)