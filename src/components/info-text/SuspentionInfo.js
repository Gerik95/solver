import React from 'react';
import {FirstLi, LastLi, List, ListHead} from '../../styled/ContentInfo';

const SuspentionInfo = () => {
    return (
        <>
            <ListHead>
                Діагностику ходової частини автомобіля необхідно проводити
                не рідше одного разу на місяць у профілактичних цілях, тому що простіше і
                дешевше усунути проблему на самому початку,
                ніж потім комплексно міняти деталі вузлами.
            </ListHead>
            <ListHead>
                Первинні ознаки несправностей в ходовій частині:
                <FirstLi>Шум при русі</FirstLi>
                <List>Стуки та скрипи підвіски</List>
                <List>Проблеми з гальмуванням</List>
                <LastLi>тощо.</LastLi>
            </ListHead>
            <ListHead>
                Якщо проблема вже проявила себе, то необхідно
                негайно звертатися за допомогою у професіоналів,
                щоб убезпечити використання транспортного засобу
                та уникнути серйозних поломок надалі.
            </ListHead>
            <ListHead>
                Наша компанія надає цю послугу на умовно безкоштовній основі.
                Для більш детальної інформації Вам необхідно написати нам у месенджер.
            </ListHead>
        </>
    );
};

export default SuspentionInfo;