import React from 'react';
import factions from 'data/factions';
export const DataContext = React.createContext();

export const Data = {
    getFaction: (id) => (factions[id]),
    getFactions: () => (Object.values(factions)),
    getUnits: (faction) => (factions[faction].units)
};