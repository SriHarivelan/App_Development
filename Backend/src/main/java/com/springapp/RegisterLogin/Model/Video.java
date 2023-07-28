package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Video {
	@Id
	private int Vid_id;
	private String Pro_name;
	private int No_of_days;
	public int getVid_id() {
		return Vid_id;
	}
	public void setVid_id(int vid_id) {
		Vid_id = vid_id;
	}
	public String getPro_name() {
		return Pro_name;
	}
	public void setPro_name(String pro_name) {
		Pro_name = pro_name;
	}
	public int getNo_of_days() {
		return No_of_days;
	}
	public void setNo_of_days(int no_of_days) {
		No_of_days = no_of_days;
	}
	public Video(int vid_id, String pro_name, int no_of_days) {
		super();
		Vid_id = vid_id;
		Pro_name = pro_name;
		No_of_days = no_of_days;
	}
	
	public Video() {}

}
