package com.springapp.RegisterLogin.Model;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Community {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int artist_id;
	private String name;
	private String Domain;
	private String YOP;
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
		return Domain;
	}
	public void setDomain(String domain) {
		Domain = domain;
	}
	public String getYOP() {
		return YOP;
	}
	public void setYOP(String yOP) {
		YOP = yOP;
	}
	public Community(int artist_id, String name, String domain, String yOP) {
		super();
		this.artist_id = artist_id;
		this.name = name;
		Domain = domain;
		YOP = yOP;
	}
	
	public Community() {}

}
