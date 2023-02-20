import React from 'react';
import {TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TagItem = ({ tagName, onRemoveTag, defaultFontName,tagBgColor,tagColor }) => {
    return (
        <TouchableOpacity
            onPress={onRemoveTag}
            style={{flexDirection: 'row', alignItems: 'center',backgroundColor: tagBgColor, borderWidth: 0.5, borderColor: tagBgColor,margin:2, borderRadius: 3,padding:5}}>
            <Icon size={13} color={tagColor} name='close' />
            <Text style={{fontSize: 12, color: tagColor, paddingLeft: 4,fontFamily:defaultFontName}}>
                {tagName}
            </Text>
        </TouchableOpacity>
    );
}
export default TagItem;