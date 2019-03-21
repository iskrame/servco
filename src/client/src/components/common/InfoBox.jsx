import React from 'react';
import Paper from '@material-ui/core/Paper';

class InfoBox extends React.Component {

  render() {
    const {color, title, value, Icon} = this.props;

    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 90
      },
      number: {
        display: 'block',
        fontSize: 18,
        color: '#000'
      },
      text: {
        fontSize: 18,
        fontWeight: 'light',
        color: '#000'
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: color
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 18,
        maxWidth: '100%',
        color: '#fff'
      }
    };

    return (
      <Paper style={{margin:'5px'}}>
        <span style={styles.iconSpan}>
        <Icon style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}>{value}</span>
        </div>
      </Paper>
      );
  }
}


export default InfoBox;
