export const refs = (list, collection, lookup) => {
    return list.map((item) => {
        const lookupObj = {};
        lookupObj[lookup] = item;
        console.log(list);
        const lookedUpItem = collection.findOne(lookupObj);
        return lookedUpItem;
    });
}