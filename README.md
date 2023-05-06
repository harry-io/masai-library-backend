##DETAILS ABOUT THE BACKEND API

1.  POST : /register

type : object

object properties :

name :
type : String
description : name of the user
email :
type : String
description : email of the user
password :
type : String
description : password of the user
isAdmin :
type : Boolean
description : Type of user i.e, user/admin

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Registration successful.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :User already exists.

2.  POST : /login

type : object

object properties :

name :
type : String
description : name of the user
email :
type : String
description : email of the user

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Login successful.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :User do not exist.

2.  POST : /login

type : object

object properties :

name :
type : String
description : name of the user
email :
type : String
description : email of the user

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Login successful.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :User do not exist.

3.  GET : /books

RESULT ON SUCCESS :
type : array of objects

object properties :

\_id : ObjectId
title : String
author : String
category : String
price : Number
quantity : Number
userID : String

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid token.

4.  GET : /books/:id

RESULT ON SUCCESS :
type : object

object properties :

\_id : ObjectId
title : String
author : String
category : String
price : Number
quantity : Number
userID : String

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid ID.

5.  GET : /books?category=fiction

RESULT ON SUCCESS :
type : array of objects

object properties :

\_id : ObjectId
title : String
author : String
category : Fiction
price : Number
quantity : Number
userID : String

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid ID.

6.  GET : /books?author=corey&category=fiction

RESULT ON SUCCESS :
type : array of objects

object properties :

\_id : ObjectId
title : String
author : corey
category : Fiction
price : Number
quantity : Number
userID : String

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid ID.

7.  POST : /books

type : object

object properties :

title :
type : String
description : title of the book

author :
type : String
description : author of the book

price :
type : Number
description : price of the book

quantity :
type : Number
description : quantity of the book

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Book added successfully.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid ID.

8.  PUT/PATCH : /books/:id

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Book updated successfully.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid ID.

9.  DELETE : /books/:id

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Book deleted successfully.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid ID.

10. POST : /order

RESULT ON SUCCESS :
type : object

object properties :
message :
type : String
description : message
example :Order successful.

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid token.

11. GET : /orders

RESULT ON SUCCESS :
type : array of objects

object properties :
user: { type: ObjectId, ref: "User" },
books: [{ type: ObjectId, ref: "Book" }],
totalAmount: Number,

RESULT ON FAILURE :
type : object

object properties :
message :
type : String
description : message
example :Invalid token.
