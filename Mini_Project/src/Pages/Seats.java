package Pages;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;

public class Seats {
	
	
	public static void seat(String username, String choice) throws ClassNotFoundException
	{
		Scanner sc = new Scanner(System.in);
		
		
		System.out.println("Enter the type of seat (Premium/Normal) : ");
		String seattype = sc.nextLine();
		if(seattype.equals("Premium"))
		{
			Premium.premium(username, choice, seattype);
			
		}
		
		else if(seattype.equals("Normal"))
		
		{
			Normal.normal(username,choice, seattype);
		}
		
		else
		{
			System.out.println("Invalid");

			
		}
	}

}
