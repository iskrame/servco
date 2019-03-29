import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {clientLenguaje} from "../../translate/clientTranslate";
class AlertDialog extends React.Component {
  // class AlertDialog(props) {
  //   state = {
  //     open: false
  //   };

  render() {
    const leng= clientLenguaje();
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span style={{ color: "red" }}>{leng.accessDenied}</span>
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
              {leng.close}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
