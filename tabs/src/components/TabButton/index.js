import './style.css'

const tab = (props) => {
    //console.log('in tab', props.id, props.activeTab, props.id===props.activeTab);
   let cls = (props.id===props.activeTab?'clicked':'');
    return (
        
        <button id={props.id} className={cls} onClick={props.tabClick}>{props.name}</button>
        
        
    )
}

export default tab;