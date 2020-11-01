import React from 'react';
const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <View>
            <Text>
                
            </Text>
        </View>

    );
};
export default List;