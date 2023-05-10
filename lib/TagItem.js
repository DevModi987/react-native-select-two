import React from 'react';
import {TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TagItem = ({ tagName, onRemoveTag, defaultFontName,tagBgColor,tagColor }) => {
    return (
        <TouchableOpacity
            onPress={onRemoveTag}
            style={{flexDirection: 'row', alignItems: 'center',backgroundColor: tagBgColor, borderWidth: 0.5, borderColor: tagBgColor,borderRadius: 3,padding:5,marginLeft:2,margin:1}}>
            {/* <Icon size={13} color={tagColor} name='close' /> */}
            <Text style={{fontSize: 10, color: tagColor, fontFamily:defaultFontName}}>
                {tagName}
            </Text>
        </TouchableOpacity>
    );
}
export default TagItem;