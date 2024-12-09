import { useParams } from 'react-router-dom'

const SpecialsProducts = () => {
    const { NAIs } = useParams()
    console.log(NAIs)
    return (
        <div>
            <h2>Specials Products</h2>
        </div>
    )
}

export default SpecialsProducts