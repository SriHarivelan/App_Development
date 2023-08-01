package Pages;

import java.util.Scanner;

public class Admin {
	public static void admin() throws ClassNotFoundException {

		Scanner sc = new Scanner(System.in);
		System.out.println("*********************************************");
		System.out.println("*   Welcome to Ticket Reservation Page         *");
//        System.out.println("*                  Services                 *");
		System.out.println("*                                           *");
		System.out.println("* Login (Already a Admin?)           *");
//		System.out.println("*  Signup (New A?)                 *");
		System.out.println("*                                           *");
		System.out.println("*********************************************");
		System.out.print("Please Type 1 : ");
		System.out.println();
		System.out.println();
		int option = sc.nextInt();
		sc.nextLine();

		if (option == 1) {
//		if(option.equals("Login"))
		{
			Login.loginPage();
			
		}
		
//		} else if (option == 2) {
//			Signup.SignUpPage();
//		} else {
//			System.out.println("Invalid choice! Please enter 1 or 2");
//		}
	}

	}}
