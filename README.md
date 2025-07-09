# Robot Web Controller

This project provides a **web-based controller interface** for a robot using Raspberry Pi, Docker, Apache, and a USB webcam. It features real-time GPIO control and live camera streaming.

📓 [Development Notebook](documents/Robot_Web_Controller.ipynb)\
🎥 [MotionEye in Docker on Raspberry Pi](documents/MotionEye_in_Docker_Raspberry_Pi.ipynb)

---

## 🚀 Features

- 📷 **Live USB camera stream** using MotionEye in a Docker container
- 🧠 **Modular web interface** hosted with Apache2
- 🧩 **CGI-based Python scripts** to control GPIO on Raspberry Pi
- 🔌 **WebSocket integration** for real-time robot control (LED toggle, future motor controls)
- 🐳 **Dockerized** deployment with `docker-compose`

---

## 🧪 Project Stack

| Component    | Description                           |
| ------------ | ------------------------------------- |
| Raspberry Pi | Host device for GPIO and USB camera   |
| Docker       | Containerization of services          |
| Apache2      | Web server hosting the control UI     |
| MotionEye    | USB camera streaming inside container |
| Python (CGI) | Backend scripts controlling GPIO      |
| HTML/CSS/JS  | Frontend robot control interface      |
| WebSockets   | Real-time GPIO interaction            |

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/Janos11/Robot_Web_Controller.git
cd Robot_Web_Controller
docker compose up
```



---

## 🧭 Future Ideas

- Add motor control (forward, backward, turn)
- Integrate voice commands or facial recognition
- Add mobile-first responsive UI



---
## 🤝 Contributors

<table style="font-family: Arial, sans-serif; line-height: 1.6;">
  <tr>
    <td><strong>János Rostás</strong></td>
    <td>
      👨‍💻 Electronic & Computer Engineer<br>
      🛠️ Tinkerer with a Purpose<br>
      🐳 Docker Enthusiast<br>
      🌐 <a href="https://janosrostas.co.uk" target="_blank">janosrostas.co.uk</a><br>
      🔗 <a href="https://www.linkedin.com/in/janos-rostas/" target="_blank">LinkedIn</a>
    </td>
  </tr>
  <tr>
    <td><strong>ChatGPT</strong></td>
    <td>
      🤖 AI Pair Programmer by OpenAI<br>
      💡 Supports brainstorming, prototyping, and debugging<br>
      📚 Backed by years of programming knowledge and best practices
    </td>
  </tr>
</table>
  
