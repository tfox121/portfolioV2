import React from 'react';
import { Popup } from 'semantic-ui-react';

const IconPopup = (props) => {
  const { name, classN } = props;
  return (
    <Popup
      trigger={<i className={classN} />}
      content={name}
      basic
    />
  );
};

export default IconPopup;
