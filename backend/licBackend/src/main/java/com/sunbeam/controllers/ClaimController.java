package com.sunbeam.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Buyers;
import com.sunbeam.entities.Claim;
import com.sunbeam.entities.Complaints;
import com.sunbeam.entities.Policy;
import com.sunbeam.entities.User;
import com.sunbeam.model.ClientClaim;
import com.sunbeam.model.ClientPolicy;
import com.sunbeam.services.ClaimImpl;
import com.sunbeam.services.UserServiceImpl;



@CrossOrigin
@RestController
public class ClaimController {
	
	@Autowired
	ClaimImpl claimServices;
	
	@Autowired
	UserServiceImpl userServices;
	
	//This will register user policy claim
	@PostMapping("/registerclaim/{userId}")
	public ResponseEntity<Integer> addClaim(@PathVariable int userId,@RequestBody Claim claim) {
		claim.setUserId(userId);
		claim.setStatus("Pending");
		int c=claimServices.RegisterClaim(claim);
		System.out.println(c);
		return ResponseEntity.ok(c);

	}
	
	
//	@GetMapping("/getallclaim")
//	public ResponseEntity<List<Claim>> getAllClaims() {
//		List<Claim> claims= claimServices.getAllUsersClaim();
//		return ResponseEntity.ok(claims);
//		
//	}
	
	//  This will give the particular user claims
	@GetMapping("/getuserclaim/{userId}")
	public ResponseEntity<List<Claim>> usercomplaintstatus(@PathVariable int userId) {
		List<Claim> claims= claimServices.findUsersClaim(userId);
		
		return ResponseEntity.ok(claims);
		
	}
	
//  This will delete the particular user claims
	@DeleteMapping("/deleteclaim/{claimId}")
	public ResponseEntity<String> deleteClaim(@PathVariable("claimId") int claimId) {
		String str = claimServices.deleteClaimtById(claimId);
		return ResponseEntity.ok(str);
	}
	
//  This will update the status of claim by agent
	@PutMapping("/updateclaim/{claimId}")
	public ResponseEntity<Claim> updateclaim(@PathVariable int claimId,@RequestBody Claim status) {
		String getstatus=status.getStatus();
		Claim complaint= claimServices.UpdatebyClaimId(claimId,getstatus);		
		return ResponseEntity.ok(complaint);
		
	}
	
	
	
	@GetMapping("/getallclaim")
	public ResponseEntity<List<ClientClaim>> getAllClaims() {
		List<Claim> userClaims= claimServices.getAllUsersClaim();
		System.out.println(userClaims);
		List<ClientClaim> claims = new ArrayList<ClientClaim>();
		for(Claim c : userClaims) {
			if(c.getStatus().equals("Success")) {
				continue;
			}
			ClientClaim clientClaim = new ClientClaim();
			int userId = c.getUserId();
			User u = userServices.getById(userId);
			clientClaim.setUserId(userId);
			clientClaim.setClaimId(c.getClaimId());
			clientClaim.setFirstName(u.getFirstName());
			clientClaim.setLastName(u.getLastName());
			clientClaim.setStatus(c.getStatus());
			clientClaim.setPolicyNum(c.getPolicyNum());
			
			claims.add(clientClaim);


		}
		
		return ResponseEntity.ok(claims);
		
	}
	
	
	
//	
//	@GetMapping("/getuserclaim/{userId}")
//	public ResponseEntity<List<ClientClaim>> getUserClaims(@PathVariable("userId") int userId){
//		List<User> userClaims = claimServices.getAllUserClaims(userId);
//				
//		List<ClientClaim> claims=new ArrayList<ClientClaim>();
//		for(User u:userClaims) {
//			ClientClaim clientclaim =new ClientClaim();
//			int UserId=u.getUserId();
//			//Claim c=claimServices.getClaimByUserId(userId);
//			
//			clientclaim.setClaimId(c.getClaimId());
//			clientclaim.setFirstName(u.getFirstName());
//			clientclaim.setLastName(u.getLastName());
//			clientclaim.setStatus(c.getStatus());
//			clientclaim.setPolicyNum(c.getPolicyNum());
//		
//			
//			claims.add(clientclaim);
//			
//		}
//		return ResponseEntity.ok(claims);
//			
//	} 
}
