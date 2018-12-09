# Assignment 2 - Vue app - Automated development process. - AutoReview - Frontend -

Name: William Wall

Student No: 20070255

## Run client.

npm run dev

## Overview.

Reviews - AutoReview is a web app by where users write Reviews about motor vehicles and topics.

Chat-Rooms - Users also have the opportunity to create or join Chat Rooms and Chat in Real-Time to other authenticated users using socket I/O.

Gallery - Additionally there is a Gallery section where users submit vehicles with images and specifications.

Game - Another great feature of the application is the Puzzle Slider game. The user inputs an image into the application, from there the image will get shuffled into a number of custom picked pieces. The goal is to slide the squares into a mirror copy of the original image, with a little help from the app if needed.

Authentication - Users are authenticated through Googles cloud based Firebase platform.

## E2E Testing.

## Continuous Integration.

https://travis-ci.org/william-wall/Agile_Automated_CI_MEVN_Client

## Automated Deployment.

Firebase Hosting: https://autoreview-agile.firebaseapp.com/

## Extra features.

Extensive testing of authenticated versus un-authenticated, navigation drawer + navigation bar only having certain elements before and after authentication.

Security testing of routes, each route to application feature tested for restricted access before authentication.

Verification of displayed error messages from application when incorrect password/usernames entered.

## Appendix.

C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client>npx cypress run


================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:  3.1.3                                                            │
  │ Browser:  Electron 59 (headless)                                           │
  │ Specs:    7 found (1_home.js, 2_security.js, 3_authentication.js, 4_revie… │
  └────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────

  Running: 1_home.js...                                                (1 of 7)


  Home Page
    √ Shows the AutoReview trademark (2846ms)
    √ Shows AutoReview logo (1147ms)
    √ Shows Explore Gallery button (460ms)
    √ Shows Submit Car button (523ms)
    Navigation Bar - Unauthenticated
      √ Shows the Navigation Drawer button (487ms)
      √ Shows the Navigation Drawer Sign up button (488ms)
      √ Shows the Navigation Drawer Sign up button (474ms)
      √ Shows the Sign up button (472ms)
      √ Shows the Sign in button (456ms)
      Buttons - Unauthenticated
        √ Will redirect to Sign in when user is not authenticated for Explore Gallery (619ms)
        √ Will redirect to Sign in when user is not authenticated for Submit Car (556ms)
    Navigation Bar - Route Navigation
      √ Will redirect to Sign up when link is clicked (639ms)
      √ Will redirect to Sign in when link is clicked (750ms)
      √ Will navigate to Reset Password from Home to Sign in to Reset Password (1864ms)
      √ Will navigate to Home page when the AutoReview logo is clicked (815ms)
    Navigation Drawer - Route Navigation
      √ Will redirect to Sign up when link is clicked in drawer (809ms)
      √ Will redirect to Sign in when link is clicked in drawer (789ms)


  17 passing (15s)


  (Results)

  ┌──────────────────────────┐
  │ Tests:        17         │
  │ Passing:      17         │
  │ Failing:      0          │
  │ Pending:      0          │
  │ Skipped:      0          │
  │ Screenshots:  0          │
  │ Video:        true       │
  │ Duration:     14 seconds │
  │ Spec Ran:     1_home.js  │
  └──────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\1_home.js.mp4 (4 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 2_security.js...                                            (2 of 7)


  Security
    Denied Access to Review List - Unauthenticated
      √ Should not be allowed to navigate to Review List without Authentication (3787ms)
    Denied Access to Chat Rooms - Unauthenticated
      √ Should not be allowed to navigate to Chat Rooms without Authentication (875ms)
    Denied Access to Add Reviews - Unauthenticated
      √ Should not be allowed to navigate to Add Review without Authentication (851ms)
    Denied Access to Gallery - Unauthenticated
      √ Should not be allowed to navigate to Gallery without Authentication (838ms)
    Denied Access to Submit Car - Unauthenticated
      √ Should not be allowed to navigate to Submit Car without Authentication (988ms)
    Denied Access to Game - Unauthenticated
      √ Should not be allowed to navigate to Game without Authentication (1013ms)


  6 passing (9s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        6             │
  │ Passing:      6             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     8 seconds     │
  │ Spec Ran:     2_security.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\2_security.js.mp4 (2 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 3_authentication.js...                                      (3 of 7)


  Authentication
    Sign up
      1) Should Sign up the user given an email, password and re-enter password
      Error Handling - Verify Non-Duplication Email
        √ Should give an error message to the user when signing up with an email already in use (2479ms)
    Reset password
      √ Should send the user an email to reset their password via a reset link (1850ms)
    Sign in - Error Handling - Incorrect password
      √ Should give an error message to the user when signing in with an incorrect password (2368ms)
      Sign in - Error Handling - No corresponding account
        √ Should give an error message to the user when signing in with an email already in use (1769ms)
    Sign in - Success
^CTerminate batch job (Y/N)? y

C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client>npx cypress run


================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:  3.1.3                                                            │
  │ Browser:  Electron 59 (headless)                                           │
  │ Specs:    7 found (1_home.js, 2_security.js, 3_authentication.js, 4_revie… │
  └────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────

  Running: 1_home.js...                                                (1 of 7)


  Home Page
    √ Shows the AutoReview trademark (2584ms)
    √ Shows AutoReview logo (1142ms)
    √ Shows Explore Gallery button (477ms)
    √ Shows Submit Car button (470ms)
    Navigation Bar - Unauthenticated
      √ Shows the Navigation Drawer button (522ms)
      √ Shows the Navigation Drawer Sign up button (553ms)
      √ Shows the Navigation Drawer Sign up button (553ms)
      √ Shows the Sign up button (576ms)
      √ Shows the Sign in button (434ms)
      Buttons - Unauthenticated
        √ Will redirect to Sign in when user is not authenticated for Explore Gallery (667ms)
        √ Will redirect to Sign in when user is not authenticated for Submit Car (511ms)
    Navigation Bar - Route Navigation
      √ Will redirect to Sign up when link is clicked (641ms)
      √ Will redirect to Sign in when link is clicked (604ms)
      √ Will navigate to Reset Password from Home to Sign in to Reset Password (1834ms)
      √ Will navigate to Home page when the AutoReview logo is clicked (904ms)
    Navigation Drawer - Route Navigation
      √ Will redirect to Sign up when link is clicked in drawer (750ms)
      √ Will redirect to Sign in when link is clicked in drawer (854ms)


  17 passing (15s)


  (Results)

  ┌──────────────────────────┐
  │ Tests:        17         │
  │ Passing:      17         │
  │ Failing:      0          │
  │ Pending:      0          │
  │ Skipped:      0          │
  │ Screenshots:  0          │
  │ Video:        true       │
  │ Duration:     14 seconds │
  │ Spec Ran:     1_home.js  │
  └──────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\1_home.js.mp4 (3 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 2_security.js...                                            (2 of 7)


  Security
    Denied Access to Review List - Unauthenticated
      √ Should not be allowed to navigate to Review List without Authentication (3298ms)
    Denied Access to Chat Rooms - Unauthenticated
      √ Should not be allowed to navigate to Chat Rooms without Authentication (925ms)
    Denied Access to Add Reviews - Unauthenticated
      √ Should not be allowed to navigate to Add Review without Authentication (915ms)
    Denied Access to Gallery - Unauthenticated
      √ Should not be allowed to navigate to Gallery without Authentication (890ms)
    Denied Access to Submit Car - Unauthenticated
      √ Should not be allowed to navigate to Submit Car without Authentication (898ms)
    Denied Access to Game - Unauthenticated
      √ Should not be allowed to navigate to Game without Authentication (854ms)


  6 passing (8s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        6             │
  │ Passing:      6             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     7 seconds     │
  │ Spec Ran:     2_security.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\2_security.js.mp4 (2 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 3_authentication.js...                                      (3 of 7)


  Authentication
    Sign up
      √ Should Sign up the user given an email, password and re-enter password (5235ms)
      Error Handling - Verify Non-Duplication Email
        √ Should give an error message to the user when signing up with an email already in use (3130ms)
    Reset password
      √ Should send the user an email to reset their password via a reset link (2285ms)
    Sign in - Error Handling - Incorrect password
      √ Should give an error message to the user when signing in with an incorrect password (2347ms)
      Sign in - Error Handling - No corresponding account
        √ Should give an error message to the user when signing in with an email already in use (1805ms)
    Sign in - Success
      √ Should login the user given an email and password (1584ms)


  6 passing (17s)


  (Results)

  ┌───────────────────────────────────┐
  │ Tests:        6                   │
  │ Passing:      6                   │
  │ Failing:      0                   │
  │ Pending:      0                   │
  │ Skipped:      0                   │
  │ Screenshots:  0                   │
  │ Video:        true                │
  │ Duration:     16 seconds          │
  │ Spec Ran:     3_authentication.js │
  └───────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\3_authentication.js.mp4 (4 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 4_review.js...                                              (4 of 7)


  Reviews
    Add Review
      √ Should add a review to the application (10423ms)
      √ Should verify the review has been added to the reviews listings (5215ms)
    Edit Review
      √ Should edit review and verify its contents (7570ms)
      √ Should verify the review has been updated to the reviews listings (3815ms)
    Fuzzy Search
      √ Should find a review by typing keywords into the search bar and matching to a review (4005ms)
    Delete Review
      √ Should delete review from list and verify by SweetAlert2 (4264ms)


  6 passing (36s)


  (Results)

  ┌───────────────────────────┐
  │ Tests:        6           │
  │ Passing:      6           │
  │ Failing:      0           │
  │ Pending:      0           │
  │ Skipped:      0           │
  │ Screenshots:  0           │
  │ Video:        true        │
  │ Duration:     35 seconds  │
  │ Spec Ran:     4_review.js │
  └───────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  80%
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\4_review.js.mp4 (12 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 5_gallery.js...                                             (5 of 7)


  Gallery
    Submit Vehicle to Gallery
      √ Should add a vehicle to the gallery with image and other attributes (14919ms)
      Verify Vehicle is in Gallery List
        √ Should verify that submitted vehicle got added to gallery listings (22932ms)


  2 passing (38s)


  (Results)

  ┌────────────────────────────┐
  │ Tests:        2            │
  │ Passing:      2            │
  │ Failing:      0            │
  │ Pending:      0            │
  │ Skipped:      0            │
  │ Screenshots:  0            │
  │ Video:        true         │
  │ Duration:     38 seconds   │
  │ Spec Ran:     5_gallery.js │
  └────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\5_gallery.js.mp4 (9 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 6_chat_room.js...                                           (6 of 7)


  Chat Rooms
    Add a Chat Room to list
      √ Should add a Chat Room to the list of rooms (8650ms)
      Verify the Chat Room in Room List
        √ Should verify that the Chat Room got added to the Room List (4541ms)
    Join a Chat Room
      √ Should enter a Chat Room using a Nickname + verify that the User has entered the Chat Room (4275ms)
      Add a Chat to the Chat Room
        √ Should allow the user to add a Chat to the Chat Room + verify that the Chat has been added to the Chat Room conversation (5251ms)
      Logout of Chat Room
        √ Should allow the User to Logout of the specific Chat Room (5644ms)


  5 passing (29s)


  (Results)

  ┌──────────────────────────────┐
  │ Tests:        5              │
  │ Passing:      5              │
  │ Failing:      0              │
  │ Pending:      0              │
  │ Skipped:      0              │
  │ Screenshots:  0              │
  │ Video:        true           │
  │ Duration:     28 seconds     │
  │ Spec Ran:     6_chat_room.js │
  └──────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  86%
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\6_chat_room.js.mp4 (11 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 7_game.js...                                                (7 of 7)


  Game Slider Puzzle
    Select Board Size
      √ Should allow the user to enter custom board size (min 2*2 - max 10*10) - default is 3*3 (7823ms)
      √ Should pick image (4312ms)


  2 passing (12s)


  (Results)

  ┌──────────────────────────┐
  │ Tests:        2          │
  │ Passing:      2          │
  │ Failing:      0          │
  │ Pending:      0          │
  │ Skipped:      0          │
  │ Screenshots:  0          │
  │ Video:        true       │
  │ Duration:     12 seconds │
  │ Spec Ran:     7_game.js  │
  └──────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\7_game.js.mp4 (4 seconds)


================================================================================

  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Skip…
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ √ 1_home.js                       00:14     17     17      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 2_security.js                   00:07      6      6      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 3_authentication.js             00:16      6      6      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 4_review.js                     00:35      6      6      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 5_gallery.js                    00:38      2      2      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 6_chat_room.js                  00:28      5      5      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 7_game.js                       00:12      2      2      -      -      - │
  └────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                 02:33     44     44      -      -      -
