package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.dtos.UserDTO;
import com.sunbeam.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User getByEmail(String email);
	User findByUserId(int userId);
	User findByEmail(String email);

	

	List<User> findAllByRole(String role);
	List<User> findAllByUserId(int userId);
	

}
