import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'srv990.hstgr.io', //doit config MySQL a distance pour qu'il donne l'host ''a faire dans hostinger''
    user: 'u537339505_belariniUser',
    password: 'belariniAdmin@25',
    database: 'u537339505_belarini',
});

export default pool;