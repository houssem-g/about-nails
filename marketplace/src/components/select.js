import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';


const BasicMenu = ({titles}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const listOfTitles = []
    titles.forEach((val) => {
        listOfTitles.push(<MenuItem style={{"width": "170px"}} onClick={handleClose}>{val}</MenuItem>)
    }
    )

    return (
        <div>
            <IconButton onClick={handleClick}>
                <ListIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            
            >
                {listOfTitles}
            </Menu>
        </div>
    );
}
export default BasicMenu;