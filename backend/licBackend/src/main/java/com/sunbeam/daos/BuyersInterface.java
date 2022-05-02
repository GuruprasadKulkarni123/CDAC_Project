package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Buyers;

public interface BuyersInterface extends JpaRepository<Buyers, Integer>{
	Buyers findByUserId(int userId);
	
	List<Buyers> findAllByUserId(int userId);
	
	boolean existsByPolicyIdAndUserId(int policyid,int userId);

}
