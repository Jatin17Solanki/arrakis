DROP TABLE IF EXISTS dogs;
  
CREATE TABLE dogs (
    id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    age INT NOT NULL
);


DROP TABLE IF EXISTS Book;
CREATE TABLE Book(
    id INT PRIMARY KEY,
    book_name VARCHAR(25) NOT NULL
);


DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
    id INT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    email VARCHAR(35) NOT NULL UNIQUE,
    role VARCHAR(25) NOT NULL
);



--TODO: primary key required
DROP TABLE IF EXISTS Book_User;
CREATE TABLE Book_User(
    id INT PRIMARY KEY,
    book_id INT REFERENCES Book(id),
    user_id INT REFERENCES Users(id)
);


DROP TABLE IF EXISTS Security;
CREATE TABLE Security(
    id INT PRIMARY KEY,
    ISIN VARCHAR(12) NOT NULL,
    CUSIP VARCHAR(9) NOT NULL,
    issuer VARCHAR(25) NOT NULL,
    maturity_date date NOT NULL,     --TODO: check datatype
    coupon FLOAT(10) NOT NULL,          --TODO: check datatype
    type VARCHAR(25) NOT NULL,
    face_Value FLOAT(10) NOT NULL,       --TODO: check data type
    status VARCHAR(25) NOT NULL
);

DROP TABLE IF EXISTS Counterparty;
CREATE TABLE Counterparty(
    id INT PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

DROP TABLE IF EXISTS Trade;
CREATE TABLE Trade(
    id INT PRIMARY KEY,
    book_id INT REFERENCES Book(id),
    counterparty_id INT REFERENCES Counterparty(id),
    security_id INT REFERENCES Security(id),
    quantity INT NOT NULL,
    status VARCHAR(25) NOT NULL,
    price FLOAT NOT NULL,
    buy_sell VARCHAR(25) NOT NULL,
    trade_date date NOT NULL,
    settlement_date date,
    assigned_to int
);




