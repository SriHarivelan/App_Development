package com.springapp.RegisterLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.Film;

public interface FilmRepo extends JpaRepository<Film,Integer> {

}
