package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hack {
	
	@Id
	private int hack_id;
	private String hack_name;
	private int nop;
	public int getHack_id() {
		return hack_id;
	}
	public void setHack_id(int hack_id) {
		this.hack_id = hack_id;
	}
	public String getHack_name() {
		return hack_name;
	}
	public void setHack_name(String hack_name) {
		this.hack_name = hack_name;
	}
	public int getNop() {
		return nop;
	}
	public void setNop(int nop) {
		this.nop = nop;
	}
	public Hack(int hack_id, String hack_name, int nop) {
		super();
		this.hack_id = hack_id;
		this.hack_name = hack_name;
		this.nop = nop;
	}
	
	public Hack() {}

}
