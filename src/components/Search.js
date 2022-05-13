import React, { Component } from 'react';
import styles from './search.module.css';


class Search extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }
    changeHandler = (event) => {
        this.setState({
            text: event.target.value,
        })
        // console.log(event.target.value)
    }
    render() {
        return (
            <div className={styles.container}>
                <p>Search what you want</p>
                <div>
                    <input type="text" placeholder='Search ...' value={this.state.text} onChange={this.changeHandler} />
                    <br/>
                    <br/>
                    <span>{this.state.text}</span>
                </div>
            </div >
        );
    }
}

export default Search;