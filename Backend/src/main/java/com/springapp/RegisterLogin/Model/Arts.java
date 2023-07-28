package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Arts {
	@Id
	private int pro_id;
	private String pro_name;
	private int no_of_days;
	public int getPro_id() {
		return pro_id;
	}
	public void setPro_id(int pro_id) {
		this.pro_id = pro_id;
	}
	public String getPro_name() {
		return pro_name;
	}
	public Arts(int pro_id, String pro_name, int no_of_days) {
		super();
		this.pro_id = pro_id;
		this.pro_name = pro_name;
		this.no_of_days = no_of_days;
	}
	public void setPro_name(String pro_name) {
		this.pro_name = pro_name;
	}
	public int getNo_of_days() {
		return no_of_days;
	}
	public void setNo_of_days(int no_of_days) {
		this.no_of_days = no_of_days;
	}
	
	public Arts() {}
	
}
