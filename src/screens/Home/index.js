import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {Container, Loading} from './styles';

import {Tweet} from '../../components';
import getTweets from '../../api';

function Home() {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchTweets = useCallback(async () => {
    if (!isFetching && !error) {
      try {
        setFetching(true);
        const newTweets = await getTweets(page, 2);
        setPage(page + 1);
        setTweets([...tweets, ...newTweets]);
      } catch (err) {
        setError(err);
      } finally {
        setFetching(false);
      }
    }
  }, [page, isFetching]);

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <Container>
      <FlatList
        data={tweets}
        renderItem={({item}) => <Tweet {...item} />}
        keyExtractor={item => String(item.id)}
        onEndReached={() => fetchTweets()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          if (!isFetching) {
            return null;
          }
          return (
            <Loading>
              <ActivityIndicator size="large" color="blue" />
            </Loading>
          );
        }}
      />
    </Container>
  );
}

export default Home;
