import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [conversations, setConversations] = useState([]);
    const [currentConversation, setCurrentConversation] = useState([]);
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(null);


    const addConversation = (conversation) => {
        setConversations([...conversations, conversation]);
    };

    const updateConversation = (index, updatedConversation) => {
        const updatedConversations = [...conversations];
        updatedConversations[index] = updatedConversation;
        setConversations(updatedConversations);
      };

    const updateMessageFeedback = (index, feedback) => {
        const updatedConversation = [...currentConversation];
        if (updatedConversation[index]) {
            updatedConversation[index].feedback = feedback;
            setCurrentConversation(updatedConversation);
        }
    };

    const saveCurrentConversation = () => {
        if (currentConversation.length > 0){
            setConversations([...conversations, { messages: currentConversation, id: conversations.length + 1, feedback: null }]);
            setCurrentConversation([]);
        }
      };

    return (
        <ChatContext.Provider 
            value={{
                conversations,
                currentConversation,
                addConversation,
                setCurrentConversation,
                updateMessageFeedback,
                saveCurrentConversation,
                updateConversation,
                selectedConversationIndex,
                setSelectedConversationIndex,
            }}>
                {children}
            </ChatContext.Provider>
    );
};