import ThemeToggleButton from './theme-toggle-button'

import {
    Container, 
    Box,
    useColorModeValue
} from '@chakra-ui/react'

const Navbar = props => {
    const { path } = props

    return(
        <Box position="fixed"
             as='nav'
             w="100%"
             bg={useColorModeValue('#ffffff40', '#20202380')}
             css={{ backdropFilter: 'blur(10px)'}}
             zIndex={2}
             {...props}>
        <Container display="flex"
                   p={2}
                   maxW="container.md"
                   wrap="wrap"
                   align="right"
                   justify="space-between">
            <Box flex={1} align="right">
                <ThemeToggleButton />
            </Box>
        </Container>
        </Box>
    )
}

export default Navbar