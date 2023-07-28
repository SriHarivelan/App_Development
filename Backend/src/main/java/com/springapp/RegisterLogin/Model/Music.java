package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Music {
	@Id
	private int Music_id;
	private String Genre;
	private String Gender;
	public int getMusic_id() {
		return Music_id;
	}
	public void setMusic_id(int music_id) {
		Music_id = music_id;
	}
	public String getGenre() {
		return Genre;
	}
	public void setGenre(String genre) {
		Genre = genre;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public Music(int music_id, String genre, String gender) {
		super();
		Music_id = music_id;
		Genre = genre;
		Gender = gender;
	}
	
	public Music () {}
	
	

}
