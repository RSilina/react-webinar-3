import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {cn as bem} from "@bem-react/classname";

function Head({title, button}) {

  const cn = bem("Head")

  return (
    <div className={cn()}>
      <h1>{title}</h1>
      <div className={cn('button-container')}>
        {button}
      </div>
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
  button: PropTypes.node
};

export default React.memo(Head);
