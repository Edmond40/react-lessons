import React from 'react'
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';
export const carDetails = [
        {
            id: 1,
            name: "Camry",
            price: 2000,
            category: "Brand New",
            image: car1,
            isNewCar : {},
            
        },
        {
            id: 2,
            name: "Honda",
            price: 14000,
            category: "Second hand",
            image: car2,
            isNotNewCar : {}
             
        },
        {
            id: 3,
            name: "Hummer",
            price: 20000,
            category: "Second hand",
            image: car3,
            isNewCar: {}
        },
        {
            id: 4,
            name: "Accord",
            price: 40000,
            category: "Brand New",
            image: car4,
            isNotNewCar: {},
        },
    ]