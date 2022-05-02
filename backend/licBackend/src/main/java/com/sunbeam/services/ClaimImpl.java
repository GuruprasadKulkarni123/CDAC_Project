package com.sunbeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.ClaimInterface;
import com.sunbeam.daos.UserDao;
import com.sunbeam.entities.Buyers;
import com.sunbeam.entities.Claim;
import com.sunbeam.entities.User;

@Service
@Transactional
public class ClaimImpl {

	@Autowired
	ClaimInterface claimDao;
	
	@Autowired
	UserDao userDao;

	// register your claim
	public int RegisterClaim(Claim c) {
		int newclaim = c.getPolicyNum();
		if (claimDao.existsByPolicyNum(newclaim)) {
			
			return -1;
		}
		Claim claim = claimDao.save(c);
		return 1;

	}

	public List<Claim> getAllUsersClaim() {
		List<Claim> claim = claimDao.findAll();
		return claim;

	}

	public Claim getClaimById(int claimId) {
		Claim c = claimDao.getById(claimId);
		if (c != null) {
			return c;
		}
		return null;
	}

	public String deleteClaimtById(int claimId) {
		Claim c = getClaimById(claimId);
		if (c != null) {
			claimDao.deleteById(claimId);
			return "claim successfully deleted";
		}
		return "claim doesnot exist or already claimed";
	}

	public List<Claim> findUsersClaim(int userid) {
		List<Claim> claim = claimDao.findAllByUserId(userid);
		return claim;

	}
	
	public Claim UpdatebyClaimId(int claimId, String status) {
		Claim claim=claimDao.findByClaimId(claimId);
		claim.setStatus(status);
		claimDao.save(claim);
		return claim;

	}
	
	public List<User> getAllUserClaims(int userId){
		return userDao.findAllByUserId(userId);
	}

	public Claim getClaimByUserId(int userId) {	
		return claimDao.getClaimByUserId(userId);
	}
	
	public Claim getClaimByPolicyNum(int policyNum) {
		Claim c = claimDao.getByPolicyNum(policyNum);
		if (c != null) {
			return c;
		}
		return null;
	}
	
	
}
