import React from 'react';
import factions from 'data/factions';
import rules from 'data/rules';
import weapons from 'data/weapons';
import { get } from 'lodash';

export const DataContext = React.createContext();

const getUnitsByType = (faction, type) => (Object.values(factions[faction].units[type]));

const getWeapon = (name) => (weapons[name] || undefined);

const getResolvedUnitsByType = (faction, type) => {
    const units = getUnitsByType(faction, type);
    return units.map((unit) => ({
        ...unit,
        models: Object.values(get(unit, 'models', {})).map((model) => ({
            ...model,
            weapon: getWeapon(get(model, 'weapon', ''))
        }))
    }));
};

export const Data = {
    getFaction: (id) => (factions[id]),
    getFactions: () => (Object.values(factions) || {}),
    getRule: (name) => (rules[name] || {}),
    getUnitsByType,
    getResolvedUnitsByType
};

