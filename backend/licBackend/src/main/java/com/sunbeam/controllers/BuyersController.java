package com.sunbeam.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Buyers;
import com.sunbeam.entities.Claim;
import com.sunbeam.entities.Policy;
import com.sunbeam.model.ClientPolicy;
import com.sunbeam.services.BuyerImpl;
import com.sunbeam.services.ClaimImpl;
import com.sunbeam.services.PolicyImpl;

@CrossOrigin
@RestController
public class BuyersController {

	@Autowired
	BuyerImpl srv;

	@Autowired
	ClaimImpl claimServices;

	@Autowired
	PolicyImpl pol;

	Buyers bl;

	@PostMapping("/buypolicy")
	public ResponseEntity<Integer> buyPolicy(@RequestBody Buyers buyers) {
		if (buyers.getPolicyId() == 0)
			return ResponseEntity.ok(0);
		Policy policy = pol.getById(buyers.getPolicyId());
		int year = policy.getNoOfyears();
		long now = System.currentTimeMillis();
		Date d = new Date(now);
		buyers.setCommencementDate(new Date(now));
		LocalDate c = d.toLocalDate().plusYears(year);
		Date newdate = Date.valueOf(c);
		buyers.setMaturityDate(newdate);

		System.out.println(buyers);
		int b = srv.buy(buyers);
		return ResponseEntity.ok(b);

	}

	@GetMapping("/getuserpolicynum/{userId}")
	public ResponseEntity<List<Buyers>> getUserPolicyNum(@PathVariable("userId") int userId) {
		List<Buyers> userPolicies = srv.getAllUserPolicies(userId);
		return ResponseEntity.ok(userPolicies);

	}

	@GetMapping("/getuserpolicies/{userId}")
	public ResponseEntity<List<ClientPolicy>> getUserPolicies(@PathVariable("userId") int userId) {
		List<Buyers> userPolicies = srv.getAllUserPolicies(userId);

		List<ClientPolicy> policies = new ArrayList<ClientPolicy>();
		for (Buyers b : userPolicies) {
			Claim buyerclaim=claimServices.getClaimByPolicyNum(b.getPolicyNum());
			if(buyerclaim!=null && buyerclaim.getStatus().contains("Suc")) {
				continue;
			}
			
			
			ClientPolicy clientpolicy = new ClientPolicy();
			int policyId = b.getPolicyId();
			Policy policy = pol.getById(policyId);
			

			clientpolicy.setPolicyId(policyId);
			clientpolicy.setPolicyNum(b.getPolicyNum());
			clientpolicy.setPolicyName(policy.getPolicyName());
			clientpolicy.setInfo(policy.getInfo());
			clientpolicy.setInstallmentsNo(policy.getInstallmentsNo());
			clientpolicy.setPremiumAmount(policy.getPremiumAmount());
			clientpolicy.setSumAssured(policy.getSumAssured());
			clientpolicy.setType(policy.getType());
			clientpolicy.setNoOfyears(policy.getNoOfyears());
			clientpolicy.setMaturityDate(b.getMaturityDate());
			policies.add(clientpolicy);

		}
		return ResponseEntity.ok(policies);

	}
}
