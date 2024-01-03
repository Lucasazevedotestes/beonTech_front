# Challenge

Hi there, please find here the required Steps to reproduce the test cases and report.

Pre-requisites:
-  Project should be downloaded from shared link of GitHub;
-  Need to have Maven installed and configured;

---------------

<h3>Steps to Run the Test Scenarios</h3>

1. Download and Open the project folder inside of VSCode;
2. Open the Terminal inside of VSCode and Run the command: NPX Cypress Open;
3. Select End to End and click on the ValidSearch.cy.js file;

If the dependencies are correctly installed, the test scenarios will be executed.

---------------

<h3>Project Explanation</h3>
1. At first, I have edited the cypressconfig.js to bring the base url, so we do not need to call that every time inside of the tests;
2. So I created the SearchPage.js to organize the locators and methods needed to our automation script;
3. Locators were kept inside of the variables to make it easy to maintain and understand;
4. Methods were created with reusable code;
5. At the validSearch.cy.js I just Import the SearchPage class, create the describe and before hook to organize the environment;
6. We visit the URL, search for the defined keyword and do Search.
7. After the search, we validate the string result that the application provides in order to display how many results were finded;
8. Selecting the result based on the inserted keyword, I use the call back function and wrap to go ahead with the click and navigation;
9. We validate that the landed webpage is associated to the clicked result at the previous step.


---------------

<h3>    Please, find attached the Project Structure and Screenshots of the created code. </h3>


<h4><center>SearchPage.js:
<br> </br>
<div align="left">
<img src="Screenshot 2024-01-03 at 5.42.24 AM.png" width="700px"/>
</div>

<h4><center>validSearch.cy.js:
<br> </br>
<div align="left">
<img src="Screenshot 2024-01-03 at 5.41.21 AM.png" width="700px"/>
</div>  

<h4><center>cypress.config.js:
<br> </br>
<div align="left">
<img src="Screenshot 2024-01-03 at 5.43.19 AM.png" width="700px"/>
</div>  
