import React from "react";
import "./footer.scss"

function Footer() {
    return (<footer>
        <div className="wrapper footer-container">
            <div className="footer-contact">
                <h3>Контакты</h3>
                <a href="https://github.com/P1aer">
                    Автор
                </a>
                <a href="https://www.spbstu.ru/">
                    Политех
                </a>
            </div>
            <div className="footer-info">
                <ul>
                    <li>Журнал</li>
                    <li>Акции</li>
                    <li>Информация</li>
                    <li>Доставка</li>
                    <li>Гарантия</li>
                    <li>Кредит и рассрочка</li>
                    <li>Сервисные центры</li>
                    <li>Услуги</li>
                    <li>Корпоративным клиентам</li>
                </ul>

                <ul>
                    <li>Аренда помещений</li>
                    <li>Обзоры</li>
                    <li>Барахолка</li>
                    <li>Форум</li>
                    <li>Конфигуратор</li>
                    <li>Подбор расходных материалов</li>
                    <li>Polyshop</li>
                    <li>Новости</li>
                    <li>Клуб Polyshop</li>
                </ul>

            </div>
        </div>


    </footer>)
}

export default Footer