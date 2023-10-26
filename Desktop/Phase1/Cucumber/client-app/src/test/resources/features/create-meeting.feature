#Author: tinonagal@gmail.com
#Date: 24th October, 2023
#Desciption: This is to validate create meeting flow
#Keywirds: name, email, address, password, date, time
Feature: feature to validate the create meeting for client-app project.

  Scenario: Validate the information entered in the create meeting html page
    Given: the user is in the create meeting page
    When: The user enters meeting topic, number of participants, date, start time & end time in the form
    And: the user clicks on the creat meeting button
    Then: The user can navigate to other pages

