import { Spinner } from '@chakra-ui/react'

function Loading () {

    const styles = {
        margin: '15rem auto 0 auto',
        display: 'block'
    }

    return (
        <section style={{minHeight: '30vh'}}>
            <Spinner style={styles}
                thickness='6px'
                speed='0.65s'
                emptyColor='gray.200'
                color='black.500'
                width='5rem'
                height='5rem'
            />
        </section>
    )
}

export default Loading