import React from 'react';

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onClick();
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
}

export default Form;