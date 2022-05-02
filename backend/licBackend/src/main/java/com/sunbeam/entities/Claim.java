package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "claim")
public class Claim {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int claimId;
	private int policyNum;
	private String status;
	private int userId;

	public Claim() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Claim(int claimId, int policyNum, String status, int userId) {
		super();
		this.claimId = claimId;
		this.policyNum = policyNum;
		this.status = status;
		this.userId = userId;
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

	@Override
	public String toString() {
		return "Claim [claimId=" + claimId + ", policyNum=" + policyNum + ", status=" + status + ", userId=" + userId
				+ "]";
	}

}
