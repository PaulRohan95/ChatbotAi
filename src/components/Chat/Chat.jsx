import React, { useState, useContext } from 'react';
import { Box, TextField, Typography, IconButton, CircularProgress, InputAdornment, Tooltip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { ChatContext } from '../context/ChatContext';

function Chat({ mockResponses }) {
    const { currentConversation, setCurrentConversation, saveCurrentConversation, updateMessageFeedback } = useContext(ChatContext);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessage = { text: input, sender: 'user' };
        setCurrentConversation([...currentConversation, newMessage]);
        setInput('');
        setLoading(true);

        setTimeout(() => {
            const foundResponse = mockResponses.find(item => item.question.toLowerCase() === input.toLowerCase());
            const aiResponse = foundResponse ? foundResponse.response : "I'm sorry, I don't understand.";
            setCurrentConversation(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
            setLoading(false);
        }, 500);
    };

    const handleFeedback = (index, feedback) => {
        updateMessageFeedback(index, feedback);
    };

    const handleSaveConversation = () => {
        saveCurrentConversation();
    }; 


    return (
        <Box sx={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Box sx={{ flex: '1 1 auto', overflowY: 'auto', px: 2 }}>
                {Array.isArray(currentConversation) && currentConversation.map((message, index) => (
                    <Box key={index} sx={{ mb: 2, p: 3, display: 'flex', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <Box sx={{ 
                            maxWidth: '70%', 
                            borderRadius: 8, 
                            p: 1, 
                            bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main', 
                            color: message.sender === 'user' ? 'white' : 'text.secondary',
                            position: 'relative',
                             }}>
                            <Typography variant='body1' sx={{ p: 1 }}>{message.text}</Typography>
                            {message.sender === 'ai' && (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                    <IconButton onClick={() => handleFeedback(index, 'like')}
                                        sx={{ color: message.feedback === 'like' ? 'blue' : 'inherit' }}>
                                        <ThumbUpIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleFeedback(index, 'dislike')} sx={{ ml: 1, color: message.feedback === 'dislike' ? 'red' : 'inherit' }}>
                                        <ThumbDownIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{ px: 2, pb: 2 }}>
                <TextField
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    fullWidth
                    variant="outlined"
                    placeholder="Message BotAI"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={handleSend} disabled={loading || input.trim() === ''}>
                                    {loading ? <CircularProgress size={24} /> : <SendIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                        sx: { borderRadius: '50px', px: '18px' }
                    }}
                />
                <Tooltip title='Save'>
                    <span>
                    <IconButton
                        style={{ marginLeft: '10px' }}
                        onClick={handleSaveConversation}
                        disabled={currentConversation.length === 0}
                        variant='contained'
                    >
                        <SaveIcon />
                    </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Chat;
