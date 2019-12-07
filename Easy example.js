/*
Made by koko#0012
*/
const mysql = require('mysql');
// Require the mysql
const connection = mysql.createConnection(config)
// Connection login

/*
{
	"host": "localhost",
	"Port": "3306",
	"user": "User",
	"password": "Password",
	"database": "DATABASE NAME"
}
*/
// tables i made 
// https://i.imgur.com/9y353R7.png
// does not need be like this make it however you like
//http://www.phpmyadmin.co is helpful
connection.query(`SELECT * FROM account WHERE id = '${message.author.id}'`, function (err, rows) { //selecting user id
    //SELECT - Select a table & row
    //* means everything
    //account = table
    //rename it to whatever table want it to target
    //id what row it needs to select
    //${message.author.id} id of the user it's trying to find
    if (err) throw err; // i just know i think this stop errors i have 0 idea what it fully does.

    connection.query(`UPDATE account SET message = ${rows[0].message + 1} WHERE id = '${message.author.id}'`)
    //UPDATE a table & row
    //select table account
    //in row set message = whatever it updates
    //Where the id in another row = something????
    
    connection.query(`INSERT INTO server (guild, welcomemsg, leavemsg, welcomechannel, leavechannel, lvlmsg) VALUES ('${message.guild.id}', '${welcomemsg}', '${leavemsg}', '${welcomechannel}', '${leavechannel}', ${lvlmsg})`)
    //insert a row or a bunch
    //(guild, etc) means the rows they are selecting to insert
    //after values are everything you insert per row
    //meaning i put down guidl - id in the first row so in guild id in (guild, etc) it will insert in that row.               
    // https://i.imgur.com/Bp60IHL.png

    //server is a another table
    /*
    Few tickes you can do is like
    sql = `INSERT INTO server (guild, welcomemsg, leavemsg, welcomechannel, leavechannel, lvlmsg) VALUES ('${message.guild.id}', '${welcomemsg}', '${leavemsg}', '${welcomechannel}', '${leavechannel}', ${lvlmsg})`
    connection.query(sql)
    by doing that you can make if statements 
    and also make it check if the row does not already have it do  
    
    if(rows.length < 1) {
    code
    }else{
    code
    }
    */

    //to delete something from a row is 
    sql = `DELETE FROM account WHERE ('${user.id}')`
    
    //database is data change it however you like
    //this will order it by worth so someone most money be data[0].money be mos tmoney in that database
    connection.query('SELECT * FROM data ORDER BY TotalWorth DESC', function (err, data) {
	
})
