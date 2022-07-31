import React from "react";
import Alert from "react-bootstrap/Alert"

const styles={
    alert:{
        marginTop: "15px",
    }
}


function AlertCustom(props) {
    return(
        <Alert variant={props.variant} style={styles.alert}>
            {props.text}
        </Alert>
    );
}

export default AlertCustom;