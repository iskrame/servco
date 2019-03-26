import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";
// import { countries, statesFromMexico } from "../../../../utils/countrys";

import PersonalInfo from "./PersonalInfo";
import BornFields from "./BornFields";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { countries, statesFromMexico } from "../../../../utils/countrys";
import {clientLenguaje} from "../../../../translate/clientTranslate";



const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "15px",
    bold: true
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "100%"
  }
});

export function changelengPF(x) {
  
  
}

let leng = clientLenguaje(0);
class PersonalDataFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  render() {
    const { classes, onChangePattern, state } = this.props;

    let tabContent;
    switch (this.state.index) {
      case 1:
        tabContent = (
          <PersonalInfo
            state={state}
            onChange={this.props.onChange}
            onChangePattern={onChangePattern}
          />
        );
        break;
      case 2:
        tabContent = (
          <BornFields
            state={state}
            onChange={this.props.onChange}
            onChangePattern={onChangePattern}
          />
        );
        break;
      case 3:
        tabContent = (
          <BornFields
            state={state}
            onChange={this.props.onChange}
            onChangePattern={onChangePattern}
          />
        );
        break;
      default:
        break;
    }

    return <div className={classes.root}>{tabContent}</div>;
    /* //           <Grid item xs={12} sm={4}>
      //             <TextField id="cel" name="cel" label="Celular" fullWidth />
      //           </Grid>
      //           <Grid item xs={12} sm={4}>
      //             <TextField
      //               id="tel"
      //               name="tel"
      //               label=" Teléfono de Casa"
      //               fullWidth
      //             />
      //           </Grid>
      //           <Grid item xs={12} sm={4}>
      //             <TextField id="other" name="other" label="Otro" fullWidth />
      //           </Grid>
      //         </Grid>
      //       </div>
      //     </ExpansionPanelDetails>
      //   </ExpansionPanel>
      // </div> */
  }
}
PersonalDataFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalDataFields);

// import React from "react";
// import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Paper from "@material-ui/core/Paper";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import PersonalInfo from "./PersonalInfo";
// // import AddressForm from "./AddressForm";
// // import PaymentForm from "./PaymentForm";
// // import Review from "./Review";

// const styles = theme => ({
//   appBar: {
//     position: "relative"
//   },
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing.unit * 2,
//     marginRight: theme.spacing.unit * 2,
//     [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
//       width: 600,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 3,
//     marginBottom: theme.spacing.unit * 3,
//     padding: theme.spacing.unit * 2,
//     [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
//       marginTop: theme.spacing.unit * 6,
//       marginBottom: theme.spacing.unit * 6,
//       padding: theme.spacing.unit * 3
//     }
//   },
//   stepper: {
//     padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "flex-end"
//   },
//   button: {
//     marginTop: theme.spacing.unit * 3,
//     marginLeft: theme.spacing.unit
//   }
// });

// const steps = ["Shipping address", "Payment details", "Review your order"];

// function getStepContent(step, props) {
//   switch (step) {
//     case 0:
//       return (
//         <PersonalInfo
//           onChange={props.onChange}
//           state={props.state}
//           onChangePattern={props.onChangePattern}
//         />
//       );
//     case 1:
//       return <div />;
//     // return <PaymentForm />;
//     case 2:
//     // return <Review />;
//     default:
//     // throw new Error("Unknown step");
//   }
// }

// class Checkout extends React.Component {
//   state = {
//     activeStep: 0,
//     index: 0
//   };

//   constructor() {
//     super();
//     this.handleChangeIndex = this.handleChangeIndex.bind(this);
//   }
//   handleNext = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep + 1
//     }));
//   };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0
//     });
//   };
//   handleChange = (event, index) => {
//     this.setState({ index });
//   };

//   handleChangeIndex = index => {
//     console.log("index: " + index);
//     // this.setState(state => ({
//     //   activeStep: state.index++
//     // }));
//   };
//   render() {
//     const { classes } = this.props;
//     const { activeStep } = this.state;

//     return (
//       <React.Fragment>
//         <CssBaseline />

//         <main className={classes.layout}>
//           <Stepper
//             activeStep={activeStep}
//             className={classes.stepper}
//             // onClick={this.handleChangeIndex()}
//           >
//             {steps.map((label, index) => (
//               <Step key={label}>
//                 <StepLabel>
//                   <h4>{label}</h4>
//                 </StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <React.Fragment>
//             {activeStep === steps.length ? (
//               <React.Fragment>
//                 <h4 gutterBottom>Thank you for your order.</h4>
//                 <Typography variant="subtitle1">
//                   Your order number is #2001539. We have emailed your order
//                   confirmation, and will send you an update when your order has
//                   shipped.
//                 </Typography>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 {getStepContent(activeStep, this.props)}
//                 {/* <div className={classes.buttons}>
//                   {activeStep !== 0 && (
//                     <Button
//                       onClick={this.handleBack}
//                       className={classes.button}
//                     >
//                       Back
//                     </Button>
//                   )}
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={this.handleNext}
//                     className={classes.button}
//                   >
//                     {activeStep === steps.length - 1 ? "Place order" : "Next"}
//                   </Button>
//                 </div> */}
//               </React.Fragment>
//             )}
//           </React.Fragment>
//           {/* </Paper> */}
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// Checkout.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Checkout);
