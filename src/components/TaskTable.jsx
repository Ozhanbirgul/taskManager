import React from 'react'
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, CircularProgress, Box 
} from "@mui/material";
import axios from 'axios';

const TaskTable = () => {
  return (
    <TableContainer>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Başlık</TableCell>
                <TableCell>Açıklama</TableCell>
                 <TableCell>Öncelik</TableCell>
                <TableCell>Durum</TableCell>
            </TableRow>
        </TableHead>
    </TableContainer>
  )
}

export default TaskTable
