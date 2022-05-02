package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Complaints;

public interface ComplaintInterface extends JpaRepository<Complaints, Integer> {

	List<Complaints> findAllByUserId(int id);

	Complaints findByComplaintId(int complaintId);
}
