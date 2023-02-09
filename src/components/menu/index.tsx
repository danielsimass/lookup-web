// import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Fragment, useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const Menu = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (state: boolean) => void}) => {


  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
          <ListItem key={'category'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={"Categorias"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'accounts'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary={"Contas"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'notes'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary={"Notas"} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment key={'left'}>
          <SwipeableDrawer
            anchor={'left'}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
          >
            {list()}
          </SwipeableDrawer>
        </Fragment>
    </div>
  );
}