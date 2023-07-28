package com.springapp.RegisterLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.Music;

public interface MusicRepo extends JpaRepository<Music, Integer> {

}
