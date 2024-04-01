import '../styles/Description.css'

export default function Description({points}) {
    if (points && points.length > 0){
        let descriptionContent = points.map(point => {
            return <li>{point}</li>;
        })
        return (
            <ul className='description'>
                {descriptionContent}
            </ul>
        )
    }
}