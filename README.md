Dev Desk Student API Endpoints

Introduction
This document describes the Student data workflow the Dev Desk Node DB & API back end.

Available STUDENT Endpoints:

.post to https://devdeskdb.herokuapp.com/api/auth/students/register
POST Message body JSON:
{“username”:”username_value”, “password”:”password_value”}
Information:
The username is stored in the students table, and the password is hashed using a salted algorithm, and stored as an encrypted string.
An email is automatically generated and sent to the user.
.post to https://devdeskdb.herokuapp.com/api/auth/students/login
POST Message body JSON:
{“username”:”username_value”, “password”:”password_value”}
Information:
The username is used to search for a STUDENT record. If a record is found, the password is validated to the salted/hashed password stored in the DB. Upon successful validation, a Json Web Token is generated, and returned the client.

.get to https://devdeskdb.herokuapp.com/api/students
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Array:
[{ID, Username1}, {ID, Username2},]
Information:
Authorization via valid JWT token is required on this endpoint. Lists all records in the STUDENTS Table.

.get to https://devdeskdb.herokuapp.com/api/students/:id
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Object: 
[studentid:”id”, username:”username_value”]
Information:
Authorization via valid JWT token is required on this endpoint. A single record from the STUDENTS Table based on id.

.get to https://devdeskdb.herokuapp.com/api/students/:id/requests
GET Message Parameters:
students/{STUDENT_id_value}/requests 
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Array:
[{ID, request_category, request_date, request_details, creatorId, helperId, resolved}, ]
Information:
Authorization via valid JWT token is required on this endpoint. Displays ALL records in the REQUESTS Table Based on the ID_Value included in the API get request for a particular STUDENT.

.post to https://devdeskdb.herokuapp.com/api/students/:id/image/
POST Message Header:
{“authorization”:”TOKEN_VALUE”}
POST Message body JSON:
{“file:”file.jpg”}
Information:
Authorization via valid JWT token is required on this endpoint. Post to this endpoint stores an image in server file system, and returns the file path.

.get to https://devdeskdb.herokuapp.com/api/students/:id/image
GET Message Parameters:
students/{STUDENT_id_value}/image 
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body FILE:
[student-id.jpg]
Information:
Authorization via valid JWT token is required on this endpoint. Serves a single .jpg from server.

Available HELPER Endpoints:

.post to https://devdeskdb.herokuapp.com/api/auth/helpers/register
POST Message body JSON:
{“username”:”username_value”, “password”:”password_value”}
The username is stored in the students table, and the password is hashed using a salted algorithm, and stored as an encrypted string.
An email is automatically generated and sent to the user.
.post to https://devdeskdb.herokuapp.com/api/auth/helpers/login
POST Message body JSON:
{“username”:”username_value”, “password”:”password_value”}
The username is used to search for a HELPERS record. If a record is found, the password is validated to the salted/hashed password stored in the DB. Upon successful validation, a Json Web Token is generated, and returned the client.
An email is automatically generated and sent to the user.
.get to https://devdeskdb.herokuapp.com/api/helpers
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Array:
[{ID, Username1}, {ID, Username2},]
Information:
Authorization via valid JWT token is required on this endpoint. Lists all records in the HELPERS Table.

.get to https://devdeskdb.herokuapp.com/api/helpers/:id
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Object:[helperid:”id”, username:”username_value”]
Information:
Authorization via valid JWT token is required on this endpoint. A single record from the HELPERS Table based on id.

.get to https://devdeskdb.herokuapp.com/api/helpers/:id/requests
GET Message Parameters:
students/{HELPER_id_value}/requests 
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Array:
[{ID, request_category, request_date, request_details, creatorId, helperId, resolved}, ]
Information:
Authorization via valid JWT token is required on this endpoint. Displays ALL records in the REQUESTS Table Based on the ID_Value included in the API get request for a particular HELPER.

.post to https://devdeskdb.herokuapp.com/api/helpers/:id/image/
POST Message Header:
{“authorization”:”TOKEN_VALUE”}
POST Message body JSON:
{“file:”file.jpg”}
Information:
Authorization via valid JWT token is required on this endpoint. Post to this endpoint stores an image in server file system, and returns the file path.

.get to https://devdeskdb.herokuapp.com/api/helpers/:id/image
GET Message Parameters:
helpers/{HELPER_id_value}/image 
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body FILE:
[helper-id.jpg]
Information:
Authorization via valid JWT token is required on this endpoint. Serves a single .jpg from server.

Available REQUEST Endpoints 

.post to https://devdeskdb.herokuapp.com/api/requests
POST Message Header:
{“authorization”:”TOKEN_VALUE”}
POST Message body JSON:
{“request_category”:”Cat_ID”, “request_title”:”title_value”. “request_stepstaken”:”steps_taken”,“request_date”:”date_value”, “request_details”:”details_value”, “creatorId”:”STUDENT_ID”}
Information:
Authorization via valid JWT token is required on this endpoint. Post to this endpoint stores a record in the “Requests” table. Cat_ID should a record from the “RequestCategory” table. “Creatorid” should match a record in the “STUDENTS” Table.
An email is automatically generated and sent to the user.
.get to https://devdeskdb.herokuapp.com/api/requests
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Array:
[{“ID”:”ID_value”,“request_category”:”Cat_ID”, “request_title”:”title_value”. “request_stepstaken”:”steps_taken”,“request_date”:”date_value”, “request_details”:”details_value”, “creatorId”:”STUDENT_ID”helperId, resolved}, ]
Information:
Authorization via valid JWT token is required on this endpoint. Lists all records in the REQUESTS Table.

.get to https://devdeskdb.herokuapp.com/api/requests/:id
GET Message Parameters:
/api/requests/{id_value}
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body JSON Array:
[{“ID”:”ID_value”,“request_category”:”Cat_ID”, “request_title”:”title_value”. “request_stepstaken”:”steps_taken”,“request_date”:”date_value”, “request_details”:”details_value”, “creatorId”:”STUDENT_ID”helperId, resolved}, ]
Information:
Authorization via valid JWT token is required on this endpoint. Displays a single record in the REQUESTS Table. Based on the id_value included in the API get request.

.put to https://devdeskdb.herokuapp.com/api/requests/:id
PUT Message Parameters:
api/requests/id_value 
POST Message Header:
{“authorization”:”TOKEN_VALUE”}
PUT Message body JSON:
[{, “request_title”:”updated_value”, “request_stepstaken”:”updated_value”,”request_category:”updated_value”, request_date:”updated_value”, request_details:”updated_value”, creatorId, helperId:”updated_value”,, resolved:”updated_value”}]
Response body JSON Array:
NONE
Information:
Authorization via valid JWT token is required on this endpoint. UPDATES records in the REQUESTS Table Based on the ID_Value included in the API get request for a particular REQUEST. helperid is an optional field, and does not default. Should contain the id value from the helpers table. Resolved is a Boolean field with a default value of 0. Submission of this value is not required.
An email is automatically generated and sent to the user.
.delete to https://devdeskdb.herokuapp.com/api/requests/:id
DELETE Message Parameters:
api/requests/id_value 
DELETE Message Header:
{“authorization”:”TOKEN_VALUE”}
DELETE Message body JSON:
NONE
Response body JSON Array:
{DeletedID}
Information:
Authorization via valid JWT token is required on this endpoint. UPDATES records in the REQUESTS Table Based on the ID_Value included in the API get request for a particular REQUEST.
An email is automatically generated and sent to the user.
.post to https://devdeskdb.herokuapp.com/api/requests/:id/image/
POSTMessage Parameters:
requests/{REQUEST_id_value}/image 
POST Message Header:
{“authorization”:”TOKEN_VALUE”}
POST Message body JSON:
{“file:”file.jpg”}
Information:
Authorization via valid JWT token is required on this endpoint. Post to this endpoint stores an image in server file system, and returns the file path.
.get to https://devdeskdb.herokuapp.com/api/requests/:id/image
GET Message Parameters:
requests/{REQUEST_id_value}/image 
GET Message Header:
{“authorization”:”TOKEN_VALUE”}
GET Message body JSON:
NONE
Response body FILE:
[request-id.jpg]
Information:
Authorization via valid JWT token is required on this endpoint. Serves a single .jpg from server.

.get to https://devdeskdb.herokuapp.com/api/lookup 
GET Message Header:
NONE
GET Message body JSON:
NONE
Response body JSON Array:
[{ID, category1, ID, category2}]
Information:
Authorization IS NOT required for this endpoint. Endpoint gets Lookup values for UI elements such as Request Category. 


