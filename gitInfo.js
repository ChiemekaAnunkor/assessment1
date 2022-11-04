/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = " Git is a version control system that allows for developers to track and manage changes to files "

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition ="github is an app that allows users to host their repos remotely and lets people work collaborative"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
 const gitInitDefinition = "git init allows for users to initiate an empy git repo to then start tracking changes/versions"
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE     

 const gitCloneDefinition = "git clone with a url at the end, allows to clone a remote repo to our local machine"

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
 const gitStatusDefinition = "git status shows the current files and their versions, whether it is being tracked or not for a git commit "
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition="git add, stores and adds all your local changes to be tracked and updated so you can commit it the changes and store it"
const gitAddCode= "git add ." //this will add all files to be track at the current file path and any inside of it.


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition= " git commit allows us to save an instance of the current changes that are being tracked to be pushed, with a message/description"
const gitCommitCode="git commit -m 'initial commit' "

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition="git push sends the code to the remove repo, we first need to use git remote add <link> to establisht connection with our remove server before we can push it or we can add a link like git push <link>"