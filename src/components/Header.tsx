import { useState } from "react";
import { AppBar, Toolbar, Avatar, Typography, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openProfile, setOpenProfile] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileOpen = () => {
    setOpenProfile(true);
    handleClose();
  };

  const handleProfileClose = () => {
    setOpenProfile(false);
  };

  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar>
        <Typography variant="h6" className="flex-1">Health-Dashboard</Typography>
        <Avatar className="cursor-pointer" onClick={handleClick}>A</Avatar>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleProfileOpen}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Dialog open={openProfile} onClose={handleProfileClose}>
          <DialogTitle>Admin Profile</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Name: Admin Name</Typography>
            <Typography variant="body2">Email: admin@example.com</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleProfileClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
