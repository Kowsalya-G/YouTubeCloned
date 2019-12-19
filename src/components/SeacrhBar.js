import React from 'react';

import { Paper,TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state={
        searchTerm: ''
    }
    handleOnChange=(event)=>{
        this.setState({ searchTerm : event.target.value});
    }
    handleOnSubmit=(event)=>{
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        console.log(this.props)
        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleOnSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleOnChange}></TextField>
                </form>
            </Paper>
        )
    }
}
export default SearchBar;