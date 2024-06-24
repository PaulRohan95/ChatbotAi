import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

function PromptSuggestions({ prompts, onSelect }) {
  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 999, 
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }}>
      <Grid container spacing={2} sx={{ width: '45%', opacity: 0.9 }}>
        {prompts.map((prompt, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              onClick={() => onSelect(prompt)}
              sx={{ 
                  cursor: 'pointer', 
                  height: '110px',
                  borderRadius: '20px',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  '&:hover': { opacity: 1 }
              }}>
              <CardContent>
                <Typography variant='body2' sx={{ textAlign: 'center' }}>{prompt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PromptSuggestions;
