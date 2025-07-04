# Robot Web Controller

This project provides a web-based controller interface for a robot using Raspberry Pi, Docker, and Apache. It includes CGI scripts for GPIO control and a live camera feed.<br/>
📓 [View the development notebook](./Robot_Web_Controller.ipynb)

## Features
- LED on/off with WebSocket
- Live MJPEG stream from the robot camera
- Modular and modern web UI
- Dockerized for easy deployment

## Run Locally
```bash
git clone https://github.com/Janos11/Robot_Web_Controller.git
cd Robot_Web_Controller
docker-compose up

