import './DetailContainer.scss'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Detail from '../Detail/Detail';
import Loading from '../Loading/Loading'

function DetailContainer () {

    const {id} = useParams()
    const apiUrl = `${import.meta.env.VITE_API_URL}/${id}`
    const { data, error, loading } = useFetch(apiUrl, id)

    if (loading) { return <Loading /> } 

    return (
        <main>
            {error && <h2>{error.message}</h2>}
            {loading ? (<Loading />) : (
                <>
                    {data && <Detail name={data.data.attributes.name}
                        year={data.data.attributes.year}
                        price={data.data.attributes.price}
                        transmission={data.data.attributes.transmission}
                        image1={data.data.attributes.images.image1}
                        image2= {data.data.attributes.images.image2}
                        image3= {data.data.attributes.images.image3}
                        image4= {data.data.attributes.images.image4}
                        image5 = {data.data.attributes.images.image5}
                        km={data.data.attributes.km}
                        color={data.data.attributes.color}
                        version={data.data.attributes.version}
                    />}     
                </>
            )}

        </main>
    )
}

export default DetailContainer