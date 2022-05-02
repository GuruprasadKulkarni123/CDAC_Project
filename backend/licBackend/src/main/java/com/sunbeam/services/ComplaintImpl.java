package com.sunbeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.ComplaintInterface;
import com.sunbeam.entities.Complaints;
import com.sunbeam.entities.Policy;
import com.sunbeam.entities.User;

@Service
@Transactional
public class ComplaintImpl {
	
	@Autowired
	ComplaintInterface complaintDao;
	
	//register your complaint 
	public Complaints RegisterComplaint(Complaints c) {
		Complaints com = complaintDao.save(c);
		return com;
	}

	public List<Complaints> getAllUsersComplaints(){
		List<Complaints> complaints=complaintDao.findAll();
		return complaints;
		
	}
	
	public String deleteComplaintById(int complaintId) {
		Complaints c= complaintDao.getById(complaintId);
		if (c != null) {
			complaintDao.delete(c);
			return "successfully deleted";
		}
		return "Complaint doesnot exist or already solved";
	}
	
	public List<Complaints> findUsersComplaints(int userid){
		List<Complaints> complaints=complaintDao.findAllByUserId(userid);
		return complaints;
		
	}
	
	public Complaints UpdatebyComplaintId(int complaintId,String status){		
		Complaints complaint=complaintDao.findByComplaintId(complaintId);
		complaint.setStatus(status);
		complaintDao.save(complaint);
		return complaint;
		
	}
}
