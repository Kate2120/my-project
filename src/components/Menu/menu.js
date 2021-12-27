import React, {useState} from 'react';
import './menu.css';
import {arrayDish, menus} from '../Data/data';

function Filter() {
    let [arrayDishNew, change] = useState(arrayDish);
    let [arrayOneDishNew, changeOne] = useState([]);
    let nameCategory;
    let currentTitle;
    let sortDish = function(){
         document.addEventListener('click',function (event) {
             if (event.target.innerHTML === "Показать все"){
                 arrayOneDishNew = [];
                 changeOne(arrayOneDishNew);
                 arrayDishNew = arrayDish;
                 change(arrayDishNew);
             } else {
                 if (event.target.tagName === "LI") {
                     nameCategory = event.target.innerHTML;
                     arrayDishNew = arrayDish.filter(function (item) {
                         return item.category === nameCategory;
                     })
                     arrayOneDishNew = [];
                     changeOne(arrayOneDishNew);
                     change(arrayDishNew);
                 } else {
                     if (event.target.tagName === "SPAN") {
                         currentTitle = event.target.innerHTML;
                         arrayOneDishNew = arrayDish.filter(function (item) {
                             return item.title === currentTitle;
                         })
                         arrayDishNew = [];
                         changeOne(arrayOneDishNew);
                         change(arrayDishNew);
                     }
                 }
             }
         })


     }
    return (
        <div>
            <div className="menu">
                <ul>
                {menus.map((item, index) => <li key={index} id = {index} onClick={sortDish}>{item}</li>)}
                </ul>
            </div>
        <div className="container">
            {arrayDishNew.map(item =>
                <div className="prew">
                <div className="img-prew">
                    <img src={item.image} alt={item.title} title={item.title} />
                </div>
                <span className="h2" onClick={sortDish}>
                    {item.title}
                </span>
                <p>
                    {item.description}
                </p>
                </div>
            )}
            {arrayOneDishNew.map(item =>
                <div className="product">
                    <h2>{item.title}</h2>
                    <div className="OneProduct">
                    <div className="img-one">
                        <img src={item.image} alt={item.title} title={item.title} />
                    </div>
                    <div className="description">
                        <p>
                            {item.description}
                        </p>
                    </div>
                    </div>
                </div>
            )}
        </div>
        </div>
     );
}

 export default Filter;