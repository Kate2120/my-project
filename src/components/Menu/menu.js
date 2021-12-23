import React from 'react';
import './menu.css';
class Menu extends React.Component{
    render(){
        const {onClick} = this.props;
        let menus = [
            "Основное блюдо",
            "Горячие блюда",
            "Холодные закуски",
            "Посмотреть все"
        ];
        return <div className="menu"><ul>
            {menus.map((item, index) => <li id={index} onClick={onClick}>{item}</li>)}
        </ul></div>;
    }
}

export default Menu;