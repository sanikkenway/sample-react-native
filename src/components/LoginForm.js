import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input placeholder='user@mail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />
        </CardSection>
        <CardSection>
          <Input secureTextEntry
            placeholder='p@55w0rd'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })} />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
