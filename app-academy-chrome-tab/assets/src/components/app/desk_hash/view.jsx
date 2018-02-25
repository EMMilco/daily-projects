import React from 'react';

const className = visible => (
  visible ? 'is-active desk-hash' : 'desk-hash'
);

const dispatchChange = dispatch => e => {
  dispatch(e.target.value);
};

const close = (setHash, hideDeskHash) => e => {
  const input = document.getElementById("input-password");

  setHash(input.value);
  input.value = "";
  hideDeskHash();
};

export default ({ hideDeskHash, visible, setHash }) => (
  <article className={ className(visible) }>
    <span onClick={ hideDeskHash }>×</span>
    <form action="#" onSubmit={ close(setHash, hideDeskHash) }>

      <div className="input">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          id="input-password" />
      </div>

    </form>
  </article>
);
