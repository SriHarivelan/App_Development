package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Community;
import com.springapp.RegisterLogin.Model.Program;
import com.springapp.RegisterLogin.Model.Video;
import com.springapp.RegisterLogin.Repository.CommunityRepo;
import com.springapp.RegisterLogin.Repository.ProgrmRepo;
import com.springapp.RegisterLogin.Repository.VideoRepo;

@CrossOrigin
@RestController
@RequestMapping("/vid")
public class VideoController {

    private final VideoRepo r;

    @Autowired
    public VideoController(VideoRepo r) {
        this.r = r;	
    }

    @GetMapping("/show")
    public List<Video> getAllCom() {
        return r.findAll();
    }
}
