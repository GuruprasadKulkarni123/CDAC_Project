package com.sunbeam.entities;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="buyers")
public class Buyers {
	

	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id	
	private int policyNum;
	private int userId;
	private int policyId;
	private Date commencementDate;

	private Date maturityDate;
	
	public Buyers() {
		super();
		
	}

	public Buyers(int policyNum, int userId, int policyId, Date commencementDate, Date maturityDate) {
		super();
		this.policyNum = policyNum;
		this.userId = userId;
		this.policyId = policyId;
		this.commencementDate = commencementDate;
		this.maturityDate = maturityDate;
	}

	public int getPolicyNum() {
		return policyNum;
	}

	public void setPolicyNum(int policyNum) {
		this.policyNum = policyNum;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getPolicyId() {
		return policyId;
	}

	public void setPolicyId(int policyId) {
		this.policyId = policyId;
	}

	public Date getCommencementDate() {
		return commencementDate;
	}

	public void setCommencementDate(Date commencementDate) {
		this.commencementDate = commencementDate;
	}

	public Date getMaturityDate() {
		return maturityDate;
	}

	public void setMaturityDate(Date maturityDate) {
		this.maturityDate = maturityDate;
	}

	@Override
	public String toString() {
		return "Buyers [policyNum=" + policyNum + ", userId=" + userId + ", policyId=" + policyId
				+ ", commencementDate=" + commencementDate + ", maturityDate=" + maturityDate + "]";
	}
	
	
	
	
}
