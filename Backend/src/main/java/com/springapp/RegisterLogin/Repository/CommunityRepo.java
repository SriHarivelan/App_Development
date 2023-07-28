package com.springapp.RegisterLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.Community;

public interface CommunityRepo extends JpaRepository<Community,Integer> {

}
