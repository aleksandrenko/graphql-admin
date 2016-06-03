
import './style.less';
import React from 'react';

const Component = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  // getInitialState() {
  // Can return a initial state data
  // },
  // getDefaultProps() {
  //   // Invoked once and cached when the class is created if that prop is not specified by the parent component.
  // },
  // statics() {
  //   // The statics object allows you to define static methods that can be called on the component class.
  // },
  // componentWillMount() {
  //   // Invoked once, both on the client and server, immediately before the initial rendering occurs.
  // },
  // componentDidMount() {
  //   // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
  // },
  // componentWillReceiveProps() {
  //   // Invoked when a component is receiving new props. This method is not called for the initial render.
  // },
  // shouldComponentUpdate() {
  //   // Invoked before rendering when new props or state are being received.
  //   // This method is not called for the initial render or when forceUpdate is used. Return true/false
  // },
  // componentWillUpdate() {
  //   // Invoked immediately before rendering when new props or state are being received.
  //   // This method is not called for the initial render.
  // },
  // componentDidUpdate() {
  //   // Invoked immediately after the component's updates are flushed to the DOM.
  //   // This method is not called for the initial render.
  // },
  // componentWillUnmount() {
  //   // Invoked immediately before a component is unmounted from the DOM.
  // },

  render() {
    const url = (item) => `/#`;

    console.log(this.props.items);

    const lis = this.props.items.map((item, index) => {
      console.log(item);
      return <li key={index}><a href={url(item)}>{item}</a></li>;
    });

    return (
        <section>
          <ul>{lis}</ul>
        </section>
    );
  }
});

export default Component;
