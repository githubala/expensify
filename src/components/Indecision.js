import AddOptions from "./AddOptions";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionsModal from "./OptionsModal";

//this is not the jsx'
//const template = React.createElement('div', {}, 'this is not the jsx');
//const template = <p>this is the JSX</p>;
//ReactDOM.render(template, document.getElementById('app'));


//******************//
export default class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);  
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);  
        this.handleOptionModal = this.handleOptionModal.bind(this);
        this.state = {
            options:[],
            selectionOption:undefined
        };        
    }
    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options){
            this.setState(()=>({
                options: options
            }));
        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }        
    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
    handleOptionModal(){
        this.setState(()=>({
            selectionOption:undefined
        }));
    }
    handleRemoveAll() {
       this.setState(()=>{
            return{
                options:[]
            };           
       });
    }
    handlePick(){
        const random = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[random];
        this.setState(()=>({
            selectionOption :option
        }));
        //alert(this.state.options[random]);
    }
    handleAddOption(option){  
        if(!option){
            return 'enter a valid option';
        }else if(this.state.options.indexOf(option)>-1){
            return 'entered option is already exists';
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat([option])
            }
        });
    }
    handleDeleteOption(optionToRemove){
        console.log("hro",optionToRemove);
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }
    render(){
        const title ="Indecision";
        const subtitle ="put your hand on the computer";
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                hasOptions={this.state.options.length >0}
                handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions  
                handleAddOption={this.handleAddOption}
                />
                <OptionsModal
                handleOptionModal = {this.handleOptionModal}
                selectionOption = {this.state.selectionOption}
                />
            </div>
        )
    }
}

Indecision.defaultProps = {
    options:[]
}














