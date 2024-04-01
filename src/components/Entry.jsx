import Description from './Description.jsx'
import '../styles/Entry.css'

export default function Entry({title, time, location, additionalComment, description, link}) {
    let titleLine = <h2 className='entry-title'>{title}</h2>;
    
    if (link && link.length > 0){
        titleLine = <a className='entry-link' href={link} target="_blank">{titleLine}</a>;
        console.log('1');
    }

    if (location && location.length > 0){
        titleLine = <h2 className='entry-title'>{title}, <span className='location'>{location}</span></h2>;
    }
    

    return (
        <div className="entry" key={title}>
            <div className='entry-header'>
                <div className='left-side-entry-header'>
                    {titleLine}
                    <h3 className='additionalComment'><em>{additionalComment}</em></h3>
                </div>
                <h3 className='time'>{time}</h3>
            </div>
            <div className='entry-body'>
                <Description points={description} />
            </div>
        </div>
    )
}