# TriviaGame

Pseudo Code

1. Create HTML skeleton and Style

2. Create Start Button
	a. use event listener and setTimeout/setInterval function to create a timer

3. on("click") = display Timer and Dynamically update HTML with questions

4. Use JS and jQuery logic to create and update HTML with quiz
	a. create array of questions with nested answers
	b. call questions and display in respective div
	c. call answers and display in respective div
	d. ask user input (ie their answer guess) and get value of answer
	e. crosscheck user answer with correct answer
	f. if user input answer == correct answer 
		then correct++;
		else incorrect ++;
	g: add event listener to Done button on.("click")
		a. 	create Grade function
		b. display grade (correct & incorrect)
		c. display img based on grade


5. Use counters for questions right and questions wrong