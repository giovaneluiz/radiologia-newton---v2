import React, { useState, useEffect } from 'react';
import ItemMenu from './ItemMenu.js';
import { View, StyleSheet, FlatList } from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import Card from '../menus/Card';
import * as UserRepository from '../login/UserRepository';

const menu = [
  {
    id: 1,
    idPrimary: null,
    title: 'Anatomia',
    image: <Ionicons name="body" size={64} color="#193073" margin={20} />,
  },
  {
    id: 2,
    idPrimary: null,
    title: 'Patologia',
    image: <FontAwesome5 name="virus" size={64} color="#193073" margin={20} />,
  },
  {
    id: 3,
    idPrimary: null,
    title: 'Alterações Dentárias',
    image: (
      <MaterialCommunityIcons
        name="tooth"
        size={64}
        color="#193073"
        margin={20}
      />
    ),
  },
  {
    id: 4,
    idPrimary: null,
    title: 'Testes',
    image: (
      <MaterialCommunityIcons
        name="head-question"
        size={64}
        color="#193073"
        margin={20}
      />
    ),
  },
];

export default ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(menu);

  const findUser = async () => {
    const user = await UserRepository.find();
    navigation.setOptions({ title: user.email });
  };

  useEffect(() => {
    findUser();
  }, []);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const list = menu.filter((m) => m.title === query);
      setFilteredList(list);
    } else {
      setFilteredList([]);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.pesquisa}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#193073"
      />
      <View style={{ flex: 1 }}>
        <FlatList
          key="flatList01"
          style={styles.flatList}
          data={filteredList}
          renderItem={(row) => (
            <ItemMenu
              title={row.item.title}
              icon={row.item.image}
              onPress={() => navigation.navigate('menu')}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    alignSelf: 'center',
  },
  pesquisa: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
