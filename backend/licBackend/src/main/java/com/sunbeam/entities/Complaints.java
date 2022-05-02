package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="complaints")
public class Complaints {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id	
	private int complaintId;
	private String cusFirstName;
	private String cusLastName;
	private String email;
	private String details;
	private String status;
	private String type;
	private int userId;
	
	public Complaints() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Complaints(int complaintId, String cusFirstName, String cusLastName, String email, String details,
			String status, String type, int userId) {
		super();
		this.complaintId = complaintId;
		this.cusFirstName = cusFirstName;
		this.cusLastName = cusLastName;
		this.email = email;
		this.details = details;
		this.status = status;
		this.type = type;
		this.userId = userId;
	}

	public int getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}

	public String getCusFirstName() {
		return cusFirstName;
	}

	public void setCusFirstName(String cusFirstName) {
		this.cusFirstName = cusFirstName;
	}

	public String getCusLastName() {
		return cusLastName;
	}

	public void setCusLastName(String cusLastName) {
		this.cusLastName = cusLastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Complaints [complaintId=" + complaintId + ", cusFirstName=" + cusFirstName + ", cusLastName="
				+ cusLastName + ", email=" + email + ", details=" + details + ", status=" + status + ", type=" + type
				+ ", userId=" + userId + "]";
	}
	

	
	

}
