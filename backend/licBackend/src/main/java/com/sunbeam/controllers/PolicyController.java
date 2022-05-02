package com.sunbeam.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Policy;
import com.sunbeam.services.PolicyImpl;

@CrossOrigin
@RestController
public class PolicyController {

	@Autowired
	PolicyImpl srv;

	@GetMapping("/policydetails")
	public ResponseEntity<List<Policy>> policyDetails() {
		List<Policy> list = srv.getAll();
		return ResponseEntity.ok(list);
	}

	@PostMapping("/addpolicy")
	public ResponseEntity<Policy> addPolicy(@RequestBody Policy policy) {
		if (srv.exists(policy.getPolicyName()))
			return null;
		System.out.println(policy);
		Policy pol = srv.save(policy);
		System.out.println(pol);
		return ResponseEntity.ok(pol);

	}
	
	@DeleteMapping("/deletepolicy/{policyId}")
	public ResponseEntity<String> deleteUser(@PathVariable("policyId") int policyId) {
		String str = srv.deletePolicyById(policyId);

		return ResponseEntity.ok(str);
	}

}
