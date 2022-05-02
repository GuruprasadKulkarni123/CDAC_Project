package com.sunbeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.PolicyInterface;
import com.sunbeam.entities.Policy;
import com.sunbeam.entities.User;

@Service
@Transactional
public class PolicyImpl {
	
	@Autowired
	 PolicyInterface policyDao;
	
	//get all available policies 
	public List<Policy> getAll() {
		List<Policy> list = policyDao.findAll();
		return list;
	}
	
	//add new  policy
	public Policy save(Policy policy) {
		Policy	p = policyDao.save(policy);
		return p;
	}
	
	//check for duplicate policy
	public boolean exists(String policyName) {
		boolean b = policyDao.existsByPolicyName(policyName);
		return b;
	}
	
	public Policy getById(int policyId) {
		return policyDao.findByPolicyId(policyId);
	}

	public String deletePolicyById(int policyId) {
		Policy p = policyDao.findByPolicyId(policyId);
		if( p != null) {
			policyDao.deleteById(policyId);
			return "Policy successfully deleted";
		}
		return "Policy does not exists or already deleted";
	}

}
