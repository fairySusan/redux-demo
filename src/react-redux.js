import React, { Component } from 'react';
import PropTypes from  'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor(props) {
      super(props);
      this.state = {allProps: {}}
    }
    componentWillMount() {
      const { store } = this.context;
      this._updateProps();
      store.subscribe(() => {
        this._updateProps()
      })
    }

    _updateProps = () => {
      const {store} = this.context;
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {};
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {}
      this.setState({
        allProps: { // 整合普通的props和从state生成的props
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render() {
      return (
        <WrappedComponent {...this.state.allProps}></WrappedComponent>
      )
    }
  }

  return Connect
}


export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('jjj', this.props.store)
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}