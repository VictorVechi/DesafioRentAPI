use testing;
CREATE TABLE IF NOT EXISTS Veiculos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    locadora VARCHAR(150),
    modelo VARCHAR(100),
    marca VARCHAR(100),
    ano INT,
    motor VARCHAR(10),
    portas INT,
    cambio VARCHAR(100),
    ar_condicionado BOOLEAN,
    updatedAt DATETIME(5),
    createdAt DATETIME(5)
);