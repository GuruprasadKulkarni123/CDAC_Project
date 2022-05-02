package com.sunbeam.dtos;

import java.sql.Date;
import java.sql.Timestamp;



public class UserDTO {
	
	private int userId;

	private String firstName;

	private String lastName;

	private String address;

	private String contact;

	private String email;

	private String password;
	
	private int age;
	
	
	private Date birthDate;

	private String role;
	
	private String gender;
	

	private Timestamp createdTimestamp;

	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public UserDTO(int userId, String firstName, String lastName, String address, String contact, String email,
			String password, int age, Date birthDate, String role, String gender, Timestamp createdTimestamp ) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.age = age;
		this.birthDate = birthDate;
		this.role = role;
		this.gender = gender;
		this.createdTimestamp = createdTimestamp;
	}







	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public Timestamp getCreatedTimestamp() {
		return createdTimestamp;
	}



	public void setCreatedTimestamp(Timestamp createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}



	@Override
	public String toString() {
		return String.format(
				"UserDTO [userId=%s, firstName=%s, lastName=%s, address=%s, contact=%s, email=%s, password=%s, age=%s, birthDate=%s, role=%s, gender=%s, createdTimestamp=%s]",
				userId, firstName, lastName, address, contact, email, password, age, birthDate, role, gender,
				createdTimestamp);
	}




}
