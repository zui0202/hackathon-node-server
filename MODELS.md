# User
- _id
- name(실명) : String
- nickname : String
- email : String
- id: String
- password : String
- comments : [Comment]
- bookmark : [Question]
- createAt : Date
- updatedAt : Date

# Question
- _id
- writer : ref User
- questionType : 0 , 1
- title : String
- content : String
- comments : [Comment]
- prosParticipants : [Users]
- consParticipants : [Users]
- createdAt : Date
- updatedAt : Date

# Comment
- _id
- QuestionId : Question
- writer : ref User
- likes : [User]
- createdAt : Date
- updatedAt : Date
