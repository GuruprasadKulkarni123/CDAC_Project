package com.sunbeam.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name = "policy")
public class Policy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int policyId;
	private String sumAssured;
	private String policyName;
	private String type;
	private int installmentsNo;
	private String premiumAmount;
	private String info;
	private int noOfyears;

//	@ManyToMany
//	@JoinTable(name = "buyers", joinColumns = { @JoinColumn(name = "policyId") }, inverseJoinColumns = {
//			@JoinColumn(name = "userId") })
//	private List<User> userList;

	public Policy() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Policy(int policyId, String sumAssured, String policyName, String type, int installmentsNo,
			String premiumAmount, String info, int noOfyears) {
		super();
		this.policyId = policyId;
		this.sumAssured = sumAssured;
		this.policyName = policyName;
		this.type = type;
		this.installmentsNo = installmentsNo;
		this.premiumAmount = premiumAmount;
		this.info = info;
		this.noOfyears = noOfyears;
	}


	public int getPolicyId() {
		return policyId;
	}

	public void setPolicyId(int policyId) {
		this.policyId = policyId;
	}

	public String getSumAssured() {
		return sumAssured;
	}

	public void setSumAssured(String sumAssured) {
		this.sumAssured = sumAssured;
	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getInstallmentsNo() {
		return installmentsNo;
	}

	public void setInstallmentsNo(int installmentsNo) {
		this.installmentsNo = installmentsNo;
	}

	public String getPremiumAmount() {
		return premiumAmount;
	}

	public void setPremiumAmount(String premiumAmount) {
		this.premiumAmount = premiumAmount;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

//	public List<User> getUserList() {
//		return userList;
//	}

//	public void setUserList(List<User> userList) {
//		this.userList = userList;
//	}
	
	
	public int getNoOfyears() {
		return noOfyears;
	}


	public void setNoOfyears(int noOfyears) {
		this.noOfyears = noOfyears;
	}


	@Override
	public String toString() {
		return "Policy [policyId=" + policyId + ", sumAssured=" + sumAssured + ", policyName=" + policyName + ", type="
				+ type + ", installmentsNo=" + installmentsNo + ", premiumAmount=" + premiumAmount + ", info=" + info
				+ ", userList="  + "]";
	}

}
