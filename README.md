### Important Guidelines

1. Write code and commit on your own branch only. (No commits on master branch). Feel free to make as many branches as you like.
2. Avoid using (Shift+Delete). Recycle Bin is a friend in need.
3. Thoroughly test before opening a Pull Request.
4. Any other important guideline for the team should be highlighted here in Readme.md in bold.

## Setting up The Repo 1st Time on Local System


1.  Clone the repo on your computer.

    `git clone https://github.com/Tejas021/Vcet-Hackathon-2022.git`


2.  Setup Environment and dependencies.

    Install Node JS from nodejs.org

3. To run React App
    
    Navigate to root Directory: 
    
    `cd Vcet-Hackathon-2022`
    
    Install Dependencies:
    
    `npm install`
    
    Start React App: 
    
    `npm run dev`



## Starting with new task.

1) On your master branch

    `git pull https://github.com/Tejas021/Vcet-Hackathon-2022.git`

2) Checkout to Your own branch.

    `git checkout -b <branch_name>`

## Pushing to the Repo


1. Commit the code changes onto your branch.

2. Make sure you are up to date with the `master` branch.
    `git fetch origin master`
    `git merge origin/master`
    Complete the merge. Resolve merge conflicts (if any)

3. `git push origin br_name`

4. Goto Github and create a Pull Request.

5. Wait for Pull Request to get approved.

