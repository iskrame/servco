import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {clientLenguaje} from "../../translate/clientTranslate";

function RecoverPassword(props) {
  const leng = clientLenguaje(0);
  return (
    <main>
      <CssBaseline />
      <Link
        onClick={props.onClick}
        variant="body1"
        style={{ color: "#1e305f", cursor: "pointer" }}
      >
        {leng.recoverPassword}
      </Link>
      <Dialog
        open={props.show}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form onSubmit={props.onSubmitEmail}>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="recoverEmail">
                  {leng.enterEmail}
                </InputLabel>
                <Input
                  id="recoverEmail"
                  name="recoverEmail"
                  autoComplete="recoverEmail"
                  autoFocus
                  onChange={props.onChange}
                />
                <span style={{ color: "red" }}>
                  {props.errors.recoverEmail}
                </span>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  background: "#941a1f",
                  marginTop: 12,
                  textTransform: "none"
                }}
              >
                  {leng.sendEmail}
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  background: "#941a1f",
                  marginTop: 12,
                  marginLeft: 6,
                  textTransform: "none"
                }}
                onClick={props.onClose}
              >
                {leng.cancel}
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions />
      </Dialog>
    </main>
  );
}

export default RecoverPassword;
