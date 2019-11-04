import styled from 'styled-components';
import {SafeAreaView} from 'react-native';
import Image from '../Image';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 5px 13px;
`;

export const Profile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex-shrink: 1;
  padding-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(20,  23,  25);
`;

export const Account = styled.Text`
  font-size: 16px;
  color: rgba(104,  119,  132,  1);
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: rgba(104,  119,  132,  1);
  margin-right: 15px;
`;

export const Number = styled.Text`
  font-weight: bold;
  color: rgb(20,  23,  25);
`;
