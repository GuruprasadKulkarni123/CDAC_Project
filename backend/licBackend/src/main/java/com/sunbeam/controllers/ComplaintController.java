package com.sunbeam.controllers;

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

import com.sunbeam.entities.Complaints;
import com.sunbeam.services.ComplaintImpl;

@CrossOrigin
@RestController
public class ComplaintController {
	
	@Autowired
	ComplaintImpl complaintService;
	
	@PostMapping("/registercomplaint/{userId}")
	public ResponseEntity<Complaints> addComplaint(@PathVariable int userId ,@RequestBody Complaints complaints) {
		complaints.setUserId(userId);
		complaints.setStatus("Pending");
		Complaints c=complaintService.RegisterComplaint(complaints);
		return ResponseEntity.ok(c);

	}
	
	@GetMapping("/getallcomplaints")
	public ResponseEntity<List<Complaints>> getAllComplaints() {
		List<Complaints> complaints= complaintService.getAllUsersComplaints();
		return ResponseEntity.ok(complaints);
		
	}
	
	@GetMapping("/getusercomplaint/{userId}")
	public ResponseEntity<List<Complaints>> usercomplaintstatus(@PathVariable int userId) {
		List<Complaints> complaints= complaintService.findUsersComplaints(userId);
		System.out.println(complaints.toString());
		return ResponseEntity.ok(complaints);
		
	}
	@DeleteMapping("/deletecomplaint/{complaintId}")
	public ResponseEntity<String> deleteComplaint(@PathVariable("complaintId") int complaintId) {
		String str = complaintService.deleteComplaintById(complaintId);
		return ResponseEntity.ok(str);
	}

	@PutMapping("/updatecomplaint/{complaintId}")
	public ResponseEntity<Complaints> updatecomplaint(@PathVariable int complaintId,@RequestBody Complaints status) {
		String getstatus=status.getStatus();
		Complaints complaint= complaintService.UpdatebyComplaintId(complaintId,getstatus);		
		System.out.println(complaint);
		return ResponseEntity.ok(complaint);
		
	}

}
