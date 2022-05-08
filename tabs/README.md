# Create a tabbed panel

## Steps
- make a react app with root folder tabs
- cleanup App.js and App.css leaving just containing div
- make a folder in src/components and three components TabbedPanel, TabButton, TabContent
- make index.js and style.css in each
- in TabbedPanel create a div to contain tab buttons and styles like bg color
- and state to controll visibility of tabs and a callback method

## Concepts
### css
- class inside an element
> button.clicked {
- inherit background
> background: inherit;
- border top
> border-top: none;
- giving tab more width by padding of child buttons
> padding: 14px 16px;

### reactjs
- passing callback methods and calling them inside child
> onClick={props.tabClick}
- access the id of the button clicked in call back method
> setActiveTab(e.target.id);
- deciding element class dynamically
> let cls = (props.id===props.activeTab?'clicked':'');
> className={cls}
- double curly braces where a javascript object is passed inside jsx syntax
> let dsp = props.id ===(props.activeTab+'Content')? 'block':'none';
> style={{display:dsp}}
- useState hook
> const [activeTab, setActiveTab] = useState();
- any code inside return without html or react element will be printed as such


### js
- destructuring array, used in useState 
> const [a ,b] = [1,2,3,4,5]; is a=1, b=2