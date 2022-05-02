package com.sunbeam.model;

import java.sql.Date;

public class ClientPolicy {
	
	
	private int policyId;
	private String sumAssured;
	private int policyNum;
	private String policyName;
	private String type;
	private int installmentsNo;
	private String premiumAmount;
	private String info;
	private int noOfyears;
	private Date maturityDate;
	
	
	
	public ClientPolicy() {
		super();
	}


	public ClientPolicy(int policyId, String sumAssured, int policyNum, String policyName, String type,
			int installmentsNo, String premiumAmount, String info, int noOfyears, Date maturityDate) {
		super();
		this.policyId = policyId;
		this.sumAssured = sumAssured;
		this.policyNum = policyNum;
		this.policyName = policyName;
		this.type = type;
		this.installmentsNo = installmentsNo;
		this.premiumAmount = premiumAmount;
		this.info = info;
		this.noOfyears = noOfyears;
		this.maturityDate = maturityDate;
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



	public int getPolicyNum() {
		return policyNum;
	}



	public void setPolicyNum(int policyNum) {
		this.policyNum = policyNum;
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






	public int getNoOfyears() {
		return noOfyears;
	}




	public void setNoOfyears(int noOfyears) {
		this.noOfyears = noOfyears;
	}




	public Date getMaturityDate() {
		return maturityDate;
	}


	public void setMaturityDate(Date maturityDate) {
		this.maturityDate = maturityDate;
	}

	@Override
	public String toString() {
		return String.format(
				"ClientPolicy [policyId=%s, sumAssured=%s, policyNum=%s, policyName=%s, type=%s, installmentsNo=%s, premiumAmount=%s, info=%s]",
				policyId, sumAssured, policyNum, policyName, type, installmentsNo, premiumAmount, info);
	}




	
	
	

}
