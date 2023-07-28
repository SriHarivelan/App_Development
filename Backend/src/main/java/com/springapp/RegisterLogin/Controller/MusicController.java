package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Arts;
import com.springapp.RegisterLogin.Model.Music;
import com.springapp.RegisterLogin.Repository.ArtsRepo;
import com.springapp.RegisterLogin.Repository.MusicRepo;

@CrossOrigin
@RestController
@RequestMapping("/mus")
public class MusicController {
	
	private final MusicRepo rep;
	
	 @Autowired
	    public MusicController(MusicRepo rep) {
	        this.rep = rep;	
	    }

	    @GetMapping("/get")
	    public List<Music> getAllCom() {
	        return rep.findAll();
	    }

}
