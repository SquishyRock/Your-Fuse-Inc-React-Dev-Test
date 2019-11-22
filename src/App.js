import React from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <Card>
          <CardContent>
            <Typography component="h2">
              Title
            </Typography>
            <Typography >
              Price
            </Typography>
            <Typography color="textSecondary">
              Volume
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  const { coin } = state.coin;
  return { coin };
};

export default connect(
  mapStateToProps,
  null
)(App);