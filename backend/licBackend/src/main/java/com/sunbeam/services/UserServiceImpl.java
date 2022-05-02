package com.sunbeam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.UserDao;
import com.sunbeam.dtos.DtoEntityConverter;
import com.sunbeam.dtos.UserDTO;
import com.sunbeam.entities.Policy;
import com.sunbeam.entities.User;
import com.sunbeam.model.Credentials;


@Transactional
@Service
public class UserServiceImpl {

	@Autowired
	private UserDao userDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private DtoEntityConverter converter;
	
	
//	@Override
//	public User getByEmail(String email) {
//		User user = userDao.getByEmail(email);
//		return user;
//	}
//	
//	//validate user credentials
//	@Override
//	public User authenticate(String email, String password) {
//		User user = userDao.getByEmail(email);
//		if(user!=null) {
//		if(user.getPassword().equals(password))
//			return user;
//		}
//		return null;
//	}
//	
//	// save new user details
//	@Override
//	public User save(User user) {
//		User newUser=userDao.save(user);
//		return newUser;
//	}
//
//
//	@Override
//	public User findByEmail(String email, String password) {
//		User a=userDao.getByEmail(email);
//		if(a!=null) {
//			a.setPassword(password);
//			return a;}
//		return null;
//	}
//	
//
//	
//    //get the user info if exist
//	public UserDTO getUserById(int userId) {
//		UserDTO c = userDao.findByUserId(userId);
//		if (c != null) {
//			return c;
//		}
//		return null;
//	}

	
	//delete user if exist
	public String deleteUserById(int userId) {
		User c = userDao.findByUserId(userId);
		if (c != null) {
			userDao.deleteById(userId);
			return "successfully deleted";
		}
		return "user doesnot exist";
	}
	
	
	

	
   
	//get all users(clients)
	public  List<User> getAllUserByRole(String role) {
		List<User> userclient =userDao.findAllByRole(role);
		return userclient;
	}
	
	//=====================================
	
	
	
	
	public UserDTO findUserById(int userId) {
		User user = userDao.findByUserId(userId);
		return converter.toUserDto(user);
	}
	
	public User findUserByEmail(String email) {
		User user = userDao.findByEmail(email);
		return user;
	}
	
	public UserDTO findUserByEmailAndPassword(Credentials cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			UserDTO result = converter.toUserDto(dbUser);
			result.setPassword("********");
			return result;
		}
		return null;
	}
	
	public UserDTO saveUser(UserDTO userDto) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = converter.toUserEntity(userDto);
		user = userDao.save(user);
		userDto = converter.toUserDto(user);
		userDto.setPassword("*******");
		return userDto;
	}

	public UserDTO saveUserReset(User userDto) {

		//User user = converter.toUserEntity(userDto);
		User user = userDao.save(userDto);
		UserDTO userDto1 = converter.toUserDto(user);
		userDto1.setPassword("*******");
		return userDto1;
	}


	public User getById(int userId) {
		return userDao.getById(userId);

	}
	
	
	
	
	

}
