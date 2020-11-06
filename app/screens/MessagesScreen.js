import React, { useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View } from 'react-native';
import ListItem from '../components/ListItem';

import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const intitialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates saepe molestias, tempora ipsam amet voluptas qui, nobis accusantium eos itaque eius soluta dignissimos commodi provident reprehenderit aperiam assumenda velit sed!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates saepe molestias, tempora ipsam amet voluptas qui, nobis accusantium eos itaque eius soluta dignissimos commodi provident reprehenderit aperiam assumenda velit sed!',
        image: require('../assets/flower_pot.jpg')
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Discription 2',
        image: require('../assets/flower_pot.jpg')
    }
]

const MessagesScreen = (props) => {
    // const array = useState(0);
    // const count = array[0];
    // const setCount = array[1];
    const [messages, setMessages] = useState(intitialMessages);
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
        //both above line can be combined to single line 
    }

    return (
        <Screen>
            <FlatList style={styles.screen}
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected", item)}
                        renderRightActions={() => <ListItemDeleteAction
                            onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'Title 3',
                            description: 'Discription 3',
                            image: require('../assets/flower_pot.jpg')
                        }
                    ])
                }}
            ></FlatList>
        </Screen>
    );
};

const styles = StyleSheet.create({

})
export default MessagesScreen;