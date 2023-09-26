import React from 'react';
import {FirstLi, List, ListHead} from '../../styled/ContentInfo';

const TurboInfo = () => {
    return (
        <>
            <ListHead>
                Малокубатурний двигун і велика потужність – це тенденція сучасного розвитку машинобудування.
                Найчастіше у турбін з'являються проблеми на пробігу понад 100 тис.км, за умови регулярного та якісного обстеження автомобіля, але буває й інакше.
                Якщо на Вашому автомобілі з'явилися такі симптоми, значить час звернутися до фахівців:
                <FirstLi>Зникає тяга на якомусь із режимів роботи двигуна</FirstLi>
                <List>Підвищена димність з вихлопної труби</List>
                <List>Потіки мастила по турбіні</List>
                <List>Сторонні звуки в підкапотному просторі</List>
                <List>Підвищена витрата мастила</List>
                <List>Поява мастила у впускному тракті</List>
            </ListHead>
            <ListHead>
                Вчасно не знайдена проблема в системі турбонадува може призвести
                до виходу з ладу двигуна. При попаданні масла у впускний тракт
                воно перетворюється турбіною на масляний туман, що призводить
                до підвищення температури в камері згоряння, що позначається вкрай
                негативно на стані двигуна і значно скорочує його ресурсність.
            </ListHead>
            <ListHead>
                Так само, не рідкістю є ситуація, коли двигун «іде в рознесення»,
                при якій зупинити його може тільки механічне обмеження надходження
                масляно-повітряної суміші або поки масло в двигуні не скінчиться саме.
                Наслідком, як правило, є заклинювання двигуна. Всі ці проблеми можна виявити і виправити, якщо систематично
                проводити діагностику автомобіля.
            </ListHead>
        </>
    );
};

export default TurboInfo;