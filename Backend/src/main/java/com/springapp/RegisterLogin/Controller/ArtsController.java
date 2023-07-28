package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Arts;
import com.springapp.RegisterLogin.Repository.ArtsRepo;

@CrossOrigin
@RestController
@RequestMapping("/co")
public class ArtsController {
	
	private final ArtsRepo rep;
	
	 @Autowired
	    public ArtsController(ArtsRepo rep) {
	        this.rep = rep;	
	    }

	    @GetMapping("/get")
	    public List<Arts> getAllCom() {
	        return rep.findAll();
	    }

}
