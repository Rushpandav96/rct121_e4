import{
   Table,
   Thead,
   Tbody,
   Tr,
   Td,
   Th,
   Button,
   Text,
   TableContainer
} from "@chakra-ui/react";


function employee(){
    return (
        <TableContainer>
            <Text fontsize="5xl" align="center">Employee</Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th dntKnow> ID </Th>
                        <Th>Employee Name</Th>
                        <Th>Company Name</Th>
                        <Th>CTC</Th>
                        <Th>View Details</Th>
                        <Th>Delete</Th>
                        <Th>Edit</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>Rush</Td>
                        <Td>Masai School</Td>
                        <Td>12Lakhs</Td>
                        <Td>
                            <Button>Details</Button>
                        </Td>
                        <Td>
                            <Button>Delete</Button>
                        </Td>
                        <Td>
                            <Button>Edit</Button>
                        </Td>
                    </Tr>
                    
                    <Tr>
                    <Td>2</Td>
                        <Td>Rush</Td>
                        <Td>Masai School</Td>
                        <Td>12Lakhs</Td>
                        <Td>
                            <Button>Details</Button>
                        </Td>
                        <Td>
                            <Button>Delete</Button>
                        </Td>
                        <Td>
                            <Button>Edit</Button>
                        </Td>
                    </Tr>

                    <Tr>
                    <Td>3</Td>
                        <Td>Rush</Td>
                        <Td>Masai School</Td>
                        <Td>12Lakhs</Td>
                        <Td>
                            <Button>Details</Button>
                        </Td>
                        <Td>
                            <Button>Delete</Button>
                        </Td>
                        <Td>
                            <Button>Edit</Button>
                        </Td>
                    </Tr>

                    <Tr>
                    <Td>4</Td>
                        <Td>Rush</Td>
                        <Td>Masai School</Td>
                        <Td>12Lakhs</Td>
                        <Td>
                            <Button>Details</Button>
                        </Td>
                        <Td>
                            <Button>Delete</Button>
                        </Td>
                        <Td>
                            <Button>Edit</Button>
                        </Td>
                    </Tr>

                    <Tr>
                    <Td>5</Td>
                        <Td>Rush</Td>
                        <Td>Masai School</Td>
                        <Td>12Lakhs</Td>
                        <Td>
                            <Button>Details</Button>
                        </Td>
                        <Td>
                            <Button>Delete</Button>
                        </Td>
                        <Td>
                            <Button>Edit</Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default employee;