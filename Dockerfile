FROM nginx:alpine

# 1. Clean the directory
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy the files
COPY . /usr/share/nginx/html

# 3. FIX PERMISSIONS: Give 'Read' access to everyone
# '755' on folders allows Nginx to enter the folder
# '644' on files allows Nginx to read the content
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
