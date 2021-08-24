# excuses-api
```
heroku login
heroku git:remote -a app_name
git commit -m "Added Files"
git push heroku master
heroku ps:scale web=1
```
Includes a procfile: 
```
web: node index.js
```

To use the API: 
```
https://allexcuses-api.herokuapp.com/excuses
```

To get a random excuse: 
```
https://allexcuses-api.herokuapp.com/excuses/random
```

Example:
```
import requests
response = requests.get('https://allexcuses-api.herokuapp.com/excuses/random').json()
print(response['content'])
```
