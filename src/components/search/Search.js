import React, { Component } from 'react';
import {TextField,MenuItem,Select} from '@material-ui/core';
import axios from 'axios';
import { ImageResults } from '../image-results/ImageResults';



 class Search extends Component {
     state = {
        searchText:'',
         amount:15,
         apiUrl:'https://pixabay.com/api/',
         apiKey:'21564737-e96f01cbac7ca78c2bfde9aa5',
         images:[]
     }
     onTextChange = (e) => {
         
        this.setState({[e.target.name]:e.target.value},
            ()=>{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images:res.data.hits}))
                .catch(err => console.log(err));
            });
            console.log(this.state.images)
     }
     onAmountChange = (e,index,value) => {
        this.setState({[e.target.name]:e.target.value},
            ()=>{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images:res.data.hits}))
                .catch(err => console.log(err));
            });
            console.log(this.state.images)
     }
    render() {
        return (
            <div styles="padding:10px">
                <h2>Search</h2>
                <div className="searchInputs">
                <TextField
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                fullWidth={true}
                />
                <Select
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    // floatingLabelText="amount"
                    >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10} >10</MenuItem>
                    <MenuItem value={15} >15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={45} >45</MenuItem>
                </Select>
                </div>
                
        <div className="imageResults">
            {
                this.state.images.map(img => (
                    <ImageResults 
                    imgUrl={img.largeImageURL} 
                    alt={img.tags} 
                    likes={img.likes} 
                    downloads={img.downloads} 
                    userImage={img.userImageURL}
                    userName={img.user}
                    imagePageUrl={img.pageURL}
                    views={img.views}
                    tags={img.tags}
                    />       
                ))
            }
        </div>
            </div>
        )
    }
}
export default Search;