package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Community;
import com.springapp.RegisterLogin.Repository.CommunityRepo;

@CrossOrigin
@RestController
@RequestMapping("/com")
public class CommunityController {

    private final CommunityRepo repo;

    @Autowired
    public CommunityController(CommunityRepo repo) {
        this.repo = repo;	
    }

    @GetMapping("/get")
    public List<Community> getAllCom() {
        return repo.findAll();
    }
}
