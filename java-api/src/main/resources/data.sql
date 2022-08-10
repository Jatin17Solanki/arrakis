INSERT INTO dogs (id, name, age) VALUES (1, 'Einstein', 3);
INSERT INTO dogs (id, name, age) VALUES (2, 'Kaya', 5);


INSERT INTO Security VALUES (11, 'abc', 'def', 'Mukul', '2022-08-05', 5.0, 'corporate', 1.0, 'failure');
INSERT INTO Security VALUES (12, 'abc2', 'def2', 'Jatin', '2022-07-03', 10.0, 'regular', 2.0, 'settled');

INSERT INTO book VALUES (101, 'first book');
INSERT INTO book VALUES (102, 'second book');

INSERT INTO users VALUES (1, 'fic-user1', 'abc@gmail.com', 'admin');
INSERT INTO users VALUES (2, 'fic-user2', 'xyz@gmail.com', 'fic');

INSERT INTO book_User VALUES (100001,101,1);
INSERT INTO book_User VALUES (100002,102,2);


INSERT INTO counterparty VALUES (1001, 'User1');
INSERT INTO counterparty VALUES (1002, 'User2');

INSERT INTO trade VALUES (10001, 101, 1001, 11, 50, 'status1', 20000, 'buy', '2022-07-01', '2022-08-05', 0);
--INSERT INTO trades VALUES (10001, 101, 1001, 11, 50, 'status1', 20000, 'buy', '2022-07-01', '2022-08-05');
INSERT INTO trade VALUES (10002, 102, 1002, 12, 60, 'status2', 20000, 'buy', '2020-05-01', '2020-06-01', 0);