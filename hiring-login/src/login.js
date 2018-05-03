import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
// import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import logo from './logo.png';
// import bg from './bg.jpg';
import './App.css';
import Typography from 'material-ui/Typography';

import { Link } from 'react-router-dom';
//
// const styles = {
//   paperContainer: {
//     height: 200,
//     backgroundImage: `url(${ "/qa/src/Login/bg.jpg"})`
//   }
// };

export default class Login extends React.Component {
  render() {
    return (<div className="loginpage gg">
      <br />
      <div>

        <img src={logo} className="App-logo" alt="logo" />

        <header>

          <Typography variant="display1" gutterBottom style={{ marginTop: '10px' }}>
            Admin Portal
          </Typography>
        </header>
        <div className="loginfields">
          <TextField id="with-placeholder" label="Username" margin="normal" />
          <br />
          <TextField id="password-input" label="Password" type="password" autoComplete="current-password" margin="normal" />
          <br />
          <br />
          <br />
          <Button id="loginbutton" variant="raised" color="primary" component={Link} to="/nav/Home">
            Login
          </Button>

        </div>
      </div>
    </div>);
  }
}

// import React, { Component } from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import logo from './logo.png'
// import TextField from 'material-ui/TextField';
// import Button from 'material-ui/Button';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           {/* <h1 className="App-title">Welcome to React</h1> */}
//           <div>
//
//           </div>
//         </header>
//
//       </div>
//     );
//   }
// }
//
// export default App;
