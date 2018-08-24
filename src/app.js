import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: <>,
      authDomain: <>,
      databaseURL: <>,
      projectId: <>,
      storageBucket: <>,
      messagingSenderId: <>
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Logout
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Authentication' />
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}

export default App;