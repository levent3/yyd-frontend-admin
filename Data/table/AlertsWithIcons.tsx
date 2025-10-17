import { useState } from "react";
import { Alert } from "reactstrap";

const AlertsWithIcons = () => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  return (
    <Alert color="primary" isOpen={visible} toggle={onDismiss} fade>
      <p><strong>Success!</strong> Indicates a successful or positive action.</p>
    </Alert>
  );
};

export default AlertsWithIcons;
