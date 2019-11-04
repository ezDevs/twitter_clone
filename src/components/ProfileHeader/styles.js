import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import Image from '../Image';

export const Container = styled(TouchableOpacity)`
  padding-left: 15px;
`;

export const Profile = styled(Image)`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
`;
