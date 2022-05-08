import './style.css'

const tabContent = (props) => {
    //console.log('Tab content', props.id, (props.activeTab+'Content'));
    let dsp = props.id ===(props.activeTab+'Content')? 'block':'none';
    return (
        <div style={{display:dsp}} className="tab-content">
            {props.content}
        </div>
    )
}

export default tabContent;

