create TABLE user(
    userId SERIAL PRIMARY KEY,
    userRole INTEGER,
    login VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255)
);

create TABLE driver(
    driverID SERIAL PRIMARY KEY,
    userRole INTEGER,
    carID INTEGER,
    login VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    FOREIGN KEY (carID) REFERENCES car (carId)
); 

create TABLE trip(
    tripId SERIAL PRIMARY KEY,
    driverId INTEGER,
    userId INTEGER,
    cost VARCHAR(255),
    tripMark INTEGER,
    way VARCHAR(255),
    payStatus BOOLEAN,
    FOREIGN KEY (driverId) REFERENCES driver (driverID),
    FOREIGN KEY (userId) REFERENCES user (userId)
);

create TABLE car(
    carId SERIAL PRIMARY KEY,
    driverId INTEGER,
    mark VARCHAR(255),
    carNumber VARCHAR(255),
    trafficType INTEGER,
    FOREIGN KEY (driverId) REFERENCES driver (driverID)
);