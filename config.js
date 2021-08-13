// This file is created to seperate the environment variables based on staging, development and production.\
// Forexample , having different api for development and production

const env = process.env.NODE_ENV || "development";
const configs = {
    development:{
        api:"http://localhost:5000/"
    },
    staging:{

    },
    production:{
        api:"https://craiglist-backend.herokuapp.com/"
    }
}[env];

export default configs;