drop table if exists house;

create table if not exists house(
    id serial primary key,
    name text,
    address text,
    city text,
    state text,
    zip int,
    img text,
    mortgage decimal,
    rent decimal
);

insert into house (name, address, city, state, zip, img, mortgage, rent) values ('Nice House', '323 n st', 'LA', 'CA', 91214, 'https://upload.wikimedia.org/wikipedia/commons/1/15/Revised_Baca_House%2C_Trinidad%2C_CO_IMG_5081.JPG', 340200, 5000);
insert into house (name, address, city, state, zip, img, mortgage, rent) values ('Big House', '545 w st', 'BA', 'AZ', 82342, 'http://homemanagers.pk/wp-content/uploads/2016/12/IMG-20160811-WA030.jpg', 5540200, 1000);
insert into house (name, address, city, state, zip, img, mortgage, rent) values ('Good House', '266n s st', 'MA', 'NZ', 23453, 'https://ecowatchroar-img.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F6469680%2F980x.jpg/2000%2C2000/1ovjCtTXx3D0AE7p/img.jpg', 322123, 2000);



select * from house;
