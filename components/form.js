import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';


export default class ParentForm extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          // Text input box with icon aligned to the left
          <Item>
            <Icon active name='home' />
            <Input placeholder='Icon Textbox'/>
          </Item>
          // Text input box with icon aligned to the right
          <Item>
            <Input placeholder='Icon Alignment in Textbox'/>
            <Icon active name='swap' />
          </Item>
        </Content>
      </Container>
    );
  }
}