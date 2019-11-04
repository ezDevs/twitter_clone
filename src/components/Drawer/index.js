import React from 'react';
import {ScrollView} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {
  Container,
  Header,
  Profile,
  Name,
  Account,
  InfoContainer,
  Info,
  Number,
} from './styles';

const imageUrl =
  'https://images.unsplash.com/photo-1570500091894-635e2730c151?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

function Drawer(props) {
  return (
    <ScrollView>
      <Container>
        <Header>
          <Profile source={{uri: imageUrl}} />
          <Name>Josh</Name>
          <Account>@josh</Account>
          <InfoContainer>
            <Info>
              <Number>102</Number> seguidores
            </Info>
            <Info>
              <Number>180</Number> seguindo
            </Info>
          </InfoContainer>
        </Header>
        <DrawerItems {...props} />
      </Container>
    </ScrollView>
  );
}

export default Drawer;
