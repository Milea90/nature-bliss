# Nature Bliss

This website is a tribute to nature. I love being outside and I wanted to share my love for nature with others. Also, the website is meant to be a bit selling. 
If nature in itself was a sellable product, this is how I would advertise it. 

The main goal and purpose of the website is to make people (who may not be a fan of nature) like nature almost as much as I do. I hope to achieve more activities
outside instead of being inside in front of a screen. Therefore, the site contains a simple quiz to inspire people to spend more time outside.
![](/assets/readme-images/resp.png "")


## Features
The features of the website are quite simple:

At the top, there is a navigation menu that shows all the pages on the site, making it easy to navigate.
On the front page, there is a short text about what the website provides and its purpose. 
![](/assets/readme-images/welcome.png "")

On the "The bliss of Nature" page, there is a list with reasons why being in nature is good for us. Its purpose is to inspire the user to be more outdoors.
![](/assets/readme-images/list.png "")

At the bottom of "The bliss of Nature" page, there is a YouTube video with a video of a stream and birds singing. Its purpose is to make the user hungry for more nature. 
![](/assets/readme-images/video1.png "")

When "The bliss of Nature" page has loaded, a pop-up shows up, reminding the user to take a quiz.
![](/assets/readme-images/pop-up.png "")

The "Take a Quiz" page has a single-question quiz and when submitting the answer, the user is taken to a new html page. The quiz is supposed to make a user more interested in nature depending on their personality type.
![](/assets/readme-images/quiz.png "")
![](/assets/readme-images/quiz1.png "")

This is the page the user will see when submitting the quiz:
![](/assets/readme-images/congrats.png "")

On the contact page, there is a contact form. Its purpose is to make the user want to take action towards a life spent more outdoors. 
![](/assets/readme-images/con.png "")
![](/assets/readme-images/msg.png "")

When the contact form has been submitted, the user will see this page:
![](/assets/readme-images/thx-msg.png "")

## Features I would like to add
I wanted to create a zoom effect on the hero-image, but I was afraid that it would ruin the responsiveness and since I did not have enough time to fix all that, I had to skip it. 
I also wanted to create a more advance quiz, but the time was not enough for that. 
I was actually planning to add an event listener so that when users used the Enter key, the quiz would be submitted, but I realized it worked without it.
I could (and have) spend a lot of time to refine the styling and layout of the website, and could probably change a few things here and there to improve it further. 

## Testing
To make sure the website works as expected, I have used several tools: WC3 CSS validator, JShint.com and W3 html validator. I also used Lighthouse to check the accessibility score and used the devtools when making the website more responsive. I have checked all pages, for example the "The bliss of Nature" page as you can see below.

Css validation: 
![](/assets/readme-images/css-check.png "")

Html validation:
![](/assets/readme-images/html-check.png "")

JavaS validation:
![](/assets/readme-images/js-check.png "")

Lighthouse validation:
![](/assets/readme-images/access.png "")

Checking the responsiveness:
![](/assets/readme-images/responsive.png "")


### Unfixed bugs
I wanted to use a different font-style, mainly papyrus. But for some reason it did not work. So I ended up using the Times. 

I realized that the hover effect on the nav was a bit off due to the margins/paddings too late in the project and had no time to fix it.

The quiz ended up being very simple. I ended up with one question with three options and one neutral response to all the different options. In other words, no matter which color the user choose, the same response will be evident. 
At first, the goal was to create a quiz using radio buttons, since the user can only choose one option. (I did not want to create a ton of different html pages depending on the user's answers in check boxes.) I wanted to create a quiz with three questions, with three options each, using only radio buttons, and then three form actions in response to the user's answers. Off course, there could be many different results depending on the users answers, but I wanted to keep it very basic. The goal was to only create three different and neutral responses according to the first question. I didn't know it wasn't possible to create more than one form action for one form. I tried solving it by creating three different forms and only using one submit button and by doing so, creating a totally "fake" form. But since there would be many different options, I had to be very creative with the one form action page that I had to work with to make it fit for all the different possible answers. So I decided to just have one single question.
However, this problem is not really accurate, since quizzes are not necessarily created like this. But I wanted the quiz to be as real as possible with the amount of time and resources I had to create it.  

I also wanted the options to be in a row instead of on top of each other. I tried adjusting it with paddings and margins all over the place, but it did not work. So I tried the "display:grid" which made them stack on top of each other. Since the text content on the page is centered, I was ok with the result, even if that was not the purpose. I'm sure it's an easy fix once I have the time to look further into it.

I wanted to create an active selector to the menu. When a page/link in the menu was active, I wanted to highlight it with a different color. But I was not able to make it work. I researched it and tried different techniques, but had to skip it.


## Deployment

Stages to deployment:

Go to Github and click on Settings. In the menu on the left, click on Pages. Under Source, choose Deploy from a branch. Under Branch, choose Main. Click Save. Wait a few minutes and then reload the page and a link will be on top of the page. 

Live link to the website: (https://milea90.github.io/nature-bliss/)


## Credits

### Images
The images comes from pixabay.com.

### Content

The code for the quiz (in html and JavaScript) was completely made thanks to these YouTube videos:  https://www.youtube.com/watch?v=WR88nGbXCKY  &  https://www.youtube.com/watch?v=WmJIbPNb9Ac

The code for creating the contact form was made thanks to this YouTube video: https://www.youtube.com/watch?v=y5UEXujzSag

The code for the pop-up was made thanks to this YouTube video: https://www.youtube.com/watch?v=40SlCcxLeiA

The code for how to make a YouTube video responsive comes from this site: https://ostraining.com/blog/coding/responsive-videos/ 

The code for creating the text box in the contact page comes from this site: https://blog.hubspot.com/website/html-text-box