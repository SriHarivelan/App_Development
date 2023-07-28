package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Frnd {
	@Id
	private int artist_id;
	private String name;
	private String domain;
	public int getArtist_id() {
		return artist_id;
	}
	public void setArtist_id(int artist_id) {
		this.artist_id = artist_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	public Frnd(int artist_id, String name, String domain) {
		super();
		this.artist_id = artist_id;
		this.name = name;
		this.domain = domain;
	}
	
	public Frnd() {}

}
