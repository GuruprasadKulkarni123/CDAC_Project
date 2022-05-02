package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Claim;

public interface ClaimInterface extends JpaRepository<Claim, Integer> {

	List<Claim> findAllByUserId(int userid);

	boolean existsByPolicyNum(int policyNum);

	Claim findByClaimId(int claimId);

	Claim getClaimByUserId(int userId);
	
	Claim getByPolicyNum(int policyNum);

}
