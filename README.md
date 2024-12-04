# Internship Test

### Elon Musk has destroyed Twitter and we need you to recreate it!

## Requirements

Create an app like Twitter that shows all tweets on the home page. Users can create tweets, but must create an account and be logged in to do so.

 * Use Ruby on Rails with postgresql as the database
 * Use the devise gem for user signup and authentication
 * Users should have to validate their email address before being allowed to create new tweets
 * A tweet should have a maximimum of 255 characters and belong to a user
 * A tweet cannot be blank
 * On the home page tweets should be shown from most recent to oldest

After completing this first phase of work, someone on the Cloverpop Engineering team will review your code, ask for changes, and then give you further instructions for new functionality. This will go on until we're ready to start the full Internship project.


### Submitting Work

  * All work should be submitted in a separate branch and made into a pull request. Assign the pull request to you and set the "Reviewers" to Roger, Lyuba, Serhii and Marina. 
  * In each pull request you may be asked to make changes.
  * We also might ask you to make changes via "Issues". Please attach issues to new pull requests that address them.
  * Each pull request should list the amount of time you spent on it, e.g. `3.25 hours` for 3 hours and 15 minutes.

### Demonstrating Work

You will be provided a Heroku app to post your application to. It's recommended to set the Heroku app to automatically deploy when changes are made to your main or master branch.

## Conditions

  * There should be no collaboration with teammates or other people you know on this project, however you can ask Cloverpop personnel for help.
  * Everything submitted should you written by you alone. Excessive copy and pasting from existing applications or using tools that generate excessive amounts of code is forbidden.
  * If you wish to add functionality that isn't explicitely asked for please ask in advance before doing it.
  * Please do frequent commits instead of few commits with logs of changes. Push your commits to Github at least once per day.

## Appropriate LLM Use

Using LLM for help on debugging something you are stuck in is acceptable. Asking it to generate a lot of code is not. Examples:
  * "What could be causing my application to fail given this log? `Paste of error log` -- **is OK**
  * "Please analyze this Ruby method and give me a critique of without code examples: `paste of method`" -- **is OK**
  * "Please generate Ruby on Rails code for ..." -- **is considered excessive and NOT OK**
  * "Rewrite this controller to make it better: `Paste of a ruby file` -- **is considered excessive and NOT OK**

