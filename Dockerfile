FROM nginx:alpine

# ADD THIS LINE: It cleans out the default Nginx 'Welcome' files 
# before your portfolio files are copied in.
RUN rm -rf /usr/share/nginx/html/*

# The existing copy command
COPY . /usr/share/nginx/html

EXPOSE 80
