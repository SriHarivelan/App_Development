package com.springapp.RegisterLogin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class Program {
	
	@Id
	private int prog_id;
	private String porg_name;
	private int no_of_months;
	public int getProg_id() {
		return prog_id;
	}
	public void setProg_id(int prog_id) {
		this.prog_id = prog_id;
	}
	public String getPorg_name() {
		return porg_name;
	}
	public void setPorg_name(String porg_name) {
		this.porg_name = porg_name;
	}
	public int getNo_of_months() {
		return no_of_months;
	}
	public void setNo_of_months(int no_of_months) {
		this.no_of_months = no_of_months;
	}
	public Program(int prog_id, String porg_name, int no_of_months) {
		super();
		this.prog_id = prog_id;
		this.porg_name = porg_name;
		this.no_of_months = no_of_months;
	}
	
	public Program() {}
	
	
	
	

}
