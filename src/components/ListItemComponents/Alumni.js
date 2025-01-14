import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

export const Alumni = (props) => {

    return(
      <Grid container className="Alumni" justify="flex-start" spacing={8}>
        <Grid container justify="flex-start" direction="column">
            <Grid item>
            <div className="ImageContainer">
                {
                props.photoUrl.length > 0
                ? (<img className="Image" alt={props.name} src={props.photoUrl} />)
                : (<img className="Image" alt={props.name} src={'/images/staircase.png'} />)
                }
            </div>
            </Grid>
            <Grid item>
                {
                props.pageUrl.length > 0 ?
                (<a href={props.pageUrl} className="Name">{props.name} </a>):
                (<span className="Name">{props.name}</span>)
                }
            </Grid>
            <Grid item>
                {
                props.gradYear ?
                (<div className="DegreeYear"> {props.degree}{' '}{props.gradYear}</div>) :
                (<div className="DegreeYear">{props.degree}</div>)
                }
            </Grid>
            <Grid item>
                {props.currentRole ?
                (<div className="CurrentRole">Now at {props.currentRole}</div>):
                (<span></span>)
                }
            </Grid>
        </Grid>
      </Grid>
    );

}

Alumni.propTypes = {
  name: PropTypes.string.isRequired,
  pageUrl: PropTypes.string,
  photoUrl: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  currentRole: PropTypes.string,
  gradYear: PropTypes.number
};
