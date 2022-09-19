# Love-me-Block-me
a dating game that is based on true events. Take your dating skills to the next level!

Overview
Love me, Block me is an interactive game based on true events. The user will interact with a pre-programmed avatar who will randomly display an action based on pre-programmed options. Based on the option, the user will gain points or lose points. Gaining points results from the avatar randomly selecting a “good action” while a “bad action” results in negative points. The actions are listed below: 
Good actions
•	Shows-up
•	Relatively timely
•	Looks like photo
•	Kind/considerate
•	Listens
•	Nice to their mom
•	Not married
Bad actions
•	No show
•	Not on time
•	Interrupts
•	Currently married in a non-open relationship
•	Mean to their mom
•	Mean to waitstaff
Point total
A total is displayed after the date. Each total corresponds to a prize or adventure the user can then embark on. 
10 points – Congratulations! You’ve earned a trip to the jewelry store to look at engagement rings!
9 points – Congratulations! You live together with your partner!
8 points – Congratulations! You have met your partner’s loved ones!
7 points – Congratulations! You have a partner!
6 points – Congratulations! You both have decided to have “the talk” about entering an exclusive                     relationship with one another!
5 points – Congratulations! You’ve been dating three months!
4 points – Congratulations! You’ve been dating a month!
3 points – Congratulations! You’ve been dating a week!
2 points – Congratulations! You’ve been on three dates!
1 point – Congratulations! You two like one another!
0 points – Congratulations! You did not die. 
-1 points – oh no! It looks like your date is inconsiderate. Not all hope is lost!
-2 points – oh no! You’re dating a juice bag. 
-3 points – You have let them know that they are not a good match. 
-4 points – You have unmatched with your date on your dating app. 
-5 points – You now ignore their messages. 
-6 points – You have now blocked their texts. 
-7 points – You have now blocked their calls. 
-8 points – You have now blocked them on social media. 
-9 points – You now ignore them in the grocery store. 
-10 – Congratulations! You have won a trip to the animal shelter to adopt 5+ pets of your choosing!  
-11 – You will be alone forever. 
The user is presented with three options that they can select from each round. The avatar’s response is pre-programmed based on the user’s response. 
User options: 
•	“Hi! I see you are running a bit late”
•	“How do you feel about your mom?”
•	“Do you have any pets?”
•	“Have you ever killed a person? Just kidding! Are you married? “

User Stories
As a user, I want the ability to see my point total. 
As a user, I want the ability to have an image appear on screen to demonstrate that the avatar does not match his photo when it is randomly selected that my date did not match his photo. 
As a user, I want the ability to select what I will say based on three choices each round. 
As a user, I was the ability to see the point total under “oh no!” and “yay!” throughout the course of the date. 


Wireframing

 ![image](https://user-images.githubusercontent.com/112077395/191033894-604a899d-7f0a-4ac9-a7c5-b48c7d6aceb7.png)
 ![image](https://user-images.githubusercontent.com/112077395/191033943-9a323c05-e6e8-4947-a3cc-7ea109d70091.png)
 ![image](https://user-images.githubusercontent.com/112077395/191033966-bc87d97f-6065-426c-a79a-2c0845c44126.png)
 ![image](https://user-images.githubusercontent.com/112077395/191033987-fc02e275-5405-4947-b897-935916399e6c.png)


Entity Relationship Diagrams (ERDs)

User - x location on canvas – appears to be across a table from date
Date – y location on canvas – POV of user
Height – user is not seen, a rectangle is used to view date
Width – user is not scene, date will be proportional to table
Color: date will be gray
function – userChoice – used to hold the three options the user will choose from to move the date forward
function – dateResponse – the loop that will randomly determine what the date responds with from the dates’ selection
function – calculatePointTotal – used to add the “bad action” and “good action” individual point totals together at end of date. 
function – goodActionPoints – used to keep track of “good action” points during date
function – badActionPoints – used to keep track of “bad action” points during date.


