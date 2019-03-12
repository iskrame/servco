import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
class AlertDialog extends React.Component {
  // class AlertDialog(props) {
  //   state = {
  //     open: false
  //   };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span style={{ color: "red" }}>Acceso denegado</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <strong>
                <span style={{ color: "black" }} font-bold="true">
                  {this.props.errors.message}
                </span>
              </strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.props.onClose}
              color="white"
              style={{
                background: "#941a1f",
                color: "white",
                textTransform: "none"
              }}
              autoFocus
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
