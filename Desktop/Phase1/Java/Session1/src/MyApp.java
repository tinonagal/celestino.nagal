import java.util.Scanner;

public class MyApp {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
	System.out.println("Enter Amount");
	int amount = scanner.nextInt();
	
	System.out.println("Enter promo code");
	double promo = scanner.nextDouble();
	
	scanner.close();
	
	System.out.println("Amount entered: " + amount + " Promo code: " + promo);
	}

}
