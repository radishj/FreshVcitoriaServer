const db = require('../models');

async function AllUnitTypes(){
    const unittypes = await db.unittype.findAll();
    if(unittypes) return unittypes;

    return false;
}; 

module.exports = {
    AllUnitTypes
};