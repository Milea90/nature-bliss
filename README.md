# Nature Bliss

This website is a tribute to nature. I love being outside and I wanted to share my love for nature with others. Also, the website is meant to be a bit selling. 
If nature in itself was a sellable product, this is how I would advertise it. 

The main goal and purpose of the website is to make people (who may not be a fan of nature) like nature almost as much as I do. As a user, they would be tempted to do more things outside so that they can enjoy all the good things nature has to give. The user can get many benefits from it, such as better health. The website should achieve more activities
outside for users instead of being inside in front of a screen. Therefore, the site contains a simple game to inspire people to spend more time outside.
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

The "Game-page is just an informative page about a game the user can play and the rules. There is a link where the user can click to get to the gaming page.
![](/assets/readme-images/game.png "")

This is the page with the game with a spinning wheel. Click spin and the wheel will spin and stop on a random number. There is also a navigation that will take the user back.
![](/assets/readme-images/wheel.png "")

On the contact page, there is a contact form. Its purpose is to make the user want to take action towards a life spent more outdoors. 
![](/assets/readme-images/con.png "")
![](/assets/readme-images/msg.png "")

When the contact form has been submitted, the user will see this page:
![](/assets/readme-images/thx-msg.png "")

## Features I would like to add
I wanted to create a zoom effect on the hero-image, but I was afraid that it would ruin the responsiveness and since I did not have enough time to fix all that, I had to skip it. 

I would like the user to just be able to click once on the "spin" and then the game would stop.

I could (and have) spend a lot of time to refine the styling and layout of the website, and could probably change a few things here and there to improve it further. 

Better navigation on the spinning wheel page. 

## Testing
To make sure the website works as expected, I have used several tools: WC3 CSS validator, JShint.com and W3 html validator. I also used Lighthouse to check the accessibility score and used the devtools when making the website more responsive. I have checked all pages, for example the "The bliss of Nature" page as you can see below.

Css validation: 
![](/assets/readme-images/css-check.png "")

Html validation:
![](/assets/readme-images/html-check.png "")

JavaS validation:
![](/assets/readme-images/jstest.png "")

Lighthouse validation:
![](/assets/readme-images/access.png "")

Checking the responsiveness:
![](/assets/readme-images/responsive.png "")


### Unfixed bugs
I wanted to use a different font-style, mainly papyrus. But for some reason it did not work. So I ended up using the Times. 

I realized that the hover effect on the nav was a bit off due to the margins/paddings too late in the project and had no time to fix it.

The wheel was very difficult to work with. Since it had its own styling, I had to create a new page for it and include the CSS directly in that HTML page. Otherwise the css for the wheel would effect all the other css on the page. It was also impossible to make it responsive. I tried both changing from absolute to relative units, but that did not work. I also tried solving it with mediaqueries but it did not look good at all.

The navigation on the wheel page was very difficult to create due to the existing css on the wheel. The navigation had a very bad impact on the layout on the page. Therefor it ended up very small.

I wanted to create an active selector to the menu. When a page/link in the menu was active, I wanted to highlight it with a different color. But I was not able to make it work. I researched it and tried different techniques, but had to skip it.


## Deployment

Stages to deployment:

Go to Github and click on Settings. In the menu on the left, click on Pages. Under Source, choose Deploy from a branch. Under Branch, choose Main. Click Save. Wait a few minutes and then reload the page and a link will be on top of the page. 

Live link to the website: (https://milea90.github.io/nature-bliss/)


## Credits

### Images
The images comes from pixabay.com.

### Content

The code for the spinning wheel was made thanks to this page: https://www.codewithrandom.com/2023/05/04/spin-wheel-using-javascript/
I used that as a template and then changed the names for divs and a couple of other things to make it fit the purpose.

The code for creating the contact form was made thanks to this YouTube video: https://www.youtube.com/watch?v=y5UEXujzSag

The code for the pop-up was made thanks to this YouTube video: https://www.youtube.com/watch?v=40SlCcxLeiA

The code for how to make a YouTube video responsive comes from this site: https://ostraining.com/blog/coding/responsive-videos/ 

The code for creating the text box in the contact page comes from this site: https://blog.hubspot.com/website/html-text-box