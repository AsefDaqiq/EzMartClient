/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "#ffffff",
  textDecoration: "none",
  typography: "h6",
  mx: 2,
  "&:hover": { color: "rgba(255, 255, 255, 0.8)" },
  "&.active": {
    color: "#e0f7fa", // Lighter teal for contrast
    fontWeight: "bold",
    backgroundColor: "rgba(0, 128, 128, 0.2)", // Soft teal highlight
    borderRadius: "8px",
    px: 1.5, // Padding for better visual separation
    py: 0.5, // Padding on top/bottom for uniformity
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)", // Subtle shadow for depth
  },
};


export default function Header(props: any) {
  const [checked, setChecked] = useState(true);
  const { basket } = useStoreContext();
  const basketItemCount = basket?.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.setDarkMode(checked);
  };

  return (
    <AppBar position="static" sx={{ mb: 4, bgcolor: "#167d7f", py: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            component={NavLink}
            to="/"
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              textDecoration: "none",
              mr: 2,
            }}
          >
            EzMart
          </Typography>
          <Switch
            checked={checked}
            onChange={handleChange}
            color="secondary"
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            color="inherit"
            sx={{
              mr: 2,
              color: "#ffffff",
              "&:hover": { color: "rgba(255, 255, 255, 0.7)" },
            }}
          >
            <Badge badgeContent={basketItemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
