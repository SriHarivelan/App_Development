package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Arts;
import com.springapp.RegisterLogin.Model.Film;
import com.springapp.RegisterLogin.Model.Hack;
import com.springapp.RegisterLogin.Model.Music;
import com.springapp.RegisterLogin.Repository.ArtsRepo;
import com.springapp.RegisterLogin.Repository.FilmRepo;
import com.springapp.RegisterLogin.Repository.HackRepo;
import com.springapp.RegisterLogin.Repository.MusicRepo;

@CrossOrigin
@RestController
@RequestMapping("/films")
public class FilmController {
	
	private final FilmRepo fil;
	
	 @Autowired
	    public FilmController(FilmRepo fil) {
	        this.fil = fil;	
	    }

	    @GetMapping("/film")
	    public List<Film> getAllCom() {
	        return fil.findAll();
	    }

}
