import React from "react";
class SearchBar extends React.Component{
    state={term:''};
    onInputChange=(event)=>{
        let time=1;
        this.setState({term:event.target.value});
        if(this.state.term.length>4){

            
            console.log(this.state.term.length);
            time=setTimeout(this.onFormSubmit(event),5000); 
          }
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term}
                        onChange={this.onInputChange}
                        
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar