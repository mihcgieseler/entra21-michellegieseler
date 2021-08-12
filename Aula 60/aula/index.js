constformat=require("pg-format");
constdb=require("./db");
(async () => {​​​​​​​​
try{​​​​​​​​
constres=awaitdb.query("SELECT NOW()")
console.log(res.rows)
    }​​​​​​​​ catch (error){​​​​​​​​
console.log(error.message)
    }​​​​​​​​
finally{​​​​​​​​
db.end();
    }​​​​​​​​
}​​​​​​​​)();

