create database licproject;
use licproject;

create table users (userId int primary key auto_increment, firstName varchar(50), lastName varchar(50),
address varchar(100), contact varchar(100), email varchar(100) UNIQUE, password varchar(600),age int,birthDate Date,role varchar(50),gender varchar(20),createdTimestamp timestamp default CURRENT_TIMESTAMP);

create table policy (policyId int primary key auto_increment,sumAssured varchar(50),policyName varchar(50), type varchar(50),
installmentsNo int, premiumAmount varchar(50),info varchar(100), noOfyears int);


create table complaints (complaintId int primary key auto_increment,cusFirstName varchar(50), cusLastName varchar(50), 
email varchar(50), details varchar(200), status varchar(50), type varchar(50),
userId int,FOREIGN KEY (userId) REFERENCES users(userId));



create table buyers (policyNum int primary key auto_increment,userId int,
policyId int, commencementDate Date  DEFAULT (CURRENT_DATE),
maturityDate Date,FOREIGN KEY (userId) REFERENCES users(userId),FOREIGN KEY (policyId) REFERENCES policy(policyId));
alter table buyers auto_increment=100000;


create table claim (claimId int primary key auto_increment,policyNum int UNIQUE,status varchar(50),userId int,
FOREIGN KEY (policyNum) REFERENCES buyers(policyNum),FOREIGN KEY (userId) REFERENCES users(userId));










