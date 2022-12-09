# write a python script that reads a JSON file of posts with id, title and content and writes them to a relational Postgres database table

import json
import datetime as dt
import psycopg2

# read json file
with open('./src/assets/posts.json', 'r') as f:
    posts = json.load(f)

# connect to postgres server
conn = psycopg2.connect("host=localhost dbname=websitePosts user=postgres password=1234")
cur = conn.cursor()

# create table
# cur.execute("TRUNCATE TABLE posts RESTART IDENTITY;")
cur.execute("CREATE TABLE IF NOT EXISTS posts (post_id serial PRIMARY KEY, post_date date, post_content text, post_likes integer, profile_pic bytea, post_image bytea);")
# insert rows into table
path_prefix = "public"
for post in posts:
    insert_query = "INSERT INTO posts (post_date, post_content, post_likes, profile_pic, post_image) VALUES (%s, %s, %s, %s, %s)"
    profile_pic_path = f"{path_prefix}/{post['profilePicPath']}" if post['profilePicPath'] != "" else "NULL"
    post_image_path = f"{path_prefix}/{post['postImage']}" if post['postImage'] != "" else "NULL"
    cur.execute(insert_query, (dt.datetime.strptime(post['postDate'], "%b %d, %Y").strftime("%Y-%m-%d"),
     post['postText'], post['postLikes'], profile_pic_path, post_image_path))

# commit changes
conn.commit()

cur.execute("SELECT ENCODE(post_image, 'base64') FROM posts WHERE post_id=1;")
data = cur.fetchone()
print(data)

# close connection
cur.close()
conn.close()