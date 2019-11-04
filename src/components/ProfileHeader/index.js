import React from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {Container, Profile} from './styles';

const imageUrl =
  'https://images.unsplash.com/photo-1570500091894-635e2730c151?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

function ProfileHeader() {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.openDrawer()}>
      <Profile source={{uri: imageUrl}} />
    </Container>
  );
}

export default ProfileHeader;
