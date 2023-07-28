package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Community;
import com.springapp.RegisterLogin.Model.Program;
import com.springapp.RegisterLogin.Repository.CommunityRepo;
import com.springapp.RegisterLogin.Repository.ProgrmRepo;

@CrossOrigin
@RestController
@RequestMapping("/pro")
public class ProgramController {

    private final ProgrmRepo repos;

    @Autowired
    public ProgramController(ProgrmRepo repos) {
        this.repos = repos;	
    }

    @GetMapping("/get")
    public List<Program> getAllCom() {
        return repos.findAll();
    }
}
