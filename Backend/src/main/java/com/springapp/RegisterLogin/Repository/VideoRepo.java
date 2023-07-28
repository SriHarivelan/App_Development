package com.springapp.RegisterLogin.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.Video;

public interface VideoRepo extends JpaRepository<Video,Integer> {


}
