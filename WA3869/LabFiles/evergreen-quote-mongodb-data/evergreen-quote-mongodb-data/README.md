# Evergreen Quote Data — MongoDB (Starter)

The Evergreen quotes, stored as **documents** in MongoDB. In this lab you will
load the data and query it with `mongosh`, the MongoDB shell — finding,
filtering, projecting, updating, aggregating, and indexing.

## Run it

MongoDB is already running on your lab VM. From this folder:

```bash
# Load the sample quotes into a database called "evergreen"
mongosh evergreen seed.js

# Open an interactive shell on that database
mongosh evergreen
```

Then follow the lab guide, running each command at the `mongosh` prompt.
