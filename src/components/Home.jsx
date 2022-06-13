import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box>
            <Box>
                Home
            </Box>
            <Flex>
                <Box border="1px solid black" textAlign="center">
                    <Link to="/companies">Company Page</Link>
                </Box>
                <Box border="1px solid black" textAlign="center">
                    <Link to="/Employee">Employee Page</Link>
                </Box>
            </Flex>
        </Box>
    );
};


export default Home;