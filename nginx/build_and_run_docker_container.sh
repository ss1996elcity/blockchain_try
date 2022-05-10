#!/bin/bash
sudo docker build -t webserver .
sudo docker run -it --rm -d -p 8083:80 --name web webserver:latest
