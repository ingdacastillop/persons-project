create table if not exists persons (
    id          smallint not null auto_increment,
    uuid        varchar(36) not null unique,
    dni         char(15) not null unique,
    first_name  varchar(50) not null,
    last_name   varchar(50) not null,
    address     varchar(50) default null,
    phone       varchar(15) default null,
    email       varchar(50) default null,
    sex         enum('hombre', 'mujer') not null,
    hobbies     mediumtext default null,
    birthday    date not null,
    primary key (id)
) engine=InnoDB auto_increment=1 default charset=utf8;