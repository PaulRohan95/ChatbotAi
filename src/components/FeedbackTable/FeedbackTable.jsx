import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, Typography, Pagination } from '@mui/material';
import Rating from '@mui/material/Rating';

function FeedbackTable({ feedbacks }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const sortedFeedbacks = feedbacks.sort((a, b) => b.rating - a.rating);

  const paginatedFeedbacks = sortedFeedbacks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Conversation</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedFeedbacks.map((feedback, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Rating value={feedback.rating} readOnly />
              </TableCell>
              <TableCell>
                <Typography>{feedback.comment}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(sortedFeedbacks.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default FeedbackTable;
