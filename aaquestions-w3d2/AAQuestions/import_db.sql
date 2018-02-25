DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_follows;
CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

DROP TABLE IF EXISTS replies;
CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_likes;
CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


INSERT INTO users (fname, lname)
VALUES
('Brendan', 'Feng'),
('Elliot', 'Milco'),
('Bob', 'Marley');

INSERT INTO questions (title, body, author_id)
VALUES
('SQL question', 'Why is SQL important?', 1),
('SQL followup', 'Why is SQL so cool?', 1),
('Weather today?', 'Why is it snowing? How long?', 2);

INSERT INTO question_follows (user_id, question_id)
VALUES
(1,2),
(1,1),
(2,1),
(2,2),
(3,1);

INSERT INTO replies (question_id, parent_id, user_id, body)
VALUES
(1, NULL, 1, 'Because databases.'),
(2, NULL, 2, 'It already stopped snowing'),
(2, 2, 1, 'It''s snowing because it''s winter'),
(1, 1, 2, 'SQL is super cool.');

INSERT INTO question_likes (user_id, question_id)
VALUES
(1, 1),
(2, 3),
(3, 1),
(2, 2);
