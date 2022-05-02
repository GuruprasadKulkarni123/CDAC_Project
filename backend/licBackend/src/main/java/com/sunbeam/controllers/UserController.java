package com.sunbeam.controllers;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.daos.UserDao;
import com.sunbeam.dtos.DtoEntityConverter;
import com.sunbeam.dtos.Response;
import com.sunbeam.dtos.UserDTO;
import com.sunbeam.entities.Policy;
import com.sunbeam.entities.User;
import com.sunbeam.model.Credentials;
import com.sunbeam.services.UserServiceImpl;


@CrossOrigin(origins = "*")
@RestController
public class UserController {
	//@Autowired
	//private UserInterface userService;

	@Autowired
	UserServiceImpl s;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	

	
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@Valid @RequestBody Credentials cred) {
		UserDTO userDto = s.findUserByEmailAndPassword(cred);
		if(userDto == null)
			return Response.error("user not found");
		return Response.success(userDto);
	}
	
	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
		long now = System.currentTimeMillis();
		userDto.setCreatedTimestamp(new Timestamp(now));
		UserDTO result = s.saveUser(userDto);
		return Response.success(result);
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class) 
	public ResponseEntity<?> emailExistsHandler(DataIntegrityViolationException ex)	{
		return Response.error("Email id already exists");
	}
	
	
	@PutMapping("/editprofile/{userId}")
	public ResponseEntity<?> editprofile(@PathVariable("userId") int userId, @RequestBody UserDTO userDto) {
		UserDTO user = s.findUserById(userId);
		
		if(userDto.getAddress() != "") {
		user.setAddress(userDto.getAddress());
		}
		
		if(userDto.getEmail() != "") {
			user.setEmail(userDto.getEmail());
		}
		
		if(userDto.getContact() != "")
		user.setContact(userDto.getContact());
		
		if(userDto.getAge() != 0)
		user.setAge(userDto.getAge());
		
		
		UserDTO result = s.saveUser(user);
		return ResponseEntity.ok(result);
	}

	@DeleteMapping("/deleteuser/{userId}")
	public ResponseEntity<String> deleteUser(@PathVariable("userId") int userId) {
		String str = s.deleteUserById(userId);

		return ResponseEntity.ok(str);
	}

	@GetMapping("/userprofile/{userId}")
	public ResponseEntity<UserDTO> userprofile(@PathVariable("userId") int userId) {
		UserDTO u = s.findUserById(userId);
		if (u != null) {
			return ResponseEntity.ok(u);
		}
		return null;

	}


	@GetMapping("/getallclients")
	public ResponseEntity<List<User>> getAllUsersList(String role) {
		List<User> user = s.getAllUserByRole("client");

		return ResponseEntity.ok(user);
	}
	
	@PutMapping("/resetpassword")
	public ResponseEntity<?> resetPassword(@RequestBody UserDTO userDto){
		User user = s.findUserByEmail(userDto.getEmail());
		System.out.println(user);
		if(user == null)
		{
			return Response.error("User not found");
		}
		String rawPassword = userDto.getPassword();
    	String encPassword = passwordEncoder.encode(rawPassword);
    	user.setPassword(encPassword);

		//userDto.setPassword("*******");
		UserDTO result = s.saveUserReset(user);
		return Response.success(result);
		
	}
	
}
