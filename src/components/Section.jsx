import Entry from './Entry.jsx'
import '../styles/Section.css'

export default function Section ({name, entries, text}) {

    let sectionContent;

    if (text && text.length > 0){
        sectionContent = <div className='section-text'><p>{text}</p></div>
    } else if (entries && entries.length > 0){
        sectionContent = entries.map((entry, index) => {
            console.log(entry);
            let hr = <> </>;
            if (index != entries.length - 1){
                hr = <hr/>;
            } 

            return(
                <>
                    <Entry {...entry} />
                    {hr}
                </>
            );
        })
    } else {
        sectionContent = <p>Error Displaying Section</p>;
    }
    
    return (
        <div className="section" key={name}>
            <div className='section-title'>
                <h2>{name}</h2>
            </div>
            
            <div className='section-content'>
                {sectionContent}
            </div>
        </div>
    )
}