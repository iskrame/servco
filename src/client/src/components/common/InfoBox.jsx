import React from 'react';
import Paper from '@material-ui/core/Paper';

class InfoBox extends React.Component {

  render() {
    const {color, title, value, Icon} = this.props;

    const styles = {
      content: {
        padding: '10px',
        marginLeft: 90,
        height: 90
      },
      number: {
        display: 'block',
        fontSize: 18,
        fontWeight: 'bold',
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
        backgroundColor: color,
        marginTop: '-10px',
        marginLeft: '5px',
        borderRadius:'5px',
        boxShadow: '3px 3px 5px 3px rgba(0,0,0,.2)'
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 18,
        maxWidth: '100%',
        color: '#fff'
      },
      zoom: {
        marginBottom:'20px', 
        boxShadow:'3px 3px 5px 3px rgba(0,0,0,.2)',
      },
    };

    return (
      <Paper  style={styles.zoom}>
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
