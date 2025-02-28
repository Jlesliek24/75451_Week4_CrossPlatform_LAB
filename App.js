import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { 
  Card, 
  Title, 
  Paragraph, 
  Avatar, 
  Provider as PaperProvider 
} from 'react-native-paper';

const userData = [
  {
    id: '1',
    name: 'Barbarian King - 00069',
    photo: require('./assets/Noice1.jpg'),
    email: 'barbarian.king@example.com',
  },
  {
    id: '2',
    name: 'Jomblo sejati - 00038',
    photo: require('./assets/Noice2.jpg'),
    email: 'jomblo.sejati@example.com',
  },
  {
    id: '3',
    name: 'Jidat lebar - 00032',
    photo: require('./assets/Noice3.jpg'),
    email: 'jidat.lebar@example.com',
  },
  {
    id: '4',
    name: 'Fuke - 00038',
    photo: require('./assets/Noice1.jpg'),
    email: 'fuke@example.com',
  },
  {
    id: '5',
    name: 'Nein - 00032',
    photo: require('./assets/Noice2.jpg'),
    email: 'nein@example.com',
  },
  {
    id: '6',
    name: 'Fukasdce - 00038',
    photo: require('./assets/Noice2.jpg'),
    email: 'fukasdce@example.com',
  },
  {
    id: '7',
    name: 'Breins - 00032',
    photo: require('./assets/Noice3.jpg'),
    email: 'breins@example.com',
  },
  {
    id: '8',
    name: 'Nein - 00032',
    photo: require('./assets/Noice2.jpg'),
    email: 'nein@example.com',
  },
  {
    id: '9',
    name: 'Fukasdce - 00038',
    photo: require('./assets/Noice2.jpg'),
    email: 'fukasdce@example.com',
  },
  {
    id: '10',
    name: 'Breins - 00032',
    photo: require('./assets/Noice3.jpg'),
    email: 'breins@example.com',
  },
  {
    id: '11',
    name: 'Nein - 00032',
    photo: require('./assets/Noice2.jpg'),
    email: 'nein@example.com',
  },
  {
    id: '12',
    name: 'Fukasdce - 00038',
    photo: require('./assets/Noice2.jpg'),
    email: 'fukasdce@example.com',
  },
  {
    id: '13',
    name: 'Breins - 00032',
    photo: require('./assets/Noice3.jpg'),
    email: 'breins@example.com',
  },
];

export default function App() {
  return (
    // PaperProvider is optional but recommended to use Paper theming
    <PaperProvider>
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.contentContainer}
      >
        {userData.map((user) => (
          <Card style={styles.card} key={user.id}>
            <Card.Title
              title={user.name}
              subtitle={user.email}
              // Use the left prop to render an Avatar
              left={(props) => (
                <Avatar.Image {...props} source={user.photo} />
              )}
            />
            {/* Optionally, you can add a Card.Content or Card.Cover if you want */}
            {/* <Card.Cover source={user.photo} /> */}
            <Card.Content>
              <Paragraph>Additional info or description can go here.</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  contentContainer: {
    // This controls the spacing inside the ScrollView
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  card: {
    marginVertical: 8,
    // If you want to ensure it spans the full width minus horizontal padding:
    // (it will automatically be constrained by contentContainerStyle)
    // but you can do the below if you want a more fixed approach:
    // width: '100%',
  },
});
