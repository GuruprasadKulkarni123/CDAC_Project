package com.sunbeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.sunbeam.daos.BuyersInterface;
import com.sunbeam.entities.Buyers;

@Service
@Transactional
public class BuyerImpl {
	
	@Autowired
	BuyersInterface buyersDao;
	
	//buy new policy => for user
	public int  buy(Buyers buyers) {
		
		boolean result=buyersDao.existsByPolicyIdAndUserId(buyers.getPolicyId(), buyers.getUserId());
		if(result) {
			return -1;
		}
		
		Buyers b= buyersDao.save(buyers);
		return 1;
		
	}
	
	public Buyers getBuyers(int userId) {
		Buyers b=buyersDao.findByUserId(userId);
		return b;
	}
	
	public List<Buyers> getAllUserPolicies(int userId){
		return buyersDao.findAllByUserId(userId);
	}

}
