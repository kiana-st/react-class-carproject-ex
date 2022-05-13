import React, { Component } from 'react';
import Card from './Card';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';

import styles from './cards.module.css';




class Cards extends Component {
    constructor() {
        super()
        this.state = {
            phoneData: [
                { id: 1, pic: car1, name: 'Benz', price: "20000 $" },
                { id: 2, pic: car2, name: 'Bugatti', price: '35000 $' },
                { id: 3, pic: car3, name: 'Ferrari', price: '40000 $' },
                { id: 4, pic: car4, name: 'Audi', price: '25000 $' }
            ]
        }
    }
    render() {
        const { phoneData } = this.state
        return (
            <div className={styles.container}>
                {/* <Card pic={car1} name="Benz" price="20000 $"/>
                <Card pic={car2} name='Bugatti' price='35000 $'/>
                <Card pic={car3} name='Ferrari' price='40000 $'/>
                <Card pic={car4} name='Audi' price='25000 $'/> */}
                {phoneData.map(car => <Card key={car.id} pic={car.pic} name={car.name} price={car.price} id={car.id} />)}

            </div>
        );
    }
}

export default Cards;