import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import numeral from 'numeral';
import {
  Container,
  Profile,
  Content,
  Header,
  Name,
  Account,
  Timestamp,
  Body,
  Media,
  Footer,
  IconContainer,
  Count,
} from './styles';

const calculateHeight = (width = null) => {
  if (!width) {
    width = Dimensions.get('screen').width;
  }
  const proportion = width > Dimensions.get('screen').height ? 0.39 : 0.425;

  return width * proportion;
};

function Tweet({user, tweet}) {
  const [mediaHeight, setMediaHeight] = useState(calculateHeight());

  useEffect(() => {
    const handleChange = ({screen}) => {
      setMediaHeight(calculateHeight(screen.width));
    };
    Dimensions.addEventListener('change', handleChange);

    return () => {
      Dimensions.removeEventListener('change');
    };
  }, []);

  return (
    <Container>
      <Profile source={{uri: user.picture}} />
      <Content>
        <Header>
          <Name>{user.nickname}</Name>
          <Account>{` @${user.account}`}</Account>
          <Timestamp> · 3 h</Timestamp>
        </Header>
        {tweet.text && <Body>{tweet.text}</Body>}
        {tweet.media && (
          <Media height={mediaHeight} source={{uri: tweet.media}} />
        )}
        <Footer>
          <IconContainer>
            <Icon
              name="ios-chatboxes"
              size={24}
              color="rgba(104,  119,  132,  1);"
            />
            <Count>{numeral(tweet.commentCount).format('0a')}</Count>
          </IconContainer>
          <IconContainer>
            <Icon
              name="md-share"
              size={24}
              color="rgba(104,  119,  132,  1);"
            />
            <Count>{numeral(tweet.shareCount).format('0a')}</Count>
          </IconContainer>
          <IconContainer>
            <Icon
              name="ios-heart-empty"
              size={24}
              color="rgba(104,  119,  132,  1);"
            />
            <Count>{numeral(tweet.likeCount).format('0a')}</Count>
          </IconContainer>
        </Footer>
      </Content>
    </Container>
  );
}

export default Tweet;
