const fs = require('fs');
const { db, AlcolholicGuy } = require('../server/db');
const data = require('../data/alcolholicguys.json');


const seed = async () => {
    await db.sync({
        force: true
    })

    await Promise.all(data.map(async drunkGuy => {
        const drunkyGuy = await AlcolholicGuy.create({
            name: drunkGuy.name
        })
    }));
    db.close();
    console.log(`
      Seeding successful!
      Time to do stuff!
    `);
};

seed().catch(err => {
    db.close()
    console.log(`
      Error seeding:
      ${err.message}
      ${err.stack}
    `);
});