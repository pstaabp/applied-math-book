var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sect-linear-systems",
  "level": "1",
  "url": "sect-linear-systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Systems",
  "body": " Linear Systems  We start this section with three examples of linear systems. One is about a biathlon with running and biking legs, the second is a traffic model and the last one is an example from chemistry. Examples of linear systems are found from every mathematical subfield and every science.   Biathlon Example   Set up the following problem as a set of linear equations.   Travis runs 6 mph and bikes 18 mph in a race with two events. If the course is 29 miles long and it takes him 2 hours and 10 minutes to complete the race, how long is each segment?     In this case, we need to know how long each segment is. There are two legs to the race, so we will let     The equations come from three statements in the problem above. First, we know that the total course is 29 miles long or     The remaining equation arises from the time it takes Travis to complete the race. In general recall the relationship between speed (a rate), distance and time is     or solving for time,     For example, the time it takes Travis to finish the running leg is . The total time in hours it takes Travis to finish the race is     so the linear system is       The next example examines the traffic flow in a very limited part of Boston.   Traffic Flow   A simple model of traffic flow can be represented by the following graph:   A map of a few streets in Boston where the arrows denote the direction of traffic flow (all of these streets are one-way) and the numbers represent the numbers of cars driving down the street in a given time period. The letters through will be the names of the intersections.      Write down the equations that balance each of the numbers of cars entering and leaving each of the intersections and .    In this case, we have:     for intersections , , and respectively.    Linear equations exist in many different fields, especially the sciences. The following comes from chemistry in which a chemical equation is found by balancing the number of atoms in the equation on both sides.   Chemical Reactions   Hydrazine ( ) is an important nitrogen-based compound. A chemical reaction to produce it from ammonia and hydrogen peroxide is given by     Find the equations that balanced the numbers of nitrogen (N), hydrogen (H) and oxygen (O) atoms respectively in the reaction    The values of and can be found by solving the following linear system which balances the number of nitrogen (N), hydrogen (H) and oxygen (O) atoms respectively or       With examples of linear algebra presented, we next move to a few definitions.       A linear combination of has the form     where the constants are the combinations coefficients.    A linear equation has the form     where is a constant and .    The -tuple  satisfies or is a solution of if this point satisfies or       A system of linear equations or linear system is a set of linear equations:     and this linear system has equations and unknowns (variables).    The -tuple  satisfies or is a solution of if this point satisfies every equation of .        Linear Equations  The following are linear equations:     where summation notation has been used in the last one and note the variable names can vary. The following equations are not linear:     Each of the equations in the latter group have multiplications, squares division or other functions between variables.   The next two examples give a way to determine if a point or -tuple is a solution to a linear system.   Showing a Point is a Solution to a Linear System   Show that the point is a solution of the linear system:       Substitute and into both equations and check.     Since each equation is satisfied at the point is a solution to the linear system.      Recall that the linear system in Example can be written:     Is a solution to this linear system? Is ? Is ?    For , we need to substitute this point in and check all the equations:     so it is a solution.  For , again check all of the equations:     so this is also a solution.  For , we substitute this into the equation:     and it satisfies 2 of the equations, but not all, so this is not a solution.      "
},
{
  "id": "ex-biathlon",
  "level": "2",
  "url": "sect-linear-systems.html#ex-biathlon",
  "type": "Example",
  "number": "1.1.1",
  "title": "Biathlon Example.",
  "body": " Biathlon Example   Set up the following problem as a set of linear equations.   Travis runs 6 mph and bikes 18 mph in a race with two events. If the course is 29 miles long and it takes him 2 hours and 10 minutes to complete the race, how long is each segment?     In this case, we need to know how long each segment is. There are two legs to the race, so we will let     The equations come from three statements in the problem above. First, we know that the total course is 29 miles long or     The remaining equation arises from the time it takes Travis to complete the race. In general recall the relationship between speed (a rate), distance and time is     or solving for time,     For example, the time it takes Travis to finish the running leg is . The total time in hours it takes Travis to finish the race is     so the linear system is      "
},
{
  "id": "ex-streets",
  "level": "2",
  "url": "sect-linear-systems.html#ex-streets",
  "type": "Example",
  "number": "1.1.2",
  "title": "Traffic Flow.",
  "body": " Traffic Flow   A simple model of traffic flow can be represented by the following graph:   A map of a few streets in Boston where the arrows denote the direction of traffic flow (all of these streets are one-way) and the numbers represent the numbers of cars driving down the street in a given time period. The letters through will be the names of the intersections.      Write down the equations that balance each of the numbers of cars entering and leaving each of the intersections and .    In this case, we have:     for intersections , , and respectively.   "
},
{
  "id": "ex-hydrazine",
  "level": "2",
  "url": "sect-linear-systems.html#ex-hydrazine",
  "type": "Example",
  "number": "1.1.4",
  "title": "Chemical Reactions.",
  "body": " Chemical Reactions   Hydrazine ( ) is an important nitrogen-based compound. A chemical reaction to produce it from ammonia and hydrogen peroxide is given by     Find the equations that balanced the numbers of nitrogen (N), hydrogen (H) and oxygen (O) atoms respectively in the reaction    The values of and can be found by solving the following linear system which balances the number of nitrogen (N), hydrogen (H) and oxygen (O) atoms respectively or      "
},
{
  "id": "sect-linear-systems-9",
  "level": "2",
  "url": "sect-linear-systems.html#sect-linear-systems-9",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "     A linear combination of has the form     where the constants are the combinations coefficients.    A linear equation has the form     where is a constant and .    The -tuple  satisfies or is a solution of if this point satisfies or       A system of linear equations or linear system is a set of linear equations:     and this linear system has equations and unknowns (variables).    The -tuple  satisfies or is a solution of if this point satisfies every equation of .      "
},
{
  "id": "sect-linear-systems-10",
  "level": "2",
  "url": "sect-linear-systems.html#sect-linear-systems-10",
  "type": "Example",
  "number": "1.1.6",
  "title": "Linear Equations.",
  "body": " Linear Equations  The following are linear equations:     where summation notation has been used in the last one and note the variable names can vary. The following equations are not linear:     Each of the equations in the latter group have multiplications, squares division or other functions between variables.  "
},
{
  "id": "sect-linear-systems-12",
  "level": "2",
  "url": "sect-linear-systems.html#sect-linear-systems-12",
  "type": "Example",
  "number": "1.1.7",
  "title": "Showing a Point is a Solution to a Linear System.",
  "body": " Showing a Point is a Solution to a Linear System   Show that the point is a solution of the linear system:       Substitute and into both equations and check.     Since each equation is satisfied at the point is a solution to the linear system.   "
},
{
  "id": "sect-linear-systems-13",
  "level": "2",
  "url": "sect-linear-systems.html#sect-linear-systems-13",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Recall that the linear system in Example can be written:     Is a solution to this linear system? Is ? Is ?    For , we need to substitute this point in and check all the equations:     so it is a solution.  For , again check all of the equations:     so this is also a solution.  For , we substitute this into the equation:     and it satisfies 2 of the equations, but not all, so this is not a solution.   "
},
{
  "id": "sect-elementary-row-operations",
  "level": "1",
  "url": "sect-elementary-row-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Elementary Row Operations",
  "body": " Elementary Row Operations   We now seek a method to solve the above linear systems (and any linear system). Gauss' method and variations of it are the standard ways that all large linear systems are solved presently. The next section shows how to systematically solve a linear system using rules of algebra that keep linear equations linear.  Consider the following example of two linear equations:     We seek to find operations on these equations that keep these equations linear and don't change the solution. First, the order that we wrote them down doesn't matter and we could swap these equations as in:     The second possible operation is to multiply a single equation by a constant. For example, if we multiply the first equation of by 2, we get the system:     The third operation is that we can add two equations and the replace one of the equations with the sum. For example adding and and putting the sum in the 2nd row results in     A more common operation is to combine the last two operations and that is to multiply an equation by a constant and add to another. If we multiply by 2 and add to we get the system:      Elementary Row Operations   The three operations    Two equations of the linear system are swapped,  An equation is multiplied by a nonzero number,  An equation is replaced by the sum of itself and a multiple of another equation,    are called the elementary row operations of a linear system.      Gauss's Method  The following example shows how to use the elementary row operations seen above to solve a linear system with a technique called Gauss's Method .     If one equation had only one variable, it would be quite easy to find the solution to that equation. The following steps will result in such a system. For example, if the first equation is multiplied by and added to the second equation and the second equation is replaced (which we denote with ), then the above equations are replaced with     Next, we'd like to get rid of the term in the 3rd equation. We can do that by multiplying the first equation by 3 and adding to the 3rd and writing down this operation as well we get:     Next we will eliminate the term in the 3rd equation. We can do that by adding equations 2 and 3 and putting the result in equation 3.     At this point we can solve for in the third equation of to get . From this, plug in into the second equation of to get     and finally we can use and to substitute into the first equation of to get     therefore, . The point is a solution to linear system. Because this is the only point that satisfies all equations, this point is unique . We will also use the terminology triple to describe .   Gauss's Method   If a linear system ( ) is changed into a second linear system ( ) by one of the elemenatary row operations then linear systems ( ) and ( ) have the same set of solutions.    We will consider only the first operation in this proof. Let's assume that we swap equations and , thus system ( ),     is transformed to     Let be a solution of ( ) if it exists and note it may be one of many -tuples in the solution. Thus it satisfies each equation of linear system ( ). Since the exact same equations are in ( ) in just a different order, is a solution to ( ). If there is more than one -tuple in the solution to ( ), repeat this for every one. If there is no solution to ( ), then there will be no solution to ( ) since it is the same set of equations.  Proof of #2 and #3 above are quite similar and are not shown.     Although Gauss' Method is very flexible, generally, one tries to eliminate all terms in all equations below equation 1, terms in all equations below equation 2 and so on.      Matrices  When we solved a linear system above, you probably noticed that the variables didn't play much of a role, the coefficients changed and the variables stayed in the same place as we solved for them. Because of this, we will adopt that technique to only works with the coefficients. We first define a matrix that we will use to solve linear systems for the rest of this book.    An by matrix is a rectangular grid of numbers with rows and columns. The size of a matrix is the pair of number and and is typically written by or . Each number of the matrix is called the entry or element .     Matrices  The following are examples of matrices:      A common notation for a matrix is to use upper case letters (and often bold), for example , and are common matrices. The entry or element in the th row and th column of is . Also, the set of all by matrices is denoted .    A matrix with only 1 row is called a row vector . A matrix with only 1 column is called a column vector . The size of a vector is the number of rows (for a column vector) or the number of columns (for a row vector).    The 3rd matrix in above is a column vector of size 5. The 4th matrix is a row vector of size 3. Vectors are very important and will see them throughout this book.    Matrices and Linear Systems  Let's look at the following linear system.     We will write the coefficients of the variables and the right hand side in a matrix called an an augmented coefficient matrix. The following is this matrix for the linear system above.     and the two rows of the matrix represent the two equations. The first column represents the coefficient of the variable, and the second column represents the coefficient of the variable. The last column is the right hand sides of the linear system, and the vertical line occurs where the equal sign is in the equations.   Linear System as an Augmented Matrix   Write down the following linear system as an augmented matrix:            And the next example shows how to rewrite a matrix as a linear system.   Augmented Matrix as a Linear System   Write down the following augmented matrix as a linear system:       In this case, we are doing the opposite of the step above. That is, take a matrix and find the linear system.  Since the matrix has 4 columns, there are 3 variables (the last column is the right hand side). Let's use , and .     Alternatively, we could have used and as variables.      Row Operations and Matrices  We can perform the same row operations that we have seen above on matrices.     Row Swap   swaps rows and .    Multiply by a number   multiplies row by . The notation is also used.    Multiply by a number and add to another   multiplies row by and adds to row . The notation is also used.     In the next section, we will formalize the solving of linear system using matrices, however, the last example here reproduces the same solution technique for the example in .    Solve the linear system     by first writing as an augmented coefficient matrix and then performing elementary row operations on the matrix.    First, the augmented coefficient matrix is     Now perform the same elementary row operations as above. We first seek to change the second row, first column to a 0     and notice that this is the matrix representation of the second step in the solution listed in . Next, we seek to change the 3rd row, first column from to a 0.     And since we seek to get only a single variable in the third row, only one more step is needed.     At this point, if we return the augmented matrix to a set of equations, we get     and we can get the same solution using the same steps as above to get .    We will see in the next section that actually if we continue working with the matrix, we can more easily find the solution as well as find solutions for a broader range of linear systems.    Geometry of Linear Systems of 2 variables  If we consider only linear systems with two variables, then each equation is just a line, which we can graph on a set of axes. We are going to examine the geometry of linear systems of two variables.  First, we are going to look at three linear systems that each have different types of solutions. We can see the solutions by looking at the graphs.     The graph of each line in the linear system     is   Plot of two intersecting lines      The solution of the system is the point at which they cross. In this case it looks like the point or and . This is an example where there is only one solution (or a unique solution ).    If we graph the lines in the linear system     we get   Plot of two parallel lines      As you can see, it doesn't appear that the lines cross anywhere. In fact, they don't because the lines are parallel. This is an example of a linear system with no solution .    The linear system     has the following graph for each line   A plot of two equivalent lines      It appears that there is only one line. This is because both lines have the same graph. Each point on the line is a solution to the linear system and since there are an infinite number of such points, this is an example of a linear system with infinite number of solutions .     You can see if you have two lines, each with two variables, the example in is what happens if the two slopes are different. In this case, there is one (or a unique ) solution.  In the other two cases as in equations and , both sets of lines have the same slope. In the case of the lines have different -intercepts, and therefore the lines are parallel and thus there is no solution to the linear system. In the case of , both the slope and -intercepts are equal, so the lines are equal and thus any point on the line is a solution, and this system has an infinite number of solutions .   "
},
{
  "id": "sect-elementary-row-operations-2-12",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-elementary-row-operations-2-12",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Elementary Row Operations.",
  "body": " Elementary Row Operations   The three operations    Two equations of the linear system are swapped,  An equation is multiplied by a nonzero number,  An equation is replaced by the sum of itself and a multiple of another equation,    are called the elementary row operations of a linear system.   "
},
{
  "id": "thm-gauss-method",
  "level": "2",
  "url": "sect-elementary-row-operations.html#thm-gauss-method",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "Gauss’s Method.",
  "body": " Gauss's Method   If a linear system ( ) is changed into a second linear system ( ) by one of the elemenatary row operations then linear systems ( ) and ( ) have the same set of solutions.    We will consider only the first operation in this proof. Let's assume that we swap equations and , thus system ( ),     is transformed to     Let be a solution of ( ) if it exists and note it may be one of many -tuples in the solution. Thus it satisfies each equation of linear system ( ). Since the exact same equations are in ( ) in just a different order, is a solution to ( ). If there is more than one -tuple in the solution to ( ), repeat this for every one. If there is no solution to ( ), then there will be no solution to ( ) since it is the same set of equations.  Proof of #2 and #3 above are quite similar and are not shown.   "
},
{
  "id": "note-elimination",
  "level": "2",
  "url": "sect-elementary-row-operations.html#note-elimination",
  "type": "Note",
  "number": "1.2.3",
  "title": "",
  "body": " Although Gauss' Method is very flexible, generally, one tries to eliminate all terms in all equations below equation 1, terms in all equations below equation 2 and so on.  "
},
{
  "id": "sect-matrices-3",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-matrices-3",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  An by matrix is a rectangular grid of numbers with rows and columns. The size of a matrix is the pair of number and and is typically written by or . Each number of the matrix is called the entry or element .   "
},
{
  "id": "ex-matrices",
  "level": "2",
  "url": "sect-elementary-row-operations.html#ex-matrices",
  "type": "Example",
  "number": "1.2.5",
  "title": "Matrices.",
  "body": " Matrices  The following are examples of matrices:     "
},
{
  "id": "sect-matrices-6",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-matrices-6",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  A matrix with only 1 row is called a row vector . A matrix with only 1 column is called a column vector . The size of a vector is the number of rows (for a column vector) or the number of columns (for a row vector).   "
},
{
  "id": "sect-elementary-row-operations-5-4",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-elementary-row-operations-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented coefficient matrix. "
},
{
  "id": "sect-elementary-row-operations-5-7",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-elementary-row-operations-5-7",
  "type": "Example",
  "number": "1.2.7",
  "title": "Linear System as an Augmented Matrix.",
  "body": " Linear System as an Augmented Matrix   Write down the following linear system as an augmented matrix:           "
},
{
  "id": "sect-elementary-row-operations-5-9",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-elementary-row-operations-5-9",
  "type": "Example",
  "number": "1.2.8",
  "title": "Augmented Matrix as a Linear System.",
  "body": " Augmented Matrix as a Linear System   Write down the following augmented matrix as a linear system:       In this case, we are doing the opposite of the step above. That is, take a matrix and find the linear system.  Since the matrix has 4 columns, there are 3 variables (the last column is the right hand side). Let's use , and .     Alternatively, we could have used and as variables.   "
},
{
  "id": "sect-row-operations-and-matrices-5",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-row-operations-and-matrices-5",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Solve the linear system     by first writing as an augmented coefficient matrix and then performing elementary row operations on the matrix.    First, the augmented coefficient matrix is     Now perform the same elementary row operations as above. We first seek to change the second row, first column to a 0     and notice that this is the matrix representation of the second step in the solution listed in . Next, we seek to change the 3rd row, first column from to a 0.     And since we seek to get only a single variable in the third row, only one more step is needed.     At this point, if we return the augmented matrix to a set of equations, we get     and we can get the same solution using the same steps as above to get .   "
},
{
  "id": "sect-geom-lin-sys-2var-4",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-geom-lin-sys-2var-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unique solution no solution infinite number of solutions "
},
{
  "id": "sect-geom-lin-sys-2var-5",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-geom-lin-sys-2var-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unique "
},
{
  "id": "sect-geom-lin-sys-2var-6",
  "level": "2",
  "url": "sect-elementary-row-operations.html#sect-geom-lin-sys-2var-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "no solution infinite number of solutions "
},
{
  "id": "sect-gaussian-elimination",
  "level": "1",
  "url": "sect-gaussian-elimination.html",
  "type": "Section",
  "number": "1.3",
  "title": "Echelon Forms and Gaussian Elimination",
  "body": " Echelon Forms and Gaussian Elimination   In this section, we formalize the solving of linear systems using matrices. You will learn:     Important forms of matrices called row-echelon and reduced row-echelon forms.    An algorithm to get any matrix into these forms.    How to write the solution to a linear system in these forms.     Recall from how to convert any linear system into an augmented coefficient matrix. This will be needed to solve linear systems.    Row-Echelon and Reduced Row-Echelon Form  Notice that the strategy laid out above gets the linear system in a nice form for solving for all variables using back substitution. We will now explicitly state what this nice form is.    In each row of a matrix, the left-most entry that is non-zero is called the leading term . A matrix is in row-echelon form if     there are any rows that are all zero, they are at the bottom of the matrix.    each leading term is to the right of the leading term of the row above it (except the first row).        Matrices in Row-Echelon Form   The following matrices are in row-echelon form:         A matrix is in reduced row-echelon form if it is echelon form and has the following properties:     The leading term of each non-zero row is 1.    Every column with a leading term should be all zeros except the leading term.     In each row of a matrix, the left-most term that is non-zero is called the leading term . A matrix is in echelon form if each leading term is to the right of the leading term of the row above it (except the first row).      The following matrix are reduced row-echelon form:     and the following are not in reduced-row echelon form     The first matrix is in echelon form, but the leading coefficients are not 1. The second matrix isn't in echelon form. The leading coefficient in the 2nd row is to the left of the row above. The third matrix has a row of zeros that is not at the bottom. The fourth matrix doesn't have the leading term in a column that is zero otherwise.      Solving Linear Systems with Matrices  Returing to the solution of linear systems, in the context of matrices, we seek to put an augmented matrix into either row-echelon or reduced row-echelon form. The following strategy for a system with 3 equations and 3 variables is often helpful, however, as we will see not guaranteed.  As we will see, it is desirable to get zeros in parts of the matrix. This is generate done with the following:    If there is a 1 in row , the row operation     where is the value in the th row in the same column will put a 0 in that location. This is called the Elimination Opeation .     Strategy for putting a matrix in Row-Echelon Form  Consider a general matrix representating a linear system with 3 equations and 3 variables. The means the value of entry can be any number.     The first step is to get a 1 in the first column, first row or     We next desire to zero out the rest of the first column, which we do with the elimination operation from .  Next, we will use this to zero out the 2nd and 3rd rows in the first column to get:     Next, we seek a 1 in the 2nd row, 2nd column. or     And then if we are looking for a matrix in echelon form, zero out the 3rd row, 2nd column. We use the same general row operation in however using the 2nd row instead or     This matrix is now in row-echelon form. If instead reduced-row-echelon form is desired, in the previous step, the 2nd column, first row can be eliminated and then another set of steps can be used to get the 3rd row in the correct form.    Solving a Linear System   Use the strategy in to put the augmented matrix of the linear system:     into row-echelon form.    First, put the linear system into an augmented coefficient matrix:     We first try to get a 1 in the first row, first column. The easiest way to do this is to swap the first two rows:     Now eliminate the term in the 2nd row, first column:     Then try to get a 1 in the second row, second column. You should only use the bottom two rows to do this because using the top row would mess up the structure of the first column. We'll just divide the second row by .     We have introduced fractions, which is generally not desired. An alternative would have been to wait until later to get a 1 in the second row, second column, but often fractions is unavoidable. Next, eliminate the 3rd row, 2nd column.     The last step to get this in row-echelon form is to get the 3rd row, 3rd column to be a 1. Multiply the third row by .       One of the advantages of putting an augmented coefficient matrix in row-echelon form is that the solution can be found using back substitution , where generally the last variable is solved for in the last equation and then substituted into previous equations. We see this for the previous example.  We now write the matrix as a linear system and use back substitution to solve it.  The augmented matrix can be written as the equations:     The solution for is now plugged into the second equation:     leading to . Plugging the solutions for and into the first equation leads to     leading to . The solution to this system is the triple .   Solving the Biathlon Problem   Solve the linear system for the biathlon race in example        We start with the augmented coefficient matrix:     First to make life easier, let's multiple the 2nd row by 18 to rid the fractions.     Then we eliminate the in the 2nd equation by doing the following step,     and at this point, the matrix is in row echelon form and we rewrite the matrix in equaiton form:     And we can solve for in the last equation using back substitution. and then     therefore,     So the running part of the race is 5 miles and the biking is 24 miles.      Linear Systems and Reduced Row-Echelon Form  Throughout this section, we have used Gauss's method to take a linear system as an augmented matrix and put the matrix in row echelon form, a convenient matrix for using back substitution to find the solution to the linear system. For the remainder of the section, we will still use row operations, but put the matrix in reduced row-echelon form . Despite the fact that it takes more steps to put in the form, the result is generally easier to find the solution.    Solving a linear system by reducing its corresponding augmented matrix to a reduced row-echelon form matrix, then interpreting its solution is called Gauss-Jordon reduction .      Solve     using Gauss-Jordon reduction    First put the linear system into an augmented matrix and then use elementary row operations.     At this point when doing Gaussian Elimination, we generally just zeroed out the 3 in the 3rd row, 2nd column. However, to get things in reduced row echelon form, we will zero out the 3 in the first row, 2nd column as well.        Now we can zero out the first and second rows of the third column using the standard elimination steps.     And now, like before, we write down the equations from the augmented coefficient matrix:     or the triple . And notice that the solution in this case is simply the right hand side of the matrix above.     Solving the Traffic Problem   Solve the linear system in or written in standard form:     by writing the augmented coefficient matrix and putting the matrix in reduced row-echelon form.    We first write the augmented coefficient matrix:     The last step is to rewrite the matrix as a linear system. This matrix can be written as:     And notice that we can solve for , but not , which is a free variable or     It may seem odd that there are multiple solutions to this problem, at first glance, one should know how many travels are travelling around the city. However, notice that the original problem has 5 variables and only 4 equations. Although there are unique solutions to such systems, generally if there are more variables than equations, there are either no solutions or multiple solutions.  Additionally, on a more global scale for the map shown above there are cars entering the area and leaving and we don't know how many cars are leaving the area. If we also include another equation that would balance these (and that makes sense), then there would now be 5 equations and probably would give a unique solution.      Describing the Solution Set  So far we have seen linear system with solution sets with different number of elements. The no solution means that the solution set is empty, the unique solution means that there is one element in the set. This was the case in and in , there is a free variable resulting in infinitely many solutions . We examine this last case in more detail.  For example, if we reduce the linear system:     First, write the linear system as a augmented matrix as     Eliminate the 2 in the first column, second row.     Eliminate the 1 in the 3rd row, 2nd column.     This is now in reduced row echelon form and we rewrite as a linear system as     where the last row of the matrix isn't written, because conveys no relevant information. Notice in this case, we can solve the first equation for and the second equation for in terms of as     In this case is a free variable and we can write the set of points that solve this in the following way:       and now we have a lot of information about the solution set. For example, if , then , so the point is in the solution set. Similarly if , then is also a point in the solution set and any point given a value of .  We also have a sense of the number of solutions and since can take on any real number, there are an infinite number of triples -tuples in this solution set.  Also, the form of the solution set above is in set builder form. That is is shows how to create the set of points in the solution.    Any non-leading variable in a linear system in echelon form is called a free variable or parameter .    The next example shows that a linear system can have more than one free variable.    Consider the linear system     Write the solution set in terms of the free variables.    First, let's put this in augmented matrix form as     Notice that this is already in row-echelon form, but we will do a couple of row operation steps to get it into reduced row echelon form.     which is now in reduced row-echelon form. Note that from here we can see that the leading variables are and and the remaining variables and are free. Converting this matrix to equations results in     and solving the first equation is     We can now write down the solution in the same form (set-builder) as before as       We now find the solution to the Hydrazine chemistry problem in Example     Find the solution set of the linear system in        We will first put this into an augmented matrix, then use Gauss's method,         Rewriting as equations results in     or solving for the leading variables      Since and all depend on , a free variable, there are an infinite number of solutions to this linear system. We can write this as     Solutions include , , .  Since the above example comes from chemical equations, it is desirable to find a solution of all positive integers, since the number represent the number of atoms in the reaction. In addition, typically the solution with smallest integers is desired. In this case, the solution results in the following equation:       Row Equivalence  We have used the term matrix reduction in converting a matrix to either echelon or reduced row echelon form.    If matrix can be converted to matrix by elementary row operations, then we say that and are row equivalent or just equivalent . We use the notation for equivalence of matrices.      Show that the following matrices are row equivalent       One method to showing matrices are equivalent is to find the row operation to go from one to the other. However, generally an easier way is to put both (or in this case all three) in reduced row echelon form. In this case all three of these matrices reduce to         A linear combination of linear combinations is a linear combination.    Consider the linear combinations through . A linear combination of these is       We will use the following standard notation for matrices. A matrix is named with a roman capital letter, the th row will be denoted with the equivalent lower-case greek with subscript , that is       When one matrix is transformed to another matrix, each row of the second is a linear combination of the first.    The base step, we prove that zero row operations that transforms to , satisfies the corollary. In this case,     so each row of is a linear combination of .  For the inductive step, assume that transforming to in steps. Also assume that the matrix in the step before is called , or     with each arrow denoting a row operation. Now we proceed showing that each of the 3 elementary row operations are linear combinations. If is given by      , then     each of which is a linear combination of the rows of ,     , for , then     again, each of which is a linear combination of the rows of .     for , then     again, each of which is a linear combination of the rows of .     Now this proves that for the step , each row of is a linear combination of rows of .  Now, using induction, since the first steps transforming to is a linear combination, the steps from to , each row of is a linear combination of rows of because linear combinations of linear combinations are linear combinations.      Show that the steps that transform:     are each linear combinations of row operations.    Call the 4 matrices, , , and , then         Echelon Form and Linear Combinations of Rows  Let's return to echelon form. Why is this a nice form? Well we can use back substitution to solve for the leading variables. The reason this works is the following lemma.   In an echelon form matrix, no nonzero row is a linear combination of the other rows.   In lieu of a proof, let's take a look at an example. Consider the echelon form matrix of a the linear system from .     We look and determine if the second row (as an example) is a linear combination of the other two rows. Thus:     Each component then becomes an equation for the linear system:     which can be written as the augmented matrix:     if we transform this to row echelon form we get:     and the 3rd row says ``no solution'', so that the 2nd row is not a linear combination of the other two rows.  The notation of rows not being linear combinations of other rows is called independence and will be defined more-explicitly later in the course, however this example should give you a sense of what independence means.   Proof of  This will be a proof by contradiction. Assume that the th row is a linear combination of the other rows of the matrix that is it can be written:     The matrix can be written as     To find the values of in (\\ref{eq:row:linear:comb}), evaluate that equation for any column. To begin, consider , the column of the leading coefficient of the first row. Because the matrix is in echelon form, are all zero. Thus, examining the th element of , one gets:     and because (it is a leading element), .  Inductively, assume that . Let be the column with the leading element in row . This means that are all zero. If we examine the th component of , then  Let be the column with the leading element in row . If the th element of (\\ref{eq:row:linear:comb}) is extracted, one gets     If , then , and this implied that . If , then    "
},
{
  "id": "sect-gaussian-elimination-2-2",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row-echelon reduced row-echelon "
},
{
  "id": "def-echelon-form",
  "level": "2",
  "url": "sect-gaussian-elimination.html#def-echelon-form",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  In each row of a matrix, the left-most entry that is non-zero is called the leading term . A matrix is in row-echelon form if     there are any rows that are all zero, they are at the bottom of the matrix.    each leading term is to the right of the leading term of the row above it (except the first row).      "
},
{
  "id": "subsect-echelon-form-4",
  "level": "2",
  "url": "sect-gaussian-elimination.html#subsect-echelon-form-4",
  "type": "Example",
  "number": "1.3.2",
  "title": "Matrices in Row-Echelon Form.",
  "body": " Matrices in Row-Echelon Form   The following matrices are in row-echelon form:      "
},
{
  "id": "def-rref",
  "level": "2",
  "url": "sect-gaussian-elimination.html#def-rref",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  A matrix is in reduced row-echelon form if it is echelon form and has the following properties:     The leading term of each non-zero row is 1.    Every column with a leading term should be all zeros except the leading term.     In each row of a matrix, the left-most term that is non-zero is called the leading term . A matrix is in echelon form if each leading term is to the right of the leading term of the row above it (except the first row).   "
},
{
  "id": "subsect-echelon-form-6",
  "level": "2",
  "url": "sect-gaussian-elimination.html#subsect-echelon-form-6",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The following matrix are reduced row-echelon form:     and the following are not in reduced-row echelon form     The first matrix is in echelon form, but the leading coefficients are not 1. The second matrix isn't in echelon form. The leading coefficient in the 2nd row is to the left of the row above. The third matrix has a row of zeros that is not at the bottom. The fourth matrix doesn't have the leading term in a column that is zero otherwise.   "
},
{
  "id": "def-eliminate-step",
  "level": "2",
  "url": "sect-gaussian-elimination.html#def-eliminate-step",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  If there is a 1 in row , the row operation     where is the value in the th row in the same column will put a 0 in that location. This is called the Elimination Opeation .   "
},
{
  "id": "row-echelon-form-strategy",
  "level": "2",
  "url": "sect-gaussian-elimination.html#row-echelon-form-strategy",
  "type": "Remark",
  "number": "1.3.6",
  "title": "Strategy for putting a matrix in Row-Echelon Form.",
  "body": " Strategy for putting a matrix in Row-Echelon Form  Consider a general matrix representating a linear system with 3 equations and 3 variables. The means the value of entry can be any number.     The first step is to get a 1 in the first column, first row or     We next desire to zero out the rest of the first column, which we do with the elimination operation from .  Next, we will use this to zero out the 2nd and 3rd rows in the first column to get:     Next, we seek a 1 in the 2nd row, 2nd column. or     And then if we are looking for a matrix in echelon form, zero out the 3rd row, 2nd column. We use the same general row operation in however using the 2nd row instead or     This matrix is now in row-echelon form. If instead reduced-row-echelon form is desired, in the previous step, the 2nd column, first row can be eliminated and then another set of steps can be used to get the 3rd row in the correct form.  "
},
{
  "id": "ex-solve-linear-syst",
  "level": "2",
  "url": "sect-gaussian-elimination.html#ex-solve-linear-syst",
  "type": "Example",
  "number": "1.3.7",
  "title": "Solving a Linear System.",
  "body": " Solving a Linear System   Use the strategy in to put the augmented matrix of the linear system:     into row-echelon form.    First, put the linear system into an augmented coefficient matrix:     We first try to get a 1 in the first row, first column. The easiest way to do this is to swap the first two rows:     Now eliminate the term in the 2nd row, first column:     Then try to get a 1 in the second row, second column. You should only use the bottom two rows to do this because using the top row would mess up the structure of the first column. We'll just divide the second row by .     We have introduced fractions, which is generally not desired. An alternative would have been to wait until later to get a 1 in the second row, second column, but often fractions is unavoidable. Next, eliminate the 3rd row, 2nd column.     The last step to get this in row-echelon form is to get the 3rd row, 3rd column to be a 1. Multiply the third row by .      "
},
{
  "id": "sect-gaussian-elimination-4-7",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "back substitution "
},
{
  "id": "ex-biathlon-solution",
  "level": "2",
  "url": "sect-gaussian-elimination.html#ex-biathlon-solution",
  "type": "Example",
  "number": "1.3.8",
  "title": "Solving the Biathlon Problem.",
  "body": " Solving the Biathlon Problem   Solve the linear system for the biathlon race in example        We start with the augmented coefficient matrix:     First to make life easier, let's multiple the 2nd row by 18 to rid the fractions.     Then we eliminate the in the 2nd equation by doing the following step,     and at this point, the matrix is in row echelon form and we rewrite the matrix in equaiton form:     And we can solve for in the last equation using back substitution. and then     therefore,     So the running part of the race is 5 miles and the biking is 24 miles.   "
},
{
  "id": "sect-gaussian-elimination-5-3",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-5-3",
  "type": "Definition",
  "number": "1.3.9",
  "title": "",
  "body": "  Solving a linear system by reducing its corresponding augmented matrix to a reduced row-echelon form matrix, then interpreting its solution is called Gauss-Jordon reduction .   "
},
{
  "id": "sect-gaussian-elimination-5-4",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-5-4",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Solve     using Gauss-Jordon reduction    First put the linear system into an augmented matrix and then use elementary row operations.     At this point when doing Gaussian Elimination, we generally just zeroed out the 3 in the 3rd row, 2nd column. However, to get things in reduced row echelon form, we will zero out the 3 in the first row, 2nd column as well.        Now we can zero out the first and second rows of the third column using the standard elimination steps.     And now, like before, we write down the equations from the augmented coefficient matrix:     or the triple . And notice that the solution in this case is simply the right hand side of the matrix above.   "
},
{
  "id": "ex-traffic-solution",
  "level": "2",
  "url": "sect-gaussian-elimination.html#ex-traffic-solution",
  "type": "Example",
  "number": "1.3.11",
  "title": "Solving the Traffic Problem.",
  "body": " Solving the Traffic Problem   Solve the linear system in or written in standard form:     by writing the augmented coefficient matrix and putting the matrix in reduced row-echelon form.    We first write the augmented coefficient matrix:     The last step is to rewrite the matrix as a linear system. This matrix can be written as:     And notice that we can solve for , but not , which is a free variable or     It may seem odd that there are multiple solutions to this problem, at first glance, one should know how many travels are travelling around the city. However, notice that the original problem has 5 variables and only 4 equations. Although there are unique solutions to such systems, generally if there are more variables than equations, there are either no solutions or multiple solutions.  Additionally, on a more global scale for the map shown above there are cars entering the area and leaving and we don't know how many cars are leaving the area. If we also include another equation that would balance these (and that makes sense), then there would now be 5 equations and probably would give a unique solution.   "
},
{
  "id": "subsect-describe-solutions-21",
  "level": "2",
  "url": "sect-gaussian-elimination.html#subsect-describe-solutions-21",
  "type": "Definition",
  "number": "1.3.12",
  "title": "",
  "body": "  Any non-leading variable in a linear system in echelon form is called a free variable or parameter .   "
},
{
  "id": "ex-echelon-form-3by5",
  "level": "2",
  "url": "sect-gaussian-elimination.html#ex-echelon-form-3by5",
  "type": "Example",
  "number": "1.3.13",
  "title": "",
  "body": "  Consider the linear system     Write the solution set in terms of the free variables.    First, let's put this in augmented matrix form as     Notice that this is already in row-echelon form, but we will do a couple of row operation steps to get it into reduced row echelon form.     which is now in reduced row-echelon form. Note that from here we can see that the leading variables are and and the remaining variables and are free. Converting this matrix to equations results in     and solving the first equation is     We can now write down the solution in the same form (set-builder) as before as      "
},
{
  "id": "ex-hydrazine-solution",
  "level": "2",
  "url": "sect-gaussian-elimination.html#ex-hydrazine-solution",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": "  Find the solution set of the linear system in        We will first put this into an augmented matrix, then use Gauss's method,         Rewriting as equations results in     or solving for the leading variables      Since and all depend on , a free variable, there are an infinite number of solutions to this linear system. We can write this as     Solutions include , , .  Since the above example comes from chemical equations, it is desirable to find a solution of all positive integers, since the number represent the number of atoms in the reaction. In addition, typically the solution with smallest integers is desired. In this case, the solution results in the following equation:    "
},
{
  "id": "sect-gaussian-elimination-7-3",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-7-3",
  "type": "Definition",
  "number": "1.3.15",
  "title": "",
  "body": "  If matrix can be converted to matrix by elementary row operations, then we say that and are row equivalent or just equivalent . We use the notation for equivalence of matrices.   "
},
{
  "id": "sect-gaussian-elimination-7-4",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-7-4",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Show that the following matrices are row equivalent       One method to showing matrices are equivalent is to find the row operation to go from one to the other. However, generally an easier way is to put both (or in this case all three) in reduced row echelon form. In this case all three of these matrices reduce to      "
},
{
  "id": "sect-gaussian-elimination-7-5",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-7-5",
  "type": "Lemma",
  "number": "1.3.17",
  "title": "",
  "body": "  A linear combination of linear combinations is a linear combination.    Consider the linear combinations through . A linear combination of these is      "
},
{
  "id": "cor-rows-linear-comb",
  "level": "2",
  "url": "sect-gaussian-elimination.html#cor-rows-linear-comb",
  "type": "Corollary",
  "number": "1.3.18",
  "title": "",
  "body": "  When one matrix is transformed to another matrix, each row of the second is a linear combination of the first.    The base step, we prove that zero row operations that transforms to , satisfies the corollary. In this case,     so each row of is a linear combination of .  For the inductive step, assume that transforming to in steps. Also assume that the matrix in the step before is called , or     with each arrow denoting a row operation. Now we proceed showing that each of the 3 elementary row operations are linear combinations. If is given by      , then     each of which is a linear combination of the rows of ,     , for , then     again, each of which is a linear combination of the rows of .     for , then     again, each of which is a linear combination of the rows of .     Now this proves that for the step , each row of is a linear combination of rows of .  Now, using induction, since the first steps transforming to is a linear combination, the steps from to , each row of is a linear combination of rows of because linear combinations of linear combinations are linear combinations.   "
},
{
  "id": "sect-gaussian-elimination-7-9",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-7-9",
  "type": "Example",
  "number": "1.3.19",
  "title": "",
  "body": "  Show that the steps that transform:     are each linear combinations of row operations.    Call the 4 matrices, , , and , then      "
},
{
  "id": "lem-ech-ind",
  "level": "2",
  "url": "sect-gaussian-elimination.html#lem-ech-ind",
  "type": "Lemma",
  "number": "1.3.20",
  "title": "",
  "body": " In an echelon form matrix, no nonzero row is a linear combination of the other rows.  "
},
{
  "id": "sect-gaussian-elimination-8-15",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-8-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independence "
},
{
  "id": "sect-gaussian-elimination-8-16",
  "level": "2",
  "url": "sect-gaussian-elimination.html#sect-gaussian-elimination-8-16",
  "type": "Proof",
  "number": "1.3.6.1",
  "title": "Proof of Lemma 1.3.20.",
  "body": " Proof of  This will be a proof by contradiction. Assume that the th row is a linear combination of the other rows of the matrix that is it can be written:     The matrix can be written as     To find the values of in (\\ref{eq:row:linear:comb}), evaluate that equation for any column. To begin, consider , the column of the leading coefficient of the first row. Because the matrix is in echelon form, are all zero. Thus, examining the th element of , one gets:     and because (it is a leading element), .  Inductively, assume that . Let be the column with the leading element in row . This means that are all zero. If we examine the th component of , then  Let be the column with the leading element in row . If the th element of (\\ref{eq:row:linear:comb}) is extracted, one gets     If , then , and this implied that . If , then  "
},
{
  "id": "sect-vectors-as-solutions",
  "level": "1",
  "url": "sect-vectors-as-solutions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Vectors as Solutions of Linear Solutions",
  "body": " Vectors as Solutions of Linear Solutions   In , we saw solutions of linear systems that either had or did not have a free variable. In both of these cases, we can write the solutions in another form using vectors. In this section,     We revisit vectors and discuss sums and scalar multiplication of vectors.    Write a solution without a free variable as a vector.    Write a solution with free variables(s) in vector form.       Vectors as Solutions of Linear Systems  In we were introduced to matrices as a rectangular grid of numbers. Recall that if the matrix has only a single column, we called it column vector . As we will see in the first few chapters of this text, vectors are very important so we explore these a bit more here and then later in . A column vector can be written     with real numbers is a solution to the linear equation    The vector in is a solution to a linear equation      if     A vector is a solution to a linear system if the points satisfy each equation in the solution. We consider the vector in equivalent to the tuple .      Addition and Scalar Multiplication of Vectors  Before examining vectors as solutions of linear system, we need to define vector sum and scalar multiplication.    The sum of two vectors  and is defined as     and the scalar multiplication of a vector  by is         Let     Find and .           Writing Solutions in Vector Form  There are a couple of advantages to writing a solution to a linear system in vector form. We will see some of them later in the course, however, right now, we can write down specific points that are in the solution set quite easily. There's little advantage to using vectors for unique and no solution linear systems, but when you have multiple (infinite number of) solutions, then vectors shine through.    Consider the linear system from in reduced row echelon form:     Recall that the solution in terms of as     Write the solution in terms of a vector.    There is one parameter in this case and thus the solution can be written as     And this form makes it quite easy to find individual points. If we let , then is a point in the solution set, if let , then is a point.    Note that it takes a little work to get a linear system in echelon form into a solution in vector form. We will see in the next section that there is another form that the linear system (matrix) can be put into for an easier transition to this form.    Write the solution to the linear system that we saw in Example      in vector form.    In example , the solution set was found to be     with the free variables and . This can be written as a vector as     Thus the solution can be written:     This is the most general form of the solution to the linear system in this example and as before one can write down solutions with specific values of free variables. For example, if and are both 0, the the point is a solution to the linear system. (Try it!) This is an example of a particular solution as we define below.      Consider a linear system. If the point is a solution to the system and do not have any free variables, then the point is called a particular solution .    A few things of note before we go on:     After the first two sections of the text, you should know how to do Gauss's method on any linear system and be able to write down the solution set in either set builder notation or as vectors.    Gauss' method states that any of the 3 elementary row operations results in the same solution. Since there is no algorithm to apply to a linear system (or matrix), if we use 2 different set of row operations, do we get the same solution (or at least the same set of free variables)?      "
},
{
  "id": "sect-vectors-as-solutions-3-2",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#sect-vectors-as-solutions-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column vector "
},
{
  "id": "def-vector-as-solution",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#def-vector-as-solution",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  The vector in is a solution to a linear equation      if     A vector is a solution to a linear system if the points satisfy each equation in the solution. We consider the vector in equivalent to the tuple .   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#def-",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  The sum of two vectors  and is defined as     and the scalar multiplication of a vector  by is      "
},
{
  "id": "sect-vectors-as-solutions-4-4",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#sect-vectors-as-solutions-4-4",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Let     Find and .        "
},
{
  "id": "sect-vectors-as-solutions-5-3",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#sect-vectors-as-solutions-5-3",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Consider the linear system from in reduced row echelon form:     Recall that the solution in terms of as     Write the solution in terms of a vector.    There is one parameter in this case and thus the solution can be written as     And this form makes it quite easy to find individual points. If we let , then is a point in the solution set, if let , then is a point.   "
},
{
  "id": "ex-large-linear-solution",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#ex-large-linear-solution",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Write the solution to the linear system that we saw in Example      in vector form.    In example , the solution set was found to be     with the free variables and . This can be written as a vector as     Thus the solution can be written:     This is the most general form of the solution to the linear system in this example and as before one can write down solutions with specific values of free variables. For example, if and are both 0, the the point is a solution to the linear system. (Try it!) This is an example of a particular solution as we define below.   "
},
{
  "id": "sect-vectors-as-solutions-5-6",
  "level": "2",
  "url": "sect-vectors-as-solutions.html#sect-vectors-as-solutions-5-6",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": "  Consider a linear system. If the point is a solution to the system and do not have any free variables, then the point is called a particular solution .   "
},
{
  "id": "sec-homo-non-homo",
  "level": "1",
  "url": "sec-homo-non-homo.html",
  "type": "Section",
  "number": "1.5",
  "title": "General <span class=\"process-math\">\\(=\\)<\/span> Homogeneous <span class=\"process-math\">\\(+\\)<\/span> Nonhomogeneous",
  "body": " General Homogeneous Nonhomogeneous   If we return to the solution set in in the previous section: where the third vector is a particular solution and the other two vectors are multiplied by free variables (parameters). This form will give us a lot of information about the solution set.   The solution to a linear system can be described as where is any particular solution and the number of vectors equals the number of free variables that the system has after Gaussian reduction (and in echelon form).     A linear equation is homogeneous if the constant term (on the right hand side) is 0. A linear system is homogeneous if all constant terms are 0.    The next two examples show the possible results of a homogeneous system.    Find the solution to the linear system:     Using the row operation, , we get and from back substitution, we get the solution and note that this is a unique solution.      Find the solution to the homogeneous linear system from .       In , we wrote down the solution In vector form the solution is In this case, the solution set has an infinite number of points.      For any homogeneous linear system there exist vectors such that the solution set of the system is     First, use Gauss' method to reduce the linear system to echelon form.  Let row be the bottom-most row that is not in the form , it will have the form: and since is a leading variable . (Note: means leading, so means the column (variable \\#) of the leading variable in the th row.) Solving for :   This equation shows how to write in terms of the free variables to the right of column . There may or may not be free variables. If there are not then it says that .  Next, in the induction proof, assume that some row , can be written , then row of the linear system in echelon form is: with and thus solve for by subtracting all other terms and dividing through by . Thus is written as a linear combination of all variables to the right. For each leading variable on the right, replace it with its solution from back-substitution. Thus can be written as Inductively, each leading variable can be written in this form. The in the statement of the lemma are the free variables and the vectors are coefficients of the free variable corresponding to in each .      Non-homogeneous Systems   Homogeneous and Nonhomogeneous Systems   If a system is not homogeneous, it is called non-homogeneous . For a non-homogeneous system, there is an associated homogeneous system found by replacing the right hand side with zeros.     Solving a nonhomogeneous systems   Solve and it's associated homogenous system.    First, we write the augmented coefficient matrix   and then we put this matrix in row-reduced echelon form.     Let since it is a free variable and thus the solution can be written:     so the solution can be written in vector form as     and recall that is a particular solution.  The associated homogeneous system is     and the solution can be found by first writing the augmented coefficient matrix     and then we put this matrix in row-reduced echelon form.     which has the solution, using      which can be written in vector form as       The above example indicates that a solution to non-homogeneous system consists of a particular solution and the solution to the associated homogeneous system.    For any linear system with a particular solution , the solution set is     To prove this, we will first show that any solution of the non-homogeneous linear system, then satisfies the associated homogeneous system, then show that if is a solution to the associated homogeneous system, then satisfies the non-homogeneous system.     Assume that satisfies , that is     then satisfies     the associated homogeneous system.    Next assume that satisfies . Then we show that satisfies:     satisfies .       As a summary of this section, the title     and if we can find any particular solution and add it to the homogeneous solution, then we have the full solution.   Summary of Solutions      number of solutions of the      associated homogeneous system    particular   one  infinitely many    solution  yes  unique solution  infinitely many solutions    exists?  no  no solutions  no solutions       Solving homogeneous Linear Systems  A homogeneous linear system can be solved in a reasonably efficient manner. Consider the system:     and if we write down the augmented coefficient matrix we get:     If we perform row operations on this matrix, then the 4th column (right hand side of the linear system), will remain zero, so instead of including this vector, we'll perform row operations only on the first three columns:     which is now in echelon form. To find the solution, we will write down the top two equations, recalling that the right hand side is 0.     solving the second equation for results in     and then substitute this into the first equation:     and writing the solution in vector form is       Singular and Nonsingular Matrices  In , we will formally define a square matrix, but in short a matrix is square if the number of rows equals the number of columns.    A square matrix is nonsingular if it is a matrix of coefficients of a homogeneous linear system with the unique solution . Otherwise it is singular , that is the associated homogeneous system has a solution set with an infinite number of points.      The associated linear system in has an infinite number of solutions, therefore the matrix     is singular.  The linear system     was shown above to have a unique solution, thus the associated homogeneous system also has a unique solution which implies that the matrix     is nonsingular.      Is the matrix     singular or nonsingular?    We can consider the elements of the matrix to be the coefficients of a homogeneous linear system and find its solution. Thus we reduce     which is now in echelon form. Note that there is a free variable, so this system would have an infinite number of solutions. Therefore, the original matrix is singular .     "
},
{
  "id": "sec-homo-non-homo-2-2",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-2-2",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "",
  "body": " The solution to a linear system can be described as where is any particular solution and the number of vectors equals the number of free variables that the system has after Gaussian reduction (and in echelon form).  "
},
{
  "id": "sec-homo-non-homo-2-3",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-2-3",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  A linear equation is homogeneous if the constant term (on the right hand side) is 0. A linear system is homogeneous if all constant terms are 0.   "
},
{
  "id": "sec-homo-non-homo-2-5",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-2-5",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Find the solution to the linear system:     Using the row operation, , we get and from back substitution, we get the solution and note that this is a unique solution.   "
},
{
  "id": "ex-hydrazine-solution2",
  "level": "2",
  "url": "sec-homo-non-homo.html#ex-hydrazine-solution2",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  Find the solution to the homogeneous linear system from .       In , we wrote down the solution In vector form the solution is In this case, the solution set has an infinite number of points.   "
},
{
  "id": "sec-homo-non-homo-2-7",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-2-7",
  "type": "Lemma",
  "number": "1.5.5",
  "title": "",
  "body": "  For any homogeneous linear system there exist vectors such that the solution set of the system is     First, use Gauss' method to reduce the linear system to echelon form.  Let row be the bottom-most row that is not in the form , it will have the form: and since is a leading variable . (Note: means leading, so means the column (variable \\#) of the leading variable in the th row.) Solving for :   This equation shows how to write in terms of the free variables to the right of column . There may or may not be free variables. If there are not then it says that .  Next, in the induction proof, assume that some row , can be written , then row of the linear system in echelon form is: with and thus solve for by subtracting all other terms and dividing through by . Thus is written as a linear combination of all variables to the right. For each leading variable on the right, replace it with its solution from back-substitution. Thus can be written as Inductively, each leading variable can be written in this form. The in the statement of the lemma are the free variables and the vectors are coefficients of the free variable corresponding to in each .   "
},
{
  "id": "subsect-nonhomo-system-2",
  "level": "2",
  "url": "sec-homo-non-homo.html#subsect-nonhomo-system-2",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Homogeneous and Nonhomogeneous Systems.",
  "body": " Homogeneous and Nonhomogeneous Systems   If a system is not homogeneous, it is called non-homogeneous . For a non-homogeneous system, there is an associated homogeneous system found by replacing the right hand side with zeros.   "
},
{
  "id": "ex-nh-and-homo",
  "level": "2",
  "url": "sec-homo-non-homo.html#ex-nh-and-homo",
  "type": "Example",
  "number": "1.5.7",
  "title": "Solving a nonhomogeneous systems.",
  "body": " Solving a nonhomogeneous systems   Solve and it's associated homogenous system.    First, we write the augmented coefficient matrix   and then we put this matrix in row-reduced echelon form.     Let since it is a free variable and thus the solution can be written:     so the solution can be written in vector form as     and recall that is a particular solution.  The associated homogeneous system is     and the solution can be found by first writing the augmented coefficient matrix     and then we put this matrix in row-reduced echelon form.     which has the solution, using      which can be written in vector form as      "
},
{
  "id": "subsect-nonhomo-system-5",
  "level": "2",
  "url": "sec-homo-non-homo.html#subsect-nonhomo-system-5",
  "type": "Lemma",
  "number": "1.5.8",
  "title": "",
  "body": "  For any linear system with a particular solution , the solution set is     To prove this, we will first show that any solution of the non-homogeneous linear system, then satisfies the associated homogeneous system, then show that if is a solution to the associated homogeneous system, then satisfies the non-homogeneous system.     Assume that satisfies , that is     then satisfies     the associated homogeneous system.    Next assume that satisfies . Then we show that satisfies:     satisfies .      "
},
{
  "id": "subsect-nonhomo-system-9",
  "level": "2",
  "url": "sec-homo-non-homo.html#subsect-nonhomo-system-9",
  "type": "Table",
  "number": "1.5.9",
  "title": "Summary of Solutions",
  "body": " Summary of Solutions      number of solutions of the      associated homogeneous system    particular   one  infinitely many    solution  yes  unique solution  infinitely many solutions    exists?  no  no solutions  no solutions    "
},
{
  "id": "sec-homo-non-homo-5-2",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square "
},
{
  "id": "sec-homo-non-homo-5-3",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-5-3",
  "type": "Definition",
  "number": "1.5.10",
  "title": "",
  "body": "  A square matrix is nonsingular if it is a matrix of coefficients of a homogeneous linear system with the unique solution . Otherwise it is singular , that is the associated homogeneous system has a solution set with an infinite number of points.   "
},
{
  "id": "sec-homo-non-homo-5-4",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-5-4",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": "  The associated linear system in has an infinite number of solutions, therefore the matrix     is singular.  The linear system     was shown above to have a unique solution, thus the associated homogeneous system also has a unique solution which implies that the matrix     is nonsingular.   "
},
{
  "id": "sec-homo-non-homo-5-5",
  "level": "2",
  "url": "sec-homo-non-homo.html#sec-homo-non-homo-5-5",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  Is the matrix     singular or nonsingular?    We can consider the elements of the matrix to be the coefficients of a homogeneous linear system and find its solution. Thus we reduce     which is now in echelon form. Note that there is a free variable, so this system would have an infinite number of solutions. Therefore, the original matrix is singular .   "
},
{
  "id": "sect-linear-geometry",
  "level": "1",
  "url": "sect-linear-geometry.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear Geometry of <span class=\"process-math\">\\(n\\)<\/span>-space",
  "body": " Linear Geometry of -space    Scalar Multiplication of Vectors  In the , we saw the scalar multiplication of a vector. In , this means     in that each component of the vector is multiplied by the scalar . Geometrically, multiplication by the scalar , scales the length of the vector by a factor of and flips its direction if .   A plot showing multiplication of vectors        Vector Addition  As we saw in the previous chapter, vector addition in is     Consider two vectors and in the plane:   A plot of two vectors in the plane      The sum of these vectors can be represented by taking the vector, then drawing the at the tail end of the vector. The resulting vector        starts at the beginning of and ends at the end of as seen above.  Another way to think about this is to use and as the sides of the parallelogram. The vector is diagonal from the starting point of both and extending to the ending point of both.   The sum of two vectors are the sides of a paralellogram        Geometry of Addition and Scalar Multiplication in  As we saw in the previous section, we know how to add and scalar multiply vectors in . The geometry of these operations are similar to that in . For example, in , a vector connects two points in 3-dimensional space. Scalar multiplication results in scaling that vector by a factor of . Addition works the same way: make the ending point of the first vector, the starting point of the second vector. The result is the vector from the starting point of the first vector to the ending point of the 2nd vector.  And this extends to any dimension, . Although this is difficult to visualize, it still works the same way. Typically there is no need to draw any vectors in dimensions above 3.    Lines in Vector form in and  First, let's look at a line in and for example, passes through and and denote the line . This would look like:   A vector version of a line in      Let's make the vector the vector between the points and as shown on the figure above. Recall that a vector and a point is synonymous if the vector starts at the origin. Call the vector from to .  Next, any point on the line can be written as a vector by addition of and a scale of or . Thus the line between these two points can be written as     This notion extend easily to . The set of points             Planes in  A plane in can also be written using vectors although perhaps harder to visualize.   Plane   A plane in is the set of points     for nonzero vectors and and and are vectors in .    Consider the following example in which a parallelogram is drawn in the plane. The point in one corner of the parallelogram and the two sides are     The parallelogram in would look like:        The set of all points on the plane can then be written as     Extending this idea to linear surfaces in is a natural generalization of planes.    A -dimensional linear surface in is the set:     If , then the surface is called a hyperplane .      Geometry of Linear Systems  You should have noticed the the -dimensional linear surface above has the same form as the solution to the general linear system.     If the linear system has one free variable, the solution is a line.    If the linear system has two free variables, the solution is a plane (or hyperplane).       Length and Angle Measures  Two of the basic ideas of geometry are the notions of length and angles. These are well-defined in and with a relatively easy extension to and in this section we generalize to . We'll start with the notion of distance as the length of a vector. Consider first a vector     in the plane ( ).   A vector starting at the origin showing the relationship to the coordinate sides.      and using plane geometry, the length of , denoted is the hypotenuse of the triangle or     and if is in , the length would include a square of the third component inside the square root. Thus, we defined the length of any vector in to be the following.    The length of a vector is given by     which fits our expectations in and .      Find the length of the vector:              Angles of vectors in  Consider first 2 vectors in . The angle between them would be the angle (measured in the counterclockwise direction) between the vectors if the starting point is anchored at the same place. For example:        where You can find the angle using knowledge of geometry. In this case, you can make a triangle by connecting the end points of each vector. Note that the third leg of the triangle can be written as         and the lengths of the three sides are: and then using the law of cosines: which in this case .  Note: since the range of is (or ), the angle will always be the angle between the vectors with this range. If you need the proper angle, you may need to subtract the result from .    Angles of vectors in  Understanding the above section allows us to extend the notion of vectors in dimensions, with the key being the law of cosines:     and if we expand this out for     Then,     Expanding the top equation and subtracting the two below:     The term in the parentheses appears often throughout linear algebra and is called the dot product     The dot product (or inner product ) of the vectors and is defined as       Note: the dot product between two vectors results in a number (a scalar). Also, the dot product is only defined between two vectors of the same length. Also, for any vector , there is a nice relationship between the length and the dot product:     Again, returning to law of cosines and solving for :       Properties of The Dot Product  As we will see, the dot product is an extremely important concept. Before going on, we show the properties of the dot product.     Commutative   ,    Distributative   .    Associative   .     These properties can be shown using the Definition above.   The Triangle Inequality   For any and both in , then     Equality is only reached if one of the vectors is a nonnegative scalar multiple of the other.    First, note that if either or , then then holds.  Therefore, assume that neither nor is the zero vector. Then create the vector     The square of the length of this is nonnegative.     Adding to both sides     and lastly, taking the square root of both sides     To show equality, assume that ,     therefore is a scalar multiple of .    This can be visualized by considering the plane in which and lie (and note that regardless of the value of , they will lie in a plane or planar subset of .)   A plot showing the triangle inequality for vectors in      The vector is one side of the triangle and we know that any one side must always be no larger than the sum of the other two.   Cauchy-Swartz Inequality   Let and be vectors in . Then     with equality if and only if and are scalar multiples of each other.    A consequence of the Triangle Inequality is , thus the Cauchy-Swartz Inequality holds if . Assume that . Then     For equality, assume that for some real number . Then     and since these steps are reversible, this hold for if and only if.    We now use the dot product to define the angle between two vectors in .    The angle between vectors  and is the value of that satisfies:       So now with any two vectors, the above expression is a way to define the angle between them.    Find the angle between             and therefore the angle can be found by     and . And although it's difficult to visualize these vectors, we can imagine the angle between them.    One of the most important angles in geometry is , which occurs in right triangles and perpendicular lines. In terms of vectors, we use the dot product to define this.    Two vectors and are perpendicular or orthogonal if their dot product is 0.     "
},
{
  "id": "fig-plot-mult-vectors",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-mult-vectors",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": " A plot showing multiplication of vectors     "
},
{
  "id": "fig-plot-two-vectors",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-two-vectors",
  "type": "Figure",
  "number": "1.6.2",
  "title": "",
  "body": " A plot of two vectors in the plane     "
},
{
  "id": "fig-plot-sum-vectors",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-sum-vectors",
  "type": "Figure",
  "number": "1.6.3",
  "title": "",
  "body": "     "
},
{
  "id": "fig-plot-vector-parallelogram",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-vector-parallelogram",
  "type": "Figure",
  "number": "1.6.4",
  "title": "",
  "body": " The sum of two vectors are the sides of a paralellogram     "
},
{
  "id": "fig-plot-line-in-r2",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-line-in-r2",
  "type": "Figure",
  "number": "1.6.5",
  "title": "",
  "body": " A vector version of a line in     "
},
{
  "id": "fig-plot-line-in-r3",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-line-in-r3",
  "type": "Figure",
  "number": "1.6.6",
  "title": "",
  "body": "     "
},
{
  "id": "sect-planes-r3-3",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-planes-r3-3",
  "type": "Definition",
  "number": "1.6.7",
  "title": "Plane.",
  "body": " Plane   A plane in is the set of points     for nonzero vectors and and and are vectors in .   "
},
{
  "id": "fig-plot-parallelogram-in-r3",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-parallelogram-in-r3",
  "type": "Figure",
  "number": "1.6.8",
  "title": "",
  "body": "     "
},
{
  "id": "sect-planes-r3-11",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-planes-r3-11",
  "type": "Definition",
  "number": "1.6.9",
  "title": "",
  "body": "  A -dimensional linear surface in is the set:     If , then the surface is called a hyperplane .   "
},
{
  "id": "fig-plot-vector-with-coords",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-vector-with-coords",
  "type": "Figure",
  "number": "1.6.10",
  "title": "",
  "body": " A vector starting at the origin showing the relationship to the coordinate sides.     "
},
{
  "id": "sect-length-angles-9",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-length-angles-9",
  "type": "Definition",
  "number": "1.6.11",
  "title": "",
  "body": "  The length of a vector is given by     which fits our expectations in and .   "
},
{
  "id": "sect-length-angles-10",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-length-angles-10",
  "type": "Example",
  "number": "1.6.12",
  "title": "",
  "body": "  Find the length of the vector:           "
},
{
  "id": "fig-plot-angle-between-vector",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-angle-between-vector",
  "type": "Figure",
  "number": "1.6.13",
  "title": "",
  "body": "     "
},
{
  "id": "fig-plot-vector-diff",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-vector-diff",
  "type": "Figure",
  "number": "1.6.14",
  "title": "",
  "body": "     "
},
{
  "id": "sect-angles-vectors-10",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-angles-vectors-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sect-angles-vectors-11",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-angles-vectors-11",
  "type": "Definition",
  "number": "1.6.15",
  "title": "",
  "body": "  The dot product (or inner product ) of the vectors and is defined as      "
},
{
  "id": "sect-dot-prod-props-5",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-dot-prod-props-5",
  "type": "Theorem",
  "number": "1.6.16",
  "title": "The Triangle Inequality.",
  "body": " The Triangle Inequality   For any and both in , then     Equality is only reached if one of the vectors is a nonnegative scalar multiple of the other.    First, note that if either or , then then holds.  Therefore, assume that neither nor is the zero vector. Then create the vector     The square of the length of this is nonnegative.     Adding to both sides     and lastly, taking the square root of both sides     To show equality, assume that ,     therefore is a scalar multiple of .   "
},
{
  "id": "fig-plot-triangle-inequality",
  "level": "2",
  "url": "sect-linear-geometry.html#fig-plot-triangle-inequality",
  "type": "Figure",
  "number": "1.6.17",
  "title": "",
  "body": " A plot showing the triangle inequality for vectors in     "
},
{
  "id": "sect-dot-prod-props-9",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-dot-prod-props-9",
  "type": "Corollary",
  "number": "1.6.18",
  "title": "Cauchy-Swartz Inequality.",
  "body": " Cauchy-Swartz Inequality   Let and be vectors in . Then     with equality if and only if and are scalar multiples of each other.    A consequence of the Triangle Inequality is , thus the Cauchy-Swartz Inequality holds if . Assume that . Then     For equality, assume that for some real number . Then     and since these steps are reversible, this hold for if and only if.   "
},
{
  "id": "sect-dot-prod-props-11",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-dot-prod-props-11",
  "type": "Definition",
  "number": "1.6.19",
  "title": "",
  "body": "  The angle between vectors  and is the value of that satisfies:      "
},
{
  "id": "sect-dot-prod-props-13",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-dot-prod-props-13",
  "type": "Example",
  "number": "1.6.20",
  "title": "",
  "body": "  Find the angle between             and therefore the angle can be found by     and . And although it's difficult to visualize these vectors, we can imagine the angle between them.   "
},
{
  "id": "sect-dot-prod-props-15",
  "level": "2",
  "url": "sect-linear-geometry.html#sect-dot-prod-props-15",
  "type": "Definition",
  "number": "1.6.21",
  "title": "",
  "body": "  Two vectors and are perpendicular or orthogonal if their dot product is 0.   "
},
{
  "id": "sect-matrix-definition",
  "level": "1",
  "url": "sect-matrix-definition.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix and Vector Definition",
  "body": " Matrix and Vector Definition     Definitions of matrices and vectors.    Learning some notation around matrices and vectors.      Matrices    A matrix is a rectangular grid of numbers. An by matrix has rows and columns.    For example,   The size of a matrix is the number of rows and columns in the matrix. The number of rows is listed first. The size of the example above is 2 by 4.  The numbers in a matrix are called the entries or elements of the matrix. For example, for the matrix in , the entry on the first row and third column is 11. Often we will use the notation , where the subscript 1 is the row number and is the column number.    Vectors  We saw vectors in however we repeat some of these to put them in a broader context.    A vector is a matrix with one of its dimensions is 1. If a matrix only has one column it is called a column vector . If the matrix has only one row it is called a a row vector . The number of elements (numbers) in the vector is called the length .    As we investigate matrices, since vectors are in fact matrices, the properties will hold for vectors as well.    Matrix, Vector and Scalar Notation  A scalar is a fancy term for a number. Mathematicians use this term to distinguish them from matrices and vectors, which are not scalars. Whenever variables are used for scalars, then lower case letters will be used. For example, and are scalar variables.  When we use variable names for matrices, we will use capital letters. For example, and are matrix (or vector) variables.  Often, vectors will be lower case with an arrow on top. For example, here are vectors: .   In general, a matrix can be written . These will be used in proofs later on in this chapter and for defintions of operations. A vector can be written and although this notation can be used for both column and row vectors, unless denoted as such vectors will be consider as column vectors. We will see later in this chapter that we can simply write a row vector as a transformation of a column vector.    "
},
{
  "id": "sect-matrix-definition-2",
  "level": "2",
  "url": "sect-matrix-definition.html#sect-matrix-definition-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   Definitions of matrices and vectors.    Learning some notation around matrices and vectors.    "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sect-matrix-definition.html#def-matrix",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A matrix is a rectangular grid of numbers. An by matrix has rows and columns.   "
},
{
  "id": "sect--4",
  "level": "2",
  "url": "sect-matrix-definition.html#sect--4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "size "
},
{
  "id": "sect--5",
  "level": "2",
  "url": "sect-matrix-definition.html#sect--5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entries elements "
},
{
  "id": "sect-vectors-3",
  "level": "2",
  "url": "sect-matrix-definition.html#sect-vectors-3",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  A vector is a matrix with one of its dimensions is 1. If a matrix only has one column it is called a column vector . If the matrix has only one row it is called a a row vector . The number of elements (numbers) in the vector is called the length .   "
},
{
  "id": "sect-matrix-definition-5-2",
  "level": "2",
  "url": "sect-matrix-definition.html#sect-matrix-definition-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "sect-matrix-definition-5-5",
  "level": "2",
  "url": "sect-matrix-definition.html#sect-matrix-definition-5-5",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": " In general, a matrix can be written . These will be used in proofs later on in this chapter and for defintions of operations. A vector can be written and although this notation can be used for both column and row vectors, unless denoted as such vectors will be consider as column vectors. We will see later in this chapter that we can simply write a row vector as a transformation of a column vector.  "
},
{
  "id": "sect-matrix-operations",
  "level": "1",
  "url": "sect-matrix-operations.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix Operations",
  "body": " Matrix Operations     Learn the basic matrix operations of addition, subtraction and scalar mulitplication.    Rewrite a linear system in a vector form to motivate a matrix-vector product.    Extend a matrix-vector product to a matrix-matrix product and understand the require size restrictions on products.    Learn the matrix transpose and reexamine the dot product.      Addition and Subtraction of Matrices  In this section, we learn how to perform some basic operations between matrices. First, we will look at adding and subtracting two matrices and later we will look at multiplying a matrix by a scalar (a number).    In this case, let and be matrices. Then      is the matrix formed by     That is to add matrices, we add element by element.     is the matrix formed by     That is to add matrices, we subtract element by element.     If and are not the same size then and does not exist.    Note: an alternative definition of matrix subtraction, , which is consistent with subtraction of real numbers. We will define later in this chapter.   Let Then the sum is found by adding the individual elements. similarly we can subtract in the same way      Find the following result or state that it does not exist.     Since the matrices are not the same size, this operation is not valid.    There are many properties of matrix operations and they will look familiar in relation to real numbers.    Let and be matrices of the same size. The following hold.     Commutative Law of Addition       Associative Law of Addition       Existence of an Additive Identity  There exists a matrix such that for any matrix        Existence of an Additive Inverse  For every matrix , there exists a matrix denoted such that     where is the additive identity matrix above.       We will prove the first property: Commutative Law: . Start with the left hand side and get to the right hand side.       Note that we have used the notation that through this proof. This shorthand notation makes it easier to write matrices and provide proofs.    Scalar Multiplication of Vectors and Matrices  Scalar multiplication of vectors and matrices is a simple operation where the result is the scalar times each element of the vector or matrix.    Let , then       Evaluate:                                  The following are properties of scalar multiplication    Let and be matrices of the same size and and be scalars, then     Distributive Law over Matrix Addition       Distributive Law over scalar Addition       Associative Law for Scalar Multiplication       Scalar Multiplication by 1          This is a proof of the first property (Distributive Law over Matrix Addition)         Reexamining Linear Systems  The next matrix operation is that of multiplication. We will take a look back at linear systems to motivate why multiplication works the way it does. Consider the following linear system.     We can write this system as the vector equation     and then separate the left hand side as the sum of three vectors:     And then using scalar multiplication, we get the following     If we let     be the coefficient matrix of the linear system then it seems natural if     Then if we define the matrix multiplication      In the next section we will learn a way to solve a linear system in this way using an alternative method to Gauss' method.    Matrix-Vector Product  Using the motivation of the previous section, we now define a general matrix-vector product   Matrix-Vector Product   Let be an matrix and be a column vector of length with entries . Let be the column vectors of or     The product is the column vector of length :         Let     Find .          Matrix Form of a Linear System   Consider the linear system:     The matrix form of the linear system is given by     or         Matrix-Matrix Product   This now leads naturally to the following definition of a matrix multiplication is naturally the matrix formed by multiplying be each of the columns of .    Let be a matrix and be a matrix of the form:     where are the columns of . The matrix product is the matrix defined as     Note: if the number of columns of does not equal the number of rows of , then the product is undefined .      Size Restrictions on Matrices  Note that for each element in the resulting matrix, there is a vector-vector product, coming from each row of the first matrix and each column of the second matrix:   The number of columns of the first matrix must equal the number of rows of the second matrix.   The size of the resulting matrix can also be found by the sizes of the input matrices.   If the matrices and are multiplied then this diagram helps with a valid product as well as the size of the result.   Diagram of valid dimensions for matrix product.      That is if is by and is by , then has size by .     Let be a matrix that is 2 by 3, be a matrix that is 3 by 3 and be a matrix that is 2 by 2. Determine which of the following products are valid and if the product is valid, list its size.                                         Since is 2 by 3 and is 3 by 3, the inner numbers are equal and thus multiplication is valid and the result is 2 by 3.    Since is 2 by 3 and is 2 by 2, the inner numbers are not equal, so multiplication is not valid.    Since is 3 by 3 and is 2 by 2, the inner numbers are not equal, so multiplication is not valid.    Since is 3 by 3 and is 2 by 3, the inner numbers are not equal, so multiplication is not valid.    Since is 2 by 2 and is 2 by 3, the inner numbers are equal so multiplication is valid and the result are the outer numbers or 2 by 3.    In this case, from (e), the size of is 2 by 3 and is 3 by 3, so the inner numbers are equal so multiplication is valid and the result is 2 by 3.         Let     find if this is a valid operation.    The size of is 3 by 2 and the size of is 2 by 2, so the inner numbers are equal and thus this operations is valid. The size of the result is 3 by 2.         Find if       First, since the number of rows of is 2 and the number of columns of is 2, the size of is 2.     The 1st row and 1st column of is the 1st row of times the 1st column of .    The 1st row and 2nd column of is the 1st row of times the 2nd column of .    The 2nd row and 1st column of is the 2nd row of times the 1st column of .    The 2nd row and 2nd column of is the 2nd row of times the 2nd column of .     We now explicitly show the dot products.         Alternative Form of the Matrix-Matrix Product  An alternative form of the matrix-matrix product is     or     This form is both helpful for proofs as we will see below as well as an alternative way to compute the matrix product.    Find, if possible, if       First, from the sizes of and , we know that the size of the product must be . For each element of the product matrix, we take the product of the th row of and th column of .         Properties of Matrix-Matrix Products  Let     Note that     which shows that the commutative property does not hold.   Properties of Matrix Multiplication   The following hold for matrices and and scalars and      distributive property 1       distributive property 2       associative property          The proof of the first uses Definition ... of matrix multiply.         Transpose  The last basic matrix operation that we will cover here in the transpose of a matrix. As an example, if     then the transpose is the matrix, given by     where the row and column of each element is flipped.    The transpose of an matrix , denoted is flipped over the diagonal. In particular, the element in the th row and th column of is given by the th row and column of .  Using the shorthand notation,     which is useful for proofs.    We will see that transposes play a big role in linear algebra.   Properties of Transposes                 .            Proof of the 2nd property:         Reexamination of the Dot Product  Recall that the dot product of two vectors and of the same length discussed in is the sum of the products of the individual elements.  We can see that the dot product can also be defined as or alternatively using summation notation     "
},
{
  "id": "sect-matrix-operations-2",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-operations-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   Learn the basic matrix operations of addition, subtraction and scalar mulitplication.    Rewrite a linear system in a vector form to motivate a matrix-vector product.    Extend a matrix-vector product to a matrix-matrix product and understand the require size restrictions on products.    Learn the matrix transpose and reexamine the dot product.    "
},
{
  "id": "sect-matrix-operations-3-3",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-operations-3-3",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  In this case, let and be matrices. Then      is the matrix formed by     That is to add matrices, we add element by element.     is the matrix formed by     That is to add matrices, we subtract element by element.     If and are not the same size then and does not exist.   "
},
{
  "id": "sect-matrix-operations-3-5",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-operations-3-5",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " Let Then the sum is found by adding the individual elements. similarly we can subtract in the same way   "
},
{
  "id": "sect-matrix-operations-3-6",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-operations-3-6",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Find the following result or state that it does not exist.     Since the matrices are not the same size, this operation is not valid.   "
},
{
  "id": "lem-",
  "level": "2",
  "url": "sect-matrix-operations.html#lem-",
  "type": "Lemma",
  "number": "2.2.4",
  "title": "",
  "body": "  Let and be matrices of the same size. The following hold.     Commutative Law of Addition       Associative Law of Addition       Existence of an Additive Identity  There exists a matrix such that for any matrix        Existence of an Additive Inverse  For every matrix , there exists a matrix denoted such that     where is the additive identity matrix above.       We will prove the first property: Commutative Law: . Start with the left hand side and get to the right hand side.      "
},
{
  "id": "def-scalar-mult-matrix",
  "level": "2",
  "url": "sect-matrix-operations.html#def-scalar-mult-matrix",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  Let , then    "
},
{
  "id": "sect-matrix-operations-4-4",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-operations-4-4",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  Evaluate:                                 "
},
{
  "id": "lem-scalar-mult-matrix",
  "level": "2",
  "url": "sect-matrix-operations.html#lem-scalar-mult-matrix",
  "type": "Lemma",
  "number": "2.2.7",
  "title": "",
  "body": "  Let and be matrices of the same size and and be scalars, then     Distributive Law over Matrix Addition       Distributive Law over scalar Addition       Associative Law for Scalar Multiplication       Scalar Multiplication by 1          This is a proof of the first property (Distributive Law over Matrix Addition)      "
},
{
  "id": "section-reexamining-linear-systems-12",
  "level": "2",
  "url": "sect-matrix-operations.html#section-reexamining-linear-systems-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix "
},
{
  "id": "sect-matrix-vector-product-3",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-vector-product-3",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Matrix-Vector Product.",
  "body": " Matrix-Vector Product   Let be an matrix and be a column vector of length with entries . Let be the column vectors of or     The product is the column vector of length :      "
},
{
  "id": "sect-matrix-vector-product-4",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-vector-product-4",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  Let     Find .        "
},
{
  "id": "sect-matrix-vector-product-5",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-vector-product-5",
  "type": "Definition",
  "number": "2.2.10",
  "title": "Matrix Form of a Linear System.",
  "body": " Matrix Form of a Linear System   Consider the linear system:     The matrix form of the linear system is given by     or      "
},
{
  "id": "def-matrix-matrix-product",
  "level": "2",
  "url": "sect-matrix-operations.html#def-matrix-matrix-product",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "  Let be a matrix and be a matrix of the form:     where are the columns of . The matrix product is the matrix defined as     Note: if the number of columns of does not equal the number of rows of , then the product is undefined .   "
},
{
  "id": "sect-matrix-matrix-product-3-3",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-matrix-product-3-3",
  "type": "Remark",
  "number": "2.2.12",
  "title": "",
  "body": " The number of columns of the first matrix must equal the number of rows of the second matrix.  "
},
{
  "id": "sect-matrix-matrix-product-3-5",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-matrix-product-3-5",
  "type": "Remark",
  "number": "2.2.13",
  "title": "",
  "body": " If the matrices and are multiplied then this diagram helps with a valid product as well as the size of the result.   Diagram of valid dimensions for matrix product.      That is if is by and is by , then has size by .  "
},
{
  "id": "sect-matrix-matrix-product-3-6",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-matrix-product-3-6",
  "type": "Example",
  "number": "2.2.15",
  "title": "",
  "body": "  Let be a matrix that is 2 by 3, be a matrix that is 3 by 3 and be a matrix that is 2 by 2. Determine which of the following products are valid and if the product is valid, list its size.                                         Since is 2 by 3 and is 3 by 3, the inner numbers are equal and thus multiplication is valid and the result is 2 by 3.    Since is 2 by 3 and is 2 by 2, the inner numbers are not equal, so multiplication is not valid.    Since is 3 by 3 and is 2 by 2, the inner numbers are not equal, so multiplication is not valid.    Since is 3 by 3 and is 2 by 3, the inner numbers are not equal, so multiplication is not valid.    Since is 2 by 2 and is 2 by 3, the inner numbers are equal so multiplication is valid and the result are the outer numbers or 2 by 3.    In this case, from (e), the size of is 2 by 3 and is 3 by 3, so the inner numbers are equal so multiplication is valid and the result is 2 by 3.      "
},
{
  "id": "sect-matrix-matrix-product-3-7",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-matrix-product-3-7",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": "  Let     find if this is a valid operation.    The size of is 3 by 2 and the size of is 2 by 2, so the inner numbers are equal and thus this operations is valid. The size of the result is 3 by 2.      "
},
{
  "id": "sect-matrix-matrix-product-3-8",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-matrix-product-3-8",
  "type": "Example",
  "number": "2.2.17",
  "title": "",
  "body": "  Find if       First, since the number of rows of is 2 and the number of columns of is 2, the size of is 2.     The 1st row and 1st column of is the 1st row of times the 1st column of .    The 1st row and 2nd column of is the 1st row of times the 2nd column of .    The 2nd row and 1st column of is the 2nd row of times the 1st column of .    The 2nd row and 2nd column of is the 2nd row of times the 2nd column of .     We now explicitly show the dot products.      "
},
{
  "id": "sect-matrix-matrix-product-alt-7",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-matrix-matrix-product-alt-7",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "  Find, if possible, if       First, from the sizes of and , we know that the size of the product must be . For each element of the product matrix, we take the product of the th row of and th column of .      "
},
{
  "id": "lem-matrix-product-props",
  "level": "2",
  "url": "sect-matrix-operations.html#lem-matrix-product-props",
  "type": "Lemma",
  "number": "2.2.19",
  "title": "Properties of Matrix Multiplication.",
  "body": " Properties of Matrix Multiplication   The following hold for matrices and and scalars and      distributive property 1       distributive property 2       associative property          The proof of the first uses Definition ... of matrix multiply.      "
},
{
  "id": "sect-transpose-7",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-transpose-7",
  "type": "Definition",
  "number": "2.2.20",
  "title": "",
  "body": "  The transpose of an matrix , denoted is flipped over the diagonal. In particular, the element in the th row and th column of is given by the th row and column of .  Using the shorthand notation,     which is useful for proofs.   "
},
{
  "id": "sect-transpose-9",
  "level": "2",
  "url": "sect-matrix-operations.html#sect-transpose-9",
  "type": "Lemma",
  "number": "2.2.21",
  "title": "Properties of Transposes.",
  "body": " Properties of Transposes                 .            Proof of the 2nd property:      "
},
{
  "id": "sect-matrix-inverse",
  "level": "1",
  "url": "sect-matrix-inverse.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Inverse of a Matrix",
  "body": " The Inverse of a Matrix     Learn what an identity matrix is and why it is useful.    Define the matrix inverse.    Find an inverse matrix of a matrix.    Find the inverse of a matrix using the Gauss-Jordon method.    Solve a linear system using the matrix inverse.      The Identity Matrix    The identity matrix of size is an by matrix of all zeros except ones on the diagonal (from upper left to lower right).    The following are identity matrices of sizes 2, 3, and 4     The identity matrix is a matrix such that and note that the size of the identity matrix can be anything so generally is chosen for a defined matrix product.    The Inverse  Recall that we showed at the end of the previous section that a linear system can be written as: where is the coefficient matrix of the linear equations, is a column vector of unknowns, and is the right hand sides of each equation.  We possibly would like to say that: but how do we divide through by ? Maybe we just haven't learned about matrix division, however (spoiler alert) there is no matrix divsion. Instead, we will see that there is a matrix which will let us multiply through to give the answer.    Solving a simple linear equation  To motivate solving a matrix equation, let's look at solving , where each is simply a number (or technically a scalar). The solution is , but we can also write it as , where is the reciprocal of , which has the property     for any value of . And the important part of this is that the solution uses only multiplication for the solution.    The Matrix Inverse    For a square matrix , if there exists a matrix , such that   then is called the inverse matrix of and is denoted .    It is noted that not every matrix has an inverse matrix. We will see examples of this later in this section.  First, let's determine how to find the inverse of a 2 by 2 matrix.    The inverse of a 2 by 2 matrix is given by     if . If , the matrix does not have an inverse.    We will prove this, by showing that if is an inverse then (or ).     From properties in , the scalar can be written out front.     Multiply the two matrices like we did in the previous section.     simplify and multiply through by .     Similarly, we can show that , and these two properties proves the formula for the inverse in .    The following example uses the formula in to find the inverse matrix of a 2 by 2 matrix.    Find the inverse of       The term out front of is . Then apply the formula,       The next example shows that not every matrix has an inverse. Since a matrix inverse is similar to the reciprocal of a number, a matrix with no inverse is similar to a number with no reciprocal. And this occurs for the number 0 because is undefined.    Show that the matrix     does not have an inverse.    Again we use , but because , the matrix does not have an inverse.      Solving  At the end of , we learned how to take a linear system and write it as the matrix equation . In this section we will learn how to solve a system written in this form. If we start with the equation, so if we can find the inverse of a matrix, then solving linear systems becomes matrix multiplication.   If you are trying to solve the matrix equation     for a square matrix and the inverse matrix exists, then        Solve the system:     by writing the system as , then finding and finally by writing .    First, write down , and . (We learned how to do this in .)     Then find the inverse of , which is a 2 by 2 matrix, so we will use . Since .     Then write down the solution:     So the solution is or and .    The next example shows how to perform the same steps for a 3 by 3 matrix, although we don't know how to find an inverse of a 3 by 3 matrix yet.    We will later show that if     then     Use this to find the solution to:       First, the linear system can be written as if   Then we write the solution to this systems as   therefore the solution is and .      the Gauss-Jordan Method for Calculating Inverses  As we have seen, often matrices are larger than 2 by 2 and thus far we have no method to find an inverse of a matrix of this size. In this section, we will see that the Gauss-Jordon method can help us do this.  Recall that finding an inverse is the same as solving for . If we write and in terms of its column vectors, then     Then if we solve , for all , then we have all columns of .  We will use this method to find the inverse of the same matrix as in     Use the method explained above to find the inverse of       First, we will solve where     We will use Gauss-Jordon to solve this.     and this shows that     Now, we will solve where     and use Gauss-Jordon to solve this.     and this shows that     This shows that the inverse is       You should notice that the steps to solve each of the linear systems above were exactly the same. We can take advantage of this to solve for both systems simultaneously. The result is the following method of finding inverses.   Using Gauss-Jordon to find Matrix Inverses  If we write a matrix of the form     where the matrix is on the left and the identity matrix is on the right and apply Gauss-Jordon to get the identity matrix on the left, then the matrix will look like,     and the matrix on the right half is the inverse matrix, .  If the row-reduced form of the matrix does not have the identity matrix on left side the inverse does not exist.      Use the Gauss-Jordan Method to find the inverse of       First, write the matrix and then perform Gaussian Elimination.     We desire a 1 in the upper right. Instead of dividing the first row by 3, we will do the following,     Then eliminate the lower right element on the left side,     Multiply through by to get a 1 in the lower right of the left side     And finally zero out the 2nd column, 1st row.     We stop here because the left half of the matrix is the identity matrix. The right half is now the inverse. Therefore:       This example showed how to find the inverse of a 2 by 2 matrix using the Gauss-Jordan method. We saw the formula in , and generally it is easier to compute the inverse using that formula. However, the formula in only works for 2 by 2 matrices. The next example shows how to use the Gauss-Jordan method to find the inverse of a 3 by 3 matrix.    Find the inverse of       First, we write and then use the Gauss-Jordon Method.   Since we want a 1 in the upper right and don't want fractions, try     And zero out the rest of the first column.     Again, to avoid fractions, try     And zero out the other elements in the 2nd column.     Next, we need a 1 where the is.     And lastly zero out the rest of the 3rd column.     Since we have found the 3 by 3 identity on the left, the inverse is on the right or       As we saw with some 2 by 2 matrices (as in ), their inverse does not exist. We see how using the Gauss-Jordon method results in this situation for a 3 by 3 example.    Show that the matrix     does not have an inverse.    First, write and then use the Gauss-Jordan Method to alter the matrix.     And we stop since the row of zeros on the bottom of the left half of the matrix indicates that we cannot get an identity matrix on the left half of the matrix. This shows that the matrix is not invertible.    This next example, shows how to solve a linear system of 3 variables and 3 equations, find 1) written in in the form , 2) Find the inverse matrix and 3) finding .    Consider the linear system     Write this system as and then solve it use the inverse matrix.    First, let     We need to find and will use Gauss-Jordan:     Thus the inverse is:     Next, we solve the linear system by writing     and therefore the solution to the linear system is , and .    The last example shows how to perform a linear system solve using the inverse matrix technique of a linear system with 4 equations and 4 unknowns. The technique is exactly the same as the previous example, however there are quite a few steps to find the inverse.    Use Matrix Inversion to solve:       First, we need to find the inverse. Use the Gauss-Jordan method:     Therefore:     and then the solution to , where is     Note that since the matrix is symmetric (in many ways), the matrix is also symmetric.      Properties of the Inverse Matrix  An inverse matrix is just a matrix, so in many cases has the same properties as general matrices. However, one important is the inverse of the product of matrices.   Product of Matrix Inverses   Let and be invertible matrices. Then             "
},
{
  "id": "sect-matrix-inverse-2",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   Learn what an identity matrix is and why it is useful.    Define the matrix inverse.    Find an inverse matrix of a matrix.    Find the inverse of a matrix using the Gauss-Jordon method.    Solve a linear system using the matrix inverse.    "
},
{
  "id": "sect-matrix-inverse-3-2",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-3-2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  The identity matrix of size is an by matrix of all zeros except ones on the diagonal (from upper left to lower right).   "
},
{
  "id": "def-matrix-inverse",
  "level": "2",
  "url": "sect-matrix-inverse.html#def-matrix-inverse",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  For a square matrix , if there exists a matrix , such that   then is called the inverse matrix of and is denoted .   "
},
{
  "id": "sect-matrix-inverse-6-5",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-6-5",
  "type": "Lemma",
  "number": "2.3.3",
  "title": "",
  "body": "  The inverse of a 2 by 2 matrix is given by     if . If , the matrix does not have an inverse.    We will prove this, by showing that if is an inverse then (or ).     From properties in , the scalar can be written out front.     Multiply the two matrices like we did in the previous section.     simplify and multiply through by .     Similarly, we can show that , and these two properties proves the formula for the inverse in .   "
},
{
  "id": "ex-inv-2-by-2",
  "level": "2",
  "url": "sect-matrix-inverse.html#ex-inv-2-by-2",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Find the inverse of       The term out front of is . Then apply the formula,      "
},
{
  "id": "ex-2by2-noinverse",
  "level": "2",
  "url": "sect-matrix-inverse.html#ex-2by2-noinverse",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Show that the matrix     does not have an inverse.    Again we use , but because , the matrix does not have an inverse.   "
},
{
  "id": "sect-matrix-inverse-7-3",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-7-3",
  "type": "Remark",
  "number": "2.3.6",
  "title": "",
  "body": " If you are trying to solve the matrix equation     for a square matrix and the inverse matrix exists, then     "
},
{
  "id": "ex-solve-by-inverse",
  "level": "2",
  "url": "sect-matrix-inverse.html#ex-solve-by-inverse",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": "  Solve the system:     by writing the system as , then finding and finally by writing .    First, write down , and . (We learned how to do this in .)     Then find the inverse of , which is a 2 by 2 matrix, so we will use . Since .     Then write down the solution:     So the solution is or and .   "
},
{
  "id": "sect-matrix-inverse-7-6",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-7-6",
  "type": "Example",
  "number": "2.3.8",
  "title": "",
  "body": "  We will later show that if     then     Use this to find the solution to:       First, the linear system can be written as if   Then we write the solution to this systems as   therefore the solution is and .   "
},
{
  "id": "sect-matrix-inverse-8-7",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-8-7",
  "type": "Example",
  "number": "2.3.9",
  "title": "",
  "body": "  Use the method explained above to find the inverse of       First, we will solve where     We will use Gauss-Jordon to solve this.     and this shows that     Now, we will solve where     and use Gauss-Jordon to solve this.     and this shows that     This shows that the inverse is      "
},
{
  "id": "sect-matrix-inverse-8-9",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-8-9",
  "type": "Remark",
  "number": "2.3.10",
  "title": "Using Gauss-Jordon to find Matrix Inverses.",
  "body": " Using Gauss-Jordon to find Matrix Inverses  If we write a matrix of the form     where the matrix is on the left and the identity matrix is on the right and apply Gauss-Jordon to get the identity matrix on the left, then the matrix will look like,     and the matrix on the right half is the inverse matrix, .  If the row-reduced form of the matrix does not have the identity matrix on left side the inverse does not exist.   "
},
{
  "id": "sect-matrix-inverse-8-10",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-8-10",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": "  Use the Gauss-Jordan Method to find the inverse of       First, write the matrix and then perform Gaussian Elimination.     We desire a 1 in the upper right. Instead of dividing the first row by 3, we will do the following,     Then eliminate the lower right element on the left side,     Multiply through by to get a 1 in the lower right of the left side     And finally zero out the 2nd column, 1st row.     We stop here because the left half of the matrix is the identity matrix. The right half is now the inverse. Therefore:      "
},
{
  "id": "ex-3by3-matrix-inverse",
  "level": "2",
  "url": "sect-matrix-inverse.html#ex-3by3-matrix-inverse",
  "type": "Example",
  "number": "2.3.12",
  "title": "",
  "body": "  Find the inverse of       First, we write and then use the Gauss-Jordon Method.   Since we want a 1 in the upper right and don't want fractions, try     And zero out the rest of the first column.     Again, to avoid fractions, try     And zero out the other elements in the 2nd column.     Next, we need a 1 where the is.     And lastly zero out the rest of the 3rd column.     Since we have found the 3 by 3 identity on the left, the inverse is on the right or      "
},
{
  "id": "sect-matrix-inverse-8-14",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-8-14",
  "type": "Example",
  "number": "2.3.13",
  "title": "",
  "body": "  Show that the matrix     does not have an inverse.    First, write and then use the Gauss-Jordan Method to alter the matrix.     And we stop since the row of zeros on the bottom of the left half of the matrix indicates that we cannot get an identity matrix on the left half of the matrix. This shows that the matrix is not invertible.   "
},
{
  "id": "sect-matrix-inverse-8-16",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-8-16",
  "type": "Example",
  "number": "2.3.14",
  "title": "",
  "body": "  Consider the linear system     Write this system as and then solve it use the inverse matrix.    First, let     We need to find and will use Gauss-Jordan:     Thus the inverse is:     Next, we solve the linear system by writing     and therefore the solution to the linear system is , and .   "
},
{
  "id": "sect-matrix-inverse-8-18",
  "level": "2",
  "url": "sect-matrix-inverse.html#sect-matrix-inverse-8-18",
  "type": "Example",
  "number": "2.3.15",
  "title": "",
  "body": "  Use Matrix Inversion to solve:       First, we need to find the inverse. Use the Gauss-Jordan method:     Therefore:     and then the solution to , where is     Note that since the matrix is symmetric (in many ways), the matrix is also symmetric.   "
},
{
  "id": "thm-matrix-inverse",
  "level": "2",
  "url": "sect-matrix-inverse.html#thm-matrix-inverse",
  "type": "Theorem",
  "number": "2.3.16",
  "title": "Product of Matrix Inverses.",
  "body": " Product of Matrix Inverses   Let and be invertible matrices. Then           "
},
{
  "id": "sect-elem-matrices",
  "level": "1",
  "url": "sect-elem-matrices.html",
  "type": "Section",
  "number": "2.4",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices     Define a elementary matrix.    Show that the row operations from the previous chapter can be written as matrix products with elementary matrices.    Reexamination a reduced row-echelon form of a matrix with elementary matrices.     In , linear systems and solutions were introduced. The standard way to solve these is to use elementary row operations as were shown in . In this section, we learn that we can write all of the row operations as matrix products.  We will denote by the matrix any matrix that performs an elementary row operations. For example,     will swap the rows in a 2 by 2 matrix. The matrix     will multiply the first row of a 3 by 3 matrix by 2. The matrix     is the operation that multiplies the first row of a 3 by 3 matrix by and add to the third row.   Elementary Matrices and Row Operations   Let be a matrix. The matrix is an elementary matrix is the result of applying one row operation to , the identity matrix.  An elementary matrix that involves switching rows is also called a permutation matrix .    Although we have examples above, here are the specifics of the related row operations and the elementary matrix.         is the identity matrix with rows and switched.        is the identity matrix where the element is row , column is replaced with .        is the identity matrix with the element in row , column has the number .       Consider elementary matrices. Find the following:                                                   There are a lot of nice properties of elementary matrices. We now show that all elementary matrices are invertible.    Every elementary matrix is invertible and its inverse is also an elementary matrix. In paticular,     The inverse of is .    The inverse of is itself.    The inverse of is          Find the inverses of the following elementary matrices and the determine the row operation the inverse represents                          Note that this represents the operation , so the inverse is or       This is the operation so the inverse is or       This is the operation , so the inverse is also the matrix or          We next look at putting matrix is reduced row-echelon form using elementary matrices. The following lemma indicates that we can do this.    Let be a matrix and let be its reduced row-echelon form. We can write     where is the product of elementary matrices representing the row operations performed on to obtain .    Let's take a look at an example.    Consider the matrix     Find all elementary matrices to put in row-echelon form and show that the product of the matrices form .    The first step is , which has the corresponding elementary matrix     And the product is     Next, the step which correspond to the elementary matrix     And now the product of the elementary matrices and is     And since this matrix is an upper triangular matrix, we stop here. The matrix on the right hand side is and the matrix is       "
},
{
  "id": "sect-elem-matrices-2",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "   Define a elementary matrix.    Show that the row operations from the previous chapter can be written as matrix products with elementary matrices.    Reexamination a reduced row-echelon form of a matrix with elementary matrices.    "
},
{
  "id": "sect-elem-matrices-11",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-11",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Elementary Matrices and Row Operations.",
  "body": " Elementary Matrices and Row Operations   Let be a matrix. The matrix is an elementary matrix is the result of applying one row operation to , the identity matrix.  An elementary matrix that involves switching rows is also called a permutation matrix .   "
},
{
  "id": "sect-elem-matrices-14",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-14",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  Consider elementary matrices. Find the following:                                                  "
},
{
  "id": "sect-elem-matrices-16",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-16",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  Every elementary matrix is invertible and its inverse is also an elementary matrix. In paticular,     The inverse of is .    The inverse of is itself.    The inverse of is       "
},
{
  "id": "sect-elem-matrices-17",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-17",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  Find the inverses of the following elementary matrices and the determine the row operation the inverse represents                          Note that this represents the operation , so the inverse is or       This is the operation so the inverse is or       This is the operation , so the inverse is also the matrix or         "
},
{
  "id": "sect-elem-matrices-19",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-19",
  "type": "Lemma",
  "number": "2.4.5",
  "title": "",
  "body": "  Let be a matrix and let be its reduced row-echelon form. We can write     where is the product of elementary matrices representing the row operations performed on to obtain .   "
},
{
  "id": "sect-elem-matrices-21",
  "level": "2",
  "url": "sect-elem-matrices.html#sect-elem-matrices-21",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Consider the matrix     Find all elementary matrices to put in row-echelon form and show that the product of the matrices form .    The first step is , which has the corresponding elementary matrix     And the product is     Next, the step which correspond to the elementary matrix     And now the product of the elementary matrices and is     And since this matrix is an upper triangular matrix, we stop here. The matrix on the right hand side is and the matrix is      "
},
{
  "id": "sect-linear-comb-span",
  "level": "1",
  "url": "sect-linear-comb-span.html",
  "type": "Section",
  "number": "2.5",
  "title": "Linear Combinations and the Span of a Set of Vectors",
  "body": " Linear Combinations and the Span of a Set of Vectors     Define a linear combination of vectors and a span of vectors.    Show that a set of vectors span another set of vectors.    Determine if a set of vectors span another set.     In , we discussed a linear combination of rows in a matrix. We can find a linear combination of any vector (or as we will see more generally other things) as well. For example, a linear combination of the vectors and is     and these can be any number of vectors and the vectors can be any length.    Let be vectors in . A linear combination of a set of vectors is     for some .    For example, the solutions of homogeneous systems is an excellent example of a linear combination. shows a linear system. The associated homogenous system is     and the solution in vector form is     and thus this solution is a linear combination of the vectors     The solution is the set of all linear combinations and this plays an important role, so it defined as the span of a set of vectors.    The span of a nonempty set subset of a vector space is the set of all linear combinations of the vectors in . In particular,       Understanding the span in a more general way is important. Often the span of a set of vectors is something we already know as the next example shows.    Show that     can be written as       In order to show this, we show that for any vector of the form     there exist such that     The constants and can be found by the following linear system:     with the solution and .  Since we found by and , a linear combination of these two vectors can produce any vector in .    We saw that the span of the two vectors in the example above was . What if we add a third vector? The following example answers this question.    Find       In the case, it is the set formed by the linear combination or specifically     and it seems that this set is also . In order to show this, we'll take , we will solve     and this can be solved with the linear system     If we take as the free variable, we get     and since there is a solution, these vectors span . It appears that adding another vector does not change the span. This actually does not depend on this vector, but we'll need information in the next section to show this.    And if we continue to investigate this, what if we have two vectors in . Is the span equal to ? The next example looks as this.    Is     equal to ?    In order to check this, then we try to find and such that     or the linear system     however from the latter two equations, there is a contradiction with the first equation which would say therefore there is no solution. This means that the two given vectors do not span .    If we consider the above example, one of the reasons that this happened is that we don't have enough vectors. The span of two vectors in form a plane as we saw in section . One way to look at is that is the set of all points in , so there is no way a plane can equal all points.  "
},
{
  "id": "sect-linear-comb-span-2",
  "level": "2",
  "url": "sect-linear-comb-span.html#sect-linear-comb-span-2",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "   Define a linear combination of vectors and a span of vectors.    Show that a set of vectors span another set of vectors.    Determine if a set of vectors span another set.    "
},
{
  "id": "sect-linear-comb-span-6",
  "level": "2",
  "url": "sect-linear-comb-span.html#sect-linear-comb-span-6",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  Let be vectors in . A linear combination of a set of vectors is     for some .   "
},
{
  "id": "sect-linear-comb-span-14",
  "level": "2",
  "url": "sect-linear-comb-span.html#sect-linear-comb-span-14",
  "type": "Definition",
  "number": "2.5.2",
  "title": "",
  "body": "  The span of a nonempty set subset of a vector space is the set of all linear combinations of the vectors in . In particular,      "
},
{
  "id": "ex-span-2",
  "level": "2",
  "url": "sect-linear-comb-span.html#ex-span-2",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": "  Show that     can be written as       In order to show this, we show that for any vector of the form     there exist such that     The constants and can be found by the following linear system:     with the solution and .  Since we found by and , a linear combination of these two vectors can produce any vector in .   "
},
{
  "id": "ex-span-3",
  "level": "2",
  "url": "sect-linear-comb-span.html#ex-span-3",
  "type": "Example",
  "number": "2.5.4",
  "title": "",
  "body": "  Find       In the case, it is the set formed by the linear combination or specifically     and it seems that this set is also . In order to show this, we'll take , we will solve     and this can be solved with the linear system     If we take as the free variable, we get     and since there is a solution, these vectors span . It appears that adding another vector does not change the span. This actually does not depend on this vector, but we'll need information in the next section to show this.   "
},
{
  "id": "sect-linear-comb-span-20",
  "level": "2",
  "url": "sect-linear-comb-span.html#sect-linear-comb-span-20",
  "type": "Example",
  "number": "2.5.5",
  "title": "",
  "body": "  Is     equal to ?    In order to check this, then we try to find and such that     or the linear system     however from the latter two equations, there is a contradiction with the first equation which would say therefore there is no solution. This means that the two given vectors do not span .   "
},
{
  "id": "sect-linear-independence",
  "level": "1",
  "url": "sect-linear-independence.html",
  "type": "Section",
  "number": "2.6",
  "title": "Linear Independence",
  "body": " Linear Independence     Definition of linear dependence and independence.    Understanding of why linear independence is helpful.     As we saw in and two vectors seem to span and a third vector does not contribute anything new (which is why there was a free variable in ). We will be able to explain this with the notion of linear independence and dependence.    Let be a set of vectors from . The set is linearly independent if none of the elements of can be written in terms of the other elements of . If it is not linearly independent, then is said to be linearly dependent .  Specifically, if the only solution to     is , then the vectors, are linearly independent.      Show that     is linearly independent.    In this case, there are only two vectors and it is fairly easy to see that the second cannot be written as a linear combination of the first (or vise versa). Therefore, this set is linearly independent.      Is the set of vectors     linearly independent or dependent?    In this case, since the second vector is twice the first, these vectors are linearly dependent.    The example above had only two vectors in the set and two vectors are linear independent if and only if they are not constant multipliers of one another. We use the more-technical definition instead.    Show that     is linearly independent.    We will show that only solution to     is the trivial solution. Writing down an equation for each component leads to     The latter two equation show that and this can be used in the first equation to show that , thus this is the trivial solution. From the definition, this set is linearly independent.    The last example in this section will be a review of why we got the results in Example .    Is the set of vectors     linearly independent or dependent?    We solve a linear combination of these vectors and set them equal to the zero vector.     or the linear system in terms of the 's     and in this case, let be a free variable, then the solution     Since this is not the trivial solution, then these vectors are linearly dependent. The relationship between the constants shows the dependence. That is     or as a simple relationship       The following theorem shows the relationship between the number of vectors and the space the vectors is in.    Let be a set of vectors in . If , then the set of vectors is linearly dependent.    "
},
{
  "id": "sect-linear-independence-2",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-2",
  "type": "Objectives",
  "number": "2.6",
  "title": "",
  "body": "   Definition of linear dependence and independence.    Understanding of why linear independence is helpful.    "
},
{
  "id": "sect-linear-independence-4",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-4",
  "type": "Definition",
  "number": "2.6.1",
  "title": "",
  "body": "  Let be a set of vectors from . The set is linearly independent if none of the elements of can be written in terms of the other elements of . If it is not linearly independent, then is said to be linearly dependent .  Specifically, if the only solution to     is , then the vectors, are linearly independent.   "
},
{
  "id": "sect-linear-independence-5",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-5",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "  Show that     is linearly independent.    In this case, there are only two vectors and it is fairly easy to see that the second cannot be written as a linear combination of the first (or vise versa). Therefore, this set is linearly independent.   "
},
{
  "id": "sect-linear-independence-6",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-6",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": "  Is the set of vectors     linearly independent or dependent?    In this case, since the second vector is twice the first, these vectors are linearly dependent.   "
},
{
  "id": "sect-linear-independence-8",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-8",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": "  Show that     is linearly independent.    We will show that only solution to     is the trivial solution. Writing down an equation for each component leads to     The latter two equation show that and this can be used in the first equation to show that , thus this is the trivial solution. From the definition, this set is linearly independent.   "
},
{
  "id": "sect-linear-independence-10",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-10",
  "type": "Example",
  "number": "2.6.5",
  "title": "",
  "body": "  Is the set of vectors     linearly independent or dependent?    We solve a linear combination of these vectors and set them equal to the zero vector.     or the linear system in terms of the 's     and in this case, let be a free variable, then the solution     Since this is not the trivial solution, then these vectors are linearly dependent. The relationship between the constants shows the dependence. That is     or as a simple relationship      "
},
{
  "id": "sect-linear-independence-12",
  "level": "2",
  "url": "sect-linear-independence.html#sect-linear-independence-12",
  "type": "Theorem",
  "number": "2.6.6",
  "title": "",
  "body": "  Let be a set of vectors in . If , then the set of vectors is linearly dependent.   "
},
{
  "id": "sect-row-col-space-rank",
  "level": "1",
  "url": "sect-row-col-space-rank.html",
  "type": "Section",
  "number": "2.7",
  "title": "Row Space, Column Space and Rank of a Matrix",
  "body": " Row Space, Column Space and Rank of a Matrix     Apply concepts of linear independence and span to the columns and row of a matrix.    Define explicitly, row space, column space and null space.    Define the column rank, row rank and nullity and show the relationship between these.      If we examine a matrix, we can think about the number of linearly independent row or columns in a matrix or also the span of the set of rows and columns in a matrix. We will see how these concepts are connected to other concepts from this chapter.    Row Space of a Matrix    The row space of a matrix is the span of the set of its rows. The row rank is the number of linearly independent rows of the matrix.    The following example finds the row space and row rank of a matrix.    The row space of     is the set of all -component row vectors with the form:     and this is the set of all -component row vectors. The row rank of this matrix is 2 because these row vectors are linearly independent.    We can calculate the row space and row rank of non-square matrices as is shown in the following example.    The row space of     can be written as     However, since the two vectors are not linearly independent, the row space can be written as     Therefore the row rank is 1.      If the matrices and are related by transformation by an elementary row operation, then their row spaces are equivalent.    By , each row of is a linear combination of each row of , therefore it is in the row space of or .  Similarly, each row of is a linear combination of , so using the same argument, ), therefore .      The nonzero rows of an echelon matrix make up a linearly independent set of rows.     states that in an echelon matrix, no nonzero row is a linear combination of the other rows.    Although this proof is almost trivial, the main point of this is to reframe what we saw in the first chapter in terms of this newer framework.   Gaussian Reduction to echelon form eliminates linear dependence between the rows, leaves the row space unchanged, and results in a set of linearly independent rows whose span is the row space.     Consider the linear system (written as a matrix) from Example :     Perform row operations to put it in echelon form and find the row rank.    The row operations are     Since this is in echelon form now, there are three linearly independent rows, so the row rank is 3.      Column Space of a Matrix    The column space of a matrix is the span of the set of its columns. The column rank is the number of linearly independent columns of the matrix.      Find the column space and column rank of       In this case, since the columns of the matrix are linearly independent (because one can see that they are not multiples of one another), the column space is     which is the span of the columns. And since there are two linearly independent vectors, the column rank is 2.    Instead of trying to eliminate any linear dependence as written, note that if we treat the columns as rows. Recall that this operation is called the transpose of the matrix.   To find the column space of a matrix , find the row space of and transpose the resulting row space.     Find the column space and column rank of          First take the transpose     Now row reduce the matrix: which is now in echelon form, so we know that the non-zero rows are linearly independent.    Take the transpose of the first two rows. The span of this is the column space:      And since there are two linearly independent columns, the column rank is 2.    The following theorem explains the relationship between the row rank and column rank.    The row rank of a matrix equals its column rank.    And because of this fact (which we won't prove here), the rank of a matrix is typically the interesting property.    The rank of its matrix equals the row or column rank of the matrix.      Null Space of a Matrix    Let be any vector that satisfies . The null space of the matrix is the span of all vectors . The number of independent vectors in the null space is called the nullity of .      Find the null space of the matrix       We can solve this by solving the homogeneous matrix equation.     and performing the row operation      results in the reduced row-echelon form. The resulting equations are     and the solution set can be written as in vector form:     and this set is the null space of the matrix. The null space is     and therefore the dimension of the null space is , and thus the nullity of is .     To find the null space of a matrix , find the row reduced form the matrix, and find the homogeneous solution. The solution set is the null space.  The basis of the homogeneous solution set is the basis of the null space.   The following example shows a larger example.    Find the null space of       Again, we solve the homogeneous linear system by finding the reduced row echelon form of      and the corresponding equations are:     which has the solution set:     and this is the null space of the matrix . Since there are two linearly independent vectors that span the space, the dimension of the null space of the matrix is 2. Thus the nullity of is 2.      Relationship between the Rank and Nullity  The relationship between the rank and the nullity of a matrix is summed up in the following theorem.   Rank-Nullity Theorem   Let be an matirx. The sum of the rank of and the nullity of is .      Show that the Rank-Nullity Theorem holds for Examples and .    In , the matrix is reduced to reduced row echelon form and it shows that there are 2 non-zero rows, hence the rank of the matrix is 2. Also in , the nullity was shown to be 1 and the sum is 3, the number of columns of .  In , the matrix is reduced to reduced row echelon form and it shows that there are 2 non-zero rows, and again the rank of the matrix is 2. The example also shows that the nullity is 2 and the sum is 4, the number of columns of .     "
},
{
  "id": "sect-row-col-space-rank-2",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-2",
  "type": "Objectives",
  "number": "2.7",
  "title": "",
  "body": "   Apply concepts of linear independence and span to the columns and row of a matrix.    Define explicitly, row space, column space and null space.    Define the column rank, row rank and nullity and show the relationship between these.    "
},
{
  "id": "sect-row-col-space-rank-4-2",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-2",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": "  The row space of a matrix is the span of the set of its rows. The row rank is the number of linearly independent rows of the matrix.   "
},
{
  "id": "sect-row-col-space-rank-4-4",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-4",
  "type": "Example",
  "number": "2.7.2",
  "title": "",
  "body": "  The row space of     is the set of all -component row vectors with the form:     and this is the set of all -component row vectors. The row rank of this matrix is 2 because these row vectors are linearly independent.   "
},
{
  "id": "sect-row-col-space-rank-4-6",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-6",
  "type": "Example",
  "number": "2.7.3",
  "title": "",
  "body": "  The row space of     can be written as     However, since the two vectors are not linearly independent, the row space can be written as     Therefore the row rank is 1.   "
},
{
  "id": "sect-row-col-space-rank-4-7",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-7",
  "type": "Lemma",
  "number": "2.7.4",
  "title": "",
  "body": "  If the matrices and are related by transformation by an elementary row operation, then their row spaces are equivalent.    By , each row of is a linear combination of each row of , therefore it is in the row space of or .  Similarly, each row of is a linear combination of , so using the same argument, ), therefore .   "
},
{
  "id": "sect-row-col-space-rank-4-8",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-8",
  "type": "Lemma",
  "number": "2.7.5",
  "title": "",
  "body": "  The nonzero rows of an echelon matrix make up a linearly independent set of rows.     states that in an echelon matrix, no nonzero row is a linear combination of the other rows.   "
},
{
  "id": "sect-row-col-space-rank-4-10",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-10",
  "type": "Remark",
  "number": "2.7.6",
  "title": "",
  "body": " Gaussian Reduction to echelon form eliminates linear dependence between the rows, leaves the row space unchanged, and results in a set of linearly independent rows whose span is the row space.  "
},
{
  "id": "sect-row-col-space-rank-4-11",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-4-11",
  "type": "Example",
  "number": "2.7.7",
  "title": "",
  "body": "  Consider the linear system (written as a matrix) from Example :     Perform row operations to put it in echelon form and find the row rank.    The row operations are     Since this is in echelon form now, there are three linearly independent rows, so the row rank is 3.   "
},
{
  "id": "sect-row-col-space-rank-5-2",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-5-2",
  "type": "Definition",
  "number": "2.7.8",
  "title": "",
  "body": "  The column space of a matrix is the span of the set of its columns. The column rank is the number of linearly independent columns of the matrix.   "
},
{
  "id": "sect-row-col-space-rank-5-3",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-5-3",
  "type": "Example",
  "number": "2.7.9",
  "title": "",
  "body": "  Find the column space and column rank of       In this case, since the columns of the matrix are linearly independent (because one can see that they are not multiples of one another), the column space is     which is the span of the columns. And since there are two linearly independent vectors, the column rank is 2.   "
},
{
  "id": "sect-row-col-space-rank-5-5",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-5-5",
  "type": "Remark",
  "number": "2.7.10",
  "title": "",
  "body": " To find the column space of a matrix , find the row space of and transpose the resulting row space.  "
},
{
  "id": "sect-row-col-space-rank-5-6",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-5-6",
  "type": "Example",
  "number": "2.7.11",
  "title": "",
  "body": "  Find the column space and column rank of          First take the transpose     Now row reduce the matrix: which is now in echelon form, so we know that the non-zero rows are linearly independent.    Take the transpose of the first two rows. The span of this is the column space:      And since there are two linearly independent columns, the column rank is 2.   "
},
{
  "id": "sect-row-col-space-rank-5-8",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-5-8",
  "type": "Theorem",
  "number": "2.7.12",
  "title": "",
  "body": "  The row rank of a matrix equals its column rank.   "
},
{
  "id": "sect-row-col-space-rank-5-10",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-5-10",
  "type": "Definition",
  "number": "2.7.13",
  "title": "",
  "body": "  The rank of its matrix equals the row or column rank of the matrix.   "
},
{
  "id": "sect-row-col-space-rank-6-2",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-6-2",
  "type": "Definition",
  "number": "2.7.14",
  "title": "",
  "body": "  Let be any vector that satisfies . The null space of the matrix is the span of all vectors . The number of independent vectors in the null space is called the nullity of .   "
},
{
  "id": "ex-nullity1",
  "level": "2",
  "url": "sect-row-col-space-rank.html#ex-nullity1",
  "type": "Example",
  "number": "2.7.15",
  "title": "",
  "body": "  Find the null space of the matrix       We can solve this by solving the homogeneous matrix equation.     and performing the row operation      results in the reduced row-echelon form. The resulting equations are     and the solution set can be written as in vector form:     and this set is the null space of the matrix. The null space is     and therefore the dimension of the null space is , and thus the nullity of is .   "
},
{
  "id": "sect-row-col-space-rank-6-4",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-6-4",
  "type": "Remark",
  "number": "2.7.16",
  "title": "",
  "body": " To find the null space of a matrix , find the row reduced form the matrix, and find the homogeneous solution. The solution set is the null space.  The basis of the homogeneous solution set is the basis of the null space.  "
},
{
  "id": "ex-nullity2",
  "level": "2",
  "url": "sect-row-col-space-rank.html#ex-nullity2",
  "type": "Example",
  "number": "2.7.17",
  "title": "",
  "body": "  Find the null space of       Again, we solve the homogeneous linear system by finding the reduced row echelon form of      and the corresponding equations are:     which has the solution set:     and this is the null space of the matrix . Since there are two linearly independent vectors that span the space, the dimension of the null space of the matrix is 2. Thus the nullity of is 2.   "
},
{
  "id": "thm-rank-nullity",
  "level": "2",
  "url": "sect-row-col-space-rank.html#thm-rank-nullity",
  "type": "Theorem",
  "number": "2.7.18",
  "title": "Rank-Nullity Theorem.",
  "body": " Rank-Nullity Theorem   Let be an matirx. The sum of the rank of and the nullity of is .   "
},
{
  "id": "sect-row-col-space-rank-7-4",
  "level": "2",
  "url": "sect-row-col-space-rank.html#sect-row-col-space-rank-7-4",
  "type": "Example",
  "number": "2.7.19",
  "title": "",
  "body": "  Show that the Rank-Nullity Theorem holds for Examples and .    In , the matrix is reduced to reduced row echelon form and it shows that there are 2 non-zero rows, hence the rank of the matrix is 2. Also in , the nullity was shown to be 1 and the sum is 3, the number of columns of .  In , the matrix is reduced to reduced row echelon form and it shows that there are 2 non-zero rows, and again the rank of the matrix is 2. The example also shows that the nullity is 2 and the sum is 4, the number of columns of .   "
},
{
  "id": "sect-det",
  "level": "1",
  "url": "sect-det.html",
  "type": "Section",
  "number": "2.8",
  "title": "Determinants of Square Matrices",
  "body": " Determinants of Square Matrices     Define the determinant as a function with a set of properties.    Find the determinant of a matrix    Use the Laplace expansion method to find the determinant of a matrix.    Use row operations to find the determinant of a matrix.    Understand the geometry of the determinant.      The determinant is a useful function for specifying when matrix is invertible or singular. For example, in section , we saw that for     that the inverse matrix exists if and only if . The determinant of this matrix will be the function . We will see two different methods for finding the determinant of an matrix.    Properties of the Determinant    Consider an matrix and denote the rows by . An  determinant is a function such that      for ,     for ,     ,     , where is the identity matrix.     The 's are the rows of the matrix and often the notation is used.    In more colloquial terms, these properties are:     if one multiplies a row by a constant and adds to a second row that the determinant is unchanged.    If one swaps rows in a matrix, the determinant of the new matrix is the opposite sign of the original matrix.    If one multiplies any row of a matrix by then the determinant of the new matrix is times the determinant of the original matrix.    The determinant of the identity matrix is 1.     Notice that the above explain the properties of a matrix, but how does one compute it? If     then define . We will show that satisfies the properties of the determinant, therefore is the determinant formula for a matrix.      and      and      and     And finally if then       If     then        The following are additional properties of a determinant.     A matrix with two identical rows has a zero determinant.    A matrix with a row of zeros has a zero determinant.    A matrix is nonsingular if and only if its determinant is nonzero.    The determinant of a matrix in echelon form is the product of its diagonal elements.          Consider a matrix with two identical rows. Swapping the two rows changes the sign of the determinant, however leaves the matrix unchanged. This implies that the determinant must be zero.    Call the row with the row of zeros. Let be any other row. Apply the row operation and now rows and are identical and the determinant has not changed. From the previous statement, the determinant is 0.    Recall that for a matrix to be nonsingular, that a linear system with coefficients from the matrix has a unique system or the row reduced echelon form of the matrix has no row of zeros. Let be the original matrix and is the matrix in echelon form. If the is nonsingular, then it is the identity matrix, which has the nonzero determinant 1.  A singular matrix reduces to a matrix with a row of zeros. By #2, this determinant is 0.    Consider a matrix in echelon form:     Using property (3) of the determinant defintion,     The matrix can be reduced to the identity matrix, with determinant 1     The 1st, 2nd and 4th statements of the lemma are very helpful for calculating the determinant. The 4th statement gives a very general way to calculate a determinant. Use the elementary row operations to put the matrix in echelon form (recall to keep track of multiplying any row by a constant and row swaps). The determinant will then be the product of the diagonal elements.  The third statement of the lemma above gives a function (the determinant) that determines whether or not a matrix is singular.         Calculating Determinants  We now calculate the determinant of two square matrices. The first example is a matrix and we use both the formula as well as Gauss' method.    Find the determinant of the following matrix using a) the formula for determinants and b) using Gauss' method.       Using the formula .  Using Gauss's method,     So .  This shows that although Gauss' method succeeds in finding the determinant, it takes more operations than the simple formula.      Use Gauss's method to find the determinants of the following matrices:       For both examples, we use row operations and keep track of any row swaps (introducing a ) or multiples.                    Expansion Method for finding the Determinant  Although Gauss' method is a very robust and in general efficient method for finding determinants, a method called the Laplace Expansion method can be quite helpful at times as well. Before defining this, we need to know a matrix minor and cofactor first.    For any matrix , the matrix formed by deleting row and column of is the minor of . The cofactor of is times the determinant of the minor of and denoted .      Find the and minors and cofactors of the matrix       Recall that minor is found by removing the th row and th column or     and the cofactors are the determinants of each of these matrices times or       Now that we have the prerequisites, the following is the Laplace Expansion method for finding a determinant.   Laplace Expansion of Determinants   The determinant of an matrix can be found by expanding by cofactors on row or column of . That is     for any satisfying or     for any satisfying .      Use the expansion formula to find the determinants of the matrices in , namely       In the case of , we will expand across the first row and use the formula for the determinant.     and for , we'll expand down the 2nd column because all but one is zero. And because of this, I won't show the cofactors of and .     and now to find this determinant, expand about the 2nd row     and now use the formula for determinants.         Geometry of Determinants   In the previous section, the determinant was introduced as a function that determines whether or not a matrix was singular due to whether or not the function was 0. In this section, we will look at a geometric approach to the determinant and show that it can be used to determine areas (and volumes) of regions bounded by vectors. We will show that this geometric approach is identical (in the two-dimensional case) as the properties in .  Consider the parallelogram formed by two vectors. In the argument below, it is important that the vector is below and to the right of the vector .   Plot of two vectors in forming a parallelogram.      The area of the parallelogram can be determined by taking the area of the enclosing rectangle and subtracting out the rectangles and and triangles and as shown below:   Finding the area of the parallelogram         and note that     And this result is identical to the determinant seen above. Again, as noted, the vectors were set up to have a positive area, however in general, one can define the area as the absolute value of the determinant.    Transformation of the Vectors and the size of the Parallelogram  From above, the area of the parallelogram is the determinant of the vectors that are along the sides.  Consider two vectors in and rotate them so one is on the -axis. Also take and multiply it by a factor of    Scaling a parallelogram      From this geometric argument, the area of the parallelogram formed by the vectors and appears to times larger. This is property 3 of Definition .  Next, let's look at transformation . The picture on the left is the original two vectors and that on the right is the transformed vectors (with about 0.2 in this picture). The original area and the transformed area are identical in this case since neither the height of the parallelogram nor its width has changed.   Skewing a parallelogram      This property shows that replacing a row with a constant times another row plus the current row results in an unchanged area is consistent with property 1 of .  The other transformation related to the determinant is property 2 of or in other words, if one switched the order of the vectors (row swaps), that the determinant changes sign. The area does not change because the area is the absolute value of the determinant.    In , the parallelpiped formed by includes the set     The volume of the parallelepiped is the absolute value of the determinant of the matrix whose columns are .      Find the volume of the parallelpiped formed by the vectors:       The volume is the absolute value of the determinant of the matrix with these three columns. We'll use Gauss' method to find the determinant.     and multiplying down the diagonal, , so . This means that the volume is 8 units.       Properties of Determinants  Need something here.   "
},
{
  "id": "sect-det-2",
  "level": "2",
  "url": "sect-det.html#sect-det-2",
  "type": "Objectives",
  "number": "2.8",
  "title": "",
  "body": "   Define the determinant as a function with a set of properties.    Find the determinant of a matrix    Use the Laplace expansion method to find the determinant of a matrix.    Use row operations to find the determinant of a matrix.    Understand the geometry of the determinant.    "
},
{
  "id": "defn-det",
  "level": "2",
  "url": "sect-det.html#defn-det",
  "type": "Definition",
  "number": "2.8.1",
  "title": "",
  "body": "  Consider an matrix and denote the rows by . An  determinant is a function such that      for ,     for ,     ,     , where is the identity matrix.     The 's are the rows of the matrix and often the notation is used.   "
},
{
  "id": "sect-det-4-9",
  "level": "2",
  "url": "sect-det.html#sect-det-4-9",
  "type": "Remark",
  "number": "2.8.2",
  "title": "",
  "body": " If     then     "
},
{
  "id": "sect-det-4-10",
  "level": "2",
  "url": "sect-det.html#sect-det-4-10",
  "type": "Lemma",
  "number": "2.8.3",
  "title": "",
  "body": "  The following are additional properties of a determinant.     A matrix with two identical rows has a zero determinant.    A matrix with a row of zeros has a zero determinant.    A matrix is nonsingular if and only if its determinant is nonzero.    The determinant of a matrix in echelon form is the product of its diagonal elements.          Consider a matrix with two identical rows. Swapping the two rows changes the sign of the determinant, however leaves the matrix unchanged. This implies that the determinant must be zero.    Call the row with the row of zeros. Let be any other row. Apply the row operation and now rows and are identical and the determinant has not changed. From the previous statement, the determinant is 0.    Recall that for a matrix to be nonsingular, that a linear system with coefficients from the matrix has a unique system or the row reduced echelon form of the matrix has no row of zeros. Let be the original matrix and is the matrix in echelon form. If the is nonsingular, then it is the identity matrix, which has the nonzero determinant 1.  A singular matrix reduces to a matrix with a row of zeros. By #2, this determinant is 0.    Consider a matrix in echelon form:     Using property (3) of the determinant defintion,     The matrix can be reduced to the identity matrix, with determinant 1     The 1st, 2nd and 4th statements of the lemma are very helpful for calculating the determinant. The 4th statement gives a very general way to calculate a determinant. Use the elementary row operations to put the matrix in echelon form (recall to keep track of multiplying any row by a constant and row swaps). The determinant will then be the product of the diagonal elements.  The third statement of the lemma above gives a function (the determinant) that determines whether or not a matrix is singular.      "
},
{
  "id": "sect-det-5-3",
  "level": "2",
  "url": "sect-det.html#sect-det-5-3",
  "type": "Example",
  "number": "2.8.4",
  "title": "",
  "body": "  Find the determinant of the following matrix using a) the formula for determinants and b) using Gauss' method.       Using the formula .  Using Gauss's method,     So .  This shows that although Gauss' method succeeds in finding the determinant, it takes more operations than the simple formula.   "
},
{
  "id": "ex-det-gauss",
  "level": "2",
  "url": "sect-det.html#ex-det-gauss",
  "type": "Example",
  "number": "2.8.5",
  "title": "",
  "body": "  Use Gauss's method to find the determinants of the following matrices:       For both examples, we use row operations and keep track of any row swaps (introducing a ) or multiples.                 "
},
{
  "id": "sect-det-6-3",
  "level": "2",
  "url": "sect-det.html#sect-det-6-3",
  "type": "Definition",
  "number": "2.8.6",
  "title": "",
  "body": "  For any matrix , the matrix formed by deleting row and column of is the minor of . The cofactor of is times the determinant of the minor of and denoted .   "
},
{
  "id": "sect-det-6-4",
  "level": "2",
  "url": "sect-det.html#sect-det-6-4",
  "type": "Example",
  "number": "2.8.7",
  "title": "",
  "body": "  Find the and minors and cofactors of the matrix       Recall that minor is found by removing the th row and th column or     and the cofactors are the determinants of each of these matrices times or      "
},
{
  "id": "sect-det-6-6",
  "level": "2",
  "url": "sect-det.html#sect-det-6-6",
  "type": "Theorem",
  "number": "2.8.8",
  "title": "Laplace Expansion of Determinants.",
  "body": " Laplace Expansion of Determinants   The determinant of an matrix can be found by expanding by cofactors on row or column of . That is     for any satisfying or     for any satisfying .   "
},
{
  "id": "sect-det-6-7",
  "level": "2",
  "url": "sect-det.html#sect-det-6-7",
  "type": "Example",
  "number": "2.8.9",
  "title": "",
  "body": "  Use the expansion formula to find the determinants of the matrices in , namely       In the case of , we will expand across the first row and use the formula for the determinant.     and for , we'll expand down the 2nd column because all but one is zero. And because of this, I won't show the cofactors of and .     and now to find this determinant, expand about the 2nd row     and now use the formula for determinants.      "
},
{
  "id": "fig-parallelogram",
  "level": "2",
  "url": "sect-det.html#fig-parallelogram",
  "type": "Figure",
  "number": "2.8.10",
  "title": "",
  "body": " Plot of two vectors in forming a parallelogram.     "
},
{
  "id": "fig-parallelogram2",
  "level": "2",
  "url": "sect-det.html#fig-parallelogram2",
  "type": "Figure",
  "number": "2.8.11",
  "title": "",
  "body": " Finding the area of the parallelogram     "
},
{
  "id": "fig-parallelogram-scale",
  "level": "2",
  "url": "sect-det.html#fig-parallelogram-scale",
  "type": "Figure",
  "number": "2.8.12",
  "title": "",
  "body": " Scaling a parallelogram     "
},
{
  "id": "fig-parallelogram-skew",
  "level": "2",
  "url": "sect-det.html#fig-parallelogram-skew",
  "type": "Figure",
  "number": "2.8.13",
  "title": "",
  "body": " Skewing a parallelogram     "
},
{
  "id": "sect-det-7-3-10",
  "level": "2",
  "url": "sect-det.html#sect-det-7-3-10",
  "type": "Definition",
  "number": "2.8.14",
  "title": "",
  "body": "  In , the parallelpiped formed by includes the set     The volume of the parallelepiped is the absolute value of the determinant of the matrix whose columns are .   "
},
{
  "id": "sect-det-7-3-11",
  "level": "2",
  "url": "sect-det.html#sect-det-7-3-11",
  "type": "Example",
  "number": "2.8.15",
  "title": "",
  "body": "  Find the volume of the parallelpiped formed by the vectors:       The volume is the absolute value of the determinant of the matrix with these three columns. We'll use Gauss' method to find the determinant.     and multiplying down the diagonal, , so . This means that the volume is 8 units.   "
},
{
  "id": "sect-linear-algebra-summary",
  "level": "1",
  "url": "sect-linear-algebra-summary.html",
  "type": "Section",
  "number": "2.9",
  "title": "Summary of the basics of linear algebra",
  "body": " Summary of the basics of linear algebra  We finish this chapter with a summarizing theorem about linear algebra. This covers how much of all of the above concepts are related.    Let be an matrix of real numbers. The following statements are equivalent:          The inverse matrix, exists.    For every vector , the equation has a unique solution .    The matrix equation has the unique solution .    The columns of are linearly independent.    The rows of are linearly independent.    The rank of is .    The column space of is    The row space of is .    The null space of is and the nullity is 0.    The reduced row echelon form of is , the identity matrix.         Examine using the matrix       In this example, we will show all of the equivalent properties directly on the matrix .     First find the determinant. Using the Laplace expansion method and expanding down the first column     which is nonzero.    Next, we'll find the inverse matrix:  and this shows that the inverse matrix is       Since the inverse matrix exists, then a unique solution to can be found by .    Again, since exists, then       See #8 below.    See #9 below.    See #8 and #9 below.    The column space is found by row reducing .    which is now in echelon form and since all nonzero row in a echelon form matrix are linearly independent, this shows #5.  Continuing to put this is reduced row echelon form:     and this shows that the column space of is     which is all of . This also shows that the rank of is 3.    In a similar manner to #8, we put in reduced row echelon form:     and thus the row space is     and this is . In addition, this shows that the rank of is 3.    The null space is the set of all such that , but from #4, we showed that the only solution to this is . The nullity is the number of linearly independent vectors in this set which is 0, by definition.    From #9, we showed that the reduced row echelon form of is .         Let be an real matrix. The following statements are equivalent          The matrix equation has no solution or an infinite number of solutions.    The matrix equation has a nontrivial solution.    The rank of is less than .       This theorem will be extremely helpful in finding a certain type of scalar and vector called an eigenvalue and eigenvector. The following example shows its usefulness.    Let     Show that has a nontrivial solution first by using then by directly finding solutions.    First, find the determinant by expansion:     and therefore by Theorem , there is a nontrivial solution to   Next, we'll solve the matrix equation by Gauss' method.     The resulting equations are     or     and the solution set is     This shows directly that the matrix equation does not have a trivial solution.    Also notice that the last matrix of Gauss' method showed that the rank was 2 (since there were only 2 nonzero rows). This was another statement in the theorem.  "
},
{
  "id": "thm-nonsing-matrices",
  "level": "2",
  "url": "sect-linear-algebra-summary.html#thm-nonsing-matrices",
  "type": "Theorem",
  "number": "2.9.1",
  "title": "",
  "body": "  Let be an matrix of real numbers. The following statements are equivalent:          The inverse matrix, exists.    For every vector , the equation has a unique solution .    The matrix equation has the unique solution .    The columns of are linearly independent.    The rows of are linearly independent.    The rank of is .    The column space of is    The row space of is .    The null space of is and the nullity is 0.    The reduced row echelon form of is , the identity matrix.      "
},
{
  "id": "sect-linear-algebra-summary-4",
  "level": "2",
  "url": "sect-linear-algebra-summary.html#sect-linear-algebra-summary-4",
  "type": "Example",
  "number": "2.9.2",
  "title": "",
  "body": "  Examine using the matrix       In this example, we will show all of the equivalent properties directly on the matrix .     First find the determinant. Using the Laplace expansion method and expanding down the first column     which is nonzero.    Next, we'll find the inverse matrix:  and this shows that the inverse matrix is       Since the inverse matrix exists, then a unique solution to can be found by .    Again, since exists, then       See #8 below.    See #9 below.    See #8 and #9 below.    The column space is found by row reducing .    which is now in echelon form and since all nonzero row in a echelon form matrix are linearly independent, this shows #5.  Continuing to put this is reduced row echelon form:     and this shows that the column space of is     which is all of . This also shows that the rank of is 3.    In a similar manner to #8, we put in reduced row echelon form:     and thus the row space is     and this is . In addition, this shows that the rank of is 3.    The null space is the set of all such that , but from #4, we showed that the only solution to this is . The nullity is the number of linearly independent vectors in this set which is 0, by definition.    From #9, we showed that the reduced row echelon form of is .      "
},
{
  "id": "thm-sing-matrices",
  "level": "2",
  "url": "sect-linear-algebra-summary.html#thm-sing-matrices",
  "type": "Theorem",
  "number": "2.9.3",
  "title": "",
  "body": "  Let be an real matrix. The following statements are equivalent          The matrix equation has no solution or an infinite number of solutions.    The matrix equation has a nontrivial solution.    The rank of is less than .      "
},
{
  "id": "sect-linear-algebra-summary-7",
  "level": "2",
  "url": "sect-linear-algebra-summary.html#sect-linear-algebra-summary-7",
  "type": "Example",
  "number": "2.9.4",
  "title": "",
  "body": "  Let     Show that has a nontrivial solution first by using then by directly finding solutions.    First, find the determinant by expansion:     and therefore by Theorem , there is a nontrivial solution to   Next, we'll solve the matrix equation by Gauss' method.     The resulting equations are     or     and the solution set is     This shows directly that the matrix equation does not have a trivial solution.   "
},
{
  "id": "sect-vector-spaces",
  "level": "1",
  "url": "sect-vector-spaces.html",
  "type": "Section",
  "number": "3.1",
  "title": "Vector Spaces",
  "body": " Vector Spaces     The definition of a vector space. This has 10 properties, most of them are familiar.    Examples of sets of \"vectors\" some of which are vectors and some of which are not.      A vector space as we will see is a set of vectors with a certain collection of properties. This notion arose from vectors of , however, we will see that they generalize.   Vector Space   Let be a nonempty set of elements with and . The set is called a real vector space and the elements of are called vectors if in there are defined two algebraic operations called vector addition and denoted and scalar multiplication and denoted that satisfy the following:     Vector Addition:  The operation satisfies:     (Closure): .    (Commutativity:)     (Associativity:)     (Identity Element:) There exist an element that satisfies: .    (Inverse Elements:) For every , there exists an element denoted such that .       Scalar Multiplication:  The real numbers and are called scalars . The operations and also satisfy:     (Closure:) .    (Distributivity:)     (Distributivity:)     (Associativity:)     (Identity): For every , .          We will show that the familiar sets and are vectors spaces. However, it is interesting that there are many other common sets of mathematical objects that are also vectors spaces.    Examples of Vector Spaces  Let's begin with the set of all vectors of length 2, which we typically write as .    Show that together with the standard notions of vector addition and scalar multiplication is a vector space.    Let     where and as well as vector addition and scalar multiplication as     We now show that all 10 properties of a vector space hold:      Additive Closure: Since are elements of , the closure by addition holds.     Additive Commutativity: For all ,      Additive Associativity:       Additive Identity Element: The zero element is and it satisfies,      Additive Inverse Element: The inverse element is given as and the following satisfies:      Multiplicative Closure: For , which is in , so scalar multiplication is closed.     Distributivity over vectors: Let and      Distributivity over scalars: Let and be elements of .      Scalar Multiplicative Associativity: Let and be elements of .      Multiplicative Identity element:         The next example shows that quadratic functions also satisfy these properties, hence the set of all polynomials of degree 2 form a vector space.    Show than the set, , is a vector space with vector addition defined as the sum of two polynomials and scalar multiplication as the multiplication of a polynomial by a constant.    In this case scalars are elements in and the vector space is the set of all polynomials of degree at most . Let     with   Vector addition is simply polynomial addition for example:     and scalar multiplication is given by         Additive Closure: Show that is in , the set of polynomials of degree 2. which is a polynomial of degree 2, so this is in .     Additive Commutativity:       Additive Associativity:       Additive Identity: The zero element is the function 0.      Additive Inverse: The inverse element is , and      Closure under scalar multiplication:  since this is a polynomial of degree 2, then .     Scalar Multiple Distributivity: Let ,      Vector Distributivity: Let ,      Scalar Multiple Associativity: Let ,      Scalar Multiple Identity:         The following are also vector spaces. There are not proofs associated with these.      , the set of polynomials of degree .    The set of vectors that consist of with the standard definition of vector addition and scalar multiplication.    The set of vectors that consist of with the standard definition of vector addition and scalar multiplication.    The set of all matrices, with standard definition of matrix addition and scalar multiplication.     In the next example, we will also show some other interesting sets are vector spaces. To save a bunch of time and effort, in some cases, we don't need to show all 10 properties. We can skip most of properties, if the set is a subset of a known vector space. The reason for this is that properties 2-5 and 7-10 will automatically hold because the vectors are already in a vector space. We will do this formally in the next section.    Show that all lines that pass through the origin, or the set     is a vector space.    First, let's rewrite the vector space as     because this is the same set of points, but it is written in terms of a vector, which makes things easier to show. As stated above, since is a subset of , we don't need to prove properties 2--5, 7--10, which hold because we already showed that these properties show. Instead, to save time and effort, we only prove properties 1 and 6 of definition of a vector space in .     Let . Therefore the two equations and are satisfied. Now check the sum,     and need to show that this is in . Since     then .    We need to show that , so that the vector satisfies the property that the line passes through the origin.     and since , then     therefore .     So this is a vector space.    The next example shows that polynomials (specifically quadratics) are vector spaces. Since we haven't shown anything about polynomials yet, we need to show all 10 properties of hold.    Show than the set, , the set of all polynomials of degree is a vector space with vector addition defined as the sum of two polynomials and scalar multiplication as the multiplication of a polynomial by a constant.    In this case scalars are elements in and the vector space is the set of all polynomials of degree at most . Let     Vector addition is simply polynomial addition for example:     and scalar addition is given by         Additive Closure: Show that is in , the set of polynomials of degree 2. which is a polynomial of degree 2, so this is in .     Additive Commutativity:       Additive Associativity:       Additive Identity: The zero element is the function 0.      Additive Inverse: The inverse element is , and      Closure under scalar multiplication:  since this is a polynomial of degree 2, then .     Scalar Multiple Distributivity: Let ,      Vector Distributivity: Let ,      Scalar Multiple Associativity: Let ,      Scalar Multiple Identity:         The above example shows that there are examples of vectors and vector spaces that don't seem like vectors in . The following are also vector spaces:     The set .    The set of functions of a single variable.    The set of functions that satisfy .    Solutions of homogeneous differential equations, which is a generalization of functions that satisfy .     Note that above there are sets of functions that are vector spaces. Similar to the 2nd degree polynomials, the vector addition is given by and the scalar multiplication is .    Is every set a vector space?  In short, no. For example, consider the following: which is the first quadrant of the plane. To check if this is a vector space, we don't need to check all 10 properties. This is because since is a subset of , most of the properties (commutative, associative, distributive, for examples) will work just as they did in . The only two that we do need to check are the closure properties.     If , then and since are all nonnegative, then this vector is in .    Let , then but if then , so is not a vector space.       Is the set     a vector space? If not what properties does it violate?    This set is a circle of radius one centered at the origin. Again, like above, is a subset of and thus the properties to check are the closure properties.     If we let both be in , then Is this in . To check sum the squares of the individual elements. which is only 1 in special circumstances and not in general, so this is not a vector space.    The additive identity requires that the zero vector is an element of the vector space. However, since is not in , then this property is also not satisfied.    This property is also not satisfied for the same reason as #1. Geometrically if is in then is on a circle of radius , so won't be in in general.        We have an alternative way of looking at the circle that will be a vector space. We can still define the vectors to be on the unit circle, however, this time addition will be defined as the vector whose angle is the sum of the angles, where angle is defined from the positive -axis. Scalar multiplication will be the scalar multiplication of the angle. There are some other details that are needed to formalize this as a vector space.    "
},
{
  "id": "sect-vector-spaces-2",
  "level": "2",
  "url": "sect-vector-spaces.html#sect-vector-spaces-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   The definition of a vector space. This has 10 properties, most of them are familiar.    Examples of sets of \"vectors\" some of which are vectors and some of which are not.    "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sect-vector-spaces.html#def-vector-space",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Vector Space.",
  "body": " Vector Space   Let be a nonempty set of elements with and . The set is called a real vector space and the elements of are called vectors if in there are defined two algebraic operations called vector addition and denoted and scalar multiplication and denoted that satisfy the following:     Vector Addition:  The operation satisfies:     (Closure): .    (Commutativity:)     (Associativity:)     (Identity Element:) There exist an element that satisfies: .    (Inverse Elements:) For every , there exists an element denoted such that .       Scalar Multiplication:  The real numbers and are called scalars . The operations and also satisfy:     (Closure:) .    (Distributivity:)     (Distributivity:)     (Associativity:)     (Identity): For every , .         "
},
{
  "id": "sect-vector-spaces-4-3",
  "level": "2",
  "url": "sect-vector-spaces.html#sect-vector-spaces-4-3",
  "type": "Lemma",
  "number": "3.1.2",
  "title": "",
  "body": "  Show that together with the standard notions of vector addition and scalar multiplication is a vector space.    Let     where and as well as vector addition and scalar multiplication as     We now show that all 10 properties of a vector space hold:      Additive Closure: Since are elements of , the closure by addition holds.     Additive Commutativity: For all ,      Additive Associativity:       Additive Identity Element: The zero element is and it satisfies,      Additive Inverse Element: The inverse element is given as and the following satisfies:      Multiplicative Closure: For , which is in , so scalar multiplication is closed.     Distributivity over vectors: Let and      Distributivity over scalars: Let and be elements of .      Scalar Multiplicative Associativity: Let and be elements of .      Multiplicative Identity element:        "
},
{
  "id": "sect-vector-spaces-4-5",
  "level": "2",
  "url": "sect-vector-spaces.html#sect-vector-spaces-4-5",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Show than the set, , is a vector space with vector addition defined as the sum of two polynomials and scalar multiplication as the multiplication of a polynomial by a constant.    In this case scalars are elements in and the vector space is the set of all polynomials of degree at most . Let     with   Vector addition is simply polynomial addition for example:     and scalar multiplication is given by         Additive Closure: Show that is in , the set of polynomials of degree 2. which is a polynomial of degree 2, so this is in .     Additive Commutativity:       Additive Associativity:       Additive Identity: The zero element is the function 0.      Additive Inverse: The inverse element is , and      Closure under scalar multiplication:  since this is a polynomial of degree 2, then .     Scalar Multiple Distributivity: Let ,      Vector Distributivity: Let ,      Scalar Multiple Associativity: Let ,      Scalar Multiple Identity:        "
},
{
  "id": "ex-lines-through-origin-vector-space",
  "level": "2",
  "url": "sect-vector-spaces.html#ex-lines-through-origin-vector-space",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Show that all lines that pass through the origin, or the set     is a vector space.    First, let's rewrite the vector space as     because this is the same set of points, but it is written in terms of a vector, which makes things easier to show. As stated above, since is a subset of , we don't need to prove properties 2--5, 7--10, which hold because we already showed that these properties show. Instead, to save time and effort, we only prove properties 1 and 6 of definition of a vector space in .     Let . Therefore the two equations and are satisfied. Now check the sum,     and need to show that this is in . Since     then .    We need to show that , so that the vector satisfies the property that the line passes through the origin.     and since , then     therefore .     So this is a vector space.   "
},
{
  "id": "sect-vector-spaces-4-11",
  "level": "2",
  "url": "sect-vector-spaces.html#sect-vector-spaces-4-11",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Show than the set, , the set of all polynomials of degree is a vector space with vector addition defined as the sum of two polynomials and scalar multiplication as the multiplication of a polynomial by a constant.    In this case scalars are elements in and the vector space is the set of all polynomials of degree at most . Let     Vector addition is simply polynomial addition for example:     and scalar addition is given by         Additive Closure: Show that is in , the set of polynomials of degree 2. which is a polynomial of degree 2, so this is in .     Additive Commutativity:       Additive Associativity:       Additive Identity: The zero element is the function 0.      Additive Inverse: The inverse element is , and      Closure under scalar multiplication:  since this is a polynomial of degree 2, then .     Scalar Multiple Distributivity: Let ,      Vector Distributivity: Let ,      Scalar Multiple Associativity: Let ,      Scalar Multiple Identity:        "
},
{
  "id": "sect-vector-spaces-5-4",
  "level": "2",
  "url": "sect-vector-spaces.html#sect-vector-spaces-5-4",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  Is the set     a vector space? If not what properties does it violate?    This set is a circle of radius one centered at the origin. Again, like above, is a subset of and thus the properties to check are the closure properties.     If we let both be in , then Is this in . To check sum the squares of the individual elements. which is only 1 in special circumstances and not in general, so this is not a vector space.    The additive identity requires that the zero vector is an element of the vector space. However, since is not in , then this property is also not satisfied.    This property is also not satisfied for the same reason as #1. Geometrically if is in then is on a circle of radius , so won't be in in general.      "
},
{
  "id": "sect-vector-spaces-5-5",
  "level": "2",
  "url": "sect-vector-spaces.html#sect-vector-spaces-5-5",
  "type": "Note",
  "number": "3.1.7",
  "title": "",
  "body": " We have an alternative way of looking at the circle that will be a vector space. We can still define the vectors to be on the unit circle, however, this time addition will be defined as the vector whose angle is the sum of the angles, where angle is defined from the positive -axis. Scalar multiplication will be the scalar multiplication of the angle. There are some other details that are needed to formalize this as a vector space.  "
},
{
  "id": "sect-subspaces",
  "level": "1",
  "url": "sect-subspaces.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Span and Basis of a Subspace",
  "body": "The Span and Basis of a Subspace   In , we saw the span of vectors in . We now extend this example to the span of any subspace. In addition, the notion of a basis of the subspace is introduced.    Let be a subset of a vector space . If is also a vector space, then is a subspace .      We showed in that the set of all lines in that pass through the origin is a vector space. Since the set is a subset of , it is a subspace of as well.      Show that is a subspace of .    Since is itself a vector space and a subset of , then is a subspace.      Recall that the set is the set of all quadratic functions.  The set of all linear functions is itself a vector space as well as a subset of , therefore is a subspace of .  In addition, the set is a vector space as well as a subset of , therefore it is a subspace.    The above examples show that there are many already known subspaces. There are many cases though that aren't evident or to show it is a subspace, we would need to prove all 10 properties that it is a vector space. The next lemma, however, shows that isn't the case.    Let be a nonempty subset of a vector space , under the inherited operations. If for all and in and      then is a subspace.    This means that if is a subset of , a vector space, to prove that is a subspace, we only need to check if .  Since is a subspace of , properties (2)-(5) and (7)-(10) of hold for . Thus we only need to prove closure under addition and scalar multiplication.  Property 1: Because , let , thus .  Property 6: Because , let , thus .      Show that     (that is, all vectors on a line of slope ) is a subspace of .    We will use . Let     be elements of . That is and . Then     which is an element of because the second component is times the first one. Thus is a subspace of .      Show using that     the set of all diagonal matrices is a subspace of , the vector space of all matrices.    In this case, if we show that for any two matrices     and scalars that is in the set.     which is a diagonal matrix, therefore in , thus this is a subspace.      Let be an by matrix. The null space of is a subspace of .    We will use to solve this. Let both and be in the null space of . This means that and . We need to show that is in the null space of .     Vectors in the null space are vectors of length , so the null space is a subset of and since is in the null space of , then the null space is a subspace of .    This is an important result that we will see in eigenvalues in the next chapter.    The Span of a set of vectors  We saw in the span of a set of vectors in . We now generalize this to any vector space.    The span of a nonempty subset of a vector space is the set of all linear combinations of the vectors in . That is,       To show that a subset of vectors span a subspace , we need to show that any vector in can be written as a linear combination of the spanning vectors.    Show that the set spans .    In this case, we need show that a general polynomial in can be written as a linear combination of elements of the given set. That is     and if there is a solution for the 's, then that shows the the set spans . To find the solution, use the technique of equating coefficients. Write down the coefficients for the constant terms, terms and terms respectively.     This has a solution and , which means that a linear combination of the three vectors can form any quadratic function, thus the given set spans .      The span of any subset of a vector space is a subspace.    Let be the subset and be the elements of . Using Lemma , we need to check that is closed under linear combinations. Let     then     Since this shows that is in , then is a subspace.    This lemma allows us to talk about a vector space in terms of the vectors that span it. For example, instead of thinking of ,we think of the span of (in this case, it may not be more helpful, but other cases it is).    Show that the following vectors span :       Because the vector can be written , then these vectors span .      Does span ?    To determine this, we will try write a general polynomial in ,     as a linear combination of the set of vectors or     and equating coefficients,     There's no solution to this because can't simultaneously equal and , so does not span .      The Basis and Dimension of a Vector Space   In the previous section, we saw that there some correspondence between a vector space and a set of spanning vectors. In this section, we formalize this relationship.    The basis of a vector space is a tuple of vectors of the vector space that form a linearly independent set that spans the vector space.    Note: the basis will be a tuple of vectors because the order of the vectors will be important. We will denote the tuple with parentheses, .   We showed in that the set     spans and since the second is not a multiple of the first, they are linearly independent. Therefore the tuple     form a basis for .    The tuple of vectors     is a different basis of because of the order of vectors. The fact that they span and are linearly independent do not depend on the order.     There are many bases of a vector space. For example,     also spans and are linearly independent.      Does     form a basis of ?    These three vectors are not linearly independent. Although one can show this in general, note that     and since they are not linearly independent, then they cannot form a basis of .    Although there are lots of different bases for a given subspace, there are some that are more useful than others. There is a basis for more subspaces called a standard basis.    The tuple     is called the standard basis or natural basis of . The vectors in the basis are called .     The natural basis of is .   We saw bases of vector spaces (or subspaces) at the beginning of this course without knowing that they were vector spaces. For example, in , we solved a linear system. It's associated homogeneous system is The solution (which is a subspace of ) can be written as The two vectors in the solution are a basis of the solution space. Since there are only two vectors and they are not constant multiples of each other, it's easy to see that they are linearly independent. Also because of the form of the solution set, you can also see that that span the space.    In a vector space with basis , the representation of a vector with respect to the basis is the column vector of the coefficients used to express as a linear combination of the basis vectors:     where and        Consider the space , the space of quadratic functions. Let be a basis of and . To find the representation, we need to find and such that     by equating coefficients this is same as solving the linear system:     resulting in , therefore     If instead the basis is given as , then     which shows that , therefore        Representations in the natural basis  As we saw above, finding representations in a basis requires solving another linear system. However, representations in the natural basis are simple calculations. If we used the natural basis for the quadratic example above, then are just the coefficients of terms of the vector . The following example shows that the representation of a vector in is what we expect, itself.    Find the Representation of the vector     in the natural basis       We seek the vector such that     which is just that and so the representation of the vector in the basis is     which is just the original vector.    The last example in this section uses matrices. The natural basis for is       Find       Formally, one needs to find and such that     but since the nice structure of the basis and , so       One can generalize to show that and this shows that matrices (which are vectors in the formal sense of vector spaces) can be represented by vectors by reshaping the matrix as a vector.     Dimension  We have been talking about a few big topics in this chapter. One of those is the spanning set of a vector space. We noted that many different sets can span a vector space. This brought in the notation of linear independence and a basis. However for a vector space there can be many different bases.  Although we did introduce a natural basis, this works well for some spaces, like and , however what is the natural basis for a solution of homogeneous linear system.  Perhaps if two people argue over the basis of a vector space, one thing they will agree on is the number of vectors in a basis as we will see. We noted earlier that disregarding extra vectors is generally a good thing to result in a basis, but there is a unique thing about bases and that is the number of vectors in any basis.    A vector space is finite dimensional if it has a basis with only finitely-many vectors.      In any finite-dimensional vector space, all of the bases have the same number of elements.    Because of this theorem, we define the dimension in following manner.    The dimension of a finite dimensional vector space is the number of vectors in any of its bases.         The dimension of is . Although there are many bases, consider , the natural basis, which has elements.    The dimension of is . The natural basis of is with elements.    The dimension of , the vector space of all 2 by 2 matrices is 4. A natural basis for this is: and since there are 4 elements, the dimension is 4.    The dimension of .         Bases of Subspaces  There were a number of important ideas in this section, so a summary is necessary. The basis of a space or subspace is useful for writing down elements in the space. That is, if we know the basis, then we know what's in the space. Additionally, the representation of an element are the coefficients in terms of the basis.  This means that any vector in a finite-dimensional vector space can be represented as a vector and as we will see this will be helpful in that we can use many of the nice techniques from to help. We will start to see that since we can write any polynomial as a vector, that many operations that we do to polynomials (such as multiplication, differentiation, and integration) can be done using matrices and vectors.    "
},
{
  "id": "sect-subspaces-2-2",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-2-2",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Let be a subset of a vector space . If is also a vector space, then is a subspace .   "
},
{
  "id": "sect-subspaces-2-3",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-2-3",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  We showed in that the set of all lines in that pass through the origin is a vector space. Since the set is a subset of , it is a subspace of as well.   "
},
{
  "id": "sect-subspaces-2-4",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-2-4",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Show that is a subspace of .    Since is itself a vector space and a subset of , then is a subspace.   "
},
{
  "id": "sect-subspaces-2-5",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-2-5",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Recall that the set is the set of all quadratic functions.  The set of all linear functions is itself a vector space as well as a subset of , therefore is a subspace of .  In addition, the set is a vector space as well as a subset of , therefore it is a subspace.   "
},
{
  "id": "lemma-subspace",
  "level": "2",
  "url": "sect-subspaces.html#lemma-subspace",
  "type": "Lemma",
  "number": "3.2.5",
  "title": "",
  "body": "  Let be a nonempty subset of a vector space , under the inherited operations. If for all and in and      then is a subspace.    This means that if is a subset of , a vector space, to prove that is a subspace, we only need to check if .  Since is a subspace of , properties (2)-(5) and (7)-(10) of hold for . Thus we only need to prove closure under addition and scalar multiplication.  Property 1: Because , let , thus .  Property 6: Because , let , thus .   "
},
{
  "id": "sect-subspaces-2-8",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-2-8",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "  Show that     (that is, all vectors on a line of slope ) is a subspace of .    We will use . Let     be elements of . That is and . Then     which is an element of because the second component is times the first one. Thus is a subspace of .   "
},
{
  "id": "eq-example-diag-matrix",
  "level": "2",
  "url": "sect-subspaces.html#eq-example-diag-matrix",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Show using that     the set of all diagonal matrices is a subspace of , the vector space of all matrices.    In this case, if we show that for any two matrices     and scalars that is in the set.     which is a diagonal matrix, therefore in , thus this is a subspace.   "
},
{
  "id": "sect-subspaces-2-10",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-2-10",
  "type": "Lemma",
  "number": "3.2.8",
  "title": "",
  "body": "  Let be an by matrix. The null space of is a subspace of .    We will use to solve this. Let both and be in the null space of . This means that and . We need to show that is in the null space of .     Vectors in the null space are vectors of length , so the null space is a subset of and since is in the null space of , then the null space is a subspace of .   "
},
{
  "id": "sect-subspaces-3-3",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-3-3",
  "type": "Definition",
  "number": "3.2.9",
  "title": "",
  "body": "  The span of a nonempty subset of a vector space is the set of all linear combinations of the vectors in . That is,      "
},
{
  "id": "sect-subspaces-3-5",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-3-5",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": "  Show that the set spans .    In this case, we need show that a general polynomial in can be written as a linear combination of elements of the given set. That is     and if there is a solution for the 's, then that shows the the set spans . To find the solution, use the technique of equating coefficients. Write down the coefficients for the constant terms, terms and terms respectively.     This has a solution and , which means that a linear combination of the three vectors can form any quadratic function, thus the given set spans .   "
},
{
  "id": "sect-subspaces-3-6",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-3-6",
  "type": "Lemma",
  "number": "3.2.11",
  "title": "",
  "body": "  The span of any subset of a vector space is a subspace.    Let be the subset and be the elements of . Using Lemma , we need to check that is closed under linear combinations. Let     then     Since this shows that is in , then is a subspace.   "
},
{
  "id": "sect-subspaces-3-8",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-3-8",
  "type": "Example",
  "number": "3.2.12",
  "title": "",
  "body": "  Show that the following vectors span :       Because the vector can be written , then these vectors span .   "
},
{
  "id": "sect-subspaces-3-9",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-3-9",
  "type": "Example",
  "number": "3.2.13",
  "title": "",
  "body": "  Does span ?    To determine this, we will try write a general polynomial in ,     as a linear combination of the set of vectors or     and equating coefficients,     There's no solution to this because can't simultaneously equal and , so does not span .   "
},
{
  "id": "sect-subspaces-4-2-2",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-2",
  "type": "Definition",
  "number": "3.2.14",
  "title": "",
  "body": "  The basis of a vector space is a tuple of vectors of the vector space that form a linearly independent set that spans the vector space.   "
},
{
  "id": "sect-subspaces-4-2-4",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-4",
  "type": "Example",
  "number": "3.2.15",
  "title": "",
  "body": " We showed in that the set     spans and since the second is not a multiple of the first, they are linearly independent. Therefore the tuple     form a basis for .  "
},
{
  "id": "sect-subspaces-4-2-5",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-5",
  "type": "Example",
  "number": "3.2.16",
  "title": "",
  "body": " The tuple of vectors     is a different basis of because of the order of vectors. The fact that they span and are linearly independent do not depend on the order.  "
},
{
  "id": "sect-subspaces-4-2-6",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-6",
  "type": "Example",
  "number": "3.2.17",
  "title": "",
  "body": "  There are many bases of a vector space. For example,     also spans and are linearly independent.   "
},
{
  "id": "sect-subspaces-4-2-7",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-7",
  "type": "Example",
  "number": "3.2.18",
  "title": "",
  "body": "  Does     form a basis of ?    These three vectors are not linearly independent. Although one can show this in general, note that     and since they are not linearly independent, then they cannot form a basis of .   "
},
{
  "id": "sect-subspaces-4-2-9",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-9",
  "type": "Definition",
  "number": "3.2.19",
  "title": "",
  "body": "  The tuple     is called the standard basis or natural basis of . The vectors in the basis are called .   "
},
{
  "id": "sect-subspaces-4-2-10",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-10",
  "type": "Remark",
  "number": "3.2.20",
  "title": "",
  "body": " The natural basis of is .  "
},
{
  "id": "sect-subspaces-4-2-12",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-12",
  "type": "Definition",
  "number": "3.2.21",
  "title": "",
  "body": "  In a vector space with basis , the representation of a vector with respect to the basis is the column vector of the coefficients used to express as a linear combination of the basis vectors:     where and      "
},
{
  "id": "sect-subspaces-4-2-13",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-2-13",
  "type": "Example",
  "number": "3.2.22",
  "title": "",
  "body": " Consider the space , the space of quadratic functions. Let be a basis of and . To find the representation, we need to find and such that     by equating coefficients this is same as solving the linear system:     resulting in , therefore     If instead the basis is given as , then     which shows that , therefore     "
},
{
  "id": "sect-subspaces-4-3-3",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-4-3-3",
  "type": "Example",
  "number": "3.2.23",
  "title": "",
  "body": "  Find the Representation of the vector     in the natural basis       We seek the vector such that     which is just that and so the representation of the vector in the basis is     which is just the original vector.   "
},
{
  "id": "ex-vect-rep-matrix",
  "level": "2",
  "url": "sect-subspaces.html#ex-vect-rep-matrix",
  "type": "Example",
  "number": "3.2.24",
  "title": "",
  "body": "  Find       Formally, one needs to find and such that     but since the nice structure of the basis and , so      "
},
{
  "id": "sect-subspaces-5-5",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-5-5",
  "type": "Definition",
  "number": "3.2.25",
  "title": "",
  "body": "  A vector space is finite dimensional if it has a basis with only finitely-many vectors.   "
},
{
  "id": "sect-subspaces-5-6",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-5-6",
  "type": "Theorem",
  "number": "3.2.26",
  "title": "",
  "body": "  In any finite-dimensional vector space, all of the bases have the same number of elements.   "
},
{
  "id": "sect-subspaces-5-8",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-5-8",
  "type": "Definition",
  "number": "3.2.27",
  "title": "",
  "body": "  The dimension of a finite dimensional vector space is the number of vectors in any of its bases.   "
},
{
  "id": "sect-subspaces-5-9",
  "level": "2",
  "url": "sect-subspaces.html#sect-subspaces-5-9",
  "type": "Example",
  "number": "3.2.28",
  "title": "",
  "body": "     The dimension of is . Although there are many bases, consider , the natural basis, which has elements.    The dimension of is . The natural basis of is with elements.    The dimension of , the vector space of all 2 by 2 matrices is 4. A natural basis for this is: and since there are 4 elements, the dimension is 4.    The dimension of .      "
},
{
  "id": "sect-inner-product",
  "level": "1",
  "url": "sect-inner-product.html",
  "type": "Section",
  "number": "3.3",
  "title": "Inner Product Spaces",
  "body": " Inner Product Spaces   In , we examined the dot product between two vectors. Recall that we can write the dot product between two vectors and in is     We used the dot product for finding the angle between two vectors and we'll show that there are many other applications that the dot product later in the text. In this section, we extend that to any vector space and call this an inner product space.    The vector space is called an inner product space if for every pair of vectors and in there is a unique number , called the inner product of and such that for all and in and then the following properties are satisfied:           .     and equals 0 if and only if .         Show that is an inner product space with     and   .    First, the set is a vector space. Next, we need to show that the three properties are satisfied for .      since the transpose of a number is itself using the properties of transposes in . so the first property is satisfied.            which satisfies . The only time that this quantity equals 0, is when or .       The next example shows that the notion of an inner product is not limited to the dot product of vectors in .    Show that on the interval is a inner product space with     for any .    We have seen above that is a vector space and limiting this to the interval does not change that fact. We need to show that the inner product defined as an integral satisfies the three properties of inner products.          Let also be in and .          and this is greater than or equal or zero and can be shown that equals 0 if and only if .         Vector Norms and distance    Let be an element of an inner product space. The norm of the vector is given by       Note: if then the vector norm is the length of the vector.    The distance between vectors and denoted and is defined as       Note: if and are in , then the distance function is the standard distance function where the vectors are considered to be points.    The distance if and only if .     Let , then By definition, this is only zero if , therefore .   If , then .    Except for the example of the inner product as an integral, all of the other discussion in this section has been about vectors in , and this is mainly because it is the canonical vector and inner product space and some of the interpretations of length of vectors don't make a lot of sense when talking about polynomials or other functions.  However, distance does have some interpretation with functions. can be used to show when two functions are equal (at least on the interval of the integration), but can also be useful to determine when they are close to equal (when the integrals are close to one another). This will be useful in future chapters.    Angles between vectors  If and are vectors in then we saw in that   and thus the angle between the vectors can be found.  This notion generalizes to any vectors in an inner product space, . Most helpful, two vectors meet at a right angle if and it is said that if this holds then and are orthogonal. The next section talks about how an entire set of vectors can be orthogonal .    Orthonormal sets of vectors    Let each be elements of an inner product space, . The set is called an orthonormal set if     and     If only the first condition holds, the set is called orthogonal .      Show that     is an orthonormal set where each vector is an element of .    We need to show that the three inner products between the vectors are zero     and that the norms of each vector is 1.     Note: this set of vectors is also a basis for .      Show that     form an orthogonal set on with the inner product taken to be the definite integral on .    Note: the following integrals will come up in the next few chapters a number of times and the technique shown below is helpful for such integrals. This also shows that even though in most cases in this text so far, that using complex numbers helps out tremendously.  Recall that     and using this we find the integrals of all pairs of functions on      and as it can be seen that all term made with the substitution cancel with terms made with the substitution .  The other two inner products are similar. In fact it can be shown (and we will later) that     if .    We saw the following theorem applied to vectors in in . It was a consequence of the triangle inequality. We again generalize this to the inner product.   Cauchy-Swartz Inequality   If and are elements of an inner product space then       If , then the inequality is satisfied. Assume and define     By definition of the inner product,     Using properties of the inner product,     Multiply through by      This can be rearranged to get:     and taking the square root, you get the desired result.    The Cauchy-Swartz inequality has numerous uses (which is not unexpected for a theorem named after such famous mathematicians). One such is to show that the angle between two vectors in and actually in any inner product space is defined.  Recall that above in this section, the angle between two vectors was defined as the angle that satisfies     and solving for the inner product,     and using the Cauchy-Swartz Inequality,     which results in     which is satisfied for all .    The Gram-Schmidt Orthogonalization Process  We saw above that an orthonormal set of vectors has the property that any two different vectors in the set are orthogonal (inner product of zero) and have norm of one. Often, if we have a set of vectors (say a basis), they aren't orthonormal, but it is advantageous to have another set that is. The Gram-Schmidt algorithm creates an orthonormal set of vectors from a set of linearly independent vectors.  We first see the idea from a pair of vectors in the following example.    Find a orthonormal set of vectors that span the same set as , where       There are many ways of doing this, but the following will always work. First, let's start by finding a unit vector in the same direction as . We denote this as and this can be found by dividing by its length:     Next, we will form a new vector which is a linear combination of and and has the property that it is orthogonal to      and we can take without loss of generality. with     and solving for ,     and since is a unit vector     So     Now since is already a unit vector, normalization is not needed. If it were, then dividing by its length would create a unit vector. A orthonormal set that spans the set is       If there are more than two vectors in the set, then the process is similar in that iteratively, one creates a new vector that is orthogonal to all previous vectors and then normalizes each one.   The Gram-Schmidt Orthogonalization algorithm is the following. Consider a set of vectors which is the basis for some vector space.     Let .    Let     Let .    And so on with      The resulting set of vectors are orthogonal. If the set also needs to be orthonormal, for each vector divide through by its length.    Proof of Gram-Schmidt Orthogonalization  To prove Gram-Schmidt orthogonalization works, we will prove that is orthogonal to for all . We will show this by induction. First show that is orthogonal to :     Now assume that is orthogonal to all other 's or for . Now we will prove that , given by Gram-Schmidt is orthogonal to all other 's. For all ,     The only term that is not apparantly nonzero in the sum is when      Therefore is orthogonal to all other 's and thus the basis consisting of form an orthonormal set.     Find a orthogonal set of vectors than spans the same subspace as     Let and be these three vectors. We now use Gram-Schmidt orthogonalization to find an orthogonal set.                     And the set is now orthogonal (check it).  Note: there are many other orthogonal sets that span this subspace. For example, the standard basis does this or if we would have shuffled the original three vectors, so this is not unique.    Although the example shown here uses vectors in , Gram-Schmidt can be done on any set of vectors from an inner product space. This is very common for polynomials and will show an example with this next. Also, in , we will also show this with trigonometric functions.    Use Gram-Schmidt orthogonalization to find a orthogonal set that spans , the set of all cubic functions on the interval with inner product       To begin, we need a set of vectors (polynomials) on the set and we can take the standard basis . Call these and we'll use Gram-Schmidt to find a set that is orthogonal.  It is very helpful to recall that is an odd function if is odd. Also if is odd.   and since is odd, the integral in the numerator is 0, so and     and is odd, so the first integral is 0 and also ,     and the integrals in the numerators of the 2nd and 4th terms are 0 due to the functions being odd, so     There an orthogonal set of cubic polynomials that span is     and these are the first four Legendre Polynomials. Also, they are a basis of .     "
},
{
  "id": "sect-inner-product-2-4",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-2-4",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  The vector space is called an inner product space if for every pair of vectors and in there is a unique number , called the inner product of and such that for all and in and then the following properties are satisfied:           .     and equals 0 if and only if .      "
},
{
  "id": "sect-inner-product-2-5",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-2-5",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Show that is an inner product space with     and   .    First, the set is a vector space. Next, we need to show that the three properties are satisfied for .      since the transpose of a number is itself using the properties of transposes in . so the first property is satisfied.            which satisfies . The only time that this quantity equals 0, is when or .      "
},
{
  "id": "sect-inner-product-2-7",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-2-7",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Show that on the interval is a inner product space with     for any .    We have seen above that is a vector space and limiting this to the interval does not change that fact. We need to show that the inner product defined as an integral satisfies the three properties of inner products.          Let also be in and .          and this is greater than or equal or zero and can be shown that equals 0 if and only if .      "
},
{
  "id": "sect-inner-product-3-2",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-3-2",
  "type": "Definition",
  "number": "3.3.4",
  "title": "",
  "body": "  Let be an element of an inner product space. The norm of the vector is given by      "
},
{
  "id": "sect-inner-product-3-4",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-3-4",
  "type": "Definition",
  "number": "3.3.5",
  "title": "",
  "body": "  The distance between vectors and denoted and is defined as      "
},
{
  "id": "lem-distance-zero",
  "level": "2",
  "url": "sect-inner-product.html#lem-distance-zero",
  "type": "Lemma",
  "number": "3.3.6",
  "title": "",
  "body": "  The distance if and only if .     Let , then By definition, this is only zero if , therefore .   If , then .   "
},
{
  "id": "sect-inner-product-5-2",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-5-2",
  "type": "Definition",
  "number": "3.3.7",
  "title": "",
  "body": "  Let each be elements of an inner product space, . The set is called an orthonormal set if     and     If only the first condition holds, the set is called orthogonal .   "
},
{
  "id": "sect-inner-product-5-3",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-5-3",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": "  Show that     is an orthonormal set where each vector is an element of .    We need to show that the three inner products between the vectors are zero     and that the norms of each vector is 1.     Note: this set of vectors is also a basis for .   "
},
{
  "id": "ex-orthog-set",
  "level": "2",
  "url": "sect-inner-product.html#ex-orthog-set",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": "  Show that     form an orthogonal set on with the inner product taken to be the definite integral on .    Note: the following integrals will come up in the next few chapters a number of times and the technique shown below is helpful for such integrals. This also shows that even though in most cases in this text so far, that using complex numbers helps out tremendously.  Recall that     and using this we find the integrals of all pairs of functions on      and as it can be seen that all term made with the substitution cancel with terms made with the substitution .  The other two inner products are similar. In fact it can be shown (and we will later) that     if .   "
},
{
  "id": "thm-cauchy-swartz",
  "level": "2",
  "url": "sect-inner-product.html#thm-cauchy-swartz",
  "type": "Theorem",
  "number": "3.3.10",
  "title": "Cauchy-Swartz Inequality.",
  "body": " Cauchy-Swartz Inequality   If and are elements of an inner product space then       If , then the inequality is satisfied. Assume and define     By definition of the inner product,     Using properties of the inner product,     Multiply through by      This can be rearranged to get:     and taking the square root, you get the desired result.   "
},
{
  "id": "sect-inner-product-6-2",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gram-Schmidt "
},
{
  "id": "sect-inner-product-6-4",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-6-4",
  "type": "Example",
  "number": "3.3.11",
  "title": "",
  "body": "  Find a orthonormal set of vectors that span the same set as , where       There are many ways of doing this, but the following will always work. First, let's start by finding a unit vector in the same direction as . We denote this as and this can be found by dividing by its length:     Next, we will form a new vector which is a linear combination of and and has the property that it is orthogonal to      and we can take without loss of generality. with     and solving for ,     and since is a unit vector     So     Now since is already a unit vector, normalization is not needed. If it were, then dividing by its length would create a unit vector. A orthonormal set that spans the set is      "
},
{
  "id": "sect-inner-product-6-6",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-6-6",
  "type": "Remark",
  "number": "3.3.12",
  "title": "",
  "body": " The Gram-Schmidt Orthogonalization algorithm is the following. Consider a set of vectors which is the basis for some vector space.     Let .    Let     Let .    And so on with      The resulting set of vectors are orthogonal. If the set also needs to be orthonormal, for each vector divide through by its length.  "
},
{
  "id": "sect-inner-product-6-7",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-6-7",
  "type": "Proof",
  "number": "3.3.4.1",
  "title": "Proof of Gram-Schmidt Orthogonalization.",
  "body": " Proof of Gram-Schmidt Orthogonalization  To prove Gram-Schmidt orthogonalization works, we will prove that is orthogonal to for all . We will show this by induction. First show that is orthogonal to :     Now assume that is orthogonal to all other 's or for . Now we will prove that , given by Gram-Schmidt is orthogonal to all other 's. For all ,     The only term that is not apparantly nonzero in the sum is when      Therefore is orthogonal to all other 's and thus the basis consisting of form an orthonormal set.  "
},
{
  "id": "sect-inner-product-6-8",
  "level": "2",
  "url": "sect-inner-product.html#sect-inner-product-6-8",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": "  Find a orthogonal set of vectors than spans the same subspace as     Let and be these three vectors. We now use Gram-Schmidt orthogonalization to find an orthogonal set.                     And the set is now orthogonal (check it).  Note: there are many other orthogonal sets that span this subspace. For example, the standard basis does this or if we would have shuffled the original three vectors, so this is not unique.   "
},
{
  "id": "example-gram-schmidt-p3",
  "level": "2",
  "url": "sect-inner-product.html#example-gram-schmidt-p3",
  "type": "Example",
  "number": "3.3.14",
  "title": "",
  "body": "  Use Gram-Schmidt orthogonalization to find a orthogonal set that spans , the set of all cubic functions on the interval with inner product       To begin, we need a set of vectors (polynomials) on the set and we can take the standard basis . Call these and we'll use Gram-Schmidt to find a set that is orthogonal.  It is very helpful to recall that is an odd function if is odd. Also if is odd.   and since is odd, the integral in the numerator is 0, so and     and is odd, so the first integral is 0 and also ,     and the integrals in the numerators of the 2nd and 4th terms are 0 due to the functions being odd, so     There an orthogonal set of cubic polynomials that span is     and these are the first four Legendre Polynomials. Also, they are a basis of .   "
},
{
  "id": "sect-linear-transformations",
  "level": "1",
  "url": "sect-linear-transformations.html",
  "type": "Section",
  "number": "3.4",
  "title": "Linear Transformations",
  "body": " Linear Transformations   This section discusses linear transformations. In short, such a transformation will map vectors to vectors in a linear way. The definition of a linear transformation (or linear map) is the following:   Linear Transformation   Let and be vector spaces. A linear transformation or linear map  from to is a function that assigns to each vector a unique vector and that satisfies for each and in and each scalar ,     These are also called homomorphisms and the notation explaining that a map goes from to is .   Reflection Map   The reflection of any vector in across the horizontal axis is a linear map. Specifically this is given as     and geometrically you can see this as:   Mapping a vector over the -axis      Show that this is a linear transformation.    Specifically, we need to show that defined above satisfies and . Let     and   , then     so is satisfied. Next,     so is satisfied.    A very important linear map in is the rotational map that takes any vector in the plane and rotates it a given angle. The next example, derives this map.   Rotational Map in   Let be a vector in . Let the function take the vector and rotate it by radians in the counterclockwise direction. Call the new vector    Diagram of the rotational map      Derive the formula for the rotational map.    Let and since is the rotated version of it has the same length, therefore . The values can be written in terms of , the angle that the vector makes with the positive horizontal axis, and the angle between the vectors as follows.     and note that these can be written:     This is a linear transformation (as we will explain later) and is called a rotational transformation .     Linear Scale Map   Consider the map that scales any vector in the plane by a factor of given by     which can be visualized in the following diagram where :   Scaling Map      where every vector under the map results in a new vector that is twice as long as the original. In general, the scale will scale the vector by a factor of and recall that if , then the direction changes. Show that this is a linear map.    Again, we show that and are satisfied. Let and be elements of .     so is satisfied and     so is satisfied so is a linear map.      If a transformation map is written as a matrix or , then is a linear transformation.    This is a consequence of matrix operations.     Note that the rotational transformation that was defined in is easily shown to be a linear transformation because from , any transformation shown as a matrix, is a linear transformation. The next theorem shows the counter direction to , that is that any linear transformation can be written as a matrix.    Let be a linear transformation. Then there exists a unique by matrix such that     We won't prove this here, but instead will motivate this below. In short, if is a linear transformation, then the matrix corresponding to the linear transformation is called the transformation matrix .    Finding the Matrix Form of a Linear Transformation  The theorem above shows that any linear transformation, can be written in matrix form. This section explains how to find it. Let be a basis of and be a basis of . Any vector in can be written or in other words . Applying the map to is and since it is a linear map Next, we write the transformation in terms of the basis vectors of or Substituting into results in and letting be the matrix with entries then or in other words, the matrix performs the map on the coefficients. Equation also shows how the matrix can be created from the linear map. That equation can also be thought of as a representation of the basis vectors or where is the th column of . The following summarizes how to find the matrix.   If is the matrix representation of the map , then the th column of is the vector , the map applied to the th basis vector of written in terms of the basis of .   We now show many examples on how to apply this.    The matrix representation of the reflection map from given by     where the representation will be in terms of the standard basis vectors.    In this case, we need to determine how the standard basis vectors map under the reflection. Thus     and     Because we are using the standard basis vectors, the representations of these vectors are themselves therefore,     and just to verify,       This next example shows how to contruct the transformation matrix for the scale map.    Find the matrix representation of the scale map in .    We need to map the basis vectors and to determine the columns of the matrix representation.     so the matrix representation is       And the next example shows that a common matrix operation, the trace is a linear map.    Let      which is the trace of a 2 by 2 matrix. Show that the trace is a linear map and find the matrix representation of the trace.    First, to prove that the trace is a linear map, we need to show that it satisfies and . Let     Then     Similarly,     Next, we want to find the matrix representation of the trace. To do this, we need to determine how the map affects the basis of the vector space , which is     and since   The matrix representation is Note that it may be surprising that the matrix representation is just a row vector, however, recall that the trace maps from a matrix that can be represented as a column vector of length 4 to the reals, so the matrix representation should be a matrix.    To verify the above results, recall that from that the representation of a matrix is the unfolded matrix or in the case, that where is the natural basis of . So the matrix trace can be written as    "
},
{
  "id": "def-linear-trans",
  "level": "2",
  "url": "sect-linear-transformations.html#def-linear-trans",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Linear Transformation.",
  "body": " Linear Transformation   Let and be vector spaces. A linear transformation or linear map  from to is a function that assigns to each vector a unique vector and that satisfies for each and in and each scalar ,    "
},
{
  "id": "sect-linear-transformations-2-3",
  "level": "2",
  "url": "sect-linear-transformations.html#sect-linear-transformations-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homomorphisms "
},
{
  "id": "ex-reflect-map",
  "level": "2",
  "url": "sect-linear-transformations.html#ex-reflect-map",
  "type": "Example",
  "number": "3.4.2",
  "title": "Reflection Map.",
  "body": " Reflection Map   The reflection of any vector in across the horizontal axis is a linear map. Specifically this is given as     and geometrically you can see this as:   Mapping a vector over the -axis      Show that this is a linear transformation.    Specifically, we need to show that defined above satisfies and . Let     and   , then     so is satisfied. Next,     so is satisfied.   "
},
{
  "id": "ex-rotational-trans",
  "level": "2",
  "url": "sect-linear-transformations.html#ex-rotational-trans",
  "type": "Example",
  "number": "3.4.4",
  "title": "Rotational Map in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Rotational Map in   Let be a vector in . Let the function take the vector and rotate it by radians in the counterclockwise direction. Call the new vector    Diagram of the rotational map      Derive the formula for the rotational map.    Let and since is the rotated version of it has the same length, therefore . The values can be written in terms of , the angle that the vector makes with the positive horizontal axis, and the angle between the vectors as follows.     and note that these can be written:     This is a linear transformation (as we will explain later) and is called a rotational transformation .   "
},
{
  "id": "ex-scale-map",
  "level": "2",
  "url": "sect-linear-transformations.html#ex-scale-map",
  "type": "Example",
  "number": "3.4.6",
  "title": "Linear Scale Map.",
  "body": " Linear Scale Map   Consider the map that scales any vector in the plane by a factor of given by     which can be visualized in the following diagram where :   Scaling Map      where every vector under the map results in a new vector that is twice as long as the original. In general, the scale will scale the vector by a factor of and recall that if , then the direction changes. Show that this is a linear map.    Again, we show that and are satisfied. Let and be elements of .     so is satisfied and     so is satisfied so is a linear map.   "
},
{
  "id": "thm-matrix-linear-trans",
  "level": "2",
  "url": "sect-linear-transformations.html#thm-matrix-linear-trans",
  "type": "Theorem",
  "number": "3.4.8",
  "title": "",
  "body": "  If a transformation map is written as a matrix or , then is a linear transformation.    This is a consequence of matrix operations.    "
},
{
  "id": "thm-linear-trans-matrix",
  "level": "2",
  "url": "sect-linear-transformations.html#thm-linear-trans-matrix",
  "type": "Theorem",
  "number": "3.4.9",
  "title": "",
  "body": "  Let be a linear transformation. Then there exists a unique by matrix such that    "
},
{
  "id": "sect-linear-transformations-2-11",
  "level": "2",
  "url": "sect-linear-transformations.html#sect-linear-transformations-2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformation matrix "
},
{
  "id": "sect-linear-transformations-3-3",
  "level": "2",
  "url": "sect-linear-transformations.html#sect-linear-transformations-3-3",
  "type": "Remark",
  "number": "3.4.10",
  "title": "",
  "body": " If is the matrix representation of the map , then the th column of is the vector , the map applied to the th basis vector of written in terms of the basis of .  "
},
{
  "id": "sect-linear-transformations-3-5",
  "level": "2",
  "url": "sect-linear-transformations.html#sect-linear-transformations-3-5",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  The matrix representation of the reflection map from given by     where the representation will be in terms of the standard basis vectors.    In this case, we need to determine how the standard basis vectors map under the reflection. Thus     and     Because we are using the standard basis vectors, the representations of these vectors are themselves therefore,     and just to verify,      "
},
{
  "id": "ex-scale-map-matrix-rep",
  "level": "2",
  "url": "sect-linear-transformations.html#ex-scale-map-matrix-rep",
  "type": "Example",
  "number": "3.4.12",
  "title": "",
  "body": "  Find the matrix representation of the scale map in .    We need to map the basis vectors and to determine the columns of the matrix representation.     so the matrix representation is      "
},
{
  "id": "sect-linear-transformations-3-9",
  "level": "2",
  "url": "sect-linear-transformations.html#sect-linear-transformations-3-9",
  "type": "Example",
  "number": "3.4.13",
  "title": "",
  "body": "  Let      which is the trace of a 2 by 2 matrix. Show that the trace is a linear map and find the matrix representation of the trace.    First, to prove that the trace is a linear map, we need to show that it satisfies and . Let     Then     Similarly,     Next, we want to find the matrix representation of the trace. To do this, we need to determine how the map affects the basis of the vector space , which is     and since   The matrix representation is Note that it may be surprising that the matrix representation is just a row vector, however, recall that the trace maps from a matrix that can be represented as a column vector of length 4 to the reals, so the matrix representation should be a matrix.   "
},
{
  "id": "sect-projection-maps",
  "level": "1",
  "url": "sect-projection-maps.html",
  "type": "Section",
  "number": "3.5",
  "title": "Projection Maps",
  "body": " Projection Maps   There is a class of linear transformations that are very important and have a nice geometric interpretation called projection maps. Let's look at an example in the -plane. Consider the point as shown below.   Projecting a point onto the -axis.      If the point (or the vector) is projected onto the -axis, then the result is the point found by taking the -component of the point. In term of the vector, this is .  We now look at projecting a vector onto a line (or a vector ). We will derive this in the -plane, however the result will work for any vector space.   Projecting a vector onto another vector.      Let and be two vectors in as shown above. We seek the projection of onto and denote this as . The projection is a vector that is in the same direction as . The length will be explained below.  Any vector can be split into two parts, a vector in a direction parallel to and a vector which satisfies .     where .  Take the inner product of both sides of ( ) with the vector      and solving for ,     Therefore the projection vector     and if needed the vector is     Although we derived this projection in , there is nothing about the projection formula to indicate it's confined to . In fact, as we will see, the projection mapping is a linear transformation and applies to vectors in an inner product space.   The projection of any vector onto a vector is given by and the vector perpendicular to that satisfies is given by    The example below finds the projection of vectors in .    Find the projection of onto the vector .    Since        Given a nonzero vector and a vector both in , the projection map in ( ) is a linear transformation.    We need to prove the two properties of linear transformations in .     and       The example shown so far for projections have been onto a vector (which can be thought of as the line through the origin with that direction), but in general, one can project onto any linear space (more technically, any inner product space). Before showing the general projection, let's consider the projection of a vector onto a plane. The following example shows this.    Find the projection of vector onto plane given by .    First, let's find two vectors in the plane, called , that form an orthogonal basis (we will see why it's helpful to have an orthogonal basis later). Recall that a normal vector to the plane is given by the vector . Two vector that are normal to it is and . (Note: these are two points in the plane). To form an orthonormal basis, we need to perform Gramm-Schmidt. and to make the second vector nicer, we'll multiply by . An orthogonal set in the plane is To consider how to project the vector into the plane we will write where is orthogonal to both and and we can write So we next take the inner product of with both and . Therefore So in the case of projecting a vector onto a plane, , So the vector is the projection of the vector onto the plane .      Using Projections to solve Least-Squares Problems  A useful problem is to find the minimum distance between a point and line. For example consider the point and the line as shown in the figure below.   Line and a point      If we want to minimize the distance from the point to the line , we often minimize the square Recall that the point that minimizes a function is the same point that to minimizes the square of the function. The reason for doing this it it gets rid of the square root and makes calculations easier to do. of the distance from the point to the line or  and using techniques from calculus, this function is minimized when . Looking at the plot, the -value is and the vector from to is perpendicular to the vector in the direction of as shown below:   Find a point on a line that minimizes distance      In light of projections, we can reframe this problem. We are seeking the point on closest to . This can be found by projecting the vector to the line or and in this case, with and , which is the same result as from Calculus.    Projecting onto a Vector Space  We again generalize from projecting onto a single vector or set of vectors to a general vector space, . First, to make things easier, we will use an orthogonal basis for , call it, .  Recall that a projection onto a vector is found by writing the original vector, , where is in or Finding the projection is analogous to finding the constants . Take the inner product of ( ) with , the th basis vector of or since is chosen to be orthogonal to the vector space and since the basis of is orthogonal, Therefore and thus we can make the following statement about projecting any element onto a subspace:   Let be an element in a vector space and be an orthogonal basis of a subspace . The projection of onto can be written: where Note: if the basis of is also orthonormal, then .     Find the projection of , an element of onto     First, we need a orthogonal basis of the subspace and we found this above in . These are the first four Legendre polynomials (scaled to eliminate fractions) or     Next, find all of the values of for      Similarly, it can be shown that     The projection then is the sum     where is the th Legendre polynomial as in ( ). A plot of this is   Find a projection of onto       which looks quite sine-like. Notice that if we plot the absolute difference between the function and the projection that we get    Difference between and its projection.      This plot shows that except for near the ends of the interval, the projection (or an approximation is within 1 decimal places.)    This last example shows the power of projections. If we are using functions as elements of vector spaces, then a projection of a function onto a vector space (using the span of a vector space), is the closest function in the vector space to the original function. In , we will do this with trigonometric function and is called Fourier Series.    "
},
{
  "id": "sect-projection-maps-2-2",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-2-2",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " Projecting a point onto the -axis.     "
},
{
  "id": "sect-projection-maps-2-5",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-2-5",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " Projecting a vector onto another vector.     "
},
{
  "id": "sect-projection-maps-2-19",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-2-19",
  "type": "Remark",
  "number": "3.5.3",
  "title": "",
  "body": " The projection of any vector onto a vector is given by and the vector perpendicular to that satisfies is given by   "
},
{
  "id": "sect-projection-maps-2-21",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-2-21",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": "  Find the projection of onto the vector .    Since     "
},
{
  "id": "thm-proj-map",
  "level": "2",
  "url": "sect-projection-maps.html#thm-proj-map",
  "type": "Theorem",
  "number": "3.5.5",
  "title": "",
  "body": "  Given a nonzero vector and a vector both in , the projection map in ( ) is a linear transformation.    We need to prove the two properties of linear transformations in .     and      "
},
{
  "id": "sect-projection-maps-2-24",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-2-24",
  "type": "Example",
  "number": "3.5.6",
  "title": "",
  "body": "  Find the projection of vector onto plane given by .    First, let's find two vectors in the plane, called , that form an orthogonal basis (we will see why it's helpful to have an orthogonal basis later). Recall that a normal vector to the plane is given by the vector . Two vector that are normal to it is and . (Note: these are two points in the plane). To form an orthonormal basis, we need to perform Gramm-Schmidt. and to make the second vector nicer, we'll multiply by . An orthogonal set in the plane is To consider how to project the vector into the plane we will write where is orthogonal to both and and we can write So we next take the inner product of with both and . Therefore So in the case of projecting a vector onto a plane, , So the vector is the projection of the vector onto the plane .   "
},
{
  "id": "sect-projection-maps-3-3",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-3-3",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": " Line and a point     "
},
{
  "id": "sect-projection-maps-3-5",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-3-5",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": " Find a point on a line that minimizes distance     "
},
{
  "id": "sect-projection-maps-4-4",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-4-4",
  "type": "Remark",
  "number": "3.5.9",
  "title": "",
  "body": " Let be an element in a vector space and be an orthogonal basis of a subspace . The projection of onto can be written: where Note: if the basis of is also orthonormal, then .  "
},
{
  "id": "sect-projection-maps-4-5",
  "level": "2",
  "url": "sect-projection-maps.html#sect-projection-maps-4-5",
  "type": "Example",
  "number": "3.5.10",
  "title": "",
  "body": "  Find the projection of , an element of onto     First, we need a orthogonal basis of the subspace and we found this above in . These are the first four Legendre polynomials (scaled to eliminate fractions) or     Next, find all of the values of for      Similarly, it can be shown that     The projection then is the sum     where is the th Legendre polynomial as in ( ). A plot of this is   Find a projection of onto       which looks quite sine-like. Notice that if we plot the absolute difference between the function and the projection that we get    Difference between and its projection.      This plot shows that except for near the ends of the interval, the projection (or an approximation is within 1 decimal places.)   "
},
{
  "id": "sect-eigenvalues",
  "level": "1",
  "url": "sect-eigenvalues.html",
  "type": "Section",
  "number": "4.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors     Define an eigenvalue and eigenvector of a square matrix.    Find the characteristics equation for a square matrix and find it's roots.    Find the eigenvectors of a matrix from its corresponding eigenvalue.    Know the possible sets of eigenvalue-eigenvector pairs for a real matrix.        For a square matrix , an eigenvalue  with related eigenvector  satisfy     as long as is not the zero vector.    Recall that the matrix operation is a linear transformation on , that is, it take a vector to another vector. Thus the eigenvector of a matrix is a vector such that results in a vector in the same direction as . The eigenvalue is the scalar transformation associated with this.    Show that is a eigenvector of       We need to show that this satisfies for some scalar . Since     and since this matrix is 7 times the vector , this proves that is an eigenvector. The scale number 7 is the eigenvalue.      Finding Eigenvalues and Eigenvectors  We will first find the eigenvalues of a given matrix. Start with the eigenvector equation:     and we have transformed this into a homogeneous matrix equation. As stated in the definition of the eigenvector, it cannot be the zero vector, and by , the only solution where is nonzero is when     This equation is called the characteristic equation . This equation is a polynomial of degree , the size of the matrix.  To find an eigenvector associated with the eigenvalue, solve     for , that is find the basis of the null space of the matrix .  Note: as we will see in all of the examples in this section that the null space of has at least dimension 1 and that the reduced echelon form of has at least one row of zeros, indicating that the rank of is less than . The reason for this is because of . This is helpful for detecting errors in finding eigenvalues\/eigenvectors.    Find all eigenvalues and eigenvectors of       First, solve ,     so .  Next, we need to find an eigenvector for each eigenvalue. When ,     To solve this matrix equation, we'll use gaussian elimination on the augmented matrix:     The first row of the matrix corresponds to so the null space of is     The eigenvector(s) associated with is the basis of this space or     And to find the eigenvector associated with , solve     and use Gaussian Elimination to reduce     The null space of is     so the eigenvector associated with is the basis of this space or     Overall, there are two eigenvalues and two related eigenvectors they are       This example showed that this matrix has two real eigenvalues and two corresponding eigenvectors. Also, although it seemed that these eigenvectors may be unique, we'll show that is also a eigenvector of the matrix in .     which shows directly that is an eigenvector with corresponding eigenvalue 7. Does this mean that there are other eigenvectors? Yes. The following lemma shows this.    If is an eigenvector of with corresponding eigenvalue , then is also an eigenvector of with corresponding eigenvalue if .    Since is an eigenvector of with corresponding eigenvalue , then . Multiplying this by results in     which shows the result. Also note, that cannot be zero, because is the zero vector, which is not an eigenvector.    This next example shows another possible solution set for eigenvalues-eigenvectors.    Find the eigenvalues and eigenvectors of       The eigenvalues are found by solving the characteristic equation     And solving has the single root . To find the associated eigenvector, we solve for the null space of      which has the only equation or which shows that the null space is     and the eigenvector is .    And this next example has only one eigenvalue however has two linearly independent eigenvectors.    Find the eigenvalues and eigenvectors of       This has the characteristic equation or the single root . To find the eigenvectors we find the null space of or     and any vector in is in the null space. We can write down the space using the standard basis vectors     so and are both eigenvectors associated with . In fact, since any vector in is in the span of these two eigenvectors, then any vector in is an eigenvector.    There are other possibilities of eigenvalues and eigenvectors of matrices. The following has complex eigenvalues.    Find the eigenvalues and eigenvectors of       To find the eigenvalues, we find     or , which has the solutions .  To find the eigenvectors, we find the null space associated with each of the two eigenvalues.        Find the null space of :   where is used     and the top equation says , so the null space is     so the eigenvector is .       Find the null space of :     and the top equation says , so the null space is     so the eigenvector is .       Notice in the last example that there where complex conjugate pairs of eigenvalues and associated eigenvectors. This always occurs with a real matrix . The following theorem summarizes this.    Let be a real matrix. If is an complex eigenvalue with corresponding eigenvector, , then the complex conjugate of denoted is also an eigenvalue with corresponding complex conjuate eigenvector .    If , is an eigenvalue-eigenvector pair of , then     And taking the complex conjugate of this equation.     where because is a real matrix. This shows that , is an eigenvalue-eigenvector pair of .    The result of this theorem will save work if you have a real matrix and find a complex eigenvalue. shows that the eigenvalue-eigenvector pairs are and . The above theorem shows that and is another eigenvalue-eigenvector pair. The next example has real eigenvalue and eigenvector, but has a different feature than .   Eigenvalue\/Eigenvectors of a real matrix  The follow is a list of possible eigenvalue-eigenvectors for a real real matrix.     2 real eigenvalues, 2 linearly independent eigenvectors    1 real eigenvalue, 2 linearly independent eigenvectors    1 real eigenvalue, 1 eigenvector.    2 complex eigenvalues (complex conjugates) and 2 linearly indepedent eigenvectors (complex conjugates).        Eigenvalues and Eigenvectors of matrices  Finding the eigenvalues and eigenvectors for matrices larger than goes through the same steps. It is just a bit more complicated and we will show two examples of these.    Find the eigenvalues and eigenvectors of the 3 by 3 matrix       To find the eigenvalues, we solve the characteristic equation or expanding across the first row to find the determinant and we solve     which has roots . To find the corresponding eigenvectors, we solve for the null space of for each            and other that a factor of 3, this is in reduced row echelon form. The top two equations are     and the null space is     And we could take as an eigenvector, however, from , a scalar multiple of an eigenvector is also an eigenvector, so multiplying by 3 results in .        and the top two equations are and so the null space can be written   so the eigenvectors is .          and the top two equations are , so the null space is     Therefore the eigenvector is      In summary, for this matrix, there are three real eigenvalues and each has a corresponding eigenvector. These are         Find the eigenvalues and eigenvectors of       First, we solve for the eigenvectors by solving ,     and this is 0, when and . Next, find the eigenvectors. The eigenvectors with are found by finding the null space of :     and since the only equation is , both and are free variables and the solution space (therefore the null space) can be written:     This shows that the vectors     are both eigenvectors associated with . The eigenvectors associated with is found by seeking the null space of :     These equations are     so the solution set (and the null space) is     so the eigenvector associated with is     In summary, for this matrix, there are two real eigenvalues. The first has two corresponding eigenvectors and the second has a single corresponding eigenvector. These are        Eigenvalue\/Eigenvectors of a real matrix  The follow is a list of possible eigenvalue-eigenvectors for a real real matrix.     3 real eigenvalues, 3 linearly independent eigenvectors    2 real eigenvalues, one with one correspoding eigenvector, the other with two corresponding eigenvectors.    1 real eigenvalue, 3 linearly indpendent eigenvectors.    1 real eigenvalue with corresponding real eigenvector and 2 complex eigenvalues (complex conjugates) and 2 linearly indepedent eigenvectors (complex conjugates).       "
},
{
  "id": "sect-eigenvalues-2",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-eigenvalues-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "   Define an eigenvalue and eigenvector of a square matrix.    Find the characteristics equation for a square matrix and find it's roots.    Find the eigenvectors of a matrix from its corresponding eigenvalue.    Know the possible sets of eigenvalue-eigenvector pairs for a real matrix.    "
},
{
  "id": "sect-eigenvalues-3-1",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-eigenvalues-3-1",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  For a square matrix , an eigenvalue  with related eigenvector  satisfy     as long as is not the zero vector.   "
},
{
  "id": "sect-eigenvalues-3-3",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-eigenvalues-3-3",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Show that is a eigenvector of       We need to show that this satisfies for some scalar . Since     and since this matrix is 7 times the vector , this proves that is an eigenvector. The scale number 7 is the eigenvalue.   "
},
{
  "id": "sect-finding-eigenvalues-eigenvectors-6",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-finding-eigenvalues-eigenvectors-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "ex-eigs-real1",
  "level": "2",
  "url": "sect-eigenvalues.html#ex-eigs-real1",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Find all eigenvalues and eigenvectors of       First, solve ,     so .  Next, we need to find an eigenvector for each eigenvalue. When ,     To solve this matrix equation, we'll use gaussian elimination on the augmented matrix:     The first row of the matrix corresponds to so the null space of is     The eigenvector(s) associated with is the basis of this space or     And to find the eigenvector associated with , solve     and use Gaussian Elimination to reduce     The null space of is     so the eigenvector associated with is the basis of this space or     Overall, there are two eigenvalues and two related eigenvectors they are      "
},
{
  "id": "lem-eigenvector-scale",
  "level": "2",
  "url": "sect-eigenvalues.html#lem-eigenvector-scale",
  "type": "Lemma",
  "number": "4.1.4",
  "title": "",
  "body": "  If is an eigenvector of with corresponding eigenvalue , then is also an eigenvector of with corresponding eigenvalue if .    Since is an eigenvector of with corresponding eigenvalue , then . Multiplying this by results in     which shows the result. Also note, that cannot be zero, because is the zero vector, which is not an eigenvector.   "
},
{
  "id": "sect-finding-eigenvalues-eigenvectors-17",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-finding-eigenvalues-eigenvectors-17",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of       The eigenvalues are found by solving the characteristic equation     And solving has the single root . To find the associated eigenvector, we solve for the null space of      which has the only equation or which shows that the null space is     and the eigenvector is .   "
},
{
  "id": "ex-eigs-scale2",
  "level": "2",
  "url": "sect-eigenvalues.html#ex-eigs-scale2",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of       This has the characteristic equation or the single root . To find the eigenvectors we find the null space of or     and any vector in is in the null space. We can write down the space using the standard basis vectors     so and are both eigenvectors associated with . In fact, since any vector in is in the span of these two eigenvectors, then any vector in is an eigenvector.   "
},
{
  "id": "ex-eigs-complex",
  "level": "2",
  "url": "sect-eigenvalues.html#ex-eigs-complex",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of       To find the eigenvalues, we find     or , which has the solutions .  To find the eigenvectors, we find the null space associated with each of the two eigenvalues.        Find the null space of :   where is used     and the top equation says , so the null space is     so the eigenvector is .       Find the null space of :     and the top equation says , so the null space is     so the eigenvector is .      "
},
{
  "id": "sect-finding-eigenvalues-eigenvectors-23",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-finding-eigenvalues-eigenvectors-23",
  "type": "Theorem",
  "number": "4.1.8",
  "title": "",
  "body": "  Let be a real matrix. If is an complex eigenvalue with corresponding eigenvector, , then the complex conjugate of denoted is also an eigenvalue with corresponding complex conjuate eigenvector .    If , is an eigenvalue-eigenvector pair of , then     And taking the complex conjugate of this equation.     where because is a real matrix. This shows that , is an eigenvalue-eigenvector pair of .   "
},
{
  "id": "sect-finding-eigenvalues-eigenvectors-25",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-finding-eigenvalues-eigenvectors-25",
  "type": "Note",
  "number": "4.1.9",
  "title": "Eigenvalue\/Eigenvectors of a <span class=\"process-math\">\\(2\\times 2\\)<\/span> real matrix.",
  "body": " Eigenvalue\/Eigenvectors of a real matrix  The follow is a list of possible eigenvalue-eigenvectors for a real real matrix.     2 real eigenvalues, 2 linearly independent eigenvectors    1 real eigenvalue, 2 linearly independent eigenvectors    1 real eigenvalue, 1 eigenvector.    2 complex eigenvalues (complex conjugates) and 2 linearly indepedent eigenvectors (complex conjugates).     "
},
{
  "id": "ex-eigs-3by3",
  "level": "2",
  "url": "sect-eigenvalues.html#ex-eigs-3by3",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of the 3 by 3 matrix       To find the eigenvalues, we solve the characteristic equation or expanding across the first row to find the determinant and we solve     which has roots . To find the corresponding eigenvectors, we solve for the null space of for each            and other that a factor of 3, this is in reduced row echelon form. The top two equations are     and the null space is     And we could take as an eigenvector, however, from , a scalar multiple of an eigenvector is also an eigenvector, so multiplying by 3 results in .        and the top two equations are and so the null space can be written   so the eigenvectors is .          and the top two equations are , so the null space is     Therefore the eigenvector is      In summary, for this matrix, there are three real eigenvalues and each has a corresponding eigenvector. These are      "
},
{
  "id": "sect-eigen-3by3-4",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-eigen-3by3-4",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of       First, we solve for the eigenvectors by solving ,     and this is 0, when and . Next, find the eigenvectors. The eigenvectors with are found by finding the null space of :     and since the only equation is , both and are free variables and the solution space (therefore the null space) can be written:     This shows that the vectors     are both eigenvectors associated with . The eigenvectors associated with is found by seeking the null space of :     These equations are     so the solution set (and the null space) is     so the eigenvector associated with is     In summary, for this matrix, there are two real eigenvalues. The first has two corresponding eigenvectors and the second has a single corresponding eigenvector. These are      "
},
{
  "id": "sect-eigen-3by3-5",
  "level": "2",
  "url": "sect-eigenvalues.html#sect-eigen-3by3-5",
  "type": "Note",
  "number": "4.1.12",
  "title": "Eigenvalue\/Eigenvectors of a <span class=\"process-math\">\\(3\\times 3\\)<\/span> real matrix.",
  "body": " Eigenvalue\/Eigenvectors of a real matrix  The follow is a list of possible eigenvalue-eigenvectors for a real real matrix.     3 real eigenvalues, 3 linearly independent eigenvectors    2 real eigenvalues, one with one correspoding eigenvector, the other with two corresponding eigenvectors.    1 real eigenvalue, 3 linearly indpendent eigenvectors.    1 real eigenvalue with corresponding real eigenvector and 2 complex eigenvalues (complex conjugates) and 2 linearly indepedent eigenvectors (complex conjugates).     "
},
{
  "id": "sect-linear-maps-eigen",
  "level": "1",
  "url": "sect-linear-maps-eigen.html",
  "type": "Section",
  "number": "4.2",
  "title": "Eigenvalues and Eigenvectors of Linear Transformations",
  "body": " Eigenvalues and Eigenvectors of Linear Transformations     The definition of the eigenvalues and eigenvector of a linear transformation.    Examples of eigenvalues-eigenvectors of linear transformations using knowledge of the transformation.    Examples of eigenvalues-eigenvectors of linear transformations using the representation matrix of the transformation.     Recall that in section that the eigenvalues and eigenvectors of a square matrix was found. We will examine how we can find eigenvalues and eigenvectors of a linear map. The definition of these are extensions of what we saw for matrices.    Let be a linear map and be a finite dimensional vector space. The nonzero vector is an eigenvector with associated eigenvalue if       There are a few ways to find and . In this section, we'll only see some examples that are relatively simple to see as well as finding the matrix representation of the map. In addition, this section only shows examples from finite dimensional vector spaces, however, in general, there is no restriction.  For the remainder of this chapter we will see examples of eigenvalues and eigenvectors of linear maps, including rotations, scales and derivative maps. We first see an example of scaling a vector in .    Find the eigenvalues and eigenvectors of the scale map from .    Recall that the scale map is given by     To find the eigenvalues and eigenvectors of , we seek an and a such that     but since , then and any is an eigenvector.  Alternatively, we can write down the matrix associated with the map. This was done in and is     The eigenvalues and eigenvectors of this was found in for a particular , but generalizing that, one can see that will be the only eigenvector of with eigenvectors and .  In this case, since there are two eigenvectors associated with , any linear combination of the two eigenvectors is also an eigenvector, and since and span , any vector in is an eigenvector.    The next example shows the eigenvalues of the linear map associated with a derivative.    The set     is a subspace of all functions on . A basis for this subspace is . In addition, the differential operation is a linear transformation. What are the eigenvalues and eigenvectors of ?    There are two ways of looking at this. Since , this means that is an eigenvector with corresponding eigenvalue 1. Similarly, since , this also means that is an eigenvector with eigenvalue .  Alternatively, this can be done by first finding the matrix representation of the differential operator or     Recall that in the case of diagonal matrices, the eigenvalues are on the diagonal or and . One can also find that the corresponding eigenvectors are     These two vectors can be translated back to the functional forms and , the same as we found above. These two functions which are in are functions that stay the same in the subspace up to a scalar constant.      Consider the differential map which maps cubic polynomials to other cubic polynomials.     Find the eigenvalues of this matrix and interpret.    First, we find     and setting it to zero, thus is the only eigenvalue. To find the eigenvectors, we find the null space of the original matrix, which after scaling the second and third row, the matrix is the reduced row echelon form:     and the solution to the null space is     This vector is the representation of the cubic polynomial , a constant. Thus, the only vector that remains the same under differentiation is the constant polynomial with eigenvalue 0.    This last example of this involves matrices and the rotation of a matrix.    Find the eigenvalues and eigenvectors of the linear map that rotates a 2 by 2 matrix 90 clockwise. That is such that       One can show that if we consider the vector representation in the basis:     that     and the map can be represented by the matrix as     We now find the eigenvalues and eigenvectors of this. The eigenvalue-eigenvector pairs are     To translate this back to the map that rotates the matrix, we translate each of the eigenvectors to the matrix that it represents. For example, is the matrix     and if that matrix is rotated, you get it back and the eigenvalue is 1. The second eigenvector can be written as the matrix     and if you rotate this matrix, you get the matrix     which is the above matrix multiplied by the eigenvalue . In other words:     The other two work in a similar manner, however complex numbers are needed.    "
},
{
  "id": "sect-linear-maps-eigen-2",
  "level": "2",
  "url": "sect-linear-maps-eigen.html#sect-linear-maps-eigen-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "   The definition of the eigenvalues and eigenvector of a linear transformation.    Examples of eigenvalues-eigenvectors of linear transformations using knowledge of the transformation.    Examples of eigenvalues-eigenvectors of linear transformations using the representation matrix of the transformation.    "
},
{
  "id": "sect-linear-maps-eigen-4",
  "level": "2",
  "url": "sect-linear-maps-eigen.html#sect-linear-maps-eigen-4",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let be a linear map and be a finite dimensional vector space. The nonzero vector is an eigenvector with associated eigenvalue if      "
},
{
  "id": "sect-linear-maps-eigen-7",
  "level": "2",
  "url": "sect-linear-maps-eigen.html#sect-linear-maps-eigen-7",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of the scale map from .    Recall that the scale map is given by     To find the eigenvalues and eigenvectors of , we seek an and a such that     but since , then and any is an eigenvector.  Alternatively, we can write down the matrix associated with the map. This was done in and is     The eigenvalues and eigenvectors of this was found in for a particular , but generalizing that, one can see that will be the only eigenvector of with eigenvectors and .  In this case, since there are two eigenvectors associated with , any linear combination of the two eigenvectors is also an eigenvector, and since and span , any vector in is an eigenvector.   "
},
{
  "id": "sect-linear-maps-eigen-9",
  "level": "2",
  "url": "sect-linear-maps-eigen.html#sect-linear-maps-eigen-9",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  The set     is a subspace of all functions on . A basis for this subspace is . In addition, the differential operation is a linear transformation. What are the eigenvalues and eigenvectors of ?    There are two ways of looking at this. Since , this means that is an eigenvector with corresponding eigenvalue 1. Similarly, since , this also means that is an eigenvector with eigenvalue .  Alternatively, this can be done by first finding the matrix representation of the differential operator or     Recall that in the case of diagonal matrices, the eigenvalues are on the diagonal or and . One can also find that the corresponding eigenvectors are     These two vectors can be translated back to the functional forms and , the same as we found above. These two functions which are in are functions that stay the same in the subspace up to a scalar constant.   "
},
{
  "id": "sect-linear-maps-eigen-10",
  "level": "2",
  "url": "sect-linear-maps-eigen.html#sect-linear-maps-eigen-10",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Consider the differential map which maps cubic polynomials to other cubic polynomials.     Find the eigenvalues of this matrix and interpret.    First, we find     and setting it to zero, thus is the only eigenvalue. To find the eigenvectors, we find the null space of the original matrix, which after scaling the second and third row, the matrix is the reduced row echelon form:     and the solution to the null space is     This vector is the representation of the cubic polynomial , a constant. Thus, the only vector that remains the same under differentiation is the constant polynomial with eigenvalue 0.   "
},
{
  "id": "sect-linear-maps-eigen-12",
  "level": "2",
  "url": "sect-linear-maps-eigen.html#sect-linear-maps-eigen-12",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Find the eigenvalues and eigenvectors of the linear map that rotates a 2 by 2 matrix 90 clockwise. That is such that       One can show that if we consider the vector representation in the basis:     that     and the map can be represented by the matrix as     We now find the eigenvalues and eigenvectors of this. The eigenvalue-eigenvector pairs are     To translate this back to the map that rotates the matrix, we translate each of the eigenvectors to the matrix that it represents. For example, is the matrix     and if that matrix is rotated, you get it back and the eigenvalue is 1. The second eigenvector can be written as the matrix     and if you rotate this matrix, you get the matrix     which is the above matrix multiplied by the eigenvalue . In other words:     The other two work in a similar manner, however complex numbers are needed.   "
},
{
  "id": "sect-sym-matrix-quad-form",
  "level": "1",
  "url": "sect-sym-matrix-quad-form.html",
  "type": "Section",
  "number": "4.3",
  "title": "Symmetric and Orthogonal Matrices and Quadratic Forms",
  "body": " Symmetric and Orthogonal Matrices and Quadratic Forms     A square matrix is said to be symmetric if .      The eigenvalues of a symmetric matrix are real.    Let be an eigenvalue of with corresponding eigenvector .     Right multiply by     Take the complex conjugate of the eigenvector equation above:     left mulitply by     so , hence it is real.      The eigenvectors of a symmetric matrix are orthogonal.      A square matrix is said to be orthogonal if     for all . If in addition that for all then the matrix is also said to be orthonormal .      If is a orthonormal matrix, then .      Orthogonal Transformations    Let be a linear transformation from to . If is an orthonormal matrix, then the linear transformation is said to be an orthogonal transformation .      Show that the rotational transformation given in section 7.10 is an orthogonal transformation.    Show that     satisfies .      A quadratic form is a polynomial function in such that       Note that a quadratic form can have squared terms and products between only two variables.    The following are examples of quadratic forms.                And the following are not:      .     .       A quadratic form can be written as     for some symmetric matrix and .    Find the matrix for the quadratic forms above:       And for the second quadratic form:         Principle Axes of Quadratic Forms  For the quadratic form:    if can be written:     and since is symmetric then the eigenvectors form an orthonormal basis so .     where . Example of ellipse\/contour plot.   "
},
{
  "id": "sect-sym-matrix-quad-form-2-1",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-sym-matrix-quad-form-2-1",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  A square matrix is said to be symmetric if .   "
},
{
  "id": "sect-sym-matrix-quad-form-2-2",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-sym-matrix-quad-form-2-2",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "",
  "body": "  The eigenvalues of a symmetric matrix are real.    Let be an eigenvalue of with corresponding eigenvector .     Right multiply by     Take the complex conjugate of the eigenvector equation above:     left mulitply by     so , hence it is real.   "
},
{
  "id": "sect-sym-matrix-quad-form-2-3",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-sym-matrix-quad-form-2-3",
  "type": "Theorem",
  "number": "4.3.3",
  "title": "",
  "body": "  The eigenvectors of a symmetric matrix are orthogonal.   "
},
{
  "id": "sect-sym-matrix-quad-form-2-4",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-sym-matrix-quad-form-2-4",
  "type": "Definition",
  "number": "4.3.4",
  "title": "",
  "body": "  A square matrix is said to be orthogonal if     for all . If in addition that for all then the matrix is also said to be orthonormal .   "
},
{
  "id": "sect-sym-matrix-quad-form-2-5",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-sym-matrix-quad-form-2-5",
  "type": "Theorem",
  "number": "4.3.5",
  "title": "",
  "body": "  If is a orthonormal matrix, then .   "
},
{
  "id": "sect-orthogonal-transformations-2",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-orthogonal-transformations-2",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": "  Let be a linear transformation from to . If is an orthonormal matrix, then the linear transformation is said to be an orthogonal transformation .   "
},
{
  "id": "sect-orthogonal-transformations-3",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-orthogonal-transformations-3",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": "  Show that the rotational transformation given in section 7.10 is an orthogonal transformation.    Show that     satisfies .   "
},
{
  "id": "sect-orthogonal-transformations-4",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-orthogonal-transformations-4",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  A quadratic form is a polynomial function in such that      "
},
{
  "id": "sect-orthogonal-transformations-6",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-orthogonal-transformations-6",
  "type": "Example",
  "number": "4.3.9",
  "title": "",
  "body": "  The following are examples of quadratic forms.                And the following are not:      .     .      "
},
{
  "id": "sect-orthogonal-transformations-10",
  "level": "2",
  "url": "sect-sym-matrix-quad-form.html#sect-orthogonal-transformations-10",
  "type": "Example",
  "number": "4.3.10",
  "title": "",
  "body": "  Find the matrix for the quadratic forms above:       And for the second quadratic form:      "
},
{
  "id": "sect-applications-eigen",
  "level": "1",
  "url": "sect-applications-eigen.html",
  "type": "Section",
  "number": "4.4",
  "title": "Applications of Eigenvalues and Eigenvectors",
  "body": " Applications of Eigenvalues and Eigenvectors   We will develop a simple model of population growth in this section and show an example where eigenvalues and eigenvectors play an important role.  Consider a population of a single species, perhaps a bacteria, which varies over time. Let be the population at the th time unit (day, month, year, \\ldots). A simple model will be that the population at the next time will be proportional to the current population, thus .  If the number of bacteria starting is 50, then and the population doubles every time unit, so , then     and so on. In general     From this model, the population increases without bound if , drops to zero if and if , .    Leslie Population Models  The previous model actually works well for species like single-celled organisms, however, more advanced species will require a more complicated model. Consider a species, like some type of bird, that has two stages of life: juvenile and adult. We will also assume that the population of males and females are equal. The juvenile female cannot reproduce and the adult female can. Let and be the population of the juveniles and adults females at stage . A simple model for growth is     where at each stage the fraction of the juveniles survive to adulthood, and the population of the adults will produce a factor juveniles. Finally, the fraction of the adults survive one time unit. This linear system can be written as the matrix equation     where     As a specific example, let's consider     The first line means that for every adult female, two juvenile females are produced. The second line means that 0.3 (30 percent) of the juveniles survive to adulthood and at each stage 0.5 (50 percent) of the adults survive to the next stage.  Let's see what happens to this population for some initial condition. Let's say that we have 10 female adults and 0 juvenile adults. Then     In general,      Table of population values    year                   0  0  10  10  0      1  20  5  25  4.00  2.50    2  10  8  18  1.18  0.74    3  17  7  24  2.34  1.31    4  14  8  22  1.66  0.96    5  17  8  25  2.00  1.13         10  22  12  34  1.87  1.06    11  24  12  36  1.88  1.07    12  25  13  38  1.88  1.06     We'd like to explain what is going on here. As we will show, the eigenvalues are important. The characteristic equation is     which has the solutions     The eigenvectors are     Assume that and are the eigenvalues of and and are the eigenvectors. If and are linearly independent, then we can write     for some real numbers and . Let's use the matrix equations above to find ,     similarly,     Now assume that and factor out from the equation above:     as increases the ratio goes to zero, so       Second-Order Differential Equations Systems  Consider a mass-spring system:   Find a point on a line that minimizes distance      where and are the positions of the masses and relative to the unstretched spring positions and and are the spring constants of the two springs. The mass spring system above can be modeled using the 2nd order system of differential equations.     This can be written in matrix form as     with     where is the mass matrix and is called the stiffness matrix, which can take other forms depending on the connectedness of the spring system. Since is nonsingular, we can find and write the system above as:     where .    Solutions of   Let be an eigenvector of , with eigenvalue , then is a solution.     if , then the and the solution is:     If is an eigenvalue of with corresponding eigenvector , then the part of the solution associate with this is:       If the matrix has distinct negative eigenvalues with associated real eigenvectors, then a general solution to     is given by     where and arbitrary constants. If is an eigenvalue of with corresponding eigenvector , then the part of the solution associate with this is:         Consider the mass-spring system above with , , , and , then the mass matrix and stiffness matrix are:     resulting in the system:     The eigenvalues and eigenvectors are:     Therefore the solution is:     Next, let's find the values of the 's and 's if and when or     and . First use the initial value in ( ),     and this is true when and . To find and , differentiate ( ),     and evaluate it at      or and . The solution with the given initial condition,     The value of and , the position of the two masses are the first and second components. A plot of these two are:   Solution of a second-order differential equation.         "
},
{
  "id": "sect-leslie-models-15",
  "level": "2",
  "url": "sect-applications-eigen.html#sect-leslie-models-15",
  "type": "Table",
  "number": "4.4.1",
  "title": "Table of population values",
  "body": " Table of population values    year                   0  0  10  10  0      1  20  5  25  4.00  2.50    2  10  8  18  1.18  0.74    3  17  7  24  2.34  1.31    4  14  8  22  1.66  0.96    5  17  8  25  2.00  1.13         10  22  12  34  1.87  1.06    11  24  12  36  1.88  1.07    12  25  13  38  1.88  1.06    "
},
{
  "id": "sect-second-order-de-3",
  "level": "2",
  "url": "sect-applications-eigen.html#sect-second-order-de-3",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " Find a point on a line that minimizes distance     "
},
{
  "id": "sect-solutions-of-second-order-de-8",
  "level": "2",
  "url": "sect-applications-eigen.html#sect-solutions-of-second-order-de-8",
  "type": "Theorem",
  "number": "4.4.3",
  "title": "",
  "body": "  If the matrix has distinct negative eigenvalues with associated real eigenvectors, then a general solution to     is given by     where and arbitrary constants. If is an eigenvalue of with corresponding eigenvector , then the part of the solution associate with this is:      "
},
{
  "id": "sect-solutions-of-second-order-de-9",
  "level": "2",
  "url": "sect-applications-eigen.html#sect-solutions-of-second-order-de-9",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Consider the mass-spring system above with , , , and , then the mass matrix and stiffness matrix are:     resulting in the system:     The eigenvalues and eigenvectors are:     Therefore the solution is:     Next, let's find the values of the 's and 's if and when or     and . First use the initial value in ( ),     and this is true when and . To find and , differentiate ( ),     and evaluate it at      or and . The solution with the given initial condition,     The value of and , the position of the two masses are the first and second components. A plot of these two are:   Solution of a second-order differential equation.       "
},
{
  "id": "ch-matrix-factoring-3",
  "level": "1",
  "url": "ch-matrix-factoring-3.html",
  "type": "Section",
  "number": "5.1",
  "title": "Matrix Properties and Operations",
  "body": " Matrix Properties and Operations   Although we have spent some time with matrices earlier in the text, we summarize these and they will be important throughout this chapter.    The Matrix Transpose  Let be an by matrix. The matrix transpose of is denoted and     or in other words, the th row of the transpose is the th column of .    If     then       The matrix is the matrix flipped over the diagonal.    Properties of the matrix transpose   The following are properties of the transpose. Let be an by matrix (unless more restricted as noted).      . That is, the transpose of the transpose is the original matrix back.     . This is one of the properties of linearity.     .     . And this is the other linearly property.     If, in addition, the matrix is square, then      .    The eigenvalues of are the same as the eigenvalues of . Also, the characteristic polynomial of and are the same.          Symmetric Matrices   We have seen throughout this book examples where a matrix is symmetric in some sense. However, there is a precise definition.    A matrix is symmetric if it is square and if .      The following matrix is symmetric,     and the following is not     since it is not square.    Notice that a symmetric matrix has the property that it symmetric over the main diagonal (running from the upper left to lower right).    Eigenvalues of Symmetric Matrices  If we follow the techniques in , we can find the eigenvalues and eigenvectors of     then the eigenvalues are and the corresponding eigenvectors are     which are both real eigenvalues and eigenvectors. This fact is (as shown in the next lemma) that the matrix is symmetric.    Let be a real symmetric matrix. The eigenvalues and eigenvectors of are real.     Let be an eigenvalue of with corresponding eigenvector , then     If we left-multiply ( ) by ,     and left-multiply ( ) by to get:     and since is symmetric, and then solving for      and since ( ) is the same as ( ), then so the eigenvalue is real.  Since the eigenvalue of a symmetric matrix is real and the matrix is real, then the eigenvectors are also real.   The fact that symmetric matrices have real eigenvalues with be used later in this section.     Orthogonal Matrices  An orthogonal matrix , is a square matrix that satisfies .  The properties include:     The columns of are orthogonal unit vectors.    The rows of are orthogonal unit vectors.    The inverse of is its transpose or .    The determinant of is or . This can be found by     So the determinant is or .       The following are examples of 2 by 2 orthogonal matrices:     And the following are 3 by 3 orthogonal matrices:     The matrix on the right is an example of a permutation matrix. Every permutation matrix is an orthogonal matrix.      Upper- and Lower-Triangular Matrices   An upper triangle matrix is a matrix (not-necessarily square) such that all elements below the diagonal are 0. A lower triangular matrix is a matrix such that all elements above the diagonal are 0. More precisely,    A upper-triangular matrix is an by matrix , such that if . A lower triangular matrix is an by matrix such that if .      The matrix below is a lower triangular matrix and is an upper triangular matrix:       Hopefully that it's clear that a matrix in echelon form defined in Definition is also upper triangular.    Back Substitution  An advantage to having an upper- or lower-triangular matrix is that solving the matrix is quite straightforward. In the case of a upper-triangular matrix, the steps that solve is called back substitution . We will show the steps in an example.    If     solve .    To illustrate back substitution, we write out the matrix equation as the corresponding equations:     and solving the 3rd equation above, . This is then substituted into the 2nd equation to get:     and solving leads to . And then lastly, and are substituted into the first equation to get:     and solving this leads to . Thus the solution to is       In general, back substitution works the same way.   To solve the matrix equation , where is an by , non-singular, upper-triangular matrix, first     and assume that are known. Then,     and it is important that the steps are performed in reverse order. This technique is called back substitution .     Forward Substitution  Similar to back substitution, if a matrix is in lower-diagonal form, then the matrix equation can be solved in a straightforward manner. We first look at an example:    Solve if       We first write down the equations that correspond to these:     Solving the first equation is . Then substitute this into the second equation to get:     which has the solution . Lastly, we substitute these into the last equation to get:     which has the solution . Thus the solution to the matrix equation is       Notice in this example, we solved the unknown's in the vector in order. This is because of the structure of the lower-triangular matrix and hence why this technique is called forward substitution .   To solve the matrix equation , where is an by , nonsingular, lower-triangular matrix, first,     and then assume that are known. Then     and note that in this case, the steps are performed in order. This technique is called forward substitution .     "
},
{
  "id": "sect-matrix-transpose-5",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#sect-matrix-transpose-5",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  If     then      "
},
{
  "id": "thm-matrix-transpose",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#thm-matrix-transpose",
  "type": "Theorem",
  "number": "5.1.2",
  "title": "Properties of the matrix transpose.",
  "body": " Properties of the matrix transpose   The following are properties of the transpose. Let be an by matrix (unless more restricted as noted).      . That is, the transpose of the transpose is the original matrix back.     . This is one of the properties of linearity.     .     . And this is the other linearly property.     If, in addition, the matrix is square, then      .    The eigenvalues of are the same as the eigenvalues of . Also, the characteristic polynomial of and are the same.      "
},
{
  "id": "set-sym-matrices-2-2",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#set-sym-matrices-2-2",
  "type": "Definition",
  "number": "5.1.3",
  "title": "",
  "body": "  A matrix is symmetric if it is square and if .   "
},
{
  "id": "set-sym-matrices-2-3",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#set-sym-matrices-2-3",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  The following matrix is symmetric,     and the following is not     since it is not square.   "
},
{
  "id": "set-sym-matrices-3-7",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#set-sym-matrices-3-7",
  "type": "Lemma",
  "number": "5.1.5",
  "title": "",
  "body": "  Let be a real symmetric matrix. The eigenvalues and eigenvectors of are real.   "
},
{
  "id": "set-sym-matrices-3-8",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#set-sym-matrices-3-8",
  "type": "Proof",
  "number": "5.1.2.1.1",
  "title": "",
  "body": " Let be an eigenvalue of with corresponding eigenvector , then     If we left-multiply ( ) by ,     and left-multiply ( ) by to get:     and since is symmetric, and then solving for      and since ( ) is the same as ( ), then so the eigenvalue is real.  Since the eigenvalue of a symmetric matrix is real and the matrix is real, then the eigenvectors are also real.  "
},
{
  "id": "ch-matrix-factoring-3-5-2",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal matrix "
},
{
  "id": "ch-matrix-factoring-3-5-5",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-5-5",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  The following are examples of 2 by 2 orthogonal matrices:     And the following are 3 by 3 orthogonal matrices:     The matrix on the right is an example of a permutation matrix. Every permutation matrix is an orthogonal matrix.   "
},
{
  "id": "ch-matrix-factoring-3-6-2-1",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangle matrix lower triangular matrix "
},
{
  "id": "ch-matrix-factoring-3-6-2-2",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-2-2",
  "type": "Definition",
  "number": "5.1.7",
  "title": "",
  "body": "  A upper-triangular matrix is an by matrix , such that if . A lower triangular matrix is an by matrix such that if .   "
},
{
  "id": "ch-matrix-factoring-3-6-2-3",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-2-3",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": "  The matrix below is a lower triangular matrix and is an upper triangular matrix:      "
},
{
  "id": "ch-matrix-factoring-3-6-3-2",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "back substitution "
},
{
  "id": "ch-matrix-factoring-3-6-3-3",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-3-3",
  "type": "Example",
  "number": "5.1.9",
  "title": "",
  "body": "  If     solve .    To illustrate back substitution, we write out the matrix equation as the corresponding equations:     and solving the 3rd equation above, . This is then substituted into the 2nd equation to get:     and solving leads to . And then lastly, and are substituted into the first equation to get:     and solving this leads to . Thus the solution to is      "
},
{
  "id": "ch-matrix-factoring-3-6-3-5",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-3-5",
  "type": "Remark",
  "number": "5.1.10",
  "title": "",
  "body": " To solve the matrix equation , where is an by , non-singular, upper-triangular matrix, first     and assume that are known. Then,     and it is important that the steps are performed in reverse order. This technique is called back substitution .  "
},
{
  "id": "ch-matrix-factoring-3-6-4-3",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-4-3",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  Solve if       We first write down the equations that correspond to these:     Solving the first equation is . Then substitute this into the second equation to get:     which has the solution . Lastly, we substitute these into the last equation to get:     which has the solution . Thus the solution to the matrix equation is      "
},
{
  "id": "ch-matrix-factoring-3-6-4-4",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forward substitution "
},
{
  "id": "ch-matrix-factoring-3-6-4-5",
  "level": "2",
  "url": "ch-matrix-factoring-3.html#ch-matrix-factoring-3-6-4-5",
  "type": "Remark",
  "number": "5.1.12",
  "title": "",
  "body": " To solve the matrix equation , where is an by , nonsingular, lower-triangular matrix, first,     and then assume that are known. Then     and note that in this case, the steps are performed in order. This technique is called forward substitution .  "
},
{
  "id": "sect-lu-factorization",
  "level": "1",
  "url": "sect-lu-factorization.html",
  "type": "Section",
  "number": "5.2",
  "title": "LU Factorization",
  "body": " LU Factorization     Find the -factorization of a matrix  Determine when an -factorization does not exist.  Use a factorization to solve a linear system.  Use a factorization to find an inverse matrix.      Let be a square matrix. We seek to write , where is a lower triangular matrix and is an upper triangular matrix. The reason for doing such a factorization is often to solve for multiple right hand sides.  Recall that an upper triangle matrix is a matrix (not-necessarily square) such that all elements below the diagonal are 0. A lower triangular matrix is a matrix such that all elements above the diagonal are 0. More precisely,  The following example shows that there is a lower-triangular matrix and an upper triangular matrix whose product is the original matrix . Later we will show where this arises.    Let     Show that     Using standard matrix multiplication:       This is nice, but the goal of LU factorization is to take any matrix and find matrices and . We first, show how to do this for a 3 by 3 matrix and then extend it.    Do All Matrices have an -factorization?  We first ask the question whether or not all matrices have a factorization and we will see that not all do not. We can try to factor     by writing down two matrices as follows.     and then multiplying the two matrices on the right to get     Notice that the upper right and lower left corners are and . However, the upper left leads to , so either or , which results in a contradiction.    If a matrix can be row-reduced without any row swaps, then there exists matrices and such that .      LU fatorization and elementary matrices  We will see that knowing the elementary matrices related to reducing a matrix will lead naturally to its factorization. Consider the following example:     We will row-reduce using elementary row operations. Since the first step would be , then     Next, we elimnate the in the lower left corner with     And the next step is to perform , so     and since this is an upper triangular matrix, then note that we have the situation that and mutliplying through by would result in . Since is the product of lower triangular elementary matrices, then the inverse is the product of these matrices, itself a lower triangular matrix.  More specifically, since     then     where the property from is used. This results in     which is the matrix . Therefore, we can write      Finding the LU factorization  Consider a matrix which we desire to write as for lower triangular matrix and upper triangular matrix . If can be row reduced to an upper matrix , with the series of elementary matrices then      Also the example given above was a square matrix, this does not have to be the case. Consider the next example.    Find the -decomposition of       We will perform row operations on to get to row-reduced form     And this shows that the product of the elementary matrices would reduce the matrix to row-reduced form. Thus the lower triangular matrix is       Note that since elementary matrices are square, and is the product of the elementary matrices that is also square. For a general matrix, is a matrix and is a matrix.    Generalization of LU Decomposition  As we saw above in not all matrices have an LU decomposition. However, if we generalize this a bit, then we can.  Additionally, an square matrix can be written as , where is a lower-diagonal, is upper-diagonal and is a permutation matrix.    Find the factorization for       If we perform row operations on as follows     And since the first step was a permutation matrix, then     and then can be used to find as     The matrix is given above, then is the matrix in and is given in . The matrix factorization thus is         Solving linear systems using LU Decomposition  The main application of LU decomposition is that of solving linear systems. Consider the matrix equation and assume that (that is the needed permutation matrix is ).     Solve for .    Then solve for .     First, this works, because if , then       Solve the system using -decomposition for       Recall that in the -factorizations of the matrix was found and is     To use this to solve , first we solve via forward substitution.     So the solution to is . Next, we solve by back substitution,     So the solution is       You can see from the example above that once the matrix factored that it is relatively simple to find the solutions to and and there are relatively few computations to perform.  In fact, this is true in general. In that if one actually finds the factorization of and then solves this in the manner show that about 1\/2 of the operations are done then solving directly, say by reducing the matrix to reduced row echelon form.    Inverting a Matrix  The same idea can be use to find inverse of by repeated solving by repeating this for the columns of the identity matrix. The example below shows this without all of the details of finding the factorization:    Find the inverse of the matrix in ,     using the LU-decomposition.    Following the steps above, the LU decomposition is     and we will solve , where is the th column of the 3 by 3 identity matrix.  Solving by solving or     then solve for or     Repeating this for , first solving or     then solve for or     and lastly, solve or     and solving results in     The inverse matrix is then the matrix with as the columns or        "
},
{
  "id": "sect-lu-factorization-2",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-factorization-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "   Find the -factorization of a matrix  Determine when an -factorization does not exist.  Use a factorization to solve a linear system.  Use a factorization to find an inverse matrix.    "
},
{
  "id": "sect-lu-factorization-3-2",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-factorization-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangle matrix lower triangular matrix "
},
{
  "id": "sect-lu-factorization-3-4",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-factorization-3-4",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": "  Let     Show that     Using standard matrix multiplication:      "
},
{
  "id": "sect-not-lu-9",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-not-lu-9",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "  If a matrix can be row-reduced without any row swaps, then there exists matrices and such that .   "
},
{
  "id": "sect-lu-fact-example-19",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-fact-example-19",
  "type": "Remark",
  "number": "5.2.3",
  "title": "Finding the LU factorization.",
  "body": " Finding the LU factorization  Consider a matrix which we desire to write as for lower triangular matrix and upper triangular matrix . If can be row reduced to an upper matrix , with the series of elementary matrices then     "
},
{
  "id": "sect-lu-fact-example-21",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-fact-example-21",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": "  Find the -decomposition of       We will perform row operations on to get to row-reduced form     And this shows that the product of the elementary matrices would reduce the matrix to row-reduced form. Thus the lower triangular matrix is      "
},
{
  "id": "sect-lu-factorization-6-4",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-factorization-6-4",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  Find the factorization for       If we perform row operations on as follows     And since the first step was a permutation matrix, then     and then can be used to find as     The matrix is given above, then is the matrix in and is given in . The matrix factorization thus is      "
},
{
  "id": "sect-lu-factorization-7-6",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-factorization-7-6",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  Solve the system using -decomposition for       Recall that in the -factorizations of the matrix was found and is     To use this to solve , first we solve via forward substitution.     So the solution to is . Next, we solve by back substitution,     So the solution is      "
},
{
  "id": "sect-lu-factorization-8-3",
  "level": "2",
  "url": "sect-lu-factorization.html#sect-lu-factorization-8-3",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": "  Find the inverse of the matrix in ,     using the LU-decomposition.    Following the steps above, the LU decomposition is     and we will solve , where is the th column of the 3 by 3 identity matrix.  Solving by solving or     then solve for or     Repeating this for , first solving or     then solve for or     and lastly, solve or     and solving results in     The inverse matrix is then the matrix with as the columns or      "
},
{
  "id": "ch-matrix-factoring-5",
  "level": "1",
  "url": "ch-matrix-factoring-5.html",
  "type": "Section",
  "number": "5.3",
  "title": "Diagonalization of Matrices",
  "body": " Diagonalization of Matrices   Consider a matrix . There are many application where the power of the matrix, is helpful. One such cases is at the end of this this chapter. One way to approach this is that the th power is just the matrix product with itself times or     and this can be extended to any positive integer power. However, finding the 50th power may not be practical.  To make this an easier task, let's assume that we can write in the form:     where is a diagonal matrix and is invertible. If this is possible, then     and is easy to find because it is a diagonal matrix.  If it's possible to factor as in ( ), then we call a matrix diagonalizable. Here's a formal definition.    An by matrix is said to be diagonalizable if it can be written     where is a diagonal matrix and is invertible.    Before explaining how starting with a matrix , we can find matrices and , let's look at one that is factored in this way.    Let     Show that .    First, recall that     and     then     which shows in this particular example that .      An by matrix is diagonalizable if and only if it has linearly independent eigenvectors. The matrix is a matrix of the eigenvectors and the matrix is the diagonal matrix of eigenvalues.    Thus we want to show that     since is invertible. Let     where is the eigenvector associated with the eigenvalue .         Is the matrix     diagonalizable? If so, find and .    To check this, we need to find the eigenvalues and eigenvectors. First, find the eigenvalues by solving or or and The associated eigenvectors are     (The steps to find these aren't shown, but follow the steps in section ). Since there are 2 linearly independent eigenvectors, this vector is diagonalizable and         Is the matrix     diagonalizable? If so, find and .    From example , we found that has eigenvalues . It also has eigenvectors , and . Therefore the matrices:     satisfy       Powers of Diagonalizable Matrices  One main reason for writing a matrix in diagonalizable form is that powers of the matrix are easy to compute. Note that if , then     and by induction:     Note that raising the diagonal matrix to a power is a simple process .    Use the fact that is diagonalizable to find       From , can be written with     Then, can be written         Similar Matrices    Two by matrices and are said to be similar if there exists an invertible matrix such that         If and are similar by matrices, then the following are identical for the two matrices:     Rank    Determinant    Trace         If and are similar by matrices, then and have the same characteristic equation and therefore have the same eigenvalues.    Let satisfy the characteristic equation     Since and are similar, then ,     so the characteristic equation is identical, thus the eigenvalues are the same.    Note: The eigenvectors are in general not the same in and .    Show that     are similar matrices with       First, using the formula for the inverse of a matrix,     and         Similar and Diagonalizable Matrices  It appears that there is a connection to similar and diagonalizable matrices through at least their near identical formulas. Notice that and are similar if there exists an invertible matrix such that     and is diagonalizable if there exists a such that     for a diagonal matrix . Similarly is diagonalizable if there exists an invertible such that     for diagonal matrix . We know that the matrices and exist if there are linearly independent eigenvectors, but how do you find ? Solving for in and in ,     Also, since the eigenvalues of and are the same, we can rearrange the eigenvectors of and to the same order thus without loss of generality, and   thus let       Above we showed that the matrices     are similar. Use the above discussion to find such that .    Briefly, we need to diagonalize both and . In example , we found that the eigenvalues of are and with associated eigenvectors and . Using the techniques of section , the eigenvalues of are and with associated eigenvectors and . Letting and be the matrices associated with and and , those associated with , let     and     and using ,     And although this is not the same as , this matrix is the negative of the inverse of that matrix in .     "
},
{
  "id": "ch-matrix-factoring-5-2-10",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-2-10",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "  An by matrix is said to be diagonalizable if it can be written     where is a diagonal matrix and is invertible.   "
},
{
  "id": "ch-matrix-factoring-5-2-12",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-2-12",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Let     Show that .    First, recall that     and     then     which shows in this particular example that .   "
},
{
  "id": "ch-matrix-factoring-5-2-13",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-2-13",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "",
  "body": "  An by matrix is diagonalizable if and only if it has linearly independent eigenvectors. The matrix is a matrix of the eigenvectors and the matrix is the diagonal matrix of eigenvalues.    Thus we want to show that     since is invertible. Let     where is the eigenvector associated with the eigenvalue .      "
},
{
  "id": "ex-diag-2by2",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ex-diag-2by2",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  Is the matrix     diagonalizable? If so, find and .    To check this, we need to find the eigenvalues and eigenvectors. First, find the eigenvalues by solving or or and The associated eigenvectors are     (The steps to find these aren't shown, but follow the steps in section ). Since there are 2 linearly independent eigenvectors, this vector is diagonalizable and      "
},
{
  "id": "ch-matrix-factoring-5-2-15",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-2-15",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  Is the matrix     diagonalizable? If so, find and .    From example , we found that has eigenvalues . It also has eigenvectors , and . Therefore the matrices:     satisfy    "
},
{
  "id": "ch-matrix-factoring-5-3-7",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-3-7",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  Use the fact that is diagonalizable to find       From , can be written with     Then, can be written      "
},
{
  "id": "ch-matrix-factoring-5-4-2",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-4-2",
  "type": "Definition",
  "number": "5.3.7",
  "title": "",
  "body": "  Two by matrices and are said to be similar if there exists an invertible matrix such that      "
},
{
  "id": "ch-matrix-factoring-5-4-3",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-4-3",
  "type": "Theorem",
  "number": "5.3.8",
  "title": "",
  "body": "  If and are similar by matrices, then the following are identical for the two matrices:     Rank    Determinant    Trace      "
},
{
  "id": "ch-matrix-factoring-5-4-4",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-4-4",
  "type": "Theorem",
  "number": "5.3.9",
  "title": "",
  "body": "  If and are similar by matrices, then and have the same characteristic equation and therefore have the same eigenvalues.    Let satisfy the characteristic equation     Since and are similar, then ,     so the characteristic equation is identical, thus the eigenvalues are the same.   "
},
{
  "id": "ex-sim-matrices",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ex-sim-matrices",
  "type": "Example",
  "number": "5.3.10",
  "title": "",
  "body": "  Show that     are similar matrices with       First, using the formula for the inverse of a matrix,     and      "
},
{
  "id": "ch-matrix-factoring-5-5-13",
  "level": "2",
  "url": "ch-matrix-factoring-5.html#ch-matrix-factoring-5-5-13",
  "type": "Example",
  "number": "5.3.11",
  "title": "",
  "body": "  Above we showed that the matrices     are similar. Use the above discussion to find such that .    Briefly, we need to diagonalize both and . In example , we found that the eigenvalues of are and with associated eigenvectors and . Using the techniques of section , the eigenvalues of are and with associated eigenvectors and . Letting and be the matrices associated with and and , those associated with , let     and     and using ,     And although this is not the same as , this matrix is the negative of the inverse of that matrix in .   "
},
{
  "id": "ch-matrix-factoring-6",
  "level": "1",
  "url": "ch-matrix-factoring-6.html",
  "type": "Section",
  "number": "5.4",
  "title": "Singular Value Decomposition",
  "body": " Singular Value Decomposition   The singular value decomposition, also known as the SVD, is yet another way to factor a matrix. In short, a matrix can be written , where and are orthogonal matrices and is a diagonal matrix. These can be thought of as a rotation, followed by a scaling, followed by another rotation. It has numerous applications as we will see at the end of this section.  We will show that it is possible to factor any by matrix in this form and also determine how to find the matrices , and . Consider a real by matrix . We will consider , an by matrix, , an by matrix and a by matrix.   Singular Value Decomposition   Let be a general by matrix. The matrix can be written:     where and are square orthogonal matrices of size and respectively and is an by diagonal matrix. The columns of are the eigenvectors of and the columns of are the eigenvectors of .    The general proof is not presented here. Instead, assume that the matrix can be factored as in the Singular Value Decomposition, then     The astute reader will notice that shows that the matrices and are similar and thus have the same eigenvalues. Recall also that will be the eigenvectors of . These properties are used to actually find and . Also, if you can find either or , then finding the other is easier by solving ( ). If we know , then     and recall that since is an orthogonal matrix that . This is now left-multiplied by in case the original matrix is not square, then is not square and the inverse is not defined.     where the third property of was used. Similarly, if one solves for :     where is used on the 3rd step since is an orthogonal matrix.  Two examples of finding the SVD are presented below. The first is for a square matrix and the second is for a non-square matrix. We first start with the SVD of a 2 by 2 matrix with the following example.    Find and of the SVD for the matrix       As explained above, the columns of are the eigenvectors of and     The eigenvalues are found by     with solutions . If , then the solution to     is . And if , then the solution to     is . Thus the columns of are the two eigenvectors scaled to be unit vectors,     The singular values in the matrix are the square roots of the eigenvalues of and the matrix is     To find the matrix , we will use ( ). Since     and     then using ,     It can be checked that indeed .    The next example finds the SVD of a 2 by 3 matrix, showing how to handle a non-square matrix.    Find the SVD of the matrix       In this example, we will first find the columns of by the eigenvectors of . Generally, if the original matrix is not square, one should select the larger matrix between and .     and the eigenvalues of is found by     which has the solutions . Thus the singular values result in     and recall that this matrix is always the same size as the original matrix, . Also, you will get zero eigenvalues whenever the matrix is not square. The corresponding eigenvectors are     And the matrix with the columns above scaled to make them unit vectors is     To find , we will use ( ) and note that     and now using ( )     and it can be checked that .    It is noted that the above two examples result in fairly nice matrices and . This very rarely happens. In addition, as the size of the matrices grow, the eigenvalues generally cannot be found exactly. Therefore for matrices of sizes larger than 3 by 3, numerical techniques are used to find the factors.    The geometry of the SVD  This section will explain in geometric terms what the SVD generates for an example that can be plotted in 2D. First, let's consider 100 points that are scattered around the origin and perhaps they look like the following:   Some Random Points      the matrix is a 2 by 100 matrix with each column the and value of each point, we can perform an SVD of this. The results for and the 2 diagonal elements of (denoted and ) are     where these have been done using software (not by hand). If we plot the two vectors in the columns of with relative sizes of those found in , you see in the plot above that the larger vector points in the direction of stretch of the points and the second vector is orthogonal. The relative lengths are the relative stretches of the points. The geometry of the columns in the matrix is more difficult to understand in this situation because each of the vectors are length 100. If the original matrix had 3 rows, then each column is a point in 3 dimensions. The 3 columns in would again show the stretching of the points in 3 orthogonal directions with the stretching factor in the matrix.    Finding a best-fit line and plane using SVD  You might notice from above that perhaps we can use the SVD to find a line to a set of points and this is true. We will use a simpler example to show how this work and how it is similar to other fitting techniques. We can also use a similar technique to find the best-fit plane through points in 3 dimensions. We first start with a simple example of points in the plan. Consider the points (1,2), (2,2), (3,5), (6,7). We wish to fit a line that best fits the points.   Best fit points      First, we will find the center of these points by just finding the average of the and values.     We now generate a new data set where each and value is adjusted by the means above. The new data set is . We then use these values to find     As above, the singular values in and the matrix will be most important. As above, the matrix have the eigenvectors of with the eigenvalues as the diagonal elements of .     Again, using software, the diagonal elements of , labelled and and the matrix is     The prominent eigenvector is the one corresponding to the larger singular value (the first one), so the eigenvalue to use is the first column of . The slope of the line will be the -component over the -component (rise over run) or     Lastly, to find the line, we will use the point-slope form with the average values (or center point) of :     and the following is a plot of the data and the line:   Best fit line using SVD      And as a comparison, if we use least-squares to find the line, the result is     The reason for the difference is because each method minimizes something different. The least-squares line is the one that minimizes the vertical distance between the data and the line. The SVD best-fit line produces a line that minimizes the square of the orthogonal distance to all the points.   "
},
{
  "id": "thm-svd",
  "level": "2",
  "url": "ch-matrix-factoring-6.html#thm-svd",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "Singular Value Decomposition.",
  "body": " Singular Value Decomposition   Let be a general by matrix. The matrix can be written:     where and are square orthogonal matrices of size and respectively and is an by diagonal matrix. The columns of are the eigenvectors of and the columns of are the eigenvectors of .   "
},
{
  "id": "ex-svd-2by2",
  "level": "2",
  "url": "ch-matrix-factoring-6.html#ex-svd-2by2",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Find and of the SVD for the matrix       As explained above, the columns of are the eigenvectors of and     The eigenvalues are found by     with solutions . If , then the solution to     is . And if , then the solution to     is . Thus the columns of are the two eigenvectors scaled to be unit vectors,     The singular values in the matrix are the square roots of the eigenvalues of and the matrix is     To find the matrix , we will use ( ). Since     and     then using ,     It can be checked that indeed .   "
},
{
  "id": "ch-matrix-factoring-6-2-16",
  "level": "2",
  "url": "ch-matrix-factoring-6.html#ch-matrix-factoring-6-2-16",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Find the SVD of the matrix       In this example, we will first find the columns of by the eigenvectors of . Generally, if the original matrix is not square, one should select the larger matrix between and .     and the eigenvalues of is found by     which has the solutions . Thus the singular values result in     and recall that this matrix is always the same size as the original matrix, . Also, you will get zero eigenvalues whenever the matrix is not square. The corresponding eigenvectors are     And the matrix with the columns above scaled to make them unit vectors is     To find , we will use ( ) and note that     and now using ( )     and it can be checked that .   "
},
{
  "id": "fig-random-points",
  "level": "2",
  "url": "ch-matrix-factoring-6.html#fig-random-points",
  "type": "Figure",
  "number": "5.4.4",
  "title": "",
  "body": " Some Random Points     "
},
{
  "id": "fig-best-fit-points-svd",
  "level": "2",
  "url": "ch-matrix-factoring-6.html#fig-best-fit-points-svd",
  "type": "Figure",
  "number": "5.4.5",
  "title": "",
  "body": " Best fit points     "
},
{
  "id": "fig-points-and-line",
  "level": "2",
  "url": "ch-matrix-factoring-6.html#fig-points-and-line",
  "type": "Figure",
  "number": "5.4.6",
  "title": "",
  "body": " Best fit line using SVD     "
},
{
  "id": "sect-funct-props",
  "level": "1",
  "url": "sect-funct-props.html",
  "type": "Section",
  "number": "6.1",
  "title": "Properties of Functions",
  "body": " Properties of Functions     The definition of a periodic function.    Defintions of one-sided limits and deriviatives as well as piecewise continuous functions.    Definition of even and odd functions and properties of even and odd functions.    The technique of tabular integration.    The defintiion of inner products of functions.      In , we reviewed inner product spaces and saw orthonormal sets of vectors (both in as well as polynomials). In this section, we will examine another set of functions, sines and cosines that are orthogonal. First, let's see a short review of periodic functions.    Periodic Functions    A function is periodic with period if     for all . The smallest value of for which this true is called the period of the function.      Show that is periodic with period .       where the sum of angles sine formula is used.      What is the period of the function ?    We know that the period of is also the same as or . If we let , then has period since it is the smallest value of such that for all . The function would then had period , since .    The periodic functions that we will mostly be using in this text are the sine and cosine function. We review here a few convenient identities with these functions and the complex exponential. From Euler's formula,     we can then write sine and cosine in terms of      Euler's formula also leads to the following:   The Most Interesting Equation in Mathematics      and this is often called the most interesting equation in mathematics because it arguably contains the 5 most important mathematical constants: 0, 1, , , .    If , and then       If , then the integral is of the constant function 1 over a interval of length , so the lemma holds. If ,     because from , but this is raised to an even power so       One-Side Limits and Derivatives; Piecewise Continuous Functions  As we will see, the notion of a piecewise continuous function is a function that is continuous on subintervals. However, there are some technical details that we need before a formal definition.    A function has a left-hand limit at if     exists. In addition, a function has a right-hand limit at if     exists.    If one is talking about either a left- or right-handed limit, these are typically called one-sided limits. Also, an example of these will be shown below.    A function has a left-hand derivative at if     exists. Similarly, a function has a right-hand derivative at if     exists.    If one is talking about either a left- or right-handed derivative, these are typically called one-sided derivatives. An example of these will be shown below.    A function is piecewise continuous on an interval if is continuous on all except for a finite number of points . In addition for all , and exist.      The following function is piecewise continuous on      Also, the graph of piecewise functions are helpful. These are found by finding the graphs of on each given interval. The graph of is shown below.   Graph of a piecewise continuous function.      In addition, we need to show that all of the one-sided limits exist. For each of the functions above, we differentiate to get     And since the function is continuous at all points except at 0 and 1\/2, but the one-sided limits are finite here, then the function is piecewise continuous.      Find both the left- and right-handed derivatives of the function defined in at and .    First, consider the derivative of the function     where the equality parts of the derivative have been removed (and explained later).  Since     then the left-handed derivative at 0 is 0, the right-handed derivative of at 1, the left-handed derivative at 1\/2 is 1 and the right-handed derivative of at 1\/2 is       Show that is not a piecewise continuous function on .    The function on is not continuous at . Also     and since the one-sided limits are not finite, then is not piecewise continuous on .      Odd and Even Functions    A function is an odd function if for all in its domain.    Note: recall that an odd function is symmetric about the origin, meaning that if the graph of is rotated a half circle about the origin, that one gets the graph back.    A function is an even function if for all in its domain.    Recall that an even function is symmetric about the -axis. This means that if the graph is reflected over the -axis that one gets the same graph upon the reflection.    Here's a list of a few functions that are odd or even (without showing details):     The following functions are odd:     The following functions are even: .       The following theorem is helpful for finding whether or not products of functions are odd or even.      The product of two odd functions is even.    The product of two even functions is even.    The product of an even and an odd function is odd.        The derivative of an even function is odd. The derivative of an odd function is even.    Let be an even function, then for all .     by the chain rule. And the proof that the derivative of an odd function is similar.    And as a corollary, antiderivatives work in the same way.       Let be an odd function. Any antiderivative of is even.    Let be an even function and be its antiderivative. The antiderivative such that is odd.         Let be a piecewise continuous function on the interval for .     If is an odd function then       If is an even function then          First, examine the first statement. Let be an antiderivative of , an odd function. The function can be written as where is an even function.     since is even. The proof of the second statement is similar.      Tabular Integration  A very handy formula for many integrations in this section is called tabular integration , which is just a recursive version of integration by parts that works well for integrals of a certain type. Before we show this, recall that the integration by parts formula is     and integration by parts is helpful for rewriting one integral (on the left) in terms of a second integral (on the right) and generally it is used to create a simpler integral. The next example shows a standard integration done with integration by parts.    Find       In this case, we'll let and , finding the differential results in and finding an antiderivative of results in , so using integration by parts to get       This example shows that in order to integrate with the by parts formula, one must replace one integral with another. In more difficult examples, this may need to be done multiple times until the resulting integral is able to be done without by parts. This is the case when tabular integration is useful.   The technique of tabular integration applied to     where there exists an such that , that is eventually the derivative of is 0. Creates a table of three columns with     The function and its derivatives until you reach zero.    The signs and , starting with and alternating signs.    The function and its antiderivatives.     For columns 2 and 3, continue until you reach the same row as the 0 in the first column. To find the antiderivative, draw arrows from each function in the first column, to a function in the third column one row below. The result is the sum of the product of each pair of functions connected by the arrows with the sign of that above the given arrow.   This is best seen with a couple of examples.    Find     using tabular integration.    First, we will build the table:   Tabular integration of       Then read off the result which is the sum of the product of terms connected by the arrows with the sign above each arrow.     and don't forget the for an indefinite integral.    And the following is an example that is similar as we will see below:    Find     using tabular integration.    First, we will build the table:   Tabular integration of .      and then read off the result which is the product of terms connected by the arrows with the sign above each arrow.         Inner Products of Functions  As we saw in , the inner product of two functions can be defined using the integral. In this section, we consider functions that are piecewise continuous on and     In the standard way, the norm of is defined as       An infinite set of continuous function is said to be orthogonal on if for all , . If in addition, for all , the set is said to be orthonormal .    In the next couple of examples, we examine a couple of the most important orthogonal and orthonormal sets of functions.    Show that for form an orthogonal set on .    In this case, we will expand on and use the handy alternative definition of the sine function. Find the inner product if ,     where is used on the last step above.      Show that the set of functions     for an orthonormal set on .    We showed above that for all when . Therefore also equals 0 for . For simpler notation let   First, we will show that for all .     since each integral is zero from . Next, we will show that for all such that .     because again each integral is zero from Lemma . Also,     Lastly, we need to show that the norm of each of the functions is 1.     and the integrals of the first and third terms are zero from Lemma .     and the integrals of the first and third terms are zero from Lemma .     This shows that the set of functions given above is an orthonormal set of functions.     "
},
{
  "id": "sect-funct-props-2",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-2",
  "type": "Objectives",
  "number": "6.1",
  "title": "",
  "body": "   The definition of a periodic function.    Defintions of one-sided limits and deriviatives as well as piecewise continuous functions.    Definition of even and odd functions and properties of even and odd functions.    The technique of tabular integration.    The defintiion of inner products of functions.    "
},
{
  "id": "sect-funct-props-4-2",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-4-2",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A function is periodic with period if     for all . The smallest value of for which this true is called the period of the function.   "
},
{
  "id": "sect-funct-props-4-3",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-4-3",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  Show that is periodic with period .       where the sum of angles sine formula is used.   "
},
{
  "id": "sect-funct-props-4-4",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-4-4",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  What is the period of the function ?    We know that the period of is also the same as or . If we let , then has period since it is the smallest value of such that for all . The function would then had period , since .   "
},
{
  "id": "sect-funct-props-4-10",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-4-10",
  "type": "Remark",
  "number": "6.1.4",
  "title": "The Most Interesting Equation in Mathematics.",
  "body": " The Most Interesting Equation in Mathematics     "
},
{
  "id": "lem-int-complex-exp",
  "level": "2",
  "url": "sect-funct-props.html#lem-int-complex-exp",
  "type": "Lemma",
  "number": "6.1.5",
  "title": "",
  "body": "  If , and then       If , then the integral is of the constant function 1 over a interval of length , so the lemma holds. If ,     because from , but this is raised to an even power so    "
},
{
  "id": "sect-funct-props-5-3",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-5-3",
  "type": "Definition",
  "number": "6.1.6",
  "title": "",
  "body": "  A function has a left-hand limit at if     exists. In addition, a function has a right-hand limit at if     exists.   "
},
{
  "id": "sect-funct-props-5-5",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-5-5",
  "type": "Definition",
  "number": "6.1.7",
  "title": "",
  "body": "  A function has a left-hand derivative at if     exists. Similarly, a function has a right-hand derivative at if     exists.   "
},
{
  "id": "sect-funct-props-5-7",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-5-7",
  "type": "Definition",
  "number": "6.1.8",
  "title": "",
  "body": "  A function is piecewise continuous on an interval if is continuous on all except for a finite number of points . In addition for all , and exist.   "
},
{
  "id": "ex-piecewise-cont-function",
  "level": "2",
  "url": "sect-funct-props.html#ex-piecewise-cont-function",
  "type": "Example",
  "number": "6.1.9",
  "title": "",
  "body": "  The following function is piecewise continuous on      Also, the graph of piecewise functions are helpful. These are found by finding the graphs of on each given interval. The graph of is shown below.   Graph of a piecewise continuous function.      In addition, we need to show that all of the one-sided limits exist. For each of the functions above, we differentiate to get     And since the function is continuous at all points except at 0 and 1\/2, but the one-sided limits are finite here, then the function is piecewise continuous.   "
},
{
  "id": "sect-funct-props-5-9",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-5-9",
  "type": "Example",
  "number": "6.1.11",
  "title": "",
  "body": "  Find both the left- and right-handed derivatives of the function defined in at and .    First, consider the derivative of the function     where the equality parts of the derivative have been removed (and explained later).  Since     then the left-handed derivative at 0 is 0, the right-handed derivative of at 1, the left-handed derivative at 1\/2 is 1 and the right-handed derivative of at 1\/2 is    "
},
{
  "id": "sect-funct-props-5-10",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-5-10",
  "type": "Example",
  "number": "6.1.12",
  "title": "",
  "body": "  Show that is not a piecewise continuous function on .    The function on is not continuous at . Also     and since the one-sided limits are not finite, then is not piecewise continuous on .   "
},
{
  "id": "sect-even-odd-functions-2",
  "level": "2",
  "url": "sect-funct-props.html#sect-even-odd-functions-2",
  "type": "Definition",
  "number": "6.1.13",
  "title": "",
  "body": "  A function is an odd function if for all in its domain.   "
},
{
  "id": "sect-even-odd-functions-4",
  "level": "2",
  "url": "sect-funct-props.html#sect-even-odd-functions-4",
  "type": "Definition",
  "number": "6.1.14",
  "title": "",
  "body": "  A function is an even function if for all in its domain.   "
},
{
  "id": "sect-even-odd-functions-6",
  "level": "2",
  "url": "sect-funct-props.html#sect-even-odd-functions-6",
  "type": "Example",
  "number": "6.1.15",
  "title": "",
  "body": "  Here's a list of a few functions that are odd or even (without showing details):     The following functions are odd:     The following functions are even: .      "
},
{
  "id": "sect-even-odd-functions-8",
  "level": "2",
  "url": "sect-funct-props.html#sect-even-odd-functions-8",
  "type": "Theorem",
  "number": "6.1.16",
  "title": "",
  "body": "    The product of two odd functions is even.    The product of two even functions is even.    The product of an even and an odd function is odd.     "
},
{
  "id": "sect-even-odd-functions-9",
  "level": "2",
  "url": "sect-funct-props.html#sect-even-odd-functions-9",
  "type": "Lemma",
  "number": "6.1.17",
  "title": "",
  "body": "  The derivative of an even function is odd. The derivative of an odd function is even.    Let be an even function, then for all .     by the chain rule. And the proof that the derivative of an odd function is similar.   "
},
{
  "id": "sect-even-odd-functions-11",
  "level": "2",
  "url": "sect-funct-props.html#sect-even-odd-functions-11",
  "type": "Corollary",
  "number": "6.1.18",
  "title": "",
  "body": "     Let be an odd function. Any antiderivative of is even.    Let be an even function and be its antiderivative. The antiderivative such that is odd.      "
},
{
  "id": "thm-even-odd-integrals",
  "level": "2",
  "url": "sect-funct-props.html#thm-even-odd-integrals",
  "type": "Theorem",
  "number": "6.1.19",
  "title": "",
  "body": "  Let be a piecewise continuous function on the interval for .     If is an odd function then       If is an even function then          First, examine the first statement. Let be an antiderivative of , an odd function. The function can be written as where is an even function.     since is even. The proof of the second statement is similar.   "
},
{
  "id": "sect-funct-props-7-2",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tabular integration "
},
{
  "id": "sect-funct-props-7-5",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-7-5",
  "type": "Example",
  "number": "6.1.20",
  "title": "",
  "body": "  Find       In this case, we'll let and , finding the differential results in and finding an antiderivative of results in , so using integration by parts to get      "
},
{
  "id": "sect-funct-props-7-7",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-7-7",
  "type": "Remark",
  "number": "6.1.21",
  "title": "",
  "body": " The technique of tabular integration applied to     where there exists an such that , that is eventually the derivative of is 0. Creates a table of three columns with     The function and its derivatives until you reach zero.    The signs and , starting with and alternating signs.    The function and its antiderivatives.     For columns 2 and 3, continue until you reach the same row as the 0 in the first column. To find the antiderivative, draw arrows from each function in the first column, to a function in the third column one row below. The result is the sum of the product of each pair of functions connected by the arrows with the sign of that above the given arrow.  "
},
{
  "id": "sect-funct-props-7-9",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-7-9",
  "type": "Example",
  "number": "6.1.22",
  "title": "",
  "body": "  Find     using tabular integration.    First, we will build the table:   Tabular integration of       Then read off the result which is the sum of the product of terms connected by the arrows with the sign above each arrow.     and don't forget the for an indefinite integral.   "
},
{
  "id": "sect-funct-props-7-11",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-7-11",
  "type": "Example",
  "number": "6.1.24",
  "title": "",
  "body": "  Find     using tabular integration.    First, we will build the table:   Tabular integration of .      and then read off the result which is the product of terms connected by the arrows with the sign above each arrow.      "
},
{
  "id": "sect-funct-props-8-6",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-8-6",
  "type": "Definition",
  "number": "6.1.26",
  "title": "",
  "body": "  An infinite set of continuous function is said to be orthogonal on if for all , . If in addition, for all , the set is said to be orthonormal .   "
},
{
  "id": "sect-funct-props-8-8",
  "level": "2",
  "url": "sect-funct-props.html#sect-funct-props-8-8",
  "type": "Example",
  "number": "6.1.27",
  "title": "",
  "body": "  Show that for form an orthogonal set on .    In this case, we will expand on and use the handy alternative definition of the sine function. Find the inner product if ,     where is used on the last step above.   "
},
{
  "id": "ex-trig-ortho-set",
  "level": "2",
  "url": "sect-funct-props.html#ex-trig-ortho-set",
  "type": "Example",
  "number": "6.1.28",
  "title": "",
  "body": "  Show that the set of functions     for an orthonormal set on .    We showed above that for all when . Therefore also equals 0 for . For simpler notation let   First, we will show that for all .     since each integral is zero from . Next, we will show that for all such that .     because again each integral is zero from Lemma . Also,     Lastly, we need to show that the norm of each of the functions is 1.     and the integrals of the first and third terms are zero from Lemma .     and the integrals of the first and third terms are zero from Lemma .     This shows that the set of functions given above is an orthonormal set of functions.   "
},
{
  "id": "sect-fourier-series",
  "level": "1",
  "url": "sect-fourier-series.html",
  "type": "Section",
  "number": "6.2",
  "title": "Fourier Series",
  "body": " Fourier Series     A Fourier Series is a infinite series of sines and cosines.    A periodic function of period can be written as a Fourier Series.    A Fourier Series converges everywhere to either the function or the midpoint of the left and right hand limits.    There is a form of the Fourier Series which is periodic of period for any positive value and any periodic function can be written in this form of the Fourier Series.      An infinite series of the form:     is called the trigonometric series .  The trigonometric series is periodic with period at most . Consider the terms and , which each have period . All other functions have period , which are also periodic with period , but their fundamental period is .    Let be periodic of period and be piecewise continuous in . Suppose can be written as a trigonometric series. Then it is called a Fourier Series for . The constants and are called the Fourier Coefficients of and are given by the Euler formulas:       In this section, we're going to write periodic functions as Fourier Series. This is possible due to the following theorem.    Let be a continuous function that is periodic with period . Then can be written as a trigonometric series or       Take the inner product of with each element in the set from . We will start with the constant function and use .     and solving for ,     Next, take the inner product of ( ) with .     All of the inner products on the right side are zero except when . Canceling a , the result is     or solving for ,     Lastly, take the inner product of with .     All of the inner products on the right side are zero except when . Canceling a , the result is     and solving for ,       Notice again that the statement in requires to be periodic with period . This is a fairly strict requirement that we will relax over the rest of this section, however, one way to get a periodic function is to start with a function that is defined on and extend it periodically such that . We do this in the following example.    Find the Fourier coefficients and the Fourier series for the periodic extension square wave:     and define to be its periodic extension of period . That is if is outside of , then apply or until . This function looks like:   Graph of the periodic square wave.        To begin with, we find all of the coefficients:           So the Fourier Series can be written:       The above series also shows an interesting result that you should have seen in the series chapter of Calculus. If we let , then and from the definition of the square wave and substituting this into the Fourier series, we get:     or multiplying both sides by      which shows that some infinite sums have closed form values. This particular series is usually found using the Taylor Series of and evaluating it a 1.    Find the Fourier series of the period sawtooth wave:   Plot of the sawtooth wave        Let be the sawtooth wave defined in the picture above. We can write it as a piecewise function as     and extending it periodically.  Then using the formulas in -- and we will take advantage of the fact that is an even function.        where is used and since is even and the product of even functions is even. Also this is a good example to use tabular integration.   tabular integration of .      and then using the table to find     Lastly,     but this is a product of a even and an odd function, which is odd and integrating an odd function over a symmetric interval is 0. Therefore the Fourier series is         Convergence of a Sum of a Fourier Series  Since Fourier series are infinite series, it is important to consider if it converges. As we will see, Fourier series will generally converge, to what value will depend on . Consider the Fourier series in . If we let     we would need to test the convergence of every value of . In this case, this can be done by using the direct comparison test to the series to which converges, so the series converges for all .  This doesn't work for all series and the other difficulty is that we don't know what it converges to. Fortunately, the following theorem gives a very nice result.    Let be periodic with period and piecewise continuous in the interval . Let be the Fourier series of and     In other words, the Fourier series converges to the average of the left- and right-hand limits of .      Show that the Fourier series of the square wave function above converges to 0 when .    Note that average of the left- and right-handed limits of the square wave function at is , so using the theorem above, the function converges to 0 when .  Alternatively, we can evaluate the Fourier series of the square wave function directly. Evaluating the Fourier series at is     which is consistent with that above.      Fourier Series of Functions of Period  We saw that the Fourier series above applied only to functions that were periodic with period . This section covers functions with arbitrary periodicity, which we will call period . If we let , and substitute this into , then     and then it can be shown in a similar manner to that above that -- can be written as     The series is called the Fourier series of period with the corresponding Fourier coefficients.    Find the Fourier Series of the periodic extension (of period 2) of for as shown in the graph below:   A plot of a periodic sawtooth wave on .        To find the Fourier series, we first need to find the Fourier coefficients, by evaluating the integrals in ( )--( ),     The Fourier Series of the function is        "
},
{
  "id": "sect-fourier-series-2",
  "level": "2",
  "url": "sect-fourier-series.html#sect-fourier-series-2",
  "type": "Objectives",
  "number": "6.2",
  "title": "",
  "body": "   A Fourier Series is a infinite series of sines and cosines.    A periodic function of period can be written as a Fourier Series.    A Fourier Series converges everywhere to either the function or the midpoint of the left and right hand limits.    There is a form of the Fourier Series which is periodic of period for any positive value and any periodic function can be written in this form of the Fourier Series.    "
},
{
  "id": "sect-fourier-series-3-3",
  "level": "2",
  "url": "sect-fourier-series.html#sect-fourier-series-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric series "
},
{
  "id": "sect-fourier-series-3-5",
  "level": "2",
  "url": "sect-fourier-series.html#sect-fourier-series-3-5",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  Let be periodic of period and be piecewise continuous in . Suppose can be written as a trigonometric series. Then it is called a Fourier Series for . The constants and are called the Fourier Coefficients of and are given by the Euler formulas:      "
},
{
  "id": "thm-fourier-series",
  "level": "2",
  "url": "sect-fourier-series.html#thm-fourier-series",
  "type": "Theorem",
  "number": "6.2.2",
  "title": "",
  "body": "  Let be a continuous function that is periodic with period . Then can be written as a trigonometric series or       Take the inner product of with each element in the set from . We will start with the constant function and use .     and solving for ,     Next, take the inner product of ( ) with .     All of the inner products on the right side are zero except when . Canceling a , the result is     or solving for ,     Lastly, take the inner product of with .     All of the inner products on the right side are zero except when . Canceling a , the result is     and solving for ,      "
},
{
  "id": "ex-FS-square-wave",
  "level": "2",
  "url": "sect-fourier-series.html#ex-FS-square-wave",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Find the Fourier coefficients and the Fourier series for the periodic extension square wave:     and define to be its periodic extension of period . That is if is outside of , then apply or until . This function looks like:   Graph of the periodic square wave.        To begin with, we find all of the coefficients:           So the Fourier Series can be written:      "
},
{
  "id": "ex-FS-sawtooth",
  "level": "2",
  "url": "sect-fourier-series.html#ex-FS-sawtooth",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Find the Fourier series of the period sawtooth wave:   Plot of the sawtooth wave        Let be the sawtooth wave defined in the picture above. We can write it as a piecewise function as     and extending it periodically.  Then using the formulas in -- and we will take advantage of the fact that is an even function.        where is used and since is even and the product of even functions is even. Also this is a good example to use tabular integration.   tabular integration of .      and then using the table to find     Lastly,     but this is a product of a even and an odd function, which is odd and integrating an odd function over a symmetric interval is 0. Therefore the Fourier series is      "
},
{
  "id": "sect-fourier-series-4-6",
  "level": "2",
  "url": "sect-fourier-series.html#sect-fourier-series-4-6",
  "type": "Theorem",
  "number": "6.2.8",
  "title": "",
  "body": "  Let be periodic with period and piecewise continuous in the interval . Let be the Fourier series of and     In other words, the Fourier series converges to the average of the left- and right-hand limits of .   "
},
{
  "id": "sect-fourier-series-4-7",
  "level": "2",
  "url": "sect-fourier-series.html#sect-fourier-series-4-7",
  "type": "Example",
  "number": "6.2.9",
  "title": "",
  "body": "  Show that the Fourier series of the square wave function above converges to 0 when .    Note that average of the left- and right-handed limits of the square wave function at is , so using the theorem above, the function converges to 0 when .  Alternatively, we can evaluate the Fourier series of the square wave function directly. Evaluating the Fourier series at is     which is consistent with that above.   "
},
{
  "id": "ex-FS-x",
  "level": "2",
  "url": "sect-fourier-series.html#ex-FS-x",
  "type": "Example",
  "number": "6.2.10",
  "title": "",
  "body": "  Find the Fourier Series of the periodic extension (of period 2) of for as shown in the graph below:   A plot of a periodic sawtooth wave on .        To find the Fourier series, we first need to find the Fourier coefficients, by evaluating the integrals in ( )--( ),     The Fourier Series of the function is      "
},
{
  "id": "sect-even-odd",
  "level": "1",
  "url": "sect-even-odd.html",
  "type": "Section",
  "number": "6.3",
  "title": "Even and Odd Functions; Half-Range Expansions",
  "body": " Even and Odd Functions; Half-Range Expansions     Any function on a interval can be extended as either an odd or even periodic function of period .    The Fourier Series of an odd periodic extension (or any odd function) can be written as a Fourier Sine Series, consisting of only sine terms.    The Fourier Series of an even periodic extension (or any even function) can be written as a Fourier Cosine Series, consisting of only cosine terms.      We saw above that the periodic extension of on in resulted in a odd function and that only the sine terms of the Fourier Series was left. That is, all of the Fourier coefficients for the cosine terms were 0. In this section, we use this idea to produce only even and odd extensions which results in only sine expansions or cosine expansions.  To begin, let's clearly define an even- and odd-periodic extension.    Let be defined on for some .     The even periodic extension of is defined as       The odd periodic extension of is defined as            Graph the even- and odd-periodic extension of     defined on .    For the even extension, we first graph the function on , then make the even extension of it on . The original function is shown below as a solid line and the even extension is dashed.   The even extension of       and then we produce the period extension of period 2.   The even extension of       To find the odd extension, flip the original function on around the origin to get:   Odd extension of       Then extend the function on in a periodic way.   Periodic version of the odd extension of .          The Fourier Sine and Cosine Series  We now address the Fourier series of the even- and odd-periodic extensions of on . As in , there are no cosine terms and the Fourier series of the odd periodic extension of can be written     and this is often called the Fourier sine series .  Similarly, the Fourier series of the even periodic extension of is     and is called the Fourier cosine series .    Find the Fourier Cosine Series of for .    For this, we need to find the coefficients in ( ) and ( ),     and use ( ) to find         Find the odd periodic extension of on . A graph of this is:   Graph of odd extension of on         For this, we need to find from ( ),     and then use this in ( )        "
},
{
  "id": "sect-even-odd-2",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-2",
  "type": "Objectives",
  "number": "6.3",
  "title": "",
  "body": "   Any function on a interval can be extended as either an odd or even periodic function of period .    The Fourier Series of an odd periodic extension (or any odd function) can be written as a Fourier Sine Series, consisting of only sine terms.    The Fourier Series of an even periodic extension (or any even function) can be written as a Fourier Cosine Series, consisting of only cosine terms.    "
},
{
  "id": "sect-even-odd-3-3",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-3-3",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  Let be defined on for some .     The even periodic extension of is defined as       The odd periodic extension of is defined as         "
},
{
  "id": "sect-even-odd-3-4",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-3-4",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "  Graph the even- and odd-periodic extension of     defined on .    For the even extension, we first graph the function on , then make the even extension of it on . The original function is shown below as a solid line and the even extension is dashed.   The even extension of       and then we produce the period extension of period 2.   The even extension of       To find the odd extension, flip the original function on around the origin to get:   Odd extension of       Then extend the function on in a periodic way.   Periodic version of the odd extension of .       "
},
{
  "id": "sect-even-odd-4-4",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier sine series "
},
{
  "id": "sect-even-odd-4-7",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier cosine series "
},
{
  "id": "sect-even-odd-4-8",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-4-8",
  "type": "Example",
  "number": "6.3.7",
  "title": "",
  "body": "  Find the Fourier Cosine Series of for .    For this, we need to find the coefficients in ( ) and ( ),     and use ( ) to find      "
},
{
  "id": "sect-even-odd-4-9",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-4-9",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": "  Find the odd periodic extension of on . A graph of this is:   Graph of odd extension of on         For this, we need to find from ( ),     and then use this in ( )      "
},
{
  "id": "sec-trig-poly",
  "level": "1",
  "url": "sec-trig-poly.html",
  "type": "Section",
  "number": "6.4",
  "title": "Approximation by Trigonometric Polynomials",
  "body": " Approximation by Trigonometric Polynomials     A Fourier series with only finite nubmer of terms is called a Trigonometric Polynomial.     The Trigonometric polynomial for a given is the best approximation to a periodic function in the sum of squares error sense. The Fourier Coefficients seen previous result in this trigonometric polynomila.    Bessel's Inequality give a bound on the sum of squares of the Fourier Coefficients.    Parseval's Theorem shows that the sum of squares of coefficients is proportional to the definite integral of the square of the function.      Consider a periodic function of period on the interval . The th partial sum of the Fourier Series of is denoted ,     where and are the Fourier Coefficients as before. The function is also called the Trigonometric Polynomial of degree .  Let's ask a question about approximation. Consider a function of the form:     What is the best approximate for a trigonometric polynomial to another function . That is, what coefficients can be chosen ?  To answer this question, we will need to know what error we are taking about. Typically the error will be some function of the two functions, called that outputs a number. We would like the error to have the following properties:   one such function that we know is the function norm or square of it:     To find the minimum of this, we will take the derivatives of with respect to and and solve for where the derivative is 0.     or     Similarly take the derivative with respect to :     Note that unless and      And similarly it can be shown that     Note that the coefficients and in , and are the Fourier Coefficients, seen in    Let be a piecewise continuous function on , and     The values of and that minimize (or ) is     that is they are the Fourier Coefficients.     In Example , the Fourier series of the sawtooth function was found the Fourier Coefficients are:     Graph the sawtooth function and , the 9th degree trigonometric polynomial.     Plot of the sawtooth wave and it's 9th degree trigonometric approximation.      and the two plots are indistinguishable on this scale.      In , the Fourier series of the square wave function was found and the Fourier Coefficients are:     Graph the square wave function and , the th degree trigonometric polynomial.     Graph of the square wave function and the th degree trigonometric polynomial.      And in contrast to the previous example, the trigonometric polynomial and the original function are quite different. This is mainly due to the discontinuities in the original function.    We will explore this example in a bit more detail after seeing some important theorems.    Theorems Related to Fourier Series    The quantity on the interval is the minimum if and only if the coefficients of in (2) ar the Fourier coefficients of . This minimum value is        Bessel's Inequality   Let and be the fourier coefficients related to the function on . Then        Parseval's Theorem   Let and be the fourier coefficients related to the function on . Then       There are two important consequences of this theorem:     If the integral on the right side is finite, then the series on the left converges. Functions in which the right side is finite are piecewise continuous functions.    The error, in ( ) goes to zero. That is Fourier Series converge to (using the square error).       Calculate for the function:     and extended periodically and let .    The Fourier Series of this function is     or and                  5  0.00372    10  0.000832    25  0.0000482    50       100       250       500       1000          A consequence of Parseval's Theorem is that for piecewise continuous functions, the Fourier Series converges as . So in light of the plot in Example , that it would appear that the plot of would approach the square wave as . However the plots of and are shown below (with on top):   A square wave?????       The Trigonmetric Polynomials of degree of the square wave function from above.      And despite the larger value of , does not appear to be approaching the square wave function. The difference is pronounced near the discontinuities in the function. This is called \\emph{Gibbs Phenomena} and it can be shown in this situation that the local max near in fact grows without bound as , despite the fact that .    Why is finite Fourier Series called a Polynomial?  You may be scratching your head about why the sum of sines and cosines is called a polynomial. You do recall correctly that polynomials are generally of the form     that is a linear combination of powers of .  However, you may also recall some trigonmetric identities. For example,     And a more complicated set of identities lead to     Note that in these examples, functions of the form and can be written in terms (for ) of products and powers of and . This continues for larger values of as well.  If you continue with similar identities, you can show that the trigonometric polynomial of the form     Can be written as the powers of and . This explains why this is called a polynomial.   "
},
{
  "id": "sec-trig-poly-2",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-2",
  "type": "Objectives",
  "number": "6.4",
  "title": "",
  "body": "   A Fourier series with only finite nubmer of terms is called a Trigonometric Polynomial.     The Trigonometric polynomial for a given is the best approximation to a periodic function in the sum of squares error sense. The Fourier Coefficients seen previous result in this trigonometric polynomila.    Bessel's Inequality give a bound on the sum of squares of the Fourier Coefficients.    Parseval's Theorem shows that the sum of squares of coefficients is proportional to the definite integral of the square of the function.    "
},
{
  "id": "sec-trig-poly-3-3",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trigonometric Polynomial of degree "
},
{
  "id": "sec-trig-poly-3-21",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-3-21",
  "type": "Remark",
  "number": "6.4.1",
  "title": "",
  "body": " Let be a piecewise continuous function on , and     The values of and that minimize (or ) is     that is they are the Fourier Coefficients.  "
},
{
  "id": "sec-trig-poly-3-22",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-3-22",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  In Example , the Fourier series of the sawtooth function was found the Fourier Coefficients are:     Graph the sawtooth function and , the 9th degree trigonometric polynomial.     Plot of the sawtooth wave and it's 9th degree trigonometric approximation.      and the two plots are indistinguishable on this scale.   "
},
{
  "id": "ex-plot-square-wave",
  "level": "2",
  "url": "sec-trig-poly.html#ex-plot-square-wave",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": "  In , the Fourier series of the square wave function was found and the Fourier Coefficients are:     Graph the square wave function and , the th degree trigonometric polynomial.     Graph of the square wave function and the th degree trigonometric polynomial.      And in contrast to the previous example, the trigonometric polynomial and the original function are quite different. This is mainly due to the discontinuities in the original function.   "
},
{
  "id": "sec-trig-poly-4-2",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-4-2",
  "type": "Theorem",
  "number": "6.4.6",
  "title": "",
  "body": "  The quantity on the interval is the minimum if and only if the coefficients of in (2) ar the Fourier coefficients of . This minimum value is      "
},
{
  "id": "thm-bessels-inequality",
  "level": "2",
  "url": "sec-trig-poly.html#thm-bessels-inequality",
  "type": "Theorem",
  "number": "6.4.7",
  "title": "Bessel’s Inequality.",
  "body": " Bessel's Inequality   Let and be the fourier coefficients related to the function on . Then      "
},
{
  "id": "thm-parsevals-theorem",
  "level": "2",
  "url": "sec-trig-poly.html#thm-parsevals-theorem",
  "type": "Theorem",
  "number": "6.4.8",
  "title": "Parseval’s Theorem.",
  "body": " Parseval's Theorem   Let and be the fourier coefficients related to the function on . Then      "
},
{
  "id": "sec-trig-poly-4-7",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-4-7",
  "type": "Example",
  "number": "6.4.9",
  "title": "",
  "body": "  Calculate for the function:     and extended periodically and let .    The Fourier Series of this function is     or and                  5  0.00372    10  0.000832    25  0.0000482    50       100       250       500       1000         "
},
{
  "id": "sec-trig-poly-4-9",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-4-9",
  "type": "Figure",
  "number": "6.4.11",
  "title": "",
  "body": " A square wave?????     "
},
{
  "id": "sec-trig-poly-4-10",
  "level": "2",
  "url": "sec-trig-poly.html#sec-trig-poly-4-10",
  "type": "Figure",
  "number": "6.4.12",
  "title": "",
  "body": " The Trigonmetric Polynomials of degree of the square wave function from above.     "
},
{
  "id": "sect-part-deriv-diff-eqns",
  "level": "1",
  "url": "sect-part-deriv-diff-eqns.html",
  "type": "Section",
  "number": "7.1",
  "title": "Partial Derivatives and Differential Equations",
  "body": "Partial Derivatives and Differential Equations     A partial derivative of with respect to is the derivative of with respect to keeping the other variables constant. Technically         If , Find and .    To find consider a constant, so     similarly to find consider a constant,         Higher-Order Partial Derivatives  As with ordinary derivatives, we can have higher-order partial derivatives. That is we define the 2nd order partial derivative of with respect to as     that is it is the partial derivative of the partial derivative. Since ordinary derivatives involve only functions of one variable, the mixed derivative is a new concept. If is a function of and or , then we can have the partial derivative of with respect to or with respect to . We write these as       Find all second-order derivatives of       First, let's find the two first derivatives:     And then there are four 2nd-order derivatives:       You probably noticed that the two derivatives involving both and resulted in the same results. This is true for most functions as is shown in the next theorem:   Clairaut's Theorem   If is a real valued function with continuous second derivatives at the point , then     In other words, partial derivatives commute.      Notation for Partial Derivatives  In terms of notation, it's often common to use a subscript as a derivative. For example can be used instead of or instead of . This can also be extended to higher order derivatives as the following shows:     and note that the order on the variables switch between the two notations. This generally isn't a problem because of Clairaut's Theorem says that the derivative is independent of the order taken on the derivatives.    Differential Equations    The following are related definitions.     A differential equation is an equation that contains derivatives.    If the differential equation has partial derivatives, then the equation is called a partial differential equation .    If the differential equation has standard or ordinary derivatives, then the equation is called a ordinary differential equation.     The order of the differential equation is the highest degree of any derivative.    If the equation is linear in , the dependent variable and its derivatives, then the equation is linear , if not, it is nonlinear .    Lastly, a linear differential equation is called homogeneous if the only nonzero terms in the equation contain the dependent variable. If a differential equation is not homogeneous, then it is called nonhomogeneous .         The following are ordinary differential equations.           .          .     Equations 1,2, and 4 are linear and 3 is nonlinear. Note that even though is not a linear function, in order for a differential equation to be linear, it needs only be linear in its dependent variables (in all of these examples, is dependent). Equations 1 and 2 are nonhomogeneous and equation 4 is homogeneous. Also, the first three are first-order equations and the 4th equation is 2nd order. The following are partial differential equations:           .          .     And the first and fourth equations are linear with the other two being nonlinear. The first and second equations above are first order, the 3rd equation is 2nd order and the fourth is a third-order PDE.     "
},
{
  "id": "sect-part-deriv-diff-eqns-2-1",
  "level": "2",
  "url": "sect-part-deriv-diff-eqns.html#sect-part-deriv-diff-eqns-2-1",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  A partial derivative of with respect to is the derivative of with respect to keeping the other variables constant. Technically      "
},
{
  "id": "sect-part-deriv-diff-eqns-2-2",
  "level": "2",
  "url": "sect-part-deriv-diff-eqns.html#sect-part-deriv-diff-eqns-2-2",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  If , Find and .    To find consider a constant, so     similarly to find consider a constant,      "
},
{
  "id": "sect-part-deriv-diff-eqns-3-6",
  "level": "2",
  "url": "sect-part-deriv-diff-eqns.html#sect-part-deriv-diff-eqns-3-6",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Find all second-order derivatives of       First, let's find the two first derivatives:     And then there are four 2nd-order derivatives:      "
},
{
  "id": "sect-part-deriv-diff-eqns-3-8",
  "level": "2",
  "url": "sect-part-deriv-diff-eqns.html#sect-part-deriv-diff-eqns-3-8",
  "type": "Theorem",
  "number": "7.1.4",
  "title": "Clairaut’s Theorem.",
  "body": " Clairaut's Theorem   If is a real valued function with continuous second derivatives at the point , then     In other words, partial derivatives commute.   "
},
{
  "id": "sect-part-deriv-diff-eqns-5-2",
  "level": "2",
  "url": "sect-part-deriv-diff-eqns.html#sect-part-deriv-diff-eqns-5-2",
  "type": "Definition",
  "number": "7.1.5",
  "title": "",
  "body": "  The following are related definitions.     A differential equation is an equation that contains derivatives.    If the differential equation has partial derivatives, then the equation is called a partial differential equation .    If the differential equation has standard or ordinary derivatives, then the equation is called a ordinary differential equation.     The order of the differential equation is the highest degree of any derivative.    If the equation is linear in , the dependent variable and its derivatives, then the equation is linear , if not, it is nonlinear .    Lastly, a linear differential equation is called homogeneous if the only nonzero terms in the equation contain the dependent variable. If a differential equation is not homogeneous, then it is called nonhomogeneous .      "
},
{
  "id": "sect-part-deriv-diff-eqns-5-3",
  "level": "2",
  "url": "sect-part-deriv-diff-eqns.html#sect-part-deriv-diff-eqns-5-3",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  The following are ordinary differential equations.           .          .     Equations 1,2, and 4 are linear and 3 is nonlinear. Note that even though is not a linear function, in order for a differential equation to be linear, it needs only be linear in its dependent variables (in all of these examples, is dependent). Equations 1 and 2 are nonhomogeneous and equation 4 is homogeneous. Also, the first three are first-order equations and the 4th equation is 2nd order. The following are partial differential equations:           .          .     And the first and fourth equations are linear with the other two being nonlinear. The first and second equations above are first order, the 3rd equation is 2nd order and the fourth is a third-order PDE.   "
},
{
  "id": "sect-modeling-pdes",
  "level": "1",
  "url": "sect-modeling-pdes.html",
  "type": "Section",
  "number": "7.2",
  "title": "Modeling with PDEs",
  "body": " Modeling with PDEs   In this section, we show where two important differential equations arise based on modeling the physical situation. The first will be the heat transport or heat equation and the second will be the wave equation by modeling the motion of a taut string. In both situations we will only show this for motion in one-dimension although similar PDEs model more complex behavior.    The Heat Equation  In this section, we will derive the transport of heat in a solid bar. In short, heat moves in a substance from a warmer region to a cooler region and if we know the direction of motion and the rate then we can understand heat flow.  We will consider a bar of length with fixed density , constant cross sectional area and insulated sides. This derivation will result in flow only in the direction of the length of the bar. The shape of the cross section and material in the bar does not matter but we will show a cylindrical bar.   A cylindrical bar which conducts heat.      The small segment of rod has heat flux entering in the left side and has heat flux exiting the right side. The temperature is on the left and on the right.   The heat flux through a slice of thickness of the bar.      Next, we consider the amount of heat in the segment. The heat is proportional to the mass of the segment ( ) and the temperature. The proportionality constant, is called the specific heat. The amount of heat in this small segment is:     The temporal change in heat of this element is the derivative with respect to and the only quantity that depends on time is the temperature :     and is equal to the total amount of heat entering from the two ends or     Divide both sides of this equation by and take the limit ,     The relationship between the heat flux, and the temperature is called Fourier's Law , and states that the heat transferred across unit area is proportional to the temperature gradient or     where is the proportionality constant called the thermal conductivity and the negative sign is due to the fact that heat flows from hot to cold (in a negative direction). Substituting Fourier's Law into results in     and assuming that is a constant,     rearranging we get     where is called the thermal diffusivity.   The one-dimensional heat equation is     and is typically solved for a given initial condition and with boundary conditions. We will see some examples of this in .     Wave Equation: Modeling a Taut String  Next, we turn to modeling the motion of a taut string fixed on both ends. A common example of this is a guitar string. We look at a small part of the string that has been displaced vertically from rest:   A small section of a taut string. The vectors and are the force vectors on the string, the variable is the vertical displacement of the string from rest position.      where be the vertical position of the string at position and time and the tension at and are the force vectors and . To determine an equation that describes the motion of the string, we need to balance the horizontal a vertical forces. We can write the two force vectors and in terms of the horizontal and vertical components where the subscripts in this case are the components as shown in the figure below.   The force vectors from are written in terms of the component vectors.      And recall that using Newton's 2nd law of motion the sum of the forces on a object is equal to the mass of the object times its acceleration in that direction or . There is no horizontal motion of the string, so the horizontal acceleration is zero and therefore:     and solving for      Next, we examine the vertical forces. The main difference is that there is a vertical acceleration which is the 2nd derivative of the position with respect to .     where the mass of the short piece is the mass density of the string and is the horizontal length of the piece. Substituting into the equation above,     and dividing through by      The tangent of the angles are the slopes of the function at and respectively, or at and therefore the above can be written     Divide by and let be the horizontal tension in the string     take the limit as      The parameter plays an important role in the solution, and we'll define , so the equation can be written:   Typically, is called the wave equation or since there is once one spatial variable, the one-dimensional wave equation .    Important Second-Order PDEs  The following is a list of other important second-order partial differential equations. Some of these are two-dimensions versions of the wave and heat equations derived above.     The remainder of this chapter covers solution techniques of these and other partial differential equations.   "
},
{
  "id": "sect-modeling-pdes-2-1",
  "level": "2",
  "url": "sect-modeling-pdes.html#sect-modeling-pdes-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heat equation wave equation "
},
{
  "id": "fig-heat-eqn",
  "level": "2",
  "url": "sect-modeling-pdes.html#fig-heat-eqn",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " A cylindrical bar which conducts heat.     "
},
{
  "id": "fig-heat-eqn2",
  "level": "2",
  "url": "sect-modeling-pdes.html#fig-heat-eqn2",
  "type": "Figure",
  "number": "7.2.2",
  "title": "",
  "body": " The heat flux through a slice of thickness of the bar.     "
},
{
  "id": "sect-modeling-pdes-3-15",
  "level": "2",
  "url": "sect-modeling-pdes.html#sect-modeling-pdes-3-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier's Law "
},
{
  "id": "sect-modeling-pdes-3-24",
  "level": "2",
  "url": "sect-modeling-pdes.html#sect-modeling-pdes-3-24",
  "type": "Remark",
  "number": "7.2.3",
  "title": "",
  "body": " The one-dimensional heat equation is     and is typically solved for a given initial condition and with boundary conditions. We will see some examples of this in .  "
},
{
  "id": "fig-wave-eqn",
  "level": "2",
  "url": "sect-modeling-pdes.html#fig-wave-eqn",
  "type": "Figure",
  "number": "7.2.4",
  "title": "",
  "body": " A small section of a taut string. The vectors and are the force vectors on the string, the variable is the vertical displacement of the string from rest position.     "
},
{
  "id": "sect-modeling-pdes-4-5",
  "level": "2",
  "url": "sect-modeling-pdes.html#sect-modeling-pdes-4-5",
  "type": "Figure",
  "number": "7.2.5",
  "title": "",
  "body": " The force vectors from are written in terms of the component vectors.     "
},
{
  "id": "sect-modeling-pdes-4-23",
  "level": "2",
  "url": "sect-modeling-pdes.html#sect-modeling-pdes-4-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wave equation one-dimensional wave equation "
},
{
  "id": "sect-linear-ode",
  "level": "1",
  "url": "sect-linear-ode.html",
  "type": "Section",
  "number": "7.3",
  "title": "Linear ordinary differential equations",
  "body": " Linear ordinary differential equations   As discussed in section , a differential equation is ordinary if the derivatives are ordinary. Additionally, it is linear if it is linear in its dependent variable and derivatives of the dependent variable. We investigate the solution of some classes of linear ordinary differential equations in this section. Let's assume that is the dependent variable and is the independent variable. The most general th order ordinary linear differential equation as the form:     In the most general terms, this differential equation is very difficult to solve despite being linear. However, there are cases when this has nice solutions. For the most part, we'll look at such equations in this section.    Second-order Constant-Coefficient Homogeneous differential equations  The most important ordinary differential equations that arise from solving the wave and heat equation are 2nd-order constant coefficient homogeneous differential equations. If in , then it is called homogeneous and if the coefficients of the terms and its derivatives are not dependent on , then the equation is constant-coefficient. A general 2nd-order ODE with these characteristics can be written:     where are real constants. To solve these, if we let and substitute this into the ODE,   and since is never 0   is called the characteristic equation related to the ODE. In general, there are two solutions to this equation, and . The general solution to the equation will thus be       Find the general solution to       The characteristic equation is     which has solutions and . The general solution thus is       To find the values of and in the example above or any other differential equation, additional information must be given. This is analogous to using a point to find the integration constant from an indefinite integral. The information is generally framed in the language of initial conditions and initial value problems as defined below.    A differential equation has initial conditions if at some point , then , are known, where is the order of the differential equation. The differential equation together with the initial conditions is known as a initial value problem .    The next example shows how to fully solve an initial value problem:    Find the solution to the initial value problem       To solve the initial value problem we first solve the differential equation, and this was done in And the general solution is     Since the initial conditions include knowing the derivative, we will need     and then we will substitute into and into      and the solution to this is and . Therefore the solution to the initial value problem is       There are many general types of solutions to second-order constant coefficient differential equations. The following lemma shows the possible solutions.    Consider the general 2nd-order constant-coefficient linear homogeneous differential equation,     where and are real constants. Let and be the roots of the characteristic equation.     If and are real and distinct, then the general solution to is       If is the only real root of the characteristic equation then the general solution to is       If the roots of the characteristic equation are pure imaginary, that is and , then the solution to is       and if the roots of the characteristic equation are complex conjugates, that is and , then the solution to is          First, recall that the characteristic equation of is     We will prove each statement in order.     The derivatives of are     and substituting these into ,     rearranging     and since and are roots of the characteristic equation, then both terms in parentheses are zero and       The derivatives of are     where the product rule has been used. In this case, recall also that since is the only real root, that from the quadratic formula with the discriminant . Substituting into      where the term with factor and the term with factor are each 0, because is a root of the characteristic equation. Lastly, the term with factor is 0 because as stated about .    Note that since the roots are pure imaginary, then then in and therefore and satisfy and since , then . The derivatives of are     and then substituting into with ,     since .    In this case, since the roots are complex conjugates, we can write and . The characteristic equation can be written:     which implies that and . The derivatives of are     and substituting them into ,     And using and , the right hand side of is 0, therefore is a solution.         Find the general solution to .    The characteristic equation is     Since the roots are pure imaginary, the general solution is       The characteristic equation for this next example has complex roots.    Find the solution to .    The characteristic equation for this differential equation is     and since this can't be factored, we'll use the quadratic equation to solve this:     Using , the general solution is         Solutions Differential Equations as Vector Spaces  We studied vector spaces in section and a common example of a vector space that is not is that of functions. It can be shown that the set related to the differential equation in      is a vector space or a subspace of , the vector space of all functions with continuous 2nd derivatives. The basis of the subspace are the two solutions of the differential equation or . Note that the general solution to the differential equation is the linear combination of the basis vectors or the span of the two solutions.   "
},
{
  "id": "sect-linear-ode-3-6",
  "level": "2",
  "url": "sect-linear-ode.html#sect-linear-ode-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "ex-solution-DE-image",
  "level": "2",
  "url": "sect-linear-ode.html#ex-solution-DE-image",
  "type": "Example",
  "number": "7.3.1",
  "title": "",
  "body": "  Find the general solution to       The characteristic equation is     which has solutions and . The general solution thus is      "
},
{
  "id": "sect-linear-ode-3-10",
  "level": "2",
  "url": "sect-linear-ode.html#sect-linear-ode-3-10",
  "type": "Definition",
  "number": "7.3.2",
  "title": "",
  "body": "  A differential equation has initial conditions if at some point , then , are known, where is the order of the differential equation. The differential equation together with the initial conditions is known as a initial value problem .   "
},
{
  "id": "sect-linear-ode-3-12",
  "level": "2",
  "url": "sect-linear-ode.html#sect-linear-ode-3-12",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": "  Find the solution to the initial value problem       To solve the initial value problem we first solve the differential equation, and this was done in And the general solution is     Since the initial conditions include knowing the derivative, we will need     and then we will substitute into and into      and the solution to this is and . Therefore the solution to the initial value problem is      "
},
{
  "id": "lem-soln-2nd-order-DE-homo",
  "level": "2",
  "url": "sect-linear-ode.html#lem-soln-2nd-order-DE-homo",
  "type": "Lemma",
  "number": "7.3.4",
  "title": "",
  "body": "  Consider the general 2nd-order constant-coefficient linear homogeneous differential equation,     where and are real constants. Let and be the roots of the characteristic equation.     If and are real and distinct, then the general solution to is       If is the only real root of the characteristic equation then the general solution to is       If the roots of the characteristic equation are pure imaginary, that is and , then the solution to is       and if the roots of the characteristic equation are complex conjugates, that is and , then the solution to is          First, recall that the characteristic equation of is     We will prove each statement in order.     The derivatives of are     and substituting these into ,     rearranging     and since and are roots of the characteristic equation, then both terms in parentheses are zero and       The derivatives of are     where the product rule has been used. In this case, recall also that since is the only real root, that from the quadratic formula with the discriminant . Substituting into      where the term with factor and the term with factor are each 0, because is a root of the characteristic equation. Lastly, the term with factor is 0 because as stated about .    Note that since the roots are pure imaginary, then then in and therefore and satisfy and since , then . The derivatives of are     and then substituting into with ,     since .    In this case, since the roots are complex conjugates, we can write and . The characteristic equation can be written:     which implies that and . The derivatives of are     and substituting them into ,     And using and , the right hand side of is 0, therefore is a solution.      "
},
{
  "id": "sect-linear-ode-3-15",
  "level": "2",
  "url": "sect-linear-ode.html#sect-linear-ode-3-15",
  "type": "Example",
  "number": "7.3.5",
  "title": "",
  "body": "  Find the general solution to .    The characteristic equation is     Since the roots are pure imaginary, the general solution is      "
},
{
  "id": "sect-linear-ode-3-17",
  "level": "2",
  "url": "sect-linear-ode.html#sect-linear-ode-3-17",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": "  Find the solution to .    The characteristic equation for this differential equation is     and since this can't be factored, we'll use the quadratic equation to solve this:     Using , the general solution is      "
},
{
  "id": "ch-pde-6",
  "level": "1",
  "url": "ch-pde-6.html",
  "type": "Section",
  "number": "7.4",
  "title": "Sturm-Liouville Problems",
  "body": " Sturm-Liouville Problems  We now turn to a class of differential equations that arise in solving partial differential equations. This class is called Sturm-Liouville problems and they satisfy boundary conditions instead of the initial conditions that we saw in the previous section.    Consider the differential equation     for , , and . The differential equation is also subject to the boundary conditions:     such that both and cannot be zero as well as both and . The differential equation with these boundary conditions are called a Sturm-Liouville Problem . The solution is called an eigenfunction of the problem and the values of are called the eigenvalues .    The following example shows how to solve a Sturm-Liouville problem, that is, find the eigenvalues and eigenfunctions of the problem.    Find the eigenvalue and eigenfunctions of the Sturm-Liouville problem:       First note that and also and , which satisfies the conditions on the boundaries. The characteristic equation for this problem is:     which has the solutions . The form of the equation depends on . If , we get:     if , then the solution is     and if , then we get     Next, we apply the boundary conditions on all three solutions. Recall that . If , substituting the boundary conditions into ,     so the only solution to is the trivial solution . If , then substituting the boundary conditions into results in     From the first equation, and substituting this into the 2nd equation      is a solution, the second term is never zero and the third term is only zero if , which is not true or , which is also not true, since this case is . Therefore again, the only solution to is the trivial solution. If then substituting the boundary conditions into results in     the second states that either , again the trivial solution or     which occurs if for . Or     We now check which values of result in valid values of . When , we get again, which violates and for both plus and minus the same number, we get the same eigenvalue, so we will discard the negative values of and just include The eigenvalues of this problem are those in for and the eigenfunctions of this problem are:       It may have appears that we were lucky that there was a solution to the Sturm-Liouville problem in the above example. However, this is not the case and any Sturm-Liouville problem has a solution as the following theorem shows.    Let and be any eigenvalue and eigenfunction of the Sturm-Liouville problem.     The eigenvalue is real.    There are an infinite number of eigenvalues that can be ordered and for each eigenvalue, there is only one eigenfunction.    Eigenfunctions and with satisfy .    Let and be piecewise continuous functions on . If     then the series:     converges to if is continuous at and to the value if is discontinuous at for each point in .         Let on . Find the series expansion listed in the theorem corresponding to the Sturm-Liouville problem .       which is the Fourier sine series.      Find the solution of the Sturm-Liouville problem       Since this the same differential equation as in , we note that when , there was no solution and the same is true here. In the case of , the solution is     and the derivative is needed as well,     and then applying the boundary condition , implies that , however, is not determined and is a solution. Next, we turn to , with the solution,     and again, we need the derivative,     Applying the boundary condition, , results in     which implies that . Applying the boundary condition results in     and if , this results in the trivial solution, cannot be zero, however     when or . The eigenvalues and eigenfunctions of this problem then are and , and       There are other Sturm-Liouville problems that arise commonly and we will see others later in this chapter and solve them as they arise. We will use these solutions that we just found in solving the PDEs that we derived above.  "
},
{
  "id": "ch-pde-6-3",
  "level": "2",
  "url": "ch-pde-6.html#ch-pde-6-3",
  "type": "Definition",
  "number": "7.4.1",
  "title": "",
  "body": "  Consider the differential equation     for , , and . The differential equation is also subject to the boundary conditions:     such that both and cannot be zero as well as both and . The differential equation with these boundary conditions are called a Sturm-Liouville Problem . The solution is called an eigenfunction of the problem and the values of are called the eigenvalues .   "
},
{
  "id": "ex-sturm-liouville",
  "level": "2",
  "url": "ch-pde-6.html#ex-sturm-liouville",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": "  Find the eigenvalue and eigenfunctions of the Sturm-Liouville problem:       First note that and also and , which satisfies the conditions on the boundaries. The characteristic equation for this problem is:     which has the solutions . The form of the equation depends on . If , we get:     if , then the solution is     and if , then we get     Next, we apply the boundary conditions on all three solutions. Recall that . If , substituting the boundary conditions into ,     so the only solution to is the trivial solution . If , then substituting the boundary conditions into results in     From the first equation, and substituting this into the 2nd equation      is a solution, the second term is never zero and the third term is only zero if , which is not true or , which is also not true, since this case is . Therefore again, the only solution to is the trivial solution. If then substituting the boundary conditions into results in     the second states that either , again the trivial solution or     which occurs if for . Or     We now check which values of result in valid values of . When , we get again, which violates and for both plus and minus the same number, we get the same eigenvalue, so we will discard the negative values of and just include The eigenvalues of this problem are those in for and the eigenfunctions of this problem are:      "
},
{
  "id": "thm-sturm-liouville",
  "level": "2",
  "url": "ch-pde-6.html#thm-sturm-liouville",
  "type": "Theorem",
  "number": "7.4.3",
  "title": "",
  "body": "  Let and be any eigenvalue and eigenfunction of the Sturm-Liouville problem.     The eigenvalue is real.    There are an infinite number of eigenvalues that can be ordered and for each eigenvalue, there is only one eigenfunction.    Eigenfunctions and with satisfy .    Let and be piecewise continuous functions on . If     then the series:     converges to if is continuous at and to the value if is discontinuous at for each point in .      "
},
{
  "id": "ch-pde-6-8",
  "level": "2",
  "url": "ch-pde-6.html#ch-pde-6-8",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  Let on . Find the series expansion listed in the theorem corresponding to the Sturm-Liouville problem .       which is the Fourier sine series.   "
},
{
  "id": "ex-sturm-liouville-2",
  "level": "2",
  "url": "ch-pde-6.html#ex-sturm-liouville-2",
  "type": "Example",
  "number": "7.4.5",
  "title": "",
  "body": "  Find the solution of the Sturm-Liouville problem       Since this the same differential equation as in , we note that when , there was no solution and the same is true here. In the case of , the solution is     and the derivative is needed as well,     and then applying the boundary condition , implies that , however, is not determined and is a solution. Next, we turn to , with the solution,     and again, we need the derivative,     Applying the boundary condition, , results in     which implies that . Applying the boundary condition results in     and if , this results in the trivial solution, cannot be zero, however     when or . The eigenvalues and eigenfunctions of this problem then are and , and      "
},
{
  "id": "sect-1d-heat-eqn",
  "level": "1",
  "url": "sect-1d-heat-eqn.html",
  "type": "Section",
  "number": "7.5",
  "title": "Solution to the 1D Heat Equation",
  "body": " Solution to the 1D Heat Equation  In this section we will investigate solving the 1D heat equation     with boundary conditions:     indicating that the end are insulated and the initial condition is:     As with the wave equation, we use the technique of separation of variables. That is let to get:     since the left side only depends on and the right side only depends on , it must be that these must both equal only a constant, (call it ) therefore we get the two equations:     or   The boundary conditions for the second equation becomes:     This is a Sturm-Liouville problem that we saw in which has the solution:     if and and is also a solution. The solution to can be found by letting and substituting in     or     therefore the solution is     A solution to the equation is     and using the principle of superposition the general solution to the PDE with given boundary conditions is:     Next, the initial condition is:     and the coefficients can be found by the Sturm-Liouville theorem to get:       Find the solution to the heat equation given above if the initial condition is:       In this case, we need to find and :     So the solution to the PDE is:     To get a feeling for the solution, the following is a plot when , for .   A bar      The plot shows the temperature distribution for the initial case and subsequent times. The temperature evens out as time increases and in the limit the temperature would be 1 throughout, which is the average initial temperature.    "
},
{
  "id": "sect-1d-heat-eqn-31",
  "level": "2",
  "url": "sect-1d-heat-eqn.html#sect-1d-heat-eqn-31",
  "type": "Example",
  "number": "7.5.1",
  "title": "",
  "body": "  Find the solution to the heat equation given above if the initial condition is:       In this case, we need to find and :     So the solution to the PDE is:     To get a feeling for the solution, the following is a plot when , for .   A bar      The plot shows the temperature distribution for the initial case and subsequent times. The temperature evens out as time increases and in the limit the temperature would be 1 throughout, which is the average initial temperature.   "
},
{
  "id": "sect-2d-heat-eqn",
  "level": "1",
  "url": "sect-2d-heat-eqn.html",
  "type": "Section",
  "number": "7.6",
  "title": "Heat Equation in two spatial dimensions",
  "body": " Heat Equation in two spatial dimensions  The Heat equation in two spatial dimensions can be written:     In this case, let's say that we have the following boundary conditions:     which means that along the edge , the temperature is 0 and the other three edges are insulated. In addition, assume that the initial condition is     In this section, we will examine how to solve this problem using the separation of variables. Since there are 3 variables, let's assume that the solution can be written:     and substituting this into the heat equation, we get:     dividing through by      Since is only a function of , is only a function of and is only a function of , the only option for allowing the above to be true is to assume that     The boundary condition can also be written in terms of and as . Thus, in this case, we have two Sturm-Liouville problems,     The solution to the first is     and     The solution to the second is   and     Next, then we need to solve     which has the solution     Then put the solutions together:     and the solution that satisfies the boundary conditions is:     Finally, we apply the initial condition.     which results in the generalized Fourier Series:       Find the full solution if and       We only need to find      So the solution is     where and .    "
},
{
  "id": "sect-2d-heat-eqn-37",
  "level": "2",
  "url": "sect-2d-heat-eqn.html#sect-2d-heat-eqn-37",
  "type": "Example",
  "number": "7.6.1",
  "title": "",
  "body": "  Find the full solution if and       We only need to find      So the solution is     where and .   "
},
{
  "id": "sec-bessel-eqn",
  "level": "1",
  "url": "sec-bessel-eqn.html",
  "type": "Section",
  "number": "7.7",
  "title": "Bessel’s equation and Bessel Functions",
  "body": " Bessel's equation and Bessel Functions   Bessel's equation is     A solution can be obtained by a power series solution and represented as     where is the gamma function, a generalized factorial. The function is called the Bessel Function of the first kind . We are often interested in solutions of in which is an integer. If this is the case, then and are two linearly independent solutions. The power series representation in this case is       Propeties of  The following is a plot of (solid line) and (dashed line) on . Each of the Bessel functions have osciallatory behavior with decay and an infinite number of roots for . Also note that the roots of are between the roots of .   A plot of the bessel functions and on .      Using , it can be shown that     In addition, using the power series representation, one can show that the other solution of can be written:     However for , has a term which means that it is undefined at , which is generally why it not relevant as we will show later. There are a number of identities that are useful for understanding Bessel functions. Two of these are shown in the follow lemma.    Consider , where is an integer. Then     for all .    First we will prove . Using , we can write     and differentiating,     The proof for is very similar and is not shown.    In addition, there are another two identities for Bessel functions that are often called recurrence relationships.    Let for an integer and , then       If we use the product rule to expand and , we get     and multiply the first equation by and the second by , one gets     Adding the two above equations and dividing through by results in whereas subtracting the bottom equation from the top results in .    These properties can now be used to find higher order Bessel functions, the derivatives of Bessel functions as well as the closed form of some integrals as shown in the next three examples.    Use the identities in and to find in terms of and .    Let in or     use again with or which can be written        The above technique can be used to find where is an integer in terms of and , showing the importance of the first two Bessel functions. The next example shows how to calculate the derivatives of the first two Bessel functions.    Use the identities in lemmas and to find and in terms of and .    First, differentiate with to get     using with and ,     Using with      and finally dividing through by          Evaluate .    Integrating this by parts with and results in     where is used from . Next, if we again apply with , to the last integral, we get         Roots of the Bessel functions  There is not an analytic way to find the roots of any of the bessel functions, so we will resort to numerical approximation. Many Computer Algebra Systems and scientific computing languages have bessel functions built in and roots can be found with techniques such as Newton's method or bisection.  In general, the th root of is between and , so the following Maple code will find the first 50.     The first ten values are: .   "
},
{
  "id": "sec-bessel-eqn-2-5",
  "level": "2",
  "url": "sec-bessel-eqn.html#sec-bessel-eqn-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel Function of the first kind "
},
{
  "id": "fig-bessel",
  "level": "2",
  "url": "sec-bessel-eqn.html#fig-bessel",
  "type": "Figure",
  "number": "7.7.1",
  "title": "",
  "body": " A plot of the bessel functions and on .     "
},
{
  "id": "lem-bessel-identities",
  "level": "2",
  "url": "sec-bessel-eqn.html#lem-bessel-identities",
  "type": "Lemma",
  "number": "7.7.2",
  "title": "",
  "body": "  Consider , where is an integer. Then     for all .    First we will prove . Using , we can write     and differentiating,     The proof for is very similar and is not shown.   "
},
{
  "id": "lem-bessel-recurrence",
  "level": "2",
  "url": "sec-bessel-eqn.html#lem-bessel-recurrence",
  "type": "Lemma",
  "number": "7.7.3",
  "title": "",
  "body": "  Let for an integer and , then       If we use the product rule to expand and , we get     and multiply the first equation by and the second by , one gets     Adding the two above equations and dividing through by results in whereas subtracting the bottom equation from the top results in .   "
},
{
  "id": "ex-bessel-J3",
  "level": "2",
  "url": "sec-bessel-eqn.html#ex-bessel-J3",
  "type": "Example",
  "number": "7.7.4",
  "title": "",
  "body": "  Use the identities in and to find in terms of and .    Let in or     use again with or which can be written       "
},
{
  "id": "sec-bessel-eqn-3-15",
  "level": "2",
  "url": "sec-bessel-eqn.html#sec-bessel-eqn-3-15",
  "type": "Example",
  "number": "7.7.5",
  "title": "",
  "body": "  Use the identities in lemmas and to find and in terms of and .    First, differentiate with to get     using with and ,     Using with      and finally dividing through by       "
},
{
  "id": "sec-bessel-eqn-3-16",
  "level": "2",
  "url": "sec-bessel-eqn.html#sec-bessel-eqn-3-16",
  "type": "Example",
  "number": "7.7.6",
  "title": "",
  "body": "  Evaluate .    Integrating this by parts with and results in     where is used from . Next, if we again apply with , to the last integral, we get      "
},
{
  "id": "sect-heat-circular",
  "level": "1",
  "url": "sect-heat-circular.html",
  "type": "Section",
  "number": "7.8",
  "title": "The Heat Equation in a Circular Region",
  "body": " The Heat Equation in a Circular Region   Next, we examine how to solve the heat equation in a circular region: as shown in the following figure.   A circular region where a point is written in polar coordinates.      Instead of solving the equation in cartesian coordinates, we look to write the heat equation in \\emph{polar coordinates}. A point in polar coordinates is labelled where     or written as and in terms of and ,     To convert the heat equation to polar coordinates, we need to write the right hand side of ( ) or     in terms of and . This is basically an exercise in using the chain rule with multiple independent variables. We start by finding the first partial derivatives of with respect to and .     and differentiating again, we get:     and similarly,     To complete this, we need to find      as well as and .     So now we write      Thus the heat equation in polar coordinates is     Before solving this equation in general, we will examine a simpler equation that is related.    Rotationally Symmetric Solutions  The general case is a bit hard to deal with, so we first start with a rotationally symmetric solution , which means that there is no dependence. Thus the term and the heat equation becomes:     To solve this using separation of variables, let and substitution into the PDE:     As before, the only way that the left hand side can equal the right hand side is if each side only depends on a constant or     The boundary conditions become and is finite, so we get the Sturm-Liouville problem:     This is a difficult problem to solve in that letting does not work. There are techniques to solve this, but let's use Maple to get:     where and are bessel functions.    Solving the Sturm-Liouville Problem  If we apply the first ``boundary'' condition that must be finite, we take that since is not finite at . The next boundary condition is or     and let be the th root of . so     are the eigenvalues of the problem with eigenfunctions:     Next, the solution to     is     The full solution is     Lastly, using the initial condition, we get:     which is a Fourier-type series with       Find the solution using the initial condition and let .    Again, we need only to find the Fourier Coefficients. The first three are:     So the solution is         General Circular Heat Equation  To solve this (as we have seen before) we will use separation of variables. Let :     Assume that     and then the right hand side becomes:     mulitply through by and rearrange       Sturm-Liouville Problems from the heat equation  The first Sturm-Liouville problem is:     and as well as . If , then . No solution of this exists that satsifies the boundary conditions. If , then . To satisfy the boundary conditions . If , then .     which is satisfied when , for . The derivative of is     The second boundary condition:     which is satisfied. Thus     each satisfy the boundary condition. The next differential equation is     The solution of this is     and the boundary conditions are is finite and . The condition at sets and the other condition:     results in     where is the th root of . Thus the eigenvalue is     and the eigenfunction is     The last DE is     of which the solution is:        and using the principle of superposition the full solution is:     Finding the coefficients. In this case we use the initial condition that     and substituting into the solution:     The coefficients are:       Solve the equation above when . Use and .    Again, we just need to compute the coefficients above. Use can either use Maple or make a symmetry argument to see that     So the solution is        "
},
{
  "id": "sect-heat-circular-2-2",
  "level": "2",
  "url": "sect-heat-circular.html#sect-heat-circular-2-2",
  "type": "Figure",
  "number": "7.8.1",
  "title": "",
  "body": " A circular region where a point is written in polar coordinates.     "
},
{
  "id": "sect-heat-circular-4-18",
  "level": "2",
  "url": "sect-heat-circular.html#sect-heat-circular-4-18",
  "type": "Example",
  "number": "7.8.2",
  "title": "",
  "body": "  Find the solution using the initial condition and let .    Again, we need only to find the Fourier Coefficients. The first three are:     So the solution is      "
},
{
  "id": "sect-heat-circular-6-37",
  "level": "2",
  "url": "sect-heat-circular.html#sect-heat-circular-6-37",
  "type": "Example",
  "number": "7.8.3",
  "title": "",
  "body": "  Solve the equation above when . Use and .    Again, we just need to compute the coefficients above. Use can either use Maple or make a symmetry argument to see that     So the solution is      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
