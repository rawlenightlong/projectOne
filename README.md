#The Rick & Morty Cross Reference Super Guide

![](https://play-lh.googleusercontent.com/muJvgf5wm_486p4A0kbflDjBtk3sGDcyDgDVbrBd_h-zm-34rJJURuGV3ZjmjdvYEWYsHDI2_ETC4j6Nzmvu)

Utilizing the Rick & Morty API, be able to cross reference multiple characters with episodes they've appeared in!

### Technologies Used

- jQuery
- Javascript
- HTML
- CSS
- Rick & Morty API


### Wireframes
![](https://i.imgur.com/ZSeiHUJ.png)
![](https://i.imgur.com/kzOKpEe.png)


### Daily Plan

| Day | Goal | 
|-----|------|
| 1 | Choose API, Test, and layout base JS & HTML|
| 2 | Style CSS |
| 3 | Create and test form element|
| 4 | Create search logic |
| 5 | Continue search logic |
| 6 | Finish search logic & wrap project|


## Link to Project

[Project Live Page] (https://rawlenightlong.github.io/projectOne/)

## Known Issues

Due to the structure in which the API is built, and the nature of the show, there are certain characters that share the same exact name, yet are different "versions" of the character; while it is a bit easier to account for with Rick & Morty (Evil Rick, Hammer Morty, etc.), there are often times identical versions of the character, only differentiated by universe of origin. For example, in Episode 5 of Season 1, Rick & Morty ruin the universe and hop into another one (which the majority of the show then takes place in)...that previous universe has its own Rick, Morty, Jerry, Summer, and Beth, all of which share the identical name with their new universe counterparts. Therefore, simply searching "Beth Smith" would return 4 results, as there are 4 versions of the character scattered throughout different universes/from different origins. To account for this, I added a [0] in my character search function that will always return the FIRST result in the array of results when searching for a character, which happens to be (for the most part) the "prime" version of the character; this will always select the "Prime" Beth Smith, as opposed to Clone/Space Beth (Beth Smith with the origin of CLONE).