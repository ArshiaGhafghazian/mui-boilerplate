"use client"
import { Avatar, Divider, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Dns, KeyboardArrowDown, People } from "@mui/icons-material";

const NAV_DATA = [
    {
        icon: <People />,
        label: 'Authentication',
        href: "",
        children: [
            {
                label: "login",
                href: "#"
            },
            {
                label: "logout",
                href: "#"
            },
        ]
    },
    {
        icon: <Dns />,
        label: 'Database',
        href: "",
        children: [
            {
                label: "my sql",
                href: "#"
            },
            {
                label: "mongo db",
                href: "#"
            },
        ]
    },
    {
        icon: <Dns />,
        label: 'Hosting',
        href: "",
        children: [
            {
                label: "wordpress",
                href: "#"
            },
            {
                label: "node js",
                href: "#"
            },
        ]
    }
]

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [openItem, setOpenItem] = React.useState(true);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="flex">
            <div className="w-[250px] border-e border-e-[#e3e3e3] min-h-screen h-screen overflow-y-auto hidden lg:block">
                <div className="h-16 flex items-center justify-center">LOGO</div>
                {NAV_DATA.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItemButton
                            alignItems="flex-start"
                            onClick={() => setOpenItem(!openItem)}
                            sx={[
                                {
                                    px: 3,
                                    py: 2.5,
                                },

                                openItem
                                    ? {
                                        '&:hover, &:focus': {
                                            '& svg': {
                                                opacity: 1,
                                            },
                                        },
                                    }
                                    : {
                                        '&:hover, &:focus': {
                                            '& svg': {
                                                opacity: 0,
                                            },
                                        },
                                    },
                            ]}
                        >
                            <ListItemIcon sx={{ color: 'inherit' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                    mb: '2px',
                                }}

                                secondaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: 12,
                                    lineHeight: '16px',
                                    color: 'rgba(255,255,255,0.5)',
                                }}
                                sx={{ my: 0 }}
                            />
                            {item.children && <KeyboardArrowDown
                                sx={[
                                    {
                                        mr: -1,
                                        opacity: 0,
                                        transition: '0.2s',
                                    },
                                    openItem
                                        ? {
                                            transform: 'rotate(-180deg)',
                                        }
                                        : {
                                            transform: 'rotate(0)',
                                        },
                                ]}
                            />}

                        </ListItemButton>
                        {openItem && item.children.length > 0 && item.children.map((child) => (
                            <ListItemButton
                                key={child.label}
                                sx={{ py: 2.5, minHeight: 32, color: 'red' }}
                            >

                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        ))}
                    </React.Fragment>
                ))}


            </div>
            <div className="flex-1">

                <header className="h-16 z-[50] backdrop-blur-lg shadow-sm border-b border-b-[#e3e3e3]">
                    <div className=" mx-auto px-4 md:px-8 h-16 flex flex-row-reverse justify-between items-center">
                        <div className="flex">
                            <Tooltip title="Account settings" arrow>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar src="/img/avatar.webp">M</Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 18,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}

                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>

                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>

                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>

                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                        <div className="lg:hidden">
                            <IconButton color="primary" aria-label="menu" onClick={() => setIsOpen(true)}>
                                <MenuOpenIcon />
                            </IconButton>

                            <Drawer

                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                            >
                                asdasd
                            </Drawer>
                        </div>

                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>


        </div>
    );
}