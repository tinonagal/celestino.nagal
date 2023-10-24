#Author: tinonagal@gmail.com
#Date: 24th October, 2023
#Desciption: This is to validate create client flow
#Keywirds: name, email, address, password, date, time
Feature: feature to validate the client create for client-app project.

  Scenario: Validate the creation of client is succesful
    Given: the user is in the create client page
    When: The user enters name, address, email & password in the form
    And: The user click on the create client button
    Then: The user can navigate the different pages

