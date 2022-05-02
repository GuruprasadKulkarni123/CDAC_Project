
create table buyers (policyNum int primary key auto_increment,userId int,
policyId int,FOREIGN KEY (userId) REFERENCES users(userId),FOREIGN KEY (policyId) REFERENCES policy(policyId));


create table claim (claimId int primary key,policyNum int,status varchar(50),
FOREIGN KEY (policyNum) REFERENCES buyers(policyNum));


create table complaints (complaintId int primary key auto_increment,cusName varchar(50), 
email varchar(50), details varchar(200), status varchar(50), type varchar(50),
userId int,FOREIGN KEY (userId) REFERENCES users(userId));


create table policy (policyId int primary key auto_increment, policyName varchar(50), type varchar(50),
 noOfYears int, installments varchar(50), premium varchar(50), maturity varchar(50), info varchar(100));


create table users (userId int primary key auto_increment, firstname varchar(50), lastname varchar(50), 
address varchar(100), contact varchar(100), email varchar(100), password varchar(50), role varchar(50), status varchar(50));

