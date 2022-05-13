import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './card.module.css';
import down from '../images/down.svg';
import up from '../images/up.svg';


class Card extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }))
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }
    render() {
        const { pic, name, price, id } = this.props
        const { counter } = this.state
        return (
            <div className={styles.container}>
                <img src={pic} alt='car' />
                <h3><Link to={`/products/${id}`}>{name}</Link></h3>
                <p> {price} {counter ? `* ${counter} = ${counter * Number(price.split(" ")[0])} $` : ""}</p>

                <div className={styles.counter}>
                    <img src={down} className={!this.state.counter ? styles.deactive : ""} alt="arrow" onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img src={up} alt="arrow" onClick={this.upHandler} />


                </div>
            </div>
        );
    }
}

export default Card;