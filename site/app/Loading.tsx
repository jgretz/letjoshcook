import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';
import {CircularProgress, Grid, Fade} from '@material-ui/core';

type PublicProps = {
  onRender: () => void;
};

type InternalProps = {
  classes: {
    container: string;
  };
};

type Props = PublicProps & InternalProps;

const Component = ({classes}: Props) => (
  <Fade
    in
    style={{
      transitionDelay: '800ms',
    }}
    unmountOnExit
  >
    <Grid
      container
      direction="column"
      alignContent="center"
      justify="center"
      className={classes.container}
    >
      <Grid item>
        <CircularProgress size={200} />
      </Grid>
    </Grid>
  </Fade>
);

export default compose<PublicProps>(
  withStyles({
    container: {
      height: '100vh',
    },
  }),
)(Component);
