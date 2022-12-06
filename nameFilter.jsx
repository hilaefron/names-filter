import React,{Component} from "react";

class Filter extends Component {

    
    state = { 
        names:[
            "Shashi Koshy",
            "Dhriti Taneja",
            "Dipa Mishra",
            "Ansh Thakkar",
            "Lakshmi Thaker",
            "Sushila Matthai",
            "Shresth Nigam",
            "Bhavana Biswas",
            "Vasudha Mangat",
            "Priya Saran"
        ],
        includes:false,
        length:false,
        startWith:false
    } 
     componentDidUpdate(){
        console.log(this.state.names);
    }


    render() { 
        let newNames=this.state.names;
        if(this.state.includes){
            newNames= newNames.filter(name=>name.includes('r','R'));
        } 
        if(this.state.length){
            newNames= newNames.filter(name=>name.length>12);
        } 
        if(this.state.startWith){
            newNames= newNames.filter(name=>name.startsWith('Bh'));
        } 
        return (
            <div>
                <input type="checkbox" name="" id="" 
                onChange={(e)=>this.includes(e)} />
                <label htmlFor="">filter by r/R</label>
                <br />
                <input type="checkbox" name="" id="" 
                onChange={(ev)=>this.length(ev)}/>
                <label htmlFor="">filter by length</label>                
                <br />
                <input type="checkbox" name="" id="" 
                onChange={(eve)=>this.startWith(eve)}/>
                <label htmlFor="">filter by start Bh</label>
                <div>
                <ul>{newNames.map(name=><li 
                key={newNames.indexOf(name)}
                >{name}</li>)}</ul>
                </div>
                
            </div>
        );
    }
    includes=()=>{
        this.setState({includes: !this.state.includes})
    }
    length=()=>{
        this.setState({length: !this.state.length})
    }
    startWith=()=>{
        this.setState({startWith: !this.state.startWith})
    }


}

 
export default Filter;