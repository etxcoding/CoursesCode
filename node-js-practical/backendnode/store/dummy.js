const db = {
    'user': [
        { id: 1, name: 'Carlos' },
    ],
};

const list = (collection) => {
    return db[collection];
}

const get = (collection, id) => {
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

const upsert = (collection, data) => {
    db[collection].push(data);
}

const remove = (collection, id) => {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};