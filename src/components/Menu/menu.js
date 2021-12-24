import React, {useState} from 'react';
import './menu.css';
let arrayDish = [
    {
        title: "Салат с креветками, авокадо и грейпфрутом",
        description: "Очищенные креветки обжарить на растительном масле. Выложить на салфетку и охладить.",
        category: "Салаты",
        image: 'images/krevetki.jpg',
    },{
        title: "Сельдь под шубой с плавленым сырком",
        description: "Отличие этого рецепта от классического, как видно, замена картофеля на плавленые сырки. Итак, выкладываем слоями: 1- тертые на терке сырки, стараемся не сильно приминать, чуть-чуть смазываем майонезом. 2- мелко нарезанное филе сельди (если рыба слишком соленая, лучше ее вымочить, чтоб ушла лишняя соль).",
        category: "Салаты",
        image: 'images/shuba.jpg',
    },{
        title: "Закуска с тунцом",
        description: "Салат с тунцом - частый гость на нашем столе, простой и вкусный из доступных продуктов. Предлагаю вам вариант такого салата для праздничного стола. ",
        category: "Закуски",
        image: 'images/tunec.jpg',
    },{
        title: "Запеченный лосось с овощами и лаймом",
        description: "Запеченный в духовке лосось с овощами и лаймом — красивое праздничное блюдо. Лосось настолько вкусная рыба, что даже с минимальным набором специй запеченный в духовке он получается невероятно вкусным.",
        category: "Горячие блюда из рыбы",
        image: 'images/losos.jpg',
    },{
        title: "Мясо Слоёное",
        description: "Сочная, нежная, ароматная свиная шея с луком, морковью и шампиньонами украсит и сделает любой праздник ещё вкуснее!",
        category: "Горячие блюда из мяса",
        image: 'images/myaso.jpg',
    },{
        title: "Запеченная курица",
        description: "Новогодние блюда должны быть не только красивыми и вкусными, но еще и полезными. Птица, приготовленная при низких температурах, получается сочной, нежной и очень вкусной.",
        category: "Горячие блюда из птицы",
        image: 'images/ptica.jpg',
    },{
        title: "Закуска с сырным кремом и перцем",
        description: "Ни один праздник не обходится без закусок - это вкусно, удобно, можно много разных начинок придумать. Предлагаю попробовать сочетание печеного болгарского перца и сырного крема.",
        category: "Закуски",
        image: 'images/zakuska.jpg',
    },{
        title: "Галета Яблоки на твороге",
        description: "Люблю галеты, особенно из цельнозерновой муки или ржаной. Начинка тоже по моему вкусу. Не приторная. Праздничный аромат добавит цедра апельсина или лимона, а можно вместе.",
        category: "Выпечка",
        image: 'images/galeta.jpg',
    }
];
let menus = [
    "Горячие блюда из мяса",
    "Горячие блюда из птицы",
    "Салаты",
    "Горячие блюда из рыбы",
    "Закуски",
    "Выпечка",

];
function Filter() {
    /*const [arrayDish, smth] = useState();*/

    return (
        <div>
            <div className="menu">
                <ul>
                {menus.map((item, index) => <li key={index} id = {index}>{item}</li>)}
                </ul>
            </div>
        <div className="container">
            {arrayDish.map(item =>
                <div className="prew">
                <div className="img-prew">
                    <img src={item.image} alt={item.title} title={item.title}/>
                </div>
                <span className="h2">
                    {item.title}
                </span>
                <p>
                    {item.description}
                </p>
            </div>
            )}
        </div>
        </div>
    );
}
/*class Menu extends React.Component{
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
console.log(arrayDish);*/
export default Filter;