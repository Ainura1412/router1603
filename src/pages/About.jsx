import { useParams } from 'react-router-dom'
function About(props) {
    const { id, product } = useParams()
    return (
        <h1>This is the product{id} {product}</h1>
    )
}
export default About