# Your Today

## Deployment
Our application is deployed [here](https://custombrowserhomepage.chenpan.xyz).

## Login Credentials
### Standard Users
username: user
password: user

username: user2
password: user2

### Admin User
username: admin
password: admin

## Changes from Phase1
- Displays time and weather based on users' location
- Internal chat room feature (instructions to use below)
- Stores user's preferred spotify playlist
- Stored user preferences, account information and user feedback in MongoDB

## User Features
### In the Homepage, users are able to:
#### Header
* access google search by typing in the search bar and hitting the search icon
* set their current mood
* open the settings panel by clicking the settings icon beside the search bar
#### Left Panel
* check time and weather based on their current location
* check more precise weather details by clicking on the weather icon
* set a timer to track studying time
* create a todo list with tasks and due dates, and mark items as complete
* Send messages to other users by entering the recipient's username, subject and content

#### Right Panel
* listen to spotify playlists and search playlist with spotify playlist url
* view links to favorite websites, which can be customized in Settings tab

#### Settings Panel
* change the background wallpaper
* add and delete favorite links viewed on main screen
* send feedback to admin
* reset their password
* logout

## Admin Features
### In the Admin page, admin users are able to: 
#### Header
* access google search by typing in the search bar and hitting the search icon
* open the settings panel by clicking the settings icon beside the search bar

#### Main Panel
* view recent account creations.
* view account requests and decide to approve or disapprove.
* view frozen accounts and choose to unfrozen the frozen status or choose to ignore.
* view all accounts and choose to frozen with the Reason to Frozen.
* view user feedback and mark as Read.

#### Settings Panel
* logout

## Server Routes
- [Account API](./docs/accountAPI.md)
- [Credentials API](./docs/credentialsAPI.md)
- [Feedback API](./docs/feedbackAPI.md)
- [Link API](./docs/linkAPI.md)
- [Message API](./docs/messageAPI.md)
- [Music API](./docs/musicAPI.md)
- [Settings API](./docs/settingsAPI.md)
- [Todo API](./docs/todoAPI.md)

