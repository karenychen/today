# Your Today

### Getting Started ###
---
sudo apt update
sudo apt install nodejs
sudo apt install npm
git clone https://github.com/csc309-winter-2020/team27.git
cd /team27
npm install
npm start

### Login Credentials ###
---
*For basic user*
username: user
password: user
Login Page: localhost:3000/Login

*For admin*
username: admin
password: admin
Login Page: localhost:3000/Login

### User Features ###
---
In the main screen:
* listen to spotify playlists with the playlist url
* set a timer to track studying time
* create a todo list with tasks and due dates, and mark items as complete
* check and send emails from gmail
* view links to favorite websites, which can be customized in Settings tab
* check the time and weather
* check more precise weather details by clicking on the weather icon
* conveniently access google search
* set current mood

In the Settings tab:
* change the background wallpaper
* add and delete the favorite links viewed on main screen
* send feedback to the admin
* logout

### Admin Features ###
---
By selecting different buttons in the header:
* view recent account creations.
* view account requests and decide to approve or disapprove.
* view frozen accounts and choose to unfrozen the frozen status or choose to ignore.
* view all accounts and choose to frozen with the Reason to Frozen.
* view user feedback and mark as Read.

### Pages ###
* Homepage: localhost:3000/Homepage
* Login: localhost:3000/Login
* Admin: localhost:3000/Admin
* Register: localhost:3000/Register
* Password Recovery: localhost:3000/RecoverPassword
* Loading: localhost:3000

### Features for Phase 2 ###
---
* use gmail API to have email feature work
* use user's real location for time and weather
* get a new inspirational message everyday
* save user data and preferences in our database
* save admin data and information in our database
* store user's playlist url in the database
* use google account to regist and login