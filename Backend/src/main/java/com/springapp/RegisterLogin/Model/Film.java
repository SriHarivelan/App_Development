package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Film {
	@Id
	private int film_id;
	private String film_name;
	private String rewads;
	public int getFilm_id() {
		return film_id;
	}
	public void setFilm_id(int film_id) {
		this.film_id = film_id;
	}
	public String getFilm_name() {
		return film_name;
	}
	public void setFilm_name(String film_name) {
		this.film_name = film_name;
	}
	public String getRewads() {
		return rewads;
	}
	public void setRewads(String rewads) {
		this.rewads = rewads;
	}
	public Film(int film_id, String film_name, String rewads) {
		super();
		this.film_id = film_id;
		this.film_name = film_name;
		this.rewads = rewads;
	}
	
	public Film() {}

}
