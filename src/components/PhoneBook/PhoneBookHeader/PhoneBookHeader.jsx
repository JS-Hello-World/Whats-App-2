import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const PhoneBookHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'background.paper',
        justifyContent: 'space-between',
        py: 7,
        px: 13,
      }}
    >
      <Typography variant="h6" color="text.primary">
        Whatsapp
      </Typography>
      <Box display="flex" alignItems="center">
        <IconButton type="button" aria-label="Search">
          <SearchIcon />
        </IconButton>
        <IconButton type="button" aria-label="Menu">
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
