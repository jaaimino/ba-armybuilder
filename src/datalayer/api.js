import React from 'react';
import factions from 'data/factions';
import rules from 'data/rules';
import weapons from 'data/weapons';
import { get, mapValues } from 'lodash';

export const DataContext = React.createContext();

const getUnitsByType = (faction, type) => {
    if (!faction || !type || !get(factions, `${faction}.units.${type}`))
        return [];
    return Object.values(factions[faction].units[type]);
};

const getWeapon = (name) => (weapons[name]);

const getRule = (name) => (rules[name])

const getResolvedWeapon = (name) => ({
    ...weapons[name],
    rules: get(weapons[name], 'rules', []).map((rule) => getRule(rule))
});

const getResolvedUnitsByType = (faction, type) => {
    if (!faction || !type) {
        return [];
    }
    const units = getUnitsByType(faction, type);
    return units.map((unit) => ({
        ...unit,
        weapons: mapValues(get(unit, 'weapons', {}), (model) => ({
            ...model,
            stats: getResolvedWeapon(get(model, 'weapon', ''))
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

