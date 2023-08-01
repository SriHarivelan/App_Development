//package Pages;
//
//import java.util.Scanner;
//
//public class sports {
//	
//	public static void sport(String username, String choice) throws ClassNotFoundException {
//		Scanner sc = new Scanner(System.in);
//		
//		System.out.println("            Cost for Seats      ");
//		System.out.println("For Premium : Rs 1500");
//		System.out.println("For Normal : Rs 800");
//		System.out.print("Are you sure to buy Tickets (y/n) : ");
//		String ans = sc.nextLine();
//		if(ans.equals("y"))
//		{
//			Seats.seat(username,choice);
//		}
//		
//		else
//		{
//			System.out.println("Thank You For Visiting");
//		}
//	
//	}
//
//}

package Pages;

import java.util.Scanner;

public class sports implements Event {
	@Override
    public void bookTicket(String username, String choice) throws ClassNotFoundException {
    	
        Scanner sc = new Scanner(System.in);

        System.out.println("            Cost for Seats      ");
        System.out.println("For Premium : Rs 1500");
        System.out.println("For Normal : Rs 800");
        System.out.print("Are you sure to buy Tickets (y/n) : ");
        String ans = sc.nextLine();
Details details = new Details();
details.getDetails();
        if (ans.equalsIgnoreCase("y")) {
            Seats.seat(username, choice);
        } else {
            System.out.println("Thank You For Visiting");
        }
    }
}
