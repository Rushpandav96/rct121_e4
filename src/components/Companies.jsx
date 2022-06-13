import{
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    SimpleGrid,
    Box,
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";

function Companies(){
    return (
        <Menu>
            <Box>
                <Link to="/">
                <Button>Home</Button>
                </Link>
            </Box>

            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                Company Name
            </MenuButton>

            <MenuList>
                <MenuItem>LinkedIn</MenuItem>
                <MenuItem>Masai School</MenuItem>
                <MenuItem>Flipcart</MenuItem>
            </MenuList>

            <SimpleGrid columns={2}>
                <Box>ADD A NEW COMPANY</Box>
                <Box>
                    <Button colorScheme={Black}>ADD</Button>
                </Box>
            </SimpleGrid>
        </Menu>
    );
}

export default Companies;