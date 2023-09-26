import React from 'react';
import {FirstLi, LastLi, List, ListHead} from '../../styled/ContentInfo';

const EngineInfo = () => {
    return (
        <>
            <ListHead>
                Кожен двигун будь-якого автомобіля з часом починає проявляти
                такі симптоми:
                <FirstLi>Затруднений запуск</FirstLi>
                <List>Детонація при глушінні</List>
                <List>Витрата масла</List>
                <List>Течі масла по двигуну</List>
                <List>Підвищена димність</List>
                <List>Витік охолоджуючої рідини</List>
                <List>Сторонні звуки з підкапотного простору</List>
                <LastLi>та багато інших.</LastLi>
            </ListHead>
            <ListHead>
                Перш ніж дати рекомендацію щодо ремонту двигуна,
                ми проводимо максимально розгорнуту діагностику, до якої входить:
                <FirstLi>Кілька видів комп'ютерної діагностики</FirstLi>
                <List>Пошук витоків по всмоктуючий тракт димогенератором</List>
                <List>Діагностика паливної системи</List>
                <List>Замір компресії</List>
                <List>Опресування системи охолодження</List>
                <List>Ендоскопія</List>
                <List>Виявлення відпрацьованих газів у системі охолодження</List>
                <LastLi>та інші процедури.</LastLi>
            </ListHead>
        </>
    );
};

export default EngineInfo;