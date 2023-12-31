import React from 'react';
import {FirstLi, LastLi, List, ListHead} from '../../styled/ContentInfo';

const DieselInfo = () => {
    return (
        <>
            <ListHead>
                Дизельні автомобілі давно увійшли до нашого життя і машин з таким видом палива стає помітно більше.
                Ці двигуни вже нічим не поступаються бензиновим, а часом і більш ефективні.
                Необхідно пам'ятати, що цей ефект досягається ціною високотехнологічних рішень інженерів, що говорить про неможлиість
                обслуговування таких двигунів в неспеціалізованих автосервісах. Перш ніж приступити до ремонту дизельної апаратури,
                необхідно провести чимало діагностик. До переліку послуг можна віднести основні:
                <FirstLi>Комп'ютерна діагностика апаратури</FirstLi>
                <List>Перевірка корекції паливних форсунок</List>
                <List>Вимір продуктивності паливного насоса</List>
                <List>Замір синхронності наповнення зворотного потоку палива</List>
                <List>Виявлення витоків палива та підсмоктування повітря</List>
                <List>Діагностика роботи свічок розжарювання </List>
                <LastLi>та інші методи.</LastLi>
            </ListHead>
            <ListHead>
                Ремонт дизельної паливної апаратури, як правило, має комплексний
                характер і може відчутно вдарити по бюджету автовласника,
                якщо вчасно не реагувати на неправильну роботу системи.
            </ListHead>
        </>
    );
};

export default DieselInfo;