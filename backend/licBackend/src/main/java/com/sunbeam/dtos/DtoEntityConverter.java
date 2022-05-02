package com.sunbeam.dtos;

import org.springframework.stereotype.Component;

import com.sunbeam.entities.User;

@Component
public class DtoEntityConverter {
	public UserDTO toUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setUserId(entity.getUserId());
		dto.setFirstName(entity.getFirstName());
		dto.setLastName(entity.getLastName());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		dto.setAddress(entity.getAddress());
		dto.setContact(entity.getContact());
		dto.setAge(entity.getAge());
		dto.setBirthDate(entity.getBirthDate());
		dto.setRole(entity.getRole());
		dto.setGender(entity.getGender());
	    dto.setCreatedTimestamp(entity.getCreatedTimestamp());
		
		
		return dto;
	}
	
	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setUserId(dto.getUserId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());		
		entity.setContact(dto.getContact());
		entity.setAddress(dto.getAddress());
		entity.setAge(dto.getAge());
		entity.setBirthDate(dto.getBirthDate());
		entity.setRole(dto.getRole());
		entity.setGender(dto.getGender());
	entity.setCreatedTimestamp(dto.getCreatedTimestamp());
		return entity;		
	}

}
