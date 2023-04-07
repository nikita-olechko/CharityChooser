# Project Title

CharityChooser

## 1. Project Description

CharityChooser is being developed by our team to assist individuals who face difficulties in finding pertinent information on charities that provide emergency relief during extreme weather conditions. Our goal is to create an easy to use centralized database of charities that allows users to filter their search results based on various donation criteria, which is not possible with the current databases available.

The app's key features consist of a user-friendly filter mechanism that allows users to refine their charity search by continent and weather event type. Furthermore, the app also features an interactive map that showcases charities from around the world involved in providing relief during extreme weather conditions.

## 2. Names of Contributors

List team members and/or short bio's here...

- Nikita Olechko
- Alfrey Chan
- Diane Choi

## 3. Technologies and Resources Used

List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.

- HTML, CSS, JavaScript
- Bootstrap 5.0 (Frontend library)
- Firebase 8.0 (BAAS - Backend as a Service)
- MapBox

## 4. Complete setup/installion/usage

State what a user needs to do when they come to your project. How do others start using your code or application?
Here are the steps ...

- Create a project on Firebase
- Copy and paste code for Firebase initialization under project settings
- Ensure timestamp.date under rules in Firestore Database is not expired
- Enjoy!

## 5. Known Bugs and Limitations

Here are some known bugs/limitations:

- No input validation for input fields phone number, or country in user profile
- No input validation for input fields for payment
- Search bar functionality does not work

## 6. Features for Future

What we'd like to build in the future:

- Search bar functionality
- Saving payment information functionality
- Allow the user to only enter information that fits the corrrect format for specific input fields

## 7. Contents of Folder

Content of the project folder:

```
 Top level of project folder:
├── .gitignore                  # Git ignore file, contains firebase API key
├── index.html                  # HTML for landing page, this is what users see when you come to url
└── README.md                   # woah, you're reading this now!
└── main.html                   # HTML for main page after the user has logged in
└── login.html                  # HTML for login page, the log-in page
└── map.html                    # map HTML file, this is what users see when they hit the map button
└── charity_description.html    # charity description HTML file, the page for unique charity description
└── payment.html                # HTML for payment page, payment page where users fill in the information
└── payment_completed.html      # HTML for payment completed page, a page with a thank you message
└── register.html               # HTML for registration form, the charity registration page
└── registration_completed.html # HTML for registration completed page, a page with a thank you message
└── user_profile.html           # HTML for user profile, the user-profile page

It has the following subfolders and files:
├── .git                        # Folder for git repo
├── images                      # Folder for images
        /blah.jpg
        /background.jpg
        /CHARITY01.jpg
        /CYCLONE01.jpg
        /DONATION01.jpg
        /FOOD01.jpg
        /GREEN01.jpg
        /HANDS01.jpg
        /HOUSE01.jpg
        /HURRICANE01.jpg
        /logo_bk.png
        /SAVE01.jpg
        /SAVE02.jpg
        /SUPPLIES01.jpg
        /TREE01.jpg
        /WATER01.jpg
        /WILDFIRE01.jpg

├── scripts                          # Folder for scripts
        /authentication.js           # firebase authentication, shared across pages
        /charity_description.js      # JS for charity_description.html
        /filtermain.js               # JS for main.html
        /firebaseAPI_DTC_16.js       # JS for firebase API, shared across pages
        /footer.js                   # JS for footer.html
        /main.js                     # JS for main.html
        /map.js                      # JS for map.html
        /payment_completed.js        # JS for payment_completed.html
        /payment.js                  # JS for payment.html
        /register.js                 # JS for register.html
        /skeleton.js                 # JS for footer and navbar across all pages
        /user_profile.js             # JS for user_profile.html

├── styles                           # Folder for styles
        /charity_description.css     # CSS for charity_description.html
        /filter.css                  # CSS for main.html
        /map.css                     # CSS for map.html
        /payment.css                 # CSS for payment.html
        /style.css                   # CSS for css across all pages
        /user_profile.css            # CSS for user_profile.html

├── text                             # Folder that contains html elements used in multiple pages
        /filter.html                 # HTML for filter button elements
        /footer.html                 # HTML for footer elements
        /navbar.html                 # HTML for navbar elements

```

## Resources

- In-app icons from FontAwesome (Open Source https://Fontawesome.com)
- In-app icons from Google Fonts (Open Source https://fonts.google.com)
- Text fonts from Google fonts (Open Source https://fonts.googleapis.com)

## Acknowledgements

- <i class="fa-solid fa-magnifying-glass"></i>
- <i class="fa-solid fa-user user" style="font-size: 36px; color: black;"></i>
- <i class="fa-solid fa-magnifying-glass"></i>
- <i class="fa-solid fa-ribbon"></i> Donation History <i class="fa-solid fa-ribbon"></i>
- <i class="fa-solid fa-signature" style="font-size: 25px;"></i>
- <i class="fa-solid fa-phone" style="font-size: 20px;"></i>
- <i class="fa-solid fa-flag" style="font-size: 20px;"></i>
- <i class="fa-solid fa-history">&nbsp&nbsp donation-history</i>
- <i class="material-icons">account_circle</i>
- <i class="material-icons">map</i>
- <i class="material-icons">home</i>
- <h1 style="font-family: 'Merriweather', serif;">Welcome, <span id="name-goes-here">Sample Name Person</span>!</h1>
