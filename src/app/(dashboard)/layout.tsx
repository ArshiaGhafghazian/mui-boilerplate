"use client"
import { Avatar, Divider, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
                <header className="fixed h-16 w-full z-[50] backdrop-blur-lg shadow-sm border  border-b-[#e3e3e3]  ">
                    <div className="max-w-[1720px] mx-auto px-4 md:px-8 h-16 flex flex-row-reverse justify-between items-center">
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

                    </div>
                </header>
            <main>
                {children}
            </main>

        </div>
    );
}