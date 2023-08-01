//package Pages;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//import java.util.Scanner;
//
//public class Amount {
//	
//	
//
//	public static void amount(String username) throws ClassNotFoundException
//	{
//		
//		Scanner sc = new Scanner (System.in);
//		System.out.println("Enter the Choice : sports/concerts : ");
//		String choice = sc.nextLine();
//		
//		if(choice.equals("sports"))
//    	{
//    		sports.sport(username,choice);
////    		Seats.seat();
//    	}
//    	
//    	else if(choice.equals("concerts"))
//    	{
//    		concerts.concert(username, choice);
////    		Seats.seat();
//    	}
//
//    	else
//    	{
//    		System.out.println("Invalid Credentials");
//    		Amount.amount(choice);
//    	}
//
//	}
//
//}

package Pages;

import java.util.Scanner;

public class Amount {
    public static void amount(String username) throws ClassNotFoundException {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Choice : sports/concerts : ");
        String choice = sc.nextLine();

        Event eventObj = null;

        if (choice.equalsIgnoreCase("sports")) {
            eventObj = new sports();
        } else if (choice.equalsIgnoreCase("concerts")) {
            // If you have a concerts class, you can create an object here too
            // eventObj = new concerts();
        } else {
            System.out.println("Invalid Credentials");
            Amount.amount(choice);
        }

        if (eventObj != null) {
            eventObj.bookTicket(username, choice);
        }
       
    }
}

