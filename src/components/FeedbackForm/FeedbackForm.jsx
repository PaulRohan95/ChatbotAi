import React, { useState } from 'react';
import { Box, Button, Rating, TextField, Typography } from '@mui/material';

function FeedbackForm({ onSubmit }) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        onSubmit({ rating, comment });
    };

    return (
        <Box>
            <Typography variant='h6'>Rate the conversation</Typography>
            <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
                <TextField
                    label='Your comments'
                    multiline
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth />
                <Button onClick={handleSubmit} variant='contained'>Submit Feedback</Button>
        </Box>
    )
};

export default FeedbackForm;