import React from 'react';

class Odpowiedz extends React.Component {
  render() {
    return (
      <div>
        <p>Wartość odpowiedzi: {this.props.value}</p>
      </div>
    );
  }
}

export default Odpowiedz;