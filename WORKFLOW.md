# To publish new changes:

- Clone repo
- Install deps: `npm ci`
- Run app: `npm start`
- Make required changes on `master` branch
- Commit changes
- Push to `master`
- GitHub actions will automatically deploy latest changes to the site (unless PA tokens expire)

If source repo token expires:

- Login to Source User > Settings > Developer Settings > Personal access tokens > Tokens (classic)
- Click on the token name > Regenerate token > Copy new token
- Login to Destination User > Repo > Settings > Secrets and variables > Actions
- Edit the Source token > Paste new token
