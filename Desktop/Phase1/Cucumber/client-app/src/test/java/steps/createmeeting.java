package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class createmeeting {

	@Given("the user is in the create meeting page")
	public void the_user_is_in_the_create_meeting_page() {
	System.out.println("Step 1: Given");	
	}
	@When("The user enters meeting topic, number of participants, date, start time & end time in the form")
	public void The_user_enters_meeting_topic_number_of_participants_date_start_time_end_time_in_the_form() {
		System.out.println("Step 2: Enters Values");
	}
	@And("the user clicks on the creat meeting button")
	public void The_user_clicks_on_the_create_meeting_button() {
	System.out.println("Step 3: Click btton to enter values");	
	}
	@Then("The user can navigate to other pages")
	public void The_user_can_navigate_to_other_pages() {
	System.out.println("Step 4: The user chooses other options");	
	}
	
}
