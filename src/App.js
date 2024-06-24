import React, { useContext, useState, useEffect } from 'react';
import { Box, Grid, Typography, IconButton, Switch, Menu, MenuItem, Rating } from '@mui/material';
import Chat from './components/Chat/Chat';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import ConversationList from './components/ConversationList/ConversationList';
import FeedbackTable from './components/FeedbackTable/FeedbackTable';
import { ChatContext } from './components/context/ChatContext';
import { ThemeContext } from './components/context/ThemeContext';
import mockResponses from './mockResponses.json';
import './App.css';
import AddCreateIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import FeedbackIcon from '@mui/icons-material/Feedback';

function App() {
  const { conversations, currentConversation, addFeedback, setCurrentConversation, updateConversation, selectedConversationIndex, setSelectedConversationIndex } = useContext(ChatContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [aiResponded, setAiResponded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleEndConversation = (feedback) => {
    if (selectedConversationIndex !== null) {
      const updatedConversation = { ...conversations[selectedConversationIndex], feedback };
      updateConversation(selectedConversationIndex, updatedConversation);
    } else {
      addFeedback(feedback);
    }
    setCurrentConversation([]);
    setAiResponded(false);
  };

  const handleSelectConversation = (conversation, index) => {
    setCurrentConversation(conversation.messages);
    setSelectedConversationIndex(index);
    setAiResponded(true);
  };

  const handleNewChat = () => {
    setCurrentConversation([]);
    setSelectedConversationIndex(null);
    setAiResponded(false);
  };

  const handleFeedbackClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFeedbackClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={3}
      height='80vh'
      sx={{
        background: darkMode
          ? 'background.default'
          : 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          mb: 2,
          mt: 0,
          bgcolor: '#D7C7F4',
        }}
      >
        <Typography variant='h6'>New Chat</Typography>
        <IconButton onClick={handleNewChat} sx={{ ml: 2 }}>
          <AddCreateIcon />
        </IconButton>
      </Box>
      <Grid container spacing={3} height='100%'>
        <Grid item xs={3}>
          <Typography variant='h5' sx={{ mb: 2 }}>Past Conversations</Typography>
          <ConversationList conversations={conversations} onSelect={handleSelectConversation} />
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant='h5' sx={{ mb: 2 }}>BotAI</Typography>
            <IconButton onClick={handleFeedbackClick}>
              <FeedbackIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleFeedbackClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>
                <FeedbackTable feedbacks={conversations.map(conversation => conversation.feedback)} />
              </MenuItem>
            </Menu>
          </Box>
          <Chat mockResponses={mockResponses} />
          {aiResponded && <FeedbackForm onSubmit={handleEndConversation} />}
          {selectedConversationIndex !== null && conversations[selectedConversationIndex].feedback && (
            <Box mt={2}>
              <Typography variant='h6'>Conversation Feedback</Typography>
              <Rating value={conversations[selectedConversationIndex].feedback.rating} readOnly />
              <Typography variant='body1'>{conversations[selectedConversationIndex].feedback.comment}</Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h5' sx={{ mb: 2 }}>Feedback</Typography>
        </Grid>
      </Grid>
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, display: 'flex', alignItems: 'center' }}>
        <Typography variant='body2' sx={{ mr: 1 }}>
          Dark Mode
        </Typography>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Box>
    </Box>
  );
}

export default App;
