import React from 'react';
import {FirstLi, List, ListHead} from '../../styled/ContentInfo';

const AlternatorInfo = () => {
    return (
        <>
            <ListHead>
                Проводимо дефектування та ремонт навісного обладнання двигуна, такого як:
                <FirstLi>Стартер</FirstLi>
                <List>Генератор</List>
                <List>Насос гідропідсилювача</List>
                <List>Компресор кондиціонера</List>
            </ListHead>
            <ListHead>
                Ремонт навісного обладнання ніколи не зрівняється
                з якістю нової запчастини - важливо про це пам'ятати.
            </ListHead>
        </>
    );
};

export default AlternatorInfo;