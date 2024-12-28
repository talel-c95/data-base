# databases-sprint


# Before Starting!

*Follow [these](https://docs.google.com/document/d/1v8jmJM7YciubfTptN5TdYd24ZllpdWE2GqH3sU89L8A/edit?usp=sharing) steps in order to install mysql in your PC.*

*Then update the files in the config directory by modifying the user and password fields to fit your own credentials.*

## Bare Minimum Requirements

You'll be working with SQL (Structured Query Language) to interact with a MySQL database. MySQL is a RDBMS (Relational Database Management System) that is incredibly popular and utilizes SQL.

You've already learned to store data for your server-side applications "in-memory" using JavaScript variables and by writing files to disk. In this sprint, after learning to use SQL to define table *schemas* and write *queries* you're going to create a MySQL database to persist data for your blog app. Persistence you'll recall is the ability to remember data even after the server is restarted, and most applications require it.

### SQL Basics

w3schools.com has an amazing tutorial, to get you started with SQL language, spend some time there and get yourself familiarized with the syntax, creating databases, tables, and querying and editing them.

### Create a MySQL Database From the Interactive Prompt

- [ ] Invoke the interactive mysql prompt for the running server, logged in as the `root` user, with the `mysql -u root -p` command, issuing the password you just created when prompted.
- [ ] From the interactive prompt, `CREATE` and `USE` a new database called "blog".
- [ ] Create a new table "posts" with at least 3 columns, one of them set as a primary key and the others referring to the title and body of the post.
- [ ] Use the `DESCRIBE <table-name>` command to verify the setup of your new table.
- [ ] `INSERT` some new rows into your new table.
- [ ] Execute several queries.
- [ ] Use `UPDATE` statement in at least 2 different ways.
- [ ] Exit the interactive prompt.

### Learn to Use a Schema Visualizer

It's incredibly common to visually design schemas. Doing so allows you to architect your schemas without writing actual code, and to communicate your intentions to team members. Start by downloading [MySQL Workbench], a very robust IDE-like application that comes with visual schema designers.

Follow the Modeling Interface section under the Database Design and Modeling Chapter of the [MySQL Workbench Manual] to:

- [ ] Create a schema with 2 new tables. Each table needs a primary key defined on one of its columns. One of the tables should have a foreign key defined on one if its columns that will relate it to the other table (think of the relationship between the tables users and posts in the blog database).
- [ ] Take a screenshot of the schema you designed and be prepared to talk about it with another engineer.
- [ ] Using the [Forward Engineering wizard], generate the SQL code and transform the created visual data model into a physical database.

### In this repo

Now you'll begin actual work on the codebase in this repo. Start by familiarizing yourself with the directories contained in this repo.

### `Repo`

* `schema.sql` is a skeleton schema file intended to create and use a database, and create new tables within it. Aside from writing SQL at the command line, you can also [write it in a file][Executing SQL statements from a file] and load it into a running MySQL server. Follow the link and read enough to learn how. In the `schema.sql` file you will be writing one or more `CREATE TABLE` statements that will define the structure of your database tables and loading them into your running MySQL server.
  * **NOTE**: if when running your SQL code from this file, and find a bug in the schema or how it was generated, you'll want to "drop" all the new tables before running it again. This will reset your database by throwing away all data and schema information, to give you a blank slate before re-running your improved version of the SQL code. Look up how to do this if and when the need arises
* `index.js` will be the entrypoint for your Node.js web server created in `app.js` utilizing `express`, the ubiquitous JavaScript web application framework. Express is an MVC framework, where the view is considered to be the Express server's response. Code for the models and code for the controllers exist within their own directory, mentioned below. For more information on how Express utilizes MVC, check out the the [Getting started](http://expressjs.com/starter/installing.html) section of the Express docs, but remember you're under extreme time pressure for this sprint, and, you'll be getting more Express content in upcoming sprints.

* `spec/server-spec.js` contains a mocha spec for testing your Node server's ability to read and write the database. This spec is not complete! It contains several lines commented with "TODO". You'll be customizing those lines to match the details of the database tables you create.

#### `routes`

* A directory that holds different routes to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
To learn more about routes and controllers check this [MDN Express Tutorial].
Everything is already implemented for you, no need to change anything there but it's recommended to take a look and try to understand what is provided.

#### `controllers`

* A directory with files for controller functions to get the requested data from the models and send the appropriate response.
You will be working on these files after completing the models of your database entities.

#### `database`

* A directory related to the pure SQL models.
* `database/index.js` uses the `mysql2` npm module to connect to the database server running on your computer.
* `database/models/index.js` is an interface to assemble the different models into a single object and export them at once.
* `database/models/users.js`, `database/models/posts.js` and `database/models/comments.js` define the `users`, `posts` and `comments` models that your application will use. Skeletons of the models have already been created but you'll have to write out the details for their methods.

#### `client`

* An empty directory for you to put your client side code in. Either use your own blog-client implementation, or, if there is something irreparably wrong with your code, use the Rebootkamp Tunisia solution code.

#### `orm`

* `orm/index.js` contains the Sequelize instance and a a db object holding the different sequelize models with the respective associations for you to use later in the sprint when you start refactoring your Node server to use the *Sequelize ORM* to read and write data to the MySQL. You'll be learning how ORMs allow you to read and write to the database in more JavaScript-like syntax instead of in raw SQL strings.
* Model files to define the sequelize model that represents each table with the required fields.
  * **NOTE**: You will not need to run the schema file anymore but you will be using it to complete the model files, also you may think of adding a file to populate the database with already existant records.

#### `controllers-pure-sql`

* When you begin the part of this sprint where you refactor to use an ORM, you will copy all of the code you have in the `controllers` directory into the `controllers-pure-sql` directory. This way you will be able to easily present your work on both versions without navigating your repo's commit history.

### Create MySQL Persistent Storage for blog App

- [ ] Design a multi-table schema to hold data for your blog App.
  - [ ] Start by using [MySQL Workbench Manual] to visually design your multi-table schema.
  - [ ] Edit the file `schema.sql` to define, in SQL, the tables you have visually designed. Load the schema into your MySQL server with `mysql -u root < path/to/schema.sql`.
  - [ ] Open the `mysql` interactive prompt and use the `SHOW TABLES` and `DESCRIBE <table-name>` to verify that your tables were created correctly.
- [ ] Take a look at the tests in `spec/server-spec.js`. Before you start hacking on your persistent server, read the tests and try to understand what they're trying to do.
  * **NOTE**: The tests depend on the details of the schema you created, so you will need to customize the spec file with some of these details before it will run. Look for 'TODO' statements in the spec and make sure to address them all
- [ ] Put all the pieces together to create a persistent SQL-backed blog-server! Use `index.js` as the entrypoint into your application. You will have to build out the methods in the files inside `database/models` and `controllers` folders. Feel free to use or get inspiration from any of your previously written blog-server code. Sometimes code reuse across applications works like a charm and sometimes it is quite messy. Observe what works and what doesn't throughout the process of building out this app, using what you can from existing code, and make note afterwords where you were the most efficient.
  * Note: Depending on the code you reuse from your earlier work, you may need to remove the in-memory array that used to store your data as part of the node process. Every new post must now result in a write to the database, and every request for data should result in a read. You should no longer need to cache any of that data in memory as part of the application
- [ ] Have your web server connect to the MySQL database, and use the database connection to store data as posts come in.
- [ ] After storing some new posts, open up the mysql command line prompt, use and query your database to look at the new added posts.
- [ ] Manually test your server's persistence by sending some blog posts to your server and then stopping the running Node server. Start your Node server up again, connect to it with the client or test it with Thunder Client extension in your VS Code, and see whether the posts you added last time are still there!
- [ ] If you haven't already, make all the unit tests pass.
  * **NOTE**: Before running the tests you should start by creating the test database, run the `schema.sql` file again after changing the database name to `blog_test`
- [ ] Write more unit tests to provide better test coverage of your application. How does it feel, given the time constraints, to be asked to figure out what kinds of tests to write in addition to the ones you already have? Your current predicament represents a very common engineer experience.

### Refactor with Sequilize ORM

An ORM (Object-Relational Mapping) is usually a library that does the work of converting between objects in your code and rows in a database, so you don't have to fill your code with boilerplate SQL statements or raw SQL strings.

- [ ] Read the Sequelize docs and explore the `orm` folder to understand how the ORM works.
- [ ] Refactor your existing server code to use Sequelize.
  * Note that you may use the `data.json` file to populate your local database, the file contains a sample of some records related to different tables so you can be inspired by that when you build the database schema of the advanced content.
- [ ] Make sure your persistent blog-server still passes all the tests it passed before.
  * Note that you need to modify some tests depending on the resuslts coming from sequelize queries

### Tests

- [ ] Add at least 2 additional tests inside `spec/server-spec.js` that will better assure future users that your application is behaving as expected.

## Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.

- [ ] Make sure you have a `users` table in your database and that it is connected properly to the posts table. As it's bad database design to store the same piece of data, such as a username, in multiple tables. Store the username ONLY in the users table, and use a foreign key to relate posts to the user who added them.
- [ ] What's that? You need to make changes to the table schema, but there's already precious user data stored in those tables that must not be lost? If you were to DROP the table and re-`CREATE`, your users would be furious! Time to teach yourself the `ALTER TABLE` command.
- [ ] Complete the models and controllers related to the users table, and perform the necessary modifications to the posts controllers and models taking into consideration the changes done on the posts table shcema.
- [ ] Now you can focus on the comments table, so try to complete the schema with a full picture of the blog application connecting all three tables together.
- [ ] Complete the models and controllers related to the comments table.
- [ ] Now, think about the query to fetch all posts including the relative comments along with the usernames of posters and commenters. Take a look at the example provided in the `utils` folder and try to build the helper function to reshape the query results collection into the same example structure.
  * Note: Take a look at the MySQL documentation to learn more about [JOIN Clause], Also consider to order the posts and comments based on the `createdAt` field [ORDER BY Clause]
- [ ] At this point, your implementation should work correctly but it's not secure enough against SQL Injection attacks. Refactor your work using the prepared statements of MySQL2 client with `execute` helper.
- [ ] Take advantage of the `.promise()` function of MYSQL2 client to perform promise based queries to the batabase connection.
- [ ] Read up on indexing, and Investigate how it can improve the performance of your queries. Profile a query against a non-primary column. Then index the column and re-run.


## Docs

### Relevant SQL Documentation

* [MySQL `CREATE TABLE` reference docs]
* [MySQL `SELECT` reference docs]
* [MySQL `INSERT` reference docs]
* [MySQL client for Node.js]
* [Node mysql module docs]
* [Executing SQL statements from a file]
* [A Visual Explanation of SQL Joins]
* [SQLfiddle]
* [MySQL Workbench]

### Relevant ORM Documentation

* [Sequelize ORM for Node]
* [Object Relational Mapping - Wikipedia]

[Relational Databases]:https://en.wikipedia.org/wiki/Relational_database
[SQLCourse.com]:http://www.sqlcourse.com/intro.html
[Interactive tutorial on SQL]:http://sql-pql.herokuapp.com/
[DB designer]:http://dbdsgnr.appspot.com/
[MySQL Workbench Manual]:https://dev.mysql.com/doc/workbench/en/wb-design-modeling-interface.html
[Forward Engineering wizard]:https://dev.mysql.com/doc/workbench/en/wb-forward-engineering-live-server.html
[MDN Express Tutorial]:https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
[Memcached]:http://www.memcached.org/
[MySQL `CREATE TABLE` reference docs]:https://dev.mysql.com/doc/refman/5.1/en/create-table.html
[MySQL `SELECT` reference docs]:https://dev.mysql.com/doc/refman/5.0/en/select.html
[MySQL `INSERT` reference docs]:http://dev.mysql.com/doc/refman/5.5/en/insert.html
[JOIN Clause]:https://dev.mysql.com/doc/refman/8.0/en/join.html
[ORDER BY Clause]:https://dev.mysql.com/doc/refman/8.0/en/sorting-rows.html
[MySQL client for Node.js]:https://www.npmjs.com/package/mysql2
[Node mysql module docs]:https://github.com/felixge/node-mysql
[Executing SQL statements from a file]:https://dev.mysql.com/doc/refman/5.0/en/batch-mode.html
[Sequelize ORM for Node]:http://sequelizejs.com/
[Object Relational Mapping - Wikipedia]:http://en.wikipedia.org/wiki/Object-relational_mapping
[Memcached site]:http://www.memcached.org/
[Node-memcached module]:https://github.com/3rd-Eden/node-memcached
[A Visual Explanation of SQL Joins]:http://www.codinghorror.com/blog/2007/10/a-visual-explanation-of-sql-joins.html
[SQLfiddle]:http://sqlfiddle.com/
[MySQL Workbench]:http://dev.mysql.com/downloads/workbench/
[Sequilize docs]:http://docs.sequelizejs.com
