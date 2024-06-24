import React from 'react';
import { List,  ListItemButton, ListItemText } from '@mui/material';

function ConversationList({ conversations, onSelect  }) {
    return (
        <List>
            {conversations.map((conversation, index) => (
                <ListItemButton key={index} onClick={() => onSelect(conversation, index)}>
                    <ListItemText primary={`Conversation ${index + 1}`} />
                </ListItemButton>
            ))}
        </List>
    )
};

export default ConversationList;