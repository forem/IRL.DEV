<h1 align="center">
  <img src="https://raw.githubusercontent.com/thepracticaldev/IRL.DEV/master/src/img/logo.png">
</h1>
There's nothing more awesome than meeting your internet friends, IRL.

## Installation

Install Gatsby

```
npm install -g gatsby-cli
```

Clone the repository

```
git clone git@github.com:thepracticaldev/IRL.DEV.git
```

Change into the project

```
cd IRL.DEV
```

Install the dependencies

```
npm i
```

Set up a link to your development database. [Here](https://airtable.com/shrbYFEryJW3xEJYo) is the database, click the `copy base` button. Then, go to your copied base and look at its API documentation. If you go to the `help` button on the top right, and click on `API documentation`. Go to the `node.js` tab. You should see a line of code that looks like this:

```js
const base = require("airtable").base("your_base_id")
```

Copy the id from the `base` method.

Create an `.env` file with two variables. Set the `GATSBY_AIRTABLE_BASE` to your base key.

```
GATSBY_AIRTABLE_API_KEY=your_api_key
GATSBY_AIRTABLE_BASE=your_base_id
```

If you turn on the `show API key` toggle, you'll also see your api key in a line of code that looks like this:

```sh
$ export AIRTABLE_API_KEY=your_api_key
```

Set the GATSBY_AIRTABLE_API_KEY in your `.env` to your API key.

Now you're ready to start developing!

```
gatsby develop
```

## Notes

- In order to see new events on the site, moderators have to check off the `approved` box in the Airtable base.
- In order to deploy new events, the site needs to be re-deployed. You can do this manually on Netlify or through pushing a code change.
