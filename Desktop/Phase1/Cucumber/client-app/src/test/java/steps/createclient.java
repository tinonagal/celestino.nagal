package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class createclient {

	@Given("the user is in the create client page")
	public void the_user_is_in_the_create_client_age() {
		System.out.println("Step 1: Given");
		}
	
	@When("The user enters name, address, email & password in the form")
		public void The_user_enters_name_address_email_password_in_the_form(){
		System.out.println("Step 2: Values entered");	
		}
	@And("The user click on the create client button")
		public void The_user_click_on_the_create_client_button() {
		System.out.println("Step 3: Click Button to enter values");
		}
	@Then("The user can navigate the different pages")
		public void The_user_can_navigate_the_different_pages() {
		System.out.println("Step 4: The user chooses another option");
		}
}
