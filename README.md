## mongodb-testing

> Experiments and tests on using mongodb and mongoose.



### Prerequisites

1. **MongoDB**  
MongoDB Community Server v4.2.0, OS Windows x64 x64 was used for this project
2. **NodeJS**  
v10.15.2 was used for this project
3. **Nodemon** (Optional)  
Install this utility globally if you want to monitor server updates without restarting the server:  
`npm install -g nodemon`



### Notes

Methods of connecting to MongoDB using [**mongoose**](https://www.npmjs.com/package/mongoose) and [**mongodb**](https://www.npmjs.com/package/mongodb) (driver) are discussed in further detail in `server/index.js` and `server/index-mongodb.js` respectively. Refer to these files for references.

NOTE: **mongoose** looks to have ab advantage over **mongodb** since mongoose also has a default management system for managing MongoDB objects thru **schemas** and **models**.



## Usage

1. Create and start a local mongodb server from a local directory.  
   - Set the MongoDB data path only once  
      `mongod --dbpath="<PATH_TO_LOCAL_DIR>"`  
   - (or set to mongodb's default data directory)  
      `mongod --dbpath=`

2. Clone this repository  
`git clone https://github.com/ciatph/mongodb-testing.git`

3. Install dependencies.  
`npm install`

4. Run the web server.  
   - Normal command: `npm run start`
   - If **nodemon** is installed (for debugging):  
      `npm run dev:server`
   - (Others): Run the webserver that connects to MongoDB using the [mongodb](https://www.npmjs.com/package/mongodb) driver:  
      `npm run dev:mongodb`

5. Follow the **Querying** guide for testing.


## Querying

Listed are sample API endpoints for testing, available only for running `index.js`  
(`npm run start` or `npm run dev:server`).


### Cute Kittens API

1. [`http://localhost:3000/kittens/create/<KITTEN_NAME>/<KITTEN_COLOR>`](http://localhost:3000/kittens/create/<KITTEN_NAME>/<KITTEN_COLOR>)
   - Create and save new **Kitten** record.
   - Replace `<KITTEN_NAME>` and `<KITTEN_COLOR>` with test values

2. [`http://localhost:3000/kittens/list`](http://localhost:3000/kittens/list)
   - list all saved **Kitten** records


### Game Characters API

1. [`http://localhost:3000/game/create/<CHARACTER_CLASS>/<CHARACTER_NAME>?server=<SERVER_NAME>&guild=<GUILD_NAME>`](http://localhost:3000/game/create/<CHARACTER_CLASS>/<CHARACTER_NAME>?server=<SERVER_NAME>&guild=<GUILD_NAME>)
   - Create and save a new game **Character** record.
   - Replace the following placeholders with appropriate test values:
	   - `<CHARACTER_CLASS>` = can either be **knight**, **wizard** or **elf**
	   - `<CHARACTER_NAME>` = any String for a character name
	   - `<SERVER_NAME>`= any String for server
	   - `<GUILD_NAME>` = any String for guild name

2. [`http://localhost:3000/game/list`](http://localhost:3000/game/list)
	- list all saved game **Character** records.