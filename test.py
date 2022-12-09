import datetime as dt

print(dt.datetime.strptime("Oct 18, 2022", "%b %d, %Y").strftime("%Y-%m-%d"))
