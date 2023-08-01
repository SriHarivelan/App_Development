//package Pages;
//import java.util.*;
//
//public class Details extends ConcreteDetails {
//	@Override
//    public void getDetails() {
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Enter the date : ");
//        String date = sc.nextLine();
//
//        // Your code to process the date or perform any other operations with details.
//        // For example, you can store the date in a variable or use it for further processing.
//    }
//}


package Pages;
import java.util.Scanner;

public class Details extends ConcreteDetails {
	
    private String date;

    // Private method to get the date from the user
    private void getDateFromUser() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the date : ");
        setDate(sc.nextLine());
    }

    // Public method to get the details (encapsulates the user input process)
    @Override
    public void getDetails() {
        getDateFromUser();
        // Your code to process the date or perform any other operations with details.
        // For example, you can store the date in a variable or use it for further processing.
    }

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
}
