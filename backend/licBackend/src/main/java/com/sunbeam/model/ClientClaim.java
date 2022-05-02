package com.sunbeam.model;

public class ClientClaim {
	
	private int claimId;
	private int policyNum;
	private String status;
	private int userId;
	private String firstName;
	private String lastName;
	
	public ClientClaim() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ClientClaim(int claimId, int policyNum, String status, int userId, String firstName, String lastName) {
		super();
		this.claimId = claimId;
		this.policyNum = policyNum;
		this.status = status;
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public int getClaimId() {
		return claimId;
	}

	public void setClaimId(int claimId) {
		this.claimId = claimId;
	}

	public int getPolicyNum() {
		return policyNum;
	}

	public void setPolicyNum(int policyNum) {
		this.policyNum = policyNum;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	@Override
	public String toString() {
		return "ClientClaim [claimId=" + claimId + ", policyNum=" + policyNum + ", status=" + status + ", userId="
				+ userId + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}
	
}
