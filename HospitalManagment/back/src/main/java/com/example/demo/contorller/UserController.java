package com.example.demo.contorller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
	@CrossOrigin
	@PostMapping("/user")
	User newUser( @RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	@CrossOrigin
	@PutMapping("/user")
	User updUser( @RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	 
	@CrossOrigin
	@GetMapping("/user")
	List<User> getAllUser(){
		return userRepository.findAll();
		
	}
	@CrossOrigin
	@GetMapping("/user/{id}")
	Optional<User> getUserById(@PathVariable long id){
		return userRepository.findById( id);
		
	}
	@CrossOrigin
	@DeleteMapping("/user/{id}")
	String deleteUserById(@PathVariable long id){
		userRepository.deleteById( id);
		return "user is deleted";
		
	}
}
