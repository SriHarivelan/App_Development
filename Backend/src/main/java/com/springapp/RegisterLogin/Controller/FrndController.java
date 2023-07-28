package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Arts;
import com.springapp.RegisterLogin.Model.Frnd;
import com.springapp.RegisterLogin.Model.Music;
import com.springapp.RegisterLogin.Repository.ArtsRepo;
import com.springapp.RegisterLogin.Repository.FrndRepo;
import com.springapp.RegisterLogin.Repository.MusicRepo;

@CrossOrigin
@RestController
@RequestMapping("/frie")
public class FrndController {
	
	private final FrndRepo fri;
	
	 @Autowired
	    public FrndController(FrndRepo fri) {
	        this.fri = fri;	
	    }

	    @GetMapping("/friend")
	    public List<Frnd> getAllCom() {
	        return fri.findAll();
	    }

}
