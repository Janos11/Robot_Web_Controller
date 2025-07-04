#!/opt/venv/bin/python
import asyncio
import websockets
import RPi.GPIO as GPIO

LED_PIN = 17

# ----- GPIO setup -----
GPIO.setwarnings(False)      # suppress “channel already in use” warning
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

async def handle_connection(websocket):
    async for message in websocket:
        message = message.strip()
        print(f"Received: '{message}'")
        if message == "LEDon":
            GPIO.output(LED_PIN, GPIO.HIGH)
            await websocket.send("LED turned ON")
        elif message == "LEDoff":
            GPIO.output(LED_PIN, GPIO.LOW)
            await websocket.send("LED turned OFF")
        elif message == "forward":
            GPIO.output(LED_PIN, GPIO.HIGH)
            await websocket.send("Moving forward")
        elif message == "right":
            GPIO.output(LED_PIN, GPIO.HIGH)
            await websocket.send("Turning right")
        elif message == "rotate_right":
            GPIO.output(LED_PIN, GPIO.HIGH)
            await websocket.send("Rotating right")
        elif message == "left":
            GPIO.output(LED_PIN, GPIO.LOW)
            await websocket.send("Turning left")
        elif message == "backward":
            GPIO.output(LED_PIN, GPIO.LOW)
            await websocket.send("Moving backward")
        elif message == "rotate_left":
            GPIO.output(LED_PIN, GPIO.LOW)
            await websocket.send("Rotating left")
        else:
            print(f"Unknown command: '{message}'")
            await websocket.send("Unknown command: '{message}'")

async def main():
    async with websockets.serve(handle_connection, "0.0.0.0", 8787):
        print("WebSocket server running on ws://0.0.0.0:8787")
        await asyncio.Future()              # run forever

if __name__ == "__main__":
    asyncio.run(main())
