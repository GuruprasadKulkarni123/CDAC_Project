package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Policy;

public interface PolicyInterface extends JpaRepository<Policy, Integer> {
	
	boolean existsByPolicyName(String policyName);
	
	List<Policy> findAllByPolicyId(int policyId);

	Policy findByPolicyId(int policyId);
	
	boolean existsByPolicyId(int policyid);

}
